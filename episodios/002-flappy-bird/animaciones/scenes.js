/* ===== Episodio 002 — Flappy Bird. Tiempos = locución real de Malena (sin warp). ===== */
const NG=1292;
const seqAt=(img,name,f0,u,rate=1)=>{let f=f0+Math.floor(u*FPS*rate);if(f>NG)f=NG;if(f<1)f=1;const src=`ad/${name}/${pad(f)}.jpg`;
 if(img.getAttribute('src')!==src){img.setAttribute('src',src);pend.push(img.decode().catch(()=>{}))}};
const fmt=n=>Math.round(n).toLocaleString('es-AR');
/* teléfono genérico (sin logos) con pantalla */
const telefono=(id,x,y,w,extra='')=>{const h=w*2.11,sw=w*.86,sh=sw/.5625,top=(h-sh)/2;
 return `<div class="abs tel" id="${id}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${w*.17}px;
  background:linear-gradient(135deg,#3a3f47,#0f1114 40%,#22262c 70%,#4a5059);box-shadow:0 40px 80px rgba(0,20,50,.55),inset 0 0 0 ${w*.012}px #8a939e,inset 0 0 0 ${w*.022}px #15171a;${extra}">
  <div class="abs" style="left:${w*.38}px;top:${top*.45}px;width:${w*.24}px;height:${w*.025}px;border-radius:9px;background:#05070a;box-shadow:inset 0 1px 2px #333"></div>
  <div class="abs" style="left:${w*.25}px;top:${top*.42}px;width:${w*.03}px;height:${w*.03}px;border-radius:50%;background:#1d2a3a"></div>
  <div class="abs scr" style="left:${(w-sw)/2}px;top:${top}px;width:${sw}px;height:${sh}px;background:#000;overflow:hidden">
   <img class="seq" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
   <div class="abs" style="inset:0;background:linear-gradient(125deg,rgba(255,255,255,.18) 0%,rgba(255,255,255,0) 38%)"></div></div>
  <div class="abs" style="left:${w/2-w*.075}px;top:${h-top/2-w*.075}px;width:${w*.15}px;height:${w*.15}px;border-radius:50%;border:${w*.01}px solid #59616b;background:radial-gradient(circle at 50% 35%,#2a2e33,#0b0c0e)"></div></div>`};

