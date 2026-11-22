/* ===== Episodio 003 — Los colores de los 2000. 100% animación. Tiempos de escena = voz original (Daniela); render(tn) usa toOld(). ===== */
const fmt=n=>Math.round(n).toLocaleString('es-AR');
/* tinte global de la escena: k>0 cálido (incandescente), k<0 frío (LED), s = saturación */
const tinte=(el,k,s=1)=>{const w=Math.max(0,k),c=Math.max(0,-k);
 el.style.filter=`saturate(${s*(1+w*.35)}) sepia(${w*.22}) hue-rotate(${c*14}deg) brightness(${1+w*.04-c*.06})`};

/* ---------- ilustraciones ---------- */
const living=(id)=>`<svg id="${id}" class="abs" style="left:0;top:0" width="1080" height="1920" viewBox="0 0 1080 1920">
 <defs>
  <linearGradient id="${id}pa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9c48a"/><stop offset="1" stop-color="#c9925a"/></linearGradient>
  <linearGradient id="${id}pi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5a34"/><stop offset="1" stop-color="#5c3a20"/></linearGradient>
  <linearGradient id="${id}so" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c0392b"/><stop offset="1" stop-color="#7d1f16"/></linearGradient>
  <radialGradient id="${id}gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3c4" stop-opacity=".95"/><stop offset=".35" stop-color="#ffc35c" stop-opacity=".55"/><stop offset="1" stop-color="#ff9a2e" stop-opacity="0"/></radialGradient>
  <linearGradient id="${id}tv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5fd0ff"/><stop offset=".5" stop-color="#c94bff"/><stop offset="1" stop-color="#ffde3b"/></linearGradient>
 </defs>
 <rect width="1080" height="1920" fill="url(#${id}pa)"/>
 <rect y="1380" width="1080" height="540" fill="url(#${id}pi)"/>
 <rect x="640" y="430" width="330" height="420" rx="10" fill="#1d2a5a" stroke="#f4e3c3" stroke-width="16"/>
 <circle cx="880" cy="530" r="34" fill="#fff6d6" opacity=".9"/><path d="M805 430 V850 M640 640 H970" stroke="#f4e3c3" stroke-width="10"/>
 <line x1="400" y1="0" x2="400" y2="300" stroke="#3a2a1a" stroke-width="6"/>
 <circle class="halo" cx="400" cy="340" r="420" fill="url(#${id}gl)"/>
 <path d="M370 300 h60 v20 c0 12 26 30 26 64 a56 56 0 1 1 -112 0 c0 -34 26 -52 26 -64z" fill="#ffe9a6" opacity=".95" class="bombi"/>
 <rect x="80" y="980" width="440" height="400" fill="#6b4425"/><rect x="80" y="980" width="440" height="24" fill="#8a5a34"/>
 <rect x="110" y="660" width="380" height="320" rx="34" fill="#cfc6b6" stroke="#9e9584" stroke-width="6"/>
 <rect class="pantalla" x="140" y="690" width="290" height="250" rx="40" fill="url(#${id}tv)"/>
 <rect x="140" y="690" width="290" height="250" rx="40" fill="#fff" opacity=".14"/>
 <circle cx="460" cy="760" r="12" fill="#7d766a"/><circle cx="460" cy="800" r="12" fill="#7d766a"/>
 <rect x="560" y="1120" width="460" height="230" rx="40" fill="url(#${id}so)"/><rect x="530" y="1060" width="520" height="130" rx="50" fill="#a8301f"/>
 <rect x="560" y="1340" width="30" height="60" fill="#3a2010"/><rect x="990" y="1340" width="30" height="60" fill="#3a2010"/>
 <circle cx="700" cy="1150" r="54" fill="#f2c14e"/><circle cx="880" cy="1150" r="54" fill="#5fb2f2"/>
</svg>`;

const polaroid=(id,x,y,w,rot)=>`<div class="foto abs" id="${id}" style="left:${x}px;top:${y}px;width:${w}px;height:${w*1.12}px;transform:rotate(${rot}deg)">
 <svg viewBox="0 0 400 380" width="100%" height="100%" style="display:block">
  <rect width="400" height="380" fill="#7fd0ff"/><circle cx="320" cy="70" r="42" fill="#ffd23b"/>
  <path d="M0 260 C 120 200, 280 220, 400 250 V380 H0Z" fill="#6bcf2f"/>
  <rect x="60" y="170" width="140" height="110" fill="#ff7a59"/><path d="M50 175 L130 110 L210 175Z" fill="#c0392b"/><rect x="110" y="215" width="40" height="65" fill="#7a3b1c"/>
  <circle cx="290" cy="215" r="20" fill="#f6c28b"/><rect x="275" y="235" width="30" height="55" rx="10" fill="#2f80ed"/>
  <line x1="300" y1="240" x2="335" y2="160" stroke="#555" stroke-width="2"/><circle cx="338" cy="150" r="22" fill="#ff3d7f"/>
  <line x1="300" y1="240" x2="350" y2="185" stroke="#555" stroke-width="2"/><circle cx="356" cy="178" r="18" fill="#ffe23b"/>
 </svg></div>`;

