const http=require('node:http');
const https=require('node:https');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const crypto=require('node:crypto');
const {WebSocketServer,WebSocket}=require('ws');
const QRCode=require('qrcode');
const PORT=Number(process.env.PORT)||3000;
const ROOT=__dirname;
const rooms=new Map();
// En Render el proxy termina HTTPS; Node escucha HTTP y el navegador usa HTTPS/WSS.
const PUBLIC_URL=(process.env.PUBLIC_URL||process.env.RENDER_EXTERNAL_URL||'').trim().replace(/\/$/,'');
function sessionOrigin(req){
 if(PUBLIC_URL){const u=new URL(PUBLIC_URL);if(!['https:','http:'].includes(u.protocol))throw new Error('PUBLIC_URL inválida');return u.origin;}
 if(process.env.RENDER==='true') {
  const host=String(req.headers.host||'').trim();
  if(!/^[a-z0-9.-]+(?::\d+)?$/i.test(host))throw new Error('Host inválido');
  return 'https://'+host;
 }
 return `${SECURE?'https':'http'}://${lanIP()}:${PORT}`;
}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8'};
function lanIP(){
 const nets=os.networkInterfaces();
 const ips=[];
 for(const list of Object.values(nets))for(const n of list||[]){
  if(n.family==='IPv4'&&!n.internal){
   const ip=n.address;
   if(ip.startsWith('192.168.')||ip.startsWith('10.')||/^172\.(1[6-9]|2\d|3[01])\./.test(ip))ips.unshift(ip);
   else ips.push(ip);
  }
 }
 return process.env.LAN_IP||ips[0]||'localhost';
}
function send(ws,obj){if(ws&&ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify(obj))}
function notify(room){send(room.host,{type:'controller_status',connected:!!(room.controller&&room.controller.readyState===WebSocket.OPEN)})}
function code(){let s;do{s=String(crypto.randomInt(100000,1000000))}while(rooms.has(s));return s}
const tlsKey=process.env.TLS_KEY, tlsCert=process.env.TLS_CERT;
const SECURE=!!(tlsKey&&tlsCert);
const server=(SECURE?https.createServer({key:fs.readFileSync(tlsKey),cert:fs.readFileSync(tlsCert)}):http.createServer)((req,res)=>{
 const url=new URL(req.url,'http://localhost');
 let pathname;try{pathname=decodeURIComponent(url.pathname)}catch{res.writeHead(400);return res.end('Bad request')}
 if(pathname==='/health'){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});return res.end(JSON.stringify({status:'ok',service:'the-old-evil-v19'}))}
 const relative=pathname==='/'?'index.html':pathname==='/controller'?'controller.html':pathname.slice(1);
 const file=path.resolve(ROOT,relative);
 if(!file.startsWith(ROOT+path.sep)||relative.includes('\0')){res.writeHead(403);return res.end('Forbidden')}
 fs.stat(file,(err,stat)=>{
  if(err||!stat.isFile()){res.writeHead(404);return res.end('Not found')}
  // V35: conservar los sprites entre recargas. HTML siempre se revalida.
  const isPage=path.extname(file).toLowerCase()==='.html';
  const tag='W/"'+stat.size.toString(16)+'-'+Math.floor(stat.mtimeMs).toString(16)+'"';
  const headers={
   'Content-Type':mime[path.extname(file).toLowerCase()]||'application/octet-stream',
   'Cache-Control':isPage?'no-cache':'public, max-age=600, must-revalidate',
   'ETag':tag,
   'Last-Modified':stat.mtime.toUTCString(),
   'X-Content-Type-Options':'nosniff'
  };
  if(req.headers['if-none-match']===tag){res.writeHead(304,headers);return res.end()}
  res.writeHead(200,headers);
  if(req.method==='HEAD')return res.end();
  fs.createReadStream(file).pipe(res);
 });
});
const wss=new WebSocketServer({noServer:true,maxPayload:2048});
server.on('upgrade',(req,socket,head)=>{
 if(new URL(req.url,'http://localhost').pathname!=='/ws'){socket.destroy();return}
 wss.handleUpgrade(req,socket,head,ws=>{ws.upgradeRequest=req;wss.emit('connection',ws,req)});
});
wss.on('connection',ws=>{
 let role=null,room=null;
 ws.on('message',async raw=>{
  let m;try{m=JSON.parse(raw.toString())}catch{return}
  if(!role&&m.type==='host'){
   role='host';room={code:code(),host:ws,controller:null};rooms.set(room.code,room);
   try{
    const url=sessionOrigin(ws.upgradeRequest||{} )+'/controller?code='+room.code;
    const qr=await QRCode.toDataURL(url,{width:220,margin:1,errorCorrectionLevel:'M'});
    send(ws,{type:'session',code:room.code,url,qr,wifiSsid:process.env.COSWIG_WIFI_SSID||''});notify(room);
   }catch(err){console.error('QR:',err.message);send(ws,{type:'error',message:'No se pudo generar el QR.'})}
   return;
  }
  if(!role&&m.type==='join'){
   const r=rooms.get(String(m.code||'').trim());
   if(!r||!r.host||r.host.readyState!==WebSocket.OPEN){send(ws,{type:'error',message:'Código no encontrado. Revisá el código de la pantalla.'});return}
   if(r.controller&&r.controller.readyState===WebSocket.OPEN){send(ws,{type:'error',message:'Ya hay un celular conectado a esta partida.'});return}
   role='controller';room=r;room.controller=ws;send(ws,{type:'joined'});notify(room);return;
  }
  // Volver al inicio invalida el QR anterior: el celular debe escanear uno nuevo.
  if(role==='host'&&room&&m.type==='reset_session'){
   const oldController=room.controller;
   room.controller=null;
   if(oldController){send(oldController,{type:'session_reset'});oldController.close(1000,'New game: scan the new QR')}
   rooms.delete(room.code);
   room.code=code();rooms.set(room.code,room);
   try{
    const url=sessionOrigin(ws.upgradeRequest||{})+'/controller?code='+room.code;
    const qr=await QRCode.toDataURL(url,{width:220,margin:1,errorCorrectionLevel:'M'});
    send(ws,{type:'session',code:room.code,url,qr,wifiSsid:process.env.COSWIG_WIFI_SSID||''});
    notify(room);
   }catch(err){console.error('QR reset:',err.message);send(ws,{type:'error',message:'No se pudo generar el nuevo QR.'})}
   return;
  }
  if(role==='host'&&room&&m.type==='host_state'){send(room.controller,m);return}
  if(role==='controller'&&room&&room.controller===ws){
   if(m.type==='modal'){send(room.host,{type:'input',kind:'modal',open:m.open===true});return}
   // V37: transmitir al televisor el retrato reconocido por la cámara del celular.
   // Solo se aceptan los dos héroes disponibles, desde el controlador vinculado.
   if(m.type==='input'&&m.kind==='hero_mode'){if(m.action==='manual'||m.action==='scan')send(room.host,{type:'input',kind:'hero_mode',action:m.action});return}
   if(m.type==='input'&&m.kind==='hero_match'){
    if(m.action==='original'||m.action==='cat')send(room.host,{type:'input',kind:'hero_match',action:m.action});
    return;
   }
   // V40: confirmar objetos sin ranura (llave y cerveza) solo desde el mando vinculado.
   if(m.type==='input'&&m.kind==='item_confirm'){
    if(m.action==='key'||m.action==='beer')send(room.host,{type:'input',kind:'item_confirm',action:m.action});
    return;
   }
   if(m.type==='input'&&['hold','press','equip'].includes(m.kind)){
    const a=String(m.action||'');
    const valid={
      hold:['left','right','crouch','block'],
      press:['jump','defend','punch','kick','sword','unique','cerveza','interact','restart','start','language'],
      equip:['sword','shield','chainsaw','book','lantern','hedgehog','emblem','red']
    };
    if(!valid[m.kind].includes(a))return;
    send(room.host,{type:'input',kind:m.kind,action:a,pressed:m.kind==='hold'?m.pressed===true:undefined,slot:m.kind==='equip'&&m.slot==='unique'?'unique':undefined,value:a==='language'&&['en','es','de'].includes(m.value)?m.value:undefined});
   }
  }
 });
 ws.on('close',()=>{
  if(!room)return;
  if(role==='host'){
   rooms.delete(room.code);
   if(room.controller)send(room.controller,{type:'error',message:'Game window closed.'});
   if(room.controller)room.controller.close();
  }else if(role==='controller'&&room.controller===ws){
   room.controller=null;
   for(const action of ['left','right','crouch','block'])send(room.host,{type:'input',kind:'hold',action,pressed:false});
   notify(room);
  }
 });
});
server.listen(PORT,'0.0.0.0',()=>{
 console.log(`\nTHE OLD EVIL — CONTROL CON CELULAR`);
 console.log(`En esta PC: ${SECURE?'https':'http'}://localhost:${PORT}`);
 if(process.env.RENDER!=='true')console.log(`Desde el celular: ${SECURE?'https':'http'}://${lanIP()}:${PORT}/controller`);
 if(process.env.RENDER==='true')console.log('Render: HTTPS/WSS provistos por el proxy. Abrí la URL pública en PC y celular.');
 else { console.log('Modo local: ambos equipos en la misma red Wi-Fi.');if(!SECURE)console.log('Para acceder a la cámara desde celular local se necesita HTTPS.'); }
});