// 1 · 0–4.9  Tienda online: el iPhone crece junto con el precio
const prods=[['Auriculares','US$ 49'],['Cámara digital','US$ 189'],['MP4 8 GB','US$ 59'],['Notebook','US$ 699'],['Consola portátil','US$ 149']];
def(0,4.9,`<div class="abs" style="inset:0;background:linear-gradient(180deg,#eaf6ff 0%,#cfeaff 40%,#f7fbff 100%)"></div>
 <div class="abs" style="left:0;right:0;top:0;height:230px;background:linear-gradient(180deg,#5fb2f2,#1a82cc 60%,#1570b4);box-shadow:0 6px 20px rgba(0,40,80,.35)">
  <div class="abs" style="left:0;right:0;top:0;height:110px;background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.05))"></div>
  <div class="abs" style="left:60px;top:150px;font:900 46px var(--t);color:#fff;text-shadow:0 2px 6px rgba(0,30,60,.5)">🛒 TiendaOnline</div>
  <div class="abs" style="left:520px;top:146px;width:500px;height:62px;border-radius:31px;background:#fff;box-shadow:inset 0 2px 6px rgba(0,0,0,.25);font:600 28px var(--ui);color:#55708a;padding:12px 26px">🔎 flappy bird iphone</div></div>
 <div id="grid">${[0,1,2,3,4,5].map(i=>{const p=i<2?prods[i]:i===2?null:prods[i-1];const c=i%2,r=Math.floor(i/2);
  return p?`<div class="abs card" data-i="${i}" style="left:${70+c*480}px;top:${300+r*400}px;width:460px;height:380px;border-radius:24px;background:linear-gradient(180deg,#fff,#eaf3fa);box-shadow:0 12px 30px rgba(0,40,80,.18),inset 0 0 0 2px #fff">
   <div class="abs" style="left:40px;top:30px;width:380px;height:220px;border-radius:16px;background:linear-gradient(135deg,#d7e6f1,#b8cfe0)"></div>
   <div class="abs" style="left:40px;top:270px;font:700 32px var(--ui);color:#28435c">${p[0]}</div><div class="abs" style="left:40px;top:316px;font:800 34px var(--t);color:#1a82cc">${p[1]}</div></div>`:''}).join('')}</div>
 <div class="abs" id="hero" style="left:540px;top:900px;width:0;height:0">
  ${telefono('ph',-210,-443,420)}
  <div class="abs" id="best" style="left:120px;top:-470px;padding:10px 26px;border-radius:30px;background:linear-gradient(180deg,#ffb35c,#ff6a00);color:#fff;font:800 32px var(--t);white-space:nowrap;box-shadow:0 8px 20px rgba(160,60,0,.4)">🔥 Más vendido</div></div>
 <div class="abs" id="pr" style="left:0;right:0;top:250px;text-align:center">
  <div style="font:700 34px var(--ui);color:#28435c">iPhone 5s 16 GB · <b>con Flappy Bird instalado</b></div>
  <div class="gl" id="pv" style="font:900 120px var(--t);background-image:linear-gradient(180deg,#5fd0ff 0%,#1a82cc 50%,#0e466b 52%,#2c9be0 100%);filter:drop-shadow(0 6px 10px rgba(0,40,80,.35))">US$ 650</div>
  <div style="font:700 34px var(--ui);color:#c0392b" id="of">0 ofertas</div></div>
 <div class="chip" id="ins" style="left:50%;top:1220px;font-size:38px;background:rgba(30,140,60,.55)">✓ Flappy Bird instalado</div>`,(sc,u)=>{
 const kp=seg(u,.3,2.3),price=650+(99900-650)*Math.pow(kp,2.4);
 $(sc,'#pv').textContent='US$ '+fmt(price);$(sc,'#pv').style.fontSize=lerp(70,124,eo(kp))+'px';
 $(sc,'#of').textContent=Math.round(74*Math.pow(kp,1.4))+' ofertas';$(sc,'#of').style.opacity=kp>0?(u>2.3?(Math.floor(u*4)%2?1:.35):1):0;
 $(sc,'#pr').style.opacity=seg(u,.2,.4);
 sc.querySelectorAll('.card').forEach((c,i)=>{const k=eo(seg(u,.4,1.6));const dx=(i%2?1:-1)*k*420,dy=(Math.floor(i/2)-1)*k*140;
  c.style.transform=`translate(${dx}px,${dy}px) scale(${1-k*.25})`;c.style.opacity=(1-k*.85)*seg(u,0,.2);c.style.filter=`blur(${k*6}px)`});
 const kh=eo(seg(u,.3,2.4));const zoom=eio(seg(u,3.0,4.6));
 $(sc,'#hero').style.transform=`translateY(${zoom*120}px) scale(${lerp(.42,1,kh)*lerp(1,1.9,zoom)})`;$(sc,'#hero').style.opacity=seg(u,.25,.45);
 const b=$(sc,'#best');b.style.opacity=seg(u,2.3,2.4)*(1-seg(u,3,3.3));b.style.transform=`rotate(8deg) scale(${lerp(1.8,1,eb(seg(u,2.3,2.6)))})`;
 $(sc,'#pr').style.transform=`translateY(${-zoom*60}px)`;$(sc,'#pr').style.opacity=seg(u,.2,.4)*(1-zoom);
 seqAt($(sc,'#ph img'),'G',u<2.9?16:91,u<2.9?0:u-2.9);
 const ins=$(sc,'#ins');ins.style.opacity=seg(u,3.1,3.4);ins.style.transform=`translateX(-50%) scale(${lerp(.6,1,eb(seg(u,3.1,3.5)))})`});