const bombita=(id,x,y,s)=>`<svg id="${id}" class="abs" style="left:${x}px;top:${y}px" width="${400*s}" height="${620*s}" viewBox="0 0 400 620">
 <defs><radialGradient id="${id}g" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#fffbe6"/><stop offset=".4" stop-color="#ffd76a"/><stop offset="1" stop-color="#ff9a2e" stop-opacity=".0"/></radialGradient>
 <linearGradient id="${id}v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".35" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient></defs>
 <circle class="aura" cx="200" cy="230" r="200" fill="url(#${id}g)"/>
 <path d="M200 30 a170 170 0 0 1 100 307 c-22 18 -30 42 -30 70 h-140 c0 -28 -8 -52 -30 -70 a170 170 0 0 1 100 -307z" fill="url(#${id}v)" stroke="#fff" stroke-opacity=".8" stroke-width="4"/>
 <path class="fil" d="M160 400 V300 L175 250 L190 290 L205 245 L220 290 L235 250 L240 300 V400" fill="none" stroke="#ffb000" stroke-width="7" stroke-linejoin="round"/>
 <rect x="125" y="405" width="150" height="34" rx="8" fill="#b9c3cc"/><rect x="130" y="440" width="140" height="30" rx="8" fill="#9aa5af"/><rect x="135" y="471" width="130" height="30" rx="8" fill="#b9c3cc"/><path d="M160 502 h80 l-20 40 h-40z" fill="#3a3f47"/>
</svg>`;

const calle=(id)=>{let f='';for(let i=0;i<5;i++){const x=120+i*240;
 f+=`<g class="farol" data-i="${i}"><polygon class="cono" points="${x-6},640 ${x+6},640 ${x+150},1500 ${x-150},1500" fill="url(#${id}cn)" opacity=".75"/>
  <rect x="${x-7}" y="620" width="14" height="900" fill="#2b2f36"/><rect x="${x-46}" y="600" width="92" height="30" rx="12" fill="#3a3f47"/><ellipse class="foco" cx="${x}" cy="640" rx="40" ry="12" fill="#ff9a2e"/>
  <ellipse class="piso" cx="${x}" cy="1510" rx="200" ry="40" fill="#ff9a2e" opacity=".45"/></g>`}
 let casas='';[[0,880,260,'#8a5a3c'],[260,820,220,'#6d7a52'],[480,900,250,'#a0523a'],[730,840,350,'#5f6f88']].forEach(([x,y,w,c])=>{casas+=`<rect x="${x}" y="${y}" width="${w}" height="${1500-y}" fill="${c}"/>`;
  for(let r=0;r<3;r++)for(let k=0;k<2;k++)casas+=`<rect class="ven" x="${x+30+k*(w/2)}" y="${y+60+r*170}" width="${w/2-70}" height="100" fill="#ffd27a" opacity=".85"/>`});
 return `<svg id="${id}" class="abs" style="left:0;top:0" width="1080" height="1920" viewBox="0 0 1080 1920">
 <defs><linearGradient id="${id}cn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347" stop-opacity=".9" class="c1"/><stop offset="1" stop-color="#ff8a1e" stop-opacity="0" class="c2"/></linearGradient>
 <linearGradient id="${id}cl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0f2a"/><stop offset="1" stop-color="#3a2340"/></linearGradient></defs>
 <rect width="1080" height="1920" fill="url(#${id}cl)"/>${casas}
 <rect y="1500" width="1080" height="420" fill="#2a2a30"/><rect y="1500" width="1080" height="30" fill="#555b66"/>
 <rect class="asfalto" y="1530" width="1080" height="390" fill="#ff8a1e" opacity=".18"/>${f}</svg>`};

const tele2000=`<svg class="abs" id="tv" style="left:80px;top:420px" width="460" height="430" viewBox="0 0 460 430">
 <defs><linearGradient id="tvg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff3d7f"/><stop offset=".33" stop-color="#ffe23b"/><stop offset=".66" stop-color="#22d3ee"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs>
 <rect width="460" height="370" rx="40" fill="#2b2f36"/><rect x="30" y="30" width="330" height="300" rx="50" fill="url(#tvg)" class="sep"/>
 <circle cx="200" cy="180" r="70" fill="#fff" opacity=".9"/><path d="M175 140 L245 180 L175 220Z" fill="#7c3aed"/>
 <rect x="30" y="30" width="330" height="300" rx="50" fill="#fff" opacity=".12"/><circle cx="410" cy="90" r="16" fill="#777"/><circle cx="410" cy="140" r="16" fill="#777"/>
 <rect x="120" y="370" width="220" height="40" fill="#1d2025"/></svg>`;