// 2 · 4.9–9.9  El fenómeno más grande del planeta
def(4.9,9.9,`<div class="cielo"></div>${paisaje}<div class="bb">${bubbles(16,101).replace(/burbuja/g,'burbuja up')}</div>
 <div class="chip" id="d" style="left:50%;top:260px">FEBRERO 2014</div>
 ${telefono('ph',360,370,360)}
 <div class="chip" id="c1" style="left:60px;top:560px;font-size:40px;text-align:center">#1<div style="font-size:26px;font-weight:600">en más de 100 países</div></div>
 <div class="chip" id="c2" style="left:740px;top:820px;font-size:40px;text-align:center">50 M<div style="font-size:26px;font-weight:600">de descargas</div></div>`,(sc,u)=>{
 subir(sc,u,101,90);seqAt($(sc,'#ph img'),'G',190,u);
 const p=$(sc,'#ph');p.style.transform=`translateY(${lerp(140,0,eo(seg(u,0,.6)))}px) rotate(${Math.sin(u*1.2)*2}deg)`;p.style.opacity=seg(u,0,.3);
 const d=$(sc,'#d');d.style.opacity=seg(u,.2,.5);d.style.transform=`translateX(-50%) scale(${lerp(.7,1,eb(seg(u,.2,.6)))})`;
 [['#c1',2.05],['#c2',3.1]].forEach(([s,a])=>{const e=$(sc,s);e.style.opacity=seg(u,a,a+.15);e.style.transform=`scale(${lerp(.5,1,eb(seg(u,a,a+.4)))}) translateY(${Math.sin(u*2+a)*8}px)`})});

// 3 · 9.9–14.7  El creador: 50.000 dólares por día
def(9.9,14.7,`<div class="vista"></div><div class="bb">${bubbles(10,111).replace(/burbuja/g,'burbuja up')}</div>
 <svg class="abs" id="sil" style="left:340px;top:280px" width="400" height="460" viewBox="0 0 400 460">
  <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a5f86"/><stop offset="1" stop-color="#0b2236"/></linearGradient></defs>
  <circle cx="200" cy="150" r="105" fill="url(#sg)"/><path d="M20 460 C 30 320, 110 280, 200 280 S 370 320, 380 460Z" fill="url(#sg)"/>
  <text x="200" y="195" text-anchor="middle" font-family="Fira Sans" font-weight="900" font-size="150" fill="#bff3ff" opacity=".9">?</text></svg>
 <div class="chip" id="vn" style="left:50%;top:770px;font-size:38px">📍 Hanói, Vietnam</div>
 <div class="ae" id="mw" style="left:90px;top:900px;width:900px"><div class="tb">Ingresos por publicidad<div class="bs"><i></i><i></i><i></i></div></div>
  <div class="in" style="padding:26px 30px;background:linear-gradient(180deg,#1b6f93,#2aa5b8)">
  <div class="gl" id="mv" style="font:900 96px var(--t);text-align:left">US$ 0</div><div style="font:700 30px var(--ui);color:#dff4ff;margin:4px 0 14px">por día</div>
  <div class="bar" style="height:54px"><b id="mb" style="background:linear-gradient(180deg,#c9f56a,#80cd05 50%,#4f9a12);width:0"></b></div></div></div>
 <div id="coins">${Array.from({length:14},(_,i)=>`<div class="abs coin" style="width:64px;height:64px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff6b0,#f6c21c 45%,#b07d05);box-shadow:0 6px 12px rgba(0,0,0,.3);display:grid;place-items:center;font:900 34px var(--t);color:#8a5d00">$</div>`).join('')}</div>`,(sc,u)=>{
 subir(sc,u,111,70);
 const s=$(sc,'#sil');s.style.opacity=seg(u,0,.4);s.style.transform=`translateY(${lerp(40,0,eo(seg(u,0,.6)))}px)`;
 const vn=$(sc,'#vn');vn.style.opacity=seg(u,.6,.9);vn.style.transform=`translateX(-50%) scale(${lerp(.6,1,eb(seg(u,.6,1)))})`;
 const m=$(sc,'#mw');m.style.opacity=seg(u,2.2,2.45);m.style.transform=`translateY(${lerp(80,0,eo(seg(u,2.2,2.7)))}px)`;
 const k=eo(seg(u,2.4,4.2));$(sc,'#mv').textContent='US$ '+fmt(k*50000);$(sc,'#mb').style.width=(k*100)+'%';
 sc.querySelectorAll('.coin').forEach((c,i)=>{const t0=2.5+i*.13,kk=seg(u,t0,t0+1.3);c.style.opacity=kk>0&&kk<1?1:0;
  c.style.transform=`translate(${80+rnd(i*3)*900}px,${lerp(180,1500,kk*kk)}px) rotate(${kk*360*(rnd(i)>.5?1:-1)}deg)`})});

// 4 · 14.7–21.55  Adicción, acoso, insomnio
const msgs=['¡No paso del tubo 3! 😤','una más y me voy a dormir','devolvé mi vida 😭','rompí la pantalla de bronca','¿quién hizo este juego?','@dongatory arruinaste mi semana','no puedo parar','mi récord es 2…','¿cómo se pasa?','borralo YA','es imposible','son las 3 AM y sigo','te odio pájaro','otra partida…'];
def(14.7,21.55,`<div class="vista" id="bg"></div>
 ${telefono('ph',380,330,320)}
 <div id="nt">${msgs.map((m,i)=>`<div class="abs toast" style="width:620px;padding:18px 22px;border-radius:14px;background:linear-gradient(180deg,#fffff2,#fff6c8);border:2px solid #c9b45a;box-shadow:0 12px 26px rgba(0,0,0,.35);font:600 30px var(--ui);color:#3a3000;display:flex;gap:16px;align-items:center">
  <div style="flex:none;width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,#7fd3ff,#2a8fd8);display:grid;place-items:center;font-size:30px">💬</div><div><div style="font-size:22px;color:#7a6a20">Nuevo mensaje</div>${m}</div></div>`).join('')}</div>
 <div class="abs" id="dim" style="inset:0;background:#02060c;opacity:0"></div>
 <div class="abs" id="clk" style="left:0;right:0;top:620px;text-align:center;font:900 220px/1 var(--t);color:#7fe3ff;text-shadow:0 0 40px #22adf8,0 0 90px #1a82cc;opacity:0">3:00<span style="font-size:90px"> AM</span></div>`,(sc,u)=>{
 const p=$(sc,'#ph');p.style.opacity=seg(u,0,.3);seqAt($(sc,'#ph img'),'G',u<1.5?400:Math.floor(856),u<1.5?u:0);
 p.style.transform=`scale(${1+u*.02}) translateX(${u>2.1&&u<4.8?Math.sin(u*60)*4:0}px)`;
 sc.querySelectorAll('.toast').forEach((t,i)=>{const t0=2.15+i*.17,k=seg(u,t0,t0+.25);t.style.opacity=k>0?1:0;
  const x=40+rnd(i*7)*380,y=260+((i*97)%10)*100+rnd(i)*40;t.style.transform=`translate(${x}px,${y+lerp(60,0,eo(k))}px) rotate(${(rnd(i*3)-.5)*8}deg) scale(${lerp(.7,1,eb(k))})`});
 const d=seg(u,4.85,5.3);$(sc,'#dim').style.opacity=d*.88;
 const c=$(sc,'#clk');c.style.opacity=seg(u,5.0,5.4)*(Math.floor(u*2)%2||u<6?1:.85);
 $(sc,'#bg').style.filter=`saturate(${1-d*.6})`});

// 5 · 21.55–28.8  El tuit + cuenta regresiva + "Y cumplió"
def(21.55,28.8,`<div class="abs" style="inset:0;background:radial-gradient(ellipse at 50% 30%,#1b3a55,#060d16 75%)"></div>
 <div class="abs" id="tw" style="left:70px;top:290px;width:940px;border-radius:28px;background:#fff;box-shadow:0 30px 70px rgba(0,0,0,.6);padding:40px 44px;font-family:var(--ui);color:#14171a">
  <div style="display:flex;gap:22px;align-items:center"><div style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#9aa7b3,#5d6b78)"></div>
  <div><div style="font:800 36px var(--ui)">Dong Nguyen</div><div style="font:400 30px var(--ui);color:#657786">@dongatory</div></div></div>
  <div id="tx" style="font:500 46px/1.3 var(--ui);margin-top:28px;min-height:190px"></div>
  <div style="font:400 24px/1.35 var(--ui);color:#8899a6;margin-top:14px;font-style:italic">"I am sorry 'Flappy Bird' users, 22 hours from now, I will take 'Flappy Bird' down. I cannot take this anymore."</div>
  <div style="font:400 26px var(--ui);color:#657786;margin-top:18px;border-top:2px solid #e6ecf0;padding-top:16px">sábado 8 feb. 2014 · 16:00 hora argentina</div></div>
 <div class="ae" id="cd" style="left:200px;top:1060px;width:680px"><div class="tb">Tiempo restante<div class="bs"><i></i><i></i><i></i></div></div>
  <div class="in" style="padding:10px;text-align:center;background:#0b1a26"><div id="ct" style="font:900 100px var(--t);color:#7fe3ff;text-shadow:0 0 24px #22adf8;letter-spacing:.04em">22:00:00</div></div></div>
 ${xpWin('er',90,700,900,'Flappy Bird',icoErr,'<b>Flappy Bird</b> ya no está disponible.<br><span style="font-size:23px;color:#444">Fue eliminado por su creador.</span>',['Aceptar'])}`,(sc,u)=>{
 const tw=$(sc,'#tw');tw.style.opacity=seg(u,.15,.4);tw.style.transform=`translateY(${lerp(60,0,eo(seg(u,.15,.6)))}px)`;
 const parts=[[2.0,'Perdón, usuarios de Flappy Bird. '],[2.7,'En 22 horas voy a bajar Flappy Bird. '],[5.15,'No puedo más.']];
 let h='';parts.forEach(([a,t],i)=>{const n=Math.round(seg(u,a,a+(i==1?1.9:.6))*t.length);h+=(i==2?'<b>':'')+t.slice(0,n)+(i==2?'</b>':'')});$(sc,'#tx').innerHTML=h;
 const cd=$(sc,'#cd');cd.style.opacity=seg(u,2.75,3);
 const left=22*3600*(1-eio(seg(u,2.9,6.4)));const hh=Math.floor(left/3600),mm=Math.floor(left%3600/60),ss=Math.floor(left%60);
 $(sc,'#ct').textContent=[hh,mm,ss].map(v=>String(v).padStart(2,'0')).join(':');$(sc,'#ct').style.color=u>6.4?'#ff6b5b':'#7fe3ff';
 const e=$(sc,'#er');e.style.opacity=seg(u,6.4,6.45);e.style.transform=`scale(${lerp(.5,1,eb(seg(u,6.4,6.75)))})`;
 tw.style.filter=u>6.4?'grayscale(1) brightness(.6)':''});