const compu=`<svg class="abs" id="pc" style="left:560px;top:380px" width="440" height="460" viewBox="0 0 440 460">
 <defs><linearGradient id="pcg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fe0c5" stop-opacity=".95"/><stop offset="1" stop-color="#0a8f8a" stop-opacity=".85"/></linearGradient></defs>
 <path d="M40 20 h360 a30 30 0 0 1 30 30 v260 c0 60 -60 100 -210 100 s-210 -40 -210 -100 v-260 a30 30 0 0 1 30 -30z" fill="url(#pcg)"/>
 <rect x="70" y="50" width="300" height="230" rx="20" fill="#cfefff"/><rect x="70" y="50" width="300" height="230" rx="20" fill="url(#tvg)" opacity=".35"/>
 <path d="M40 20 h360 v80 h-360z" fill="#fff" opacity=".25"/><rect x="150" y="400" width="140" height="40" rx="12" fill="#2bb5a8"/></svg>`;
const celu=`<svg class="abs" id="ce" style="left:150px;top:900px" width="250" height="520" viewBox="0 0 250 520">
 <rect class="carc" x="20" y="10" width="210" height="500" rx="70" fill="#ff3d7f"/><rect x="20" y="10" width="105" height="500" rx="60" fill="#fff" opacity=".18"/>
 <rect x="55" y="70" width="140" height="130" rx="14" fill="#9be15d"/><rect x="62" y="78" width="126" height="20" fill="#5a8f2f"/>
 ${Array.from({length:12},(_,i)=>`<rect x="${60+(i%3)*45}" y="${240+Math.floor(i/3)*55}" width="36" height="40" rx="12" fill="#fff" opacity=".85"/>`).join('')}</svg>`;
const golosinas=`<div class="abs" id="go" style="left:560px;top:930px;width:460px;height:460px">${[['#ff3d7f',30,40],['#ffe23b',190,10],['#22d3ee',320,90],['#9be15d',80,220],['#ff8a1e',240,230],['#7c3aed',140,330]].map(([c,x,y],i)=>
 `<div class="abs dulce" style="left:${x}px;top:${y}px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0 10%,${c} 40%,${c});box-shadow:0 0 30px ${c},0 10px 20px rgba(0,0,0,.25)"></div>`).join('')}</div>`;

const autos=()=>{const cs=['#e8ecef','#2b2f36','#9aa3ab','#e0302a'];return cs.map((c,i)=>`<svg class="abs auto" data-i="${i}" style="left:${120+i*215}px;top:820px" width="180" height="360" viewBox="0 0 180 360">
 <rect x="10" y="10" width="160" height="340" rx="60" fill="${i==3?'#e0302a':'#e0302a'}" class="chapa"/><rect x="30" y="90" width="120" height="70" rx="20" fill="#2a3a4a"/><rect x="30" y="230" width="120" height="60" rx="20" fill="#2a3a4a"/>
 <rect x="10" y="10" width="80" height="340" rx="50" fill="#fff" opacity=".15"/></svg>`).join('')};

/* ---------- escenas (tiempos en la voz original) ---------- */
// 1 · 0–5.5  Antes veías otros colores. ¿Sabías?
def(0,5.5,`<div class="abs" id="ls" style="inset:0">${living('lv')}</div>
 ${xpWin('dy',90,430,900,'¿Sabías que…?',`<svg width="78" height="78" viewBox="0 0 34 34" style="flex:none"><circle cx="17" cy="15" r="11" fill="#ffe36b" stroke="#b08a00"/><rect x="13" y="25" width="8" height="6" rx="2" fill="#9aa5af"/></svg>`,
 '<b>Sugerencia del día</b><br>Antes veías otros colores.',['Cerrar'])}`,(sc,u)=>{
 const ls=$(sc,'#ls');const p=Math.max(Math.exp(-Math.pow((u-3.15)/.18,2)),Math.exp(-Math.pow((u-4.3)/.18,2)));
 tinte(ls,.45+p*.6,1+p*.6);
 sc.querySelector('.halo').setAttribute('opacity',.75+p*.25+Math.sin(u*9)*.03);
 const d=$(sc,'#dy');d.style.opacity=seg(u,2.25,2.35)*(1-seg(u,3.0,3.2));d.style.transform=`scale(${lerp(.6,1,eb(seg(u,2.25,2.6)))})`});