// 6 · 28.8–35.85  Internet explotó: collage de subastas
const subs=[['iPhone 5s 16 GB · con Flappy Bird','US$ 99.900','74 ofertas'],['iPhone 5 · Flappy Bird instalado','US$ 90.000','62 ofertas'],['iPhone 5 · con Flappy Bird','US$ 80.700','subasta'],['+1.600 publicaciones','"con Flappy Bird"','en eBay']];
def(28.8,35.85,`<div class="cielo"></div>${paisaje}<div class="bb">${bubbles(26,121,[30,110])}</div>
 <div class="abs" id="cam" style="inset:0">
  <div class="foto ly" data-z=".3" style="left:30px;top:300px;width:600px;height:420px;transform:rotate(-5deg)"><img src="assets/ebay1.png" style="object-fit:cover;object-position:0 0"></div>
  <div class="foto ly" data-z=".55" style="left:470px;top:560px;width:580px;height:400px;transform:rotate(4deg)"><img src="assets/ebay2.png" style="object-fit:cover;object-position:0 0"></div>
  <div class="foto ly" data-z=".8" style="left:90px;top:780px;width:330px;height:560px;transform:rotate(-3deg)"><img src="assets/iphone_foto.jpg"></div>
  ${subs.map((s,i)=>`<div class="abs ly sub" data-z="${.6+i*.12}" style="left:${[480,560,120,520][i]}px;top:${[250,860,560,1090][i]}px;width:${i==3?480:500}px;padding:18px 24px;border-radius:18px;
   background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(225,240,250,.92));box-shadow:0 18px 40px rgba(0,30,60,.4),inset 0 0 0 2px #fff;font-family:var(--ui)">
   <div style="font:700 26px var(--ui);color:#28435c">${s[0]}</div><div style="font:900 ${i==3?40:56}px var(--t);color:${i==3?'#1a82cc':'#c0392b'};line-height:1.1;white-space:nowrap">${s[1]}</div><div style="font:600 24px var(--ui);color:#5d7a90">${s[2]}</div></div>`).join('')}
 </div>`,(sc,u)=>{
 sc.querySelectorAll('.bb .burbuja').forEach((b,i)=>{const a=rnd(i*5.3)*6.283,r=eo(seg(u,0,1.4))*lerp(200,900,rnd(i*2.1));
  b.style.transform=`translate(${540+Math.cos(a)*r-40}px,${900+Math.sin(a)*r-u*80}px)`;b.style.opacity=1-seg(u,1.2,2.5)});
 sc.querySelectorAll('.ly').forEach((l,i)=>{const d=+l.dataset.z;const isSub=l.classList.contains('sub');const a=isSub?2.95+(i-3)*.35:.1+i*.15;
  const k=eo(seg(u,a,a+.6));l.style.translate=`${(u-3.5)*-24*d}px ${lerp(140,0,k)*d+(u-3.5)*-12*d}px`;
  l.style.scale=String(lerp(isSub?.5:.85,1,isSub?eb(seg(u,a,a+.45)):k)*(1+u*.012*d));l.style.opacity=seg(u,a,a+.2)});
 const z=eio(seg(u,5.3,7));$(sc,'#cam').style.transform=`scale(${1+z*.5})`;$(sc,'#cam').style.transformOrigin='255px 1060px'});