// 2 · 5.5–14.85  Retrospección rosada: "Propiedades de Recuerdos"
def(5.5,14.85,`<div class="vista"></div><div class="bb">${bubbles(12,301).replace(/burbuja/g,'burbuja up')}</div>
 <div class="chip" id="rr" style="left:50%;top:260px;font-size:50px">Retrospección rosada</div>
 ${polaroid('po',290,400,500,-4)}
 ${aeWin('pr',90,980,900,'Propiedades de Recuerdos',`<div style="padding:26px 34px;font:600 32px var(--ui);color:#173a57;background:linear-gradient(180deg,#f7fbfe,#e4eff7)">
  ${['Saturación','Contraste','Calidez'].map((n,i)=>`<div style="display:flex;align-items:center;gap:24px;margin:10px 0"><div style="width:210px">${n}</div>
   <div style="position:relative;flex:1;height:14px;border-radius:7px;background:#b8cddb"><b class="sl" style="position:absolute;left:0;top:0;bottom:0;border-radius:7px;background:linear-gradient(90deg,#22adf8,#ff3d7f);width:30%"></b>
   <i class="kn" style="position:absolute;top:-16px;width:30px;height:46px;border-radius:8px;background:linear-gradient(180deg,#fff,#c9dbe6);border:2px solid #6f8ea5;left:30%;margin-left:-15px"></i></div></div>`).join('')}</div>`)}
 ${flecha}`,(sc,u)=>{
 subir(sc,u,301,80);const ch=$(sc,'#rr');ch.style.opacity=seg(u,.95,1.2);ch.style.transform=`translateX(-50%) scale(${lerp(.6,1,eb(seg(u,.95,1.4)))})`;
 const w=$(sc,'#pr');w.style.opacity=seg(u,2.8,3.1);w.style.transform=`translateY(${lerp(80,0,eo(seg(u,2.8,3.3)))}px)`;
 const ks=[seg(u,3.3,5.3),seg(u,5.0,7.0),seg(u,6.6,8.8)];
 sc.querySelectorAll('.sl').forEach((b,i)=>b.style.width=(30+eio(ks[i])*65)+'%');
 sc.querySelectorAll('.kn').forEach((b,i)=>b.style.left=(30+eio(ks[i])*65)+'%');
 const tot=(ks[0]+ks[1]+ks[2])/3;const po=$(sc,'#po');po.style.filter=`saturate(${.35+tot*1.9}) contrast(${.85+ks[1]*.4}) sepia(${ks[2]*.25})`;
 po.style.opacity=seg(u,.2,.6);
 const cur=sc.querySelector('.cursor');const kn=sc.querySelectorAll('.kn');const act=u<5.2?0:u<6.9?1:2;
 if(u>3.2){const r=kn[act].getBoundingClientRect();ponerCursor(cur,r.left+10,r.top+14,true)}else ponerCursor(cur,0,0,false)});

// 3 · 14.85–18.15  Pero esta vez no te está mintiendo del todo
def(14.85,18.15,`<div class="vista" style="filter:saturate(1.2)"></div>${polaroid('po',290,330,500,3)}
 ${xpWin('ad',90,820,900,'Advertencia',icoWarn,'<b>No todo fue editado por tu cerebro.</b><br><span style="font-size:24px;color:#444">Se detectaron causas físicas.</span>',['Ver detalles','Aceptar'])}`,(sc,u)=>{
 const a=$(sc,'#ad');a.style.opacity=seg(u,.15,.2);a.style.transform=`scale(${lerp(.5,1,eb(seg(u,.15,.5)))})`;
 $(sc,'#po').style.filter=`saturate(${1.8-seg(u,.2,1.5)*.6})`});

// 4a · 18.15–24.2  Tu casa a la noche: lamparita de filamento, luz amarilla, cálida
def(18.15,24.2,`<div class="abs" id="ls" style="inset:0">${living('lv2')}</div>
 <div class="abs" id="dk" style="inset:0;background:#05070d"></div>
 ${bombita('bo',290,330,1.25)}
 <div class="ae" id="tp" style="left:170px;top:1130px;width:740px"><div class="tb">Temperatura de color<div class="bs"><i></i><i></i><i></i></div></div>
  <div class="in" style="padding:22px 30px;background:linear-gradient(180deg,#f7fbfe,#e4eff7)">
  <div style="height:30px;border-radius:15px;background:linear-gradient(90deg,#ff8a1e,#ffd27a,#fff,#cfe6ff,#8fbfff)"></div>
  <i id="tk" style="position:relative;display:block;width:24px;height:44px;margin-top:-37px;border-radius:7px;background:#fff;border:3px solid #173a57;left:4%"></i>
  <div id="tv" style="font:900 64px var(--t);color:#c56a00;text-align:center;margin-top:6px">2700 K</div></div></div>`,(sc,u)=>{
 const ls=$(sc,'#ls');tinte(ls,.8,1.25);ls.querySelector('.halo').setAttribute('opacity',.95);
 $(sc,'#dk').style.opacity=.85-seg(u,.1,1.6)*.85+seg(u,2.0,2.4)*.55;
 const b=$(sc,'#bo');b.style.opacity=seg(u,2.05,2.3);b.style.transform=`scale(${lerp(.6,1,eb(seg(u,2.05,2.5)))})`;
 b.querySelector('.aura').setAttribute('opacity',.8+Math.sin(u*14)*.06);
 const t=$(sc,'#tp');t.style.opacity=seg(u,3.9,4.15);t.style.transform=`translateY(${lerp(60,0,eo(seg(u,3.9,4.4)))}px)`});

// 4b · 24.2–29.55  Brillaban los rojos y naranjas (CRI 100) · Ley 26.473
const esp=[['Rojos',100,'#e0302a'],['Naranjas',100,'#ff8a1e'],['Amarillos',96,'#ffd23b'],['Verdes',88,'#5fbf2f'],['Azules',70,'#2f80ed']];
def(24.2,29.55,`<div class="abs" style="inset:0;background:radial-gradient(ellipse at 50% 30%,#5a3410,#1a0d05 75%)"></div>
 ${bombita('bo',60,330,.72)}
 <div class="ae" id="cr" style="left:390px;top:330px;width:630px"><div class="tb">Colores bajo luz incandescente<div class="bs"><i></i><i></i><i></i></div></div>
  <div class="in" style="padding:22px 26px;background:#140c06">${esp.map(e=>`<div style="display:flex;align-items:center;gap:14px;margin:12px 0"><div style="width:150px;font:700 28px var(--ui);color:#f3e1c8">${e[0]}</div>
  <div style="flex:1;height:40px;border-radius:20px;background:#2a1a0e;overflow:hidden"><b class="eb" data-v="${e[1]}" style="display:block;height:100%;width:0;border-radius:20px;background:linear-gradient(180deg,#fff8 0,${e[2]} 45%,${e[2]})"></b></div></div>`).join('')}
  <div style="font:900 42px var(--t);color:#ffd27a;text-align:right">CRI 100</div></div></div>
 <div class="abs" id="ley" style="left:110px;top:860px;padding:20px 40px;border:12px solid #d4141c;border-radius:22px;color:#d4141c;font:900 86px/1 var(--t);background:rgba(255,255,255,.85);text-align:center">LEY 26.473<div style="font-size:52px;margin-top:6px">PROHIBIDA · 2011</div></div>`,(sc,u)=>{
 sc.querySelectorAll('.eb').forEach((b,i)=>b.style.width=(eo(seg(u,.2+i*.15,1.1+i*.15))*b.dataset.v)+'%');
 const c=$(sc,'#cr');c.style.opacity=seg(u,0,.2);
 const l=$(sc,'#ley');l.style.opacity=seg(u,2.85,2.95);l.style.transform=`rotate(-8deg) scale(${lerp(2.2,1,eo(seg(u,2.85,3.1)))})`;
 const off=seg(u,4.3,4.4);const b=$(sc,'#bo');b.style.filter=`grayscale(${off}) brightness(${1-off*.55})`;b.querySelector('.aura').setAttribute('opacity',1-off)});

// 5 · 29.55–38.35  La calle era naranja: sodio → LED blanco frío
def(29.55,38.35,`<div class="abs" id="st" style="inset:0">${calle('ca')}</div>
 <div class="ae" id="up" style="left:110px;top:290px;width:860px"><div class="tb">Actualizando alumbrado…<div class="bs"><i></i><i></i><i></i></div></div>
  <div class="in" style="padding:20px 26px;font:600 30px var(--ui);color:#173a57"><div style="height:40px;border:2px solid #8fa9bb;border-radius:6px;overflow:hidden;background:#eef3f6"><b id="ub" style="display:block;height:100%;width:0;background:linear-gradient(180deg,#d6ecff,#6fb3ff 50%,#2f7fe0)"></b></div>
  <div style="margin-top:10px;display:flex;justify-content:space-between"><span id="uy">2013</span><span id="up2">0 %</span></div></div></div>
 <div class="chip" id="k" style="left:50%;top:540px;font-size:64px">2700 K</div>
 <div class="chip" id="sod" style="left:50%;top:540px;font-size:46px;background:rgba(255,138,30,.5)">Lámparas de sodio</div>`,(sc,u)=>{
 const ch=[0,1,2,3,4].map(i=>seg(u,4.1+i*.35,4.4+i*.35));
 sc.querySelectorAll('.farol').forEach((f,i)=>{const k=ch[i];const col=k>.5?'#e8f2ff':'#ff9a2e';
  f.querySelector('.foco').setAttribute('fill',col);f.querySelector('.piso').setAttribute('fill',k>.5?'#cfe3ff':'#ff9a2e');
  f.querySelector('.cono').setAttribute('opacity',.75-Math.sin(k*Math.PI)*.6)});
 const all=ch.reduce((a,b)=>a+b)/5;
 sc.querySelectorAll('#ca .c1').forEach(s=>s.setAttribute('stop-color',all>.6?'#e8f2ff':'#ffb347'));
 sc.querySelectorAll('#ca .c2').forEach(s=>s.setAttribute('stop-color',all>.6?'#b9d6ff':'#ff8a1e'));
 $(sc,'#ca .asfalto').setAttribute('fill',all>.6?'#9fc6ff':'#ff8a1e');
 tinte($(sc,'#st'),lerp(.5,-1,all),lerp(1.2,.75,all));
 const so=$(sc,'#sod');so.style.opacity=seg(u,2.45,2.65)*(1-seg(u,3.8,4));so.style.transform='translateX(-50%)';
 const up=$(sc,'#up');up.style.opacity=seg(u,4.0,4.2);
 const p=eio(seg(u,4.1,6.0));$(sc,'#ub').style.width=p*100+'%';$(sc,'#up2').textContent=Math.round(p*100)+' %';$(sc,'#uy').textContent=Math.round(2013+p*6);
 const k=$(sc,'#k');k.style.opacity=seg(u,6.15,6.3);const kv=6.15<u?Math.round(lerp(2700,6500,eo(seg(u,6.15,6.8)))/100)*100:2700;
 k.textContent=kv+' K';k.style.transform='translateX(-50%)';k.style.background=`rgba(${kv>4500?'150,190,255':'255,160,60'},.45)`});