// 7 · 35.85–41  ¿Cuál fue tu récord?
def(35.85,41,`<div class="cielo"></div>${paisaje}<div class="bb">${bubbles(22,131).replace(/burbuja/g,'burbuja up')}</div>
 ${telefono('ph',410,250,260)}
 ${aeWin('ch',80,860,920,'vosteacordás? — Conversación',`<div style="padding:24px 28px;font:400 34px/1.35 var(--ui);color:#173a57;background:linear-gradient(180deg,#fff,#eef7fc)">
  <div style="font:600 26px var(--ui);color:#5d7a90">vosteacordás? dice:</div>
  <div id="m1" style="font-weight:700">Y vos… ¿te acordás cuál fue tu récord?</div>
  <div style="margin-top:22px;border:2px solid #9fb3c3;border-radius:10px;padding:16px 20px;background:#fff;color:#8aa0b0;font-size:30px">Tu récord: <span id="cu" style="color:#173a57">|</span> · contalo en los comentarios</div></div>`)}
 <div class="gl abs" id="hd" style="left:0;right:0;top:1450px;font-weight:800;font-size:56px;opacity:0">@vosteacordas</div>`,(sc,u)=>{
 subir(sc,u,131,90);const p=$(sc,'#ph');p.style.opacity=seg(u,0,.4);p.style.transform=`translateY(${Math.sin(u*1.6)*12}px) rotate(${Math.sin(u)*3}deg)`;
 seqAt($(sc,'#ph img'),'G',856,0);
 const c=$(sc,'#ch');c.style.opacity=seg(u,.1,.4);c.style.transform=`translateY(${lerp(100,0,eo(seg(u,.1,.7)))}px)`;
 const t1='Y vos… ¿te acordás cuál fue tu récord?';$(sc,'#m1').textContent=t1.slice(0,Math.round(seg(u,.2,2.3)*t1.length))||' ';
 $(sc,'#cu').style.opacity=Math.floor(u*2)%2?0:1;$(sc,'#hd').style.opacity=seg(u,3,3.5)});