// 6 · 38.35–47.25  Todo gritaba color
def(38.35,47.25,`<div class="cielo" style="background:linear-gradient(180deg,#ff7ac6 0%,#7c5cff 40%,#22d3ee 100%)"></div><div class="bb">${bubbles(30,601,[30,120]).replace(/burbuja/g,'burbuja up')}</div>
 <div class="gl abs" id="gc" style="left:0;right:0;top:250px;font-weight:900;font-size:120px">¡COLOR!</div>
 ${compu}${tele2000}${celu}${golosinas}`,(sc,u)=>{
 subir(sc,u,601,160);const g=$(sc,'#gc');g.style.opacity=seg(u,.1,.3);g.style.transform=`scale(${lerp(1.6,1,eb(seg(u,.1,.5)))})`;
 [['#pc',2.7],['#tv',4.35],['#ce',5.95],['#go',7.55]].forEach(([s,a],i)=>{const e=$(sc,s);const k=seg(u,a,a+.4);e.style.opacity=k>0?1:0;
  e.style.transform=`scale(${lerp(.3,1,eb(k))}) rotate(${(1-eo(k))*(i%2?-20:20)+Math.sin(u*2+i)*3}deg)`});
 const cols=['#ff3d7f','#ffe23b','#22d3ee','#9be15d','#ff8a1e','#7c3aed'];$(sc,'#ce .carc').setAttribute('fill',cols[Math.floor(Math.max(0,u-5.95)*5)%6]);
 sc.querySelectorAll('.dulce').forEach((d,i)=>d.style.transform=`translateY(${Math.sin(u*4+i)*12}px)`)});

// 7 · 47.25–53.1  Hoy: gris, negro o blanco. Autos: 3 de cada 4
def(47.25,53.1,`<div class="abs" id="co" style="inset:0">
 <div class="cielo" style="background:linear-gradient(180deg,#ff7ac6 0%,#7c5cff 40%,#22d3ee 100%)"></div>${compu}${tele2000}${celu}${golosinas}</div>
 <div class="abs" id="pk" style="inset:0;background:#b9bec4;opacity:0">
  <div class="abs" style="left:80px;right:80px;top:780px;height:440px;background:#8d939a;border-radius:20px"></div>${autos()}
  <svg class="abs" style="left:390px;top:300px" width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="120" fill="#e0302a"/>
   <path id="pie" d="" fill="#4a4f57"/><circle cx="150" cy="150" r="62" fill="#b9bec4"/></svg>
  <div class="abs" id="pct" style="left:0;right:0;top:400px;text-align:center;font:900 64px var(--t);color:#2b2f36">0 %</div></div>`,(sc,u)=>{
 const d=eio(seg(u,0,1.2));const co=$(sc,'#co');co.style.filter=`saturate(${1-d}) brightness(${1-d*.15})`;co.style.opacity=1-seg(u,3.0,3.3);
 const pk=$(sc,'#pk');pk.style.opacity=seg(u,3.1,3.35);
 const grey=['#e8ecef','#2b2f36','#9aa3ab'];sc.querySelectorAll('.auto').forEach((a,i)=>{const k=seg(u,4.5+i*.25,4.6+i*.25);
  a.querySelector('.chapa').setAttribute('fill',i<3&&k>0?grey[i]:'#e0302a');a.style.transform=`translateY(${Math.sin(u*3+i)*3}px)`});
 const p=eo(seg(u,4.5,5.5))*.74,an=p*Math.PI*2-Math.PI/2,x=150+120*Math.cos(an),y=150+120*Math.sin(an);
 $(sc,'#pie').setAttribute('d',p>0?`M150 150 L150 30 A120 120 0 ${p>.5?1:0} 1 ${x} ${y}Z`:'');$(sc,'#pct').textContent=Math.round(p*100)+' %'});