/* subtítulos palabra por palabra (máx. 3), sin fondo, sombra difusa; palabras clave en otro peso/color */
const GR=[{"t1": 1.12, "w": [[0.1, "Tu", 0], [0.31, "iPhone", 0], [0.78, "puede", 0]]}, {"t1": 1.88, "w": [[1.12, "valer", 0], [1.46, "cien", 1], [1.67, "mil", 1]]}, {"t1": 2.95, "w": [[1.88, "dólares…", 1]]}, {"t1": 3.78, "w": [[2.95, "si", 0], [3.14, "tiene", 0], [3.46, "este", 0]]}, {"t1": 5.1, "w": [[3.78, "juego", 1], [4.09, "instalado.", 0]]}, {"t1": 6.0, "w": [[5.1, "En", 0], [5.31, "febrero", 0], [5.79, "de", 0]]}, {"t1": 6.95, "w": [[6.0, "2014,", 1]]}, {"t1": 7.68, "w": [[6.95, "Flappy", 0], [7.15, "Bird", 0], [7.35, "era", 0]]}, {"t1": 8.67, "w": [[7.68, "el", 0], [7.88, "fenómeno", 1], [8.46, "más", 0]]}, {"t1": 10.1, "w": [[8.67, "grande", 0], [8.99, "del", 0], [9.2, "planeta.", 1]]}, {"t1": 10.66, "w": [[10.1, "Su", 0], [10.31, "creador,", 0]]}, {"t1": 11.7, "w": [[10.66, "un", 0], [10.87, "programador", 0], [11.49, "de", 0]]}, {"t1": 12.25, "w": [[11.7, "Vietnam,", 1]]}, {"t1": 13.49, "w": [[12.25, "ganaba", 0], [12.76, "cincuenta", 1], [13.27, "mil", 1]]}, {"t1": 14.85, "w": [[13.49, "dólares", 1], [14.0, "por", 0], [14.22, "día.", 0]]}, {"t1": 15.49, "w": [[14.85, "Pero", 0], [15.1, "la", 0], [15.25, "fama", 0]]}, {"t1": 15.95, "w": [[15.49, "se", 0], [15.65, "le", 0], [15.8, "fue", 0]]}, {"t1": 16.85, "w": [[15.95, "de", 0], [16.1, "las", 0], [16.25, "manos:", 0]]}, {"t1": 17.63, "w": [[16.85, "la", 0], [17.07, "gente", 0], [17.42, "se", 0]]}, {"t1": 18.47, "w": [[17.63, "volvía", 0], [17.98, "adicta,", 1]]}, {"t1": 19.55, "w": [[18.47, "lo", 0], [18.68, "acosaban…", 1]]}, {"t1": 20.29, "w": [[19.55, "y", 0], [19.75, "él", 0], [19.96, "dijo", 0]]}, {"t1": 21.02, "w": [[20.29, "que", 0], [20.49, "no", 0], [20.69, "podía", 0]]}, {"t1": 21.7, "w": [[21.02, "dormir.", 1]]}, {"t1": 22.43, "w": [[21.7, "Un", 0], [21.87, "sábado", 0], [22.25, "a", 0]]}, {"t1": 23.97, "w": [[22.43, "la", 0], [22.6, "tarde", 0], [22.87, "tuiteó:", 1]]}, {"t1": 28.9, "w": [[27.95, "Y", 0], [28.16, "cumplió.", 1]]}, {"t1": 29.55, "w": [[28.9, "De", 0], [29.12, "un", 0], [29.33, "día", 0]]}, {"t1": 30.47, "w": [[29.55, "para", 0], [29.9, "el", 0], [30.12, "otro,", 0]]}, {"t1": 31.75, "w": [[30.47, "internet", 0], [30.96, "explotó:", 1]]}, {"t1": 32.75, "w": [[31.75, "pedían", 0], [32.08, "fortunas", 1], [32.54, "por", 0]]}, {"t1": 34.1, "w": [[32.75, "celulares", 0], [33.34, "usados,", 0]]}, {"t1": 34.85, "w": [[34.1, "solo", 0], [34.39, "por", 0], [34.56, "tener", 0]]}, {"t1": 36.2, "w": [[34.85, "la", 0], [35.03, "app", 0], [35.2, "guardada.", 1]]}];
const cap=document.createElement('div');cap.id='cap2';stage.appendChild(cap);
const capStyle=document.createElement('style');capStyle.textContent=`#cap2{position:absolute;left:60px;right:150px;top:1385px;text-align:center;white-space:nowrap;pointer-events:none}
#cap2 span{display:inline-block;margin:0 .14em;font:700 70px/1.1 var(--t);color:#fff;letter-spacing:-.01em;
 text-shadow:0 3px 24px rgba(0,18,36,.7),0 1px 5px rgba(0,18,36,.5)}
#cap2 span.k{font-weight:900;font-style:italic;color:#c6ff5e;text-shadow:0 3px 24px rgba(0,25,10,.8),0 1px 5px rgba(0,25,10,.6)}`;
document.head.appendChild(capStyle);
const limpio=w=>w.replace(/[,.:]+$/,'');
window.DUR=41;
window.render=async t=>{pend.length=0;
 for(const s of SC){const on=t>=s.t0&&t<s.t1;s.el.style.display=on?'block':'none';if(on)s.up(s.el,t-s.t0)}
 const g=GR.find(g=>t>=g.w[0][0]&&t<g.t1);
 if(g){const key=g.w[0][0];if(cap.dataset.k!=key){cap.dataset.k=key;cap.innerHTML=g.w.map(w=>`<span class="${w[2]?'k':''}">${limpio(w[1])}</span>`).join('')}
  const out=1-seg(t,g.t1-.1,g.t1);
  cap.querySelectorAll('span').forEach((s,i)=>{const k=seg(t,g.w[i][0],g.w[i][0]+.22),e=eo(k);s.style.opacity=e*out;s.style.transform=`translateY(${(1-e)*14}px)`})}
 else{cap.innerHTML='';cap.dataset.k=''}
 await Promise.all(pend);};
window.render(0);
}
</script></body></html>