// 8 · 53.1–58.8  No era solo tu cabeza: vuelve el color
def(53.1,58.8,`<div class="abs" id="ls" style="inset:0">${living('lv3')}</div>
 ${xpWin('rs',90,440,900,'Restaurar sistema',`<svg width="78" height="78" viewBox="0 0 34 34" style="flex:none"><circle cx="17" cy="17" r="14" fill="#2a8fd8"/><path d="M10 17 a7 7 0 1 1 3 6" stroke="#fff" stroke-width="3" fill="none"/><path d="M8 13 l2 5 l5 -2" fill="#fff"/></svg>`,
 '¿Restaurar los colores a una fecha anterior?<br><b>15/06/2004</b>',['Restaurar','Cancelar'])}${flecha}${mano}`,(sc,u)=>{
 const r=$(sc,'#rs');r.style.opacity=seg(u,.1,.2)*(1-seg(u,2.9,3.1));r.style.transform=`scale(${lerp(.6,1,eb(seg(u,.1,.45)))})`;
 const b=r.querySelector('button');const bb=b.getBoundingClientRect();const [cf,cm]=sc.querySelectorAll('.cursor');const p=eio(seg(u,.5,1.7));
 const x=lerp(860,bb.left+bb.width/2,p),y=lerp(1500,bb.top+bb.height/2,p);ponerCursor(cf,x,y,u<1.5&&u<2.9);ponerCursor(cm,x-14,y,u>=1.5&&u<2.9);b.className=u>2.5&&u<2.8?'on':(u>=1.5?'hov':'');
 const c=eio(seg(u,3.0,4.6));const ls=$(sc,'#ls');tinte(ls,lerp(-.9,.9,c),lerp(.15,1.35,c));
 ls.querySelector('.halo').setAttribute('opacity',c);ls.querySelector('.bombi').setAttribute('opacity',.3+c*.65)});

// 9 · 58.8–64  ¿De qué color se veía tu infancia?
const paleta=['#000','#7f7f7f','#880015','#ed1c24','#ff7f27','#fff200','#22b14c','#00a2e8','#3f48cc','#a349a4','#fff','#c3c3c3','#b97a57','#ffaec9','#ffc90e','#efe4b0','#b5e61d','#99d9ea','#7092be','#c8bfe7'];
def(58.8,64,`<div class="cielo"></div>${paisaje}<div class="bb">${bubbles(22,901).replace(/burbuja/g,'burbuja up')}</div>
 ${aeWin('ch',80,330,920,'vosteacordás? — Conversación',`<div style="padding:24px 28px;font:400 34px/1.35 var(--ui);color:#173a57;background:linear-gradient(180deg,#fff,#eef7fc)">
  <div style="font:600 26px var(--ui);color:#5d7a90">vosteacordás? dice:</div>
  <div id="m1" style="font-weight:700">Y vos… ¿te acordás de qué color se veía tu infancia?</div>
  <div style="margin-top:22px;border:2px solid #9fb3c3;border-radius:10px;padding:16px 20px;background:#fff;color:#8aa0b0;font-size:30px">Elegí tu color y contalo en los comentarios<span id="cu" style="color:#173a57">|</span></div></div>`)}
 ${aeWin('pl',190,900,700,'Colores',`<div style="padding:20px;display:grid;grid-template-columns:repeat(10,1fr);gap:8px;background:#f0f0f0">${paleta.map(c=>`<div class="sw" style="aspect-ratio:1;background:${c};border:2px solid #808080;box-shadow:inset 2px 2px 0 #fff"></div>`).join('')}</div>
  <div style="display:flex;gap:16px;align-items:center;padding:0 20px 20px;background:#f0f0f0;font:600 26px var(--ui);color:#333"><div id="cc" style="width:70px;height:70px;border:3px solid #333;background:#ffc90e"></div>Tu color</div>`)}
 ${flecha}
 <div class="gl abs" id="hd" style="left:0;right:0;top:1450px;font-weight:800;font-size:56px;opacity:0">@vosteacordas</div>`,(sc,u)=>{
 subir(sc,u,901,90);const c=$(sc,'#ch');c.style.opacity=seg(u,0,.3);c.style.transform=`translateY(${lerp(80,0,eo(seg(u,0,.5)))}px)`;
 const t1='Y vos… ¿te acordás de qué color se veía tu infancia?';$(sc,'#m1').textContent=t1.slice(0,Math.round(seg(u,.1,2.9)*t1.length))||' ';
 const p=$(sc,'#pl');p.style.opacity=seg(u,1.2,1.5);p.style.transform=`translateY(${lerp(80,0,eo(seg(u,1.2,1.7)))}px)`;
 const sws=sc.querySelectorAll('.sw');const pick=[4,14,9,13,5][Math.floor(Math.max(0,u-1.8)/.55)%5];const r=sws[pick].getBoundingClientRect();
 ponerCursor(sc.querySelector('.cursor'),r.left+r.width/2,r.top+r.height/2,u>1.6);$(sc,'#cc').style.background=paleta[pick];
 $(sc,'#cu').style.opacity=Math.floor(u*2)%2?0:1;$(sc,'#hd').style.opacity=seg(u,3.6,4.1)});

/* ---------- subtítulos ---------- */
const GR=%%WORDS%%;
const cap=document.createElement('div');cap.id='cap2';stage.appendChild(cap);
const capStyle=document.createElement('style');capStyle.textContent=`#cap2{position:absolute;left:40px;right:120px;top:1370px;text-align:center;white-space:nowrap;pointer-events:none;transform-origin:50% 50%}
#cap2 span{display:inline-block;margin:0 .14em;font:700 88px/1.1 var(--t);color:#fff;letter-spacing:-.01em;text-shadow:0 3px 24px rgba(0,18,36,.7),0 1px 5px rgba(0,18,36,.5)}
#cap2 span.k{font-weight:900;font-style:italic;color:#c6ff5e;text-shadow:0 3px 24px rgba(0,25,10,.8),0 1px 5px rgba(0,25,10,.6)}`;
document.head.appendChild(capStyle);
const limpio=w=>w.replace(/[,.:]+$/,'');

window.DUR=%%DUR%%;
const MAP=%%MAP%%;
const interp=(x,xs,ys)=>{let i=0;while(i<xs.length-2&&x>=xs[i+1])i++;const k=(x-xs[i])/(xs[i+1]-xs[i]);return ys[i]+clamp(k,0,1)*(ys[i+1]-ys[i])};
const toOld=tn=>interp(tn,MAP.new,MAP.old),toNew=to=>interp(to,MAP.old,MAP.new);
const CUTO=SC.map(s=>s.t0).concat([64]);const CUTN=CUTO.map(toNew);
const fl=document.createElement('div');fl.style.cssText='position:absolute;inset:0;background:#fff;pointer-events:none;opacity:0;z-index:90';stage.appendChild(fl);
const CAM=[['in',1,1.08],['tr',1.1,40],['out',1.14,1],['in',1,1.12],['tr',1.1,-40],['tr',1.12,60],['out',1.14,1],['in',1,1.1],['in',1,1.1],['out',1.1,1]];

window.render=async tn=>{pend.length=0;const t=toOld(tn);
 for(const s of SC){const on=t>=s.t0&&t<s.t1;s.el.style.display=on?'block':'none';if(on)s.up(s.el,t-s.t0)}
 SC.forEach((s,i)=>{if(s.el.style.display!=='block')return;const k=eio(seg(tn,CUTN[i],CUTN[i+1]));const c=CAM[i];
  s.el.style.transform=c[0]==='tr'?`scale(${c[1]}) translateX(${lerp(c[2],-c[2],k)}px)`:`scale(${lerp(c[1],c[2],k)})`});
 const dtc=Math.min(...CUTN.filter(c=>c>0&&c<=tn).map(c=>tn-c),9);fl.style.opacity=Math.exp(-dtc/.06)*.4;
 const g=GR.find(g=>t>=g.w[0][0]&&t<g.t1);
 if(g){const key=g.w[0][0];if(cap.dataset.k!=key){cap.dataset.k=key;cap.innerHTML=g.w.map(w=>`<span class="${w[2]?'k':''}">${limpio(w[1])}</span>`).join('');cap.style.transform='';const sc2=Math.min(1,cap.clientWidth/cap.scrollWidth);cap.style.transform=`scale(${sc2})`}
  const out=1-seg(t,g.t1-.1,g.t1);const juntas=GR.indexOf(g)%2==1;
  cap.querySelectorAll('span').forEach((s,i)=>{const t0=juntas?g.w[0][0]:g.w[i][0];const k=seg(t,t0,t0+(juntas?.28:.22)),e=eo(k);s.style.opacity=e*out;s.style.transform=`translateY(${(1-e)*14}px)`})}
 else{cap.innerHTML='';cap.dataset.k=''}
 await Promise.all(pend);};
window.render(0);
}
</script></body></html>
