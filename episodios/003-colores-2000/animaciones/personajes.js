/* ---------- personajes animados (originales, vector) ----------
   pj(id,x,y,h,o): o = {piel,pelo,remera,pantalon,zapas,adulto,celu,globo,flequillo}
   anim(el,t,modo): modo = 'idle' | 'salta' | 'camina' | 'corre' | 'saluda' | 'baila' | 'mira' (y suma parpadeo) */
const pj=(id,x,y,h,o={})=>{const a=o.adulto;const P=o.piel||'#f2c29b',H=o.pelo||'#4a2c17',R=o.remera||'#2f80ed',PA=o.pantalon||'#2b3a67',Z=o.zapas||'#fff';
 const hr=a?40:54, hy=a?58:66, ty=a?108:126, th=a?150:112, ly=ty+th-6, ll=a?150:112;
 return `<svg id="${id}" class="abs pj" style="left:${x}px;top:${y}px;overflow:visible" width="${h*.5}" height="${h}" viewBox="-100 0 200 400">
 <g class="cuerpo" style="transform-box:view-box;transform-origin:0px 400px">
  <ellipse cx="0" cy="396" rx="${a?58:64}" ry="8" fill="#000" opacity=".18" class="sombra"/>
  <g class="legL" style="transform-box:view-box;transform-origin:-16px ${ly}px"><rect x="-30" y="${ly}" width="26" height="${ll}" rx="12" fill="${PA}"/><rect x="-38" y="${ly+ll-16}" width="40" height="22" rx="10" fill="${Z}" stroke="#2b2f36" stroke-width="3"/></g>
  <g class="legR" style="transform-box:view-box;transform-origin:16px ${ly}px"><rect x="4" y="${ly}" width="26" height="${ll}" rx="12" fill="${PA}"/><rect x="-2" y="${ly+ll-16}" width="40" height="22" rx="10" fill="${Z}" stroke="#2b2f36" stroke-width="3"/></g>
  <rect class="rem" x="-42" y="${ty}" width="84" height="${th}" rx="30" fill="${R}"/><rect x="-42" y="${ty}" width="84" height="${th*.45}" rx="30" fill="#fff" opacity=".14"/>
  <g class="armL" style="transform-box:view-box;transform-origin:-38px ${ty+18}px"><rect class="rem" x="-54" y="${ty+8}" width="22" height="${a?120:96}" rx="11" fill="${R}"/><circle cx="-43" cy="${ty+(a?132:108)}" r="13" fill="${P}"/></g>
  <g class="armR" style="transform-box:view-box;transform-origin:38px ${ty+18}px"><rect class="rem" x="32" y="${ty+8}" width="22" height="${a?120:96}" rx="11" fill="${R}"/><circle cx="43" cy="${ty+(a?132:108)}" r="13" fill="${P}"/>
   ${o.celu?`<rect x="30" y="${ty+(a?112:88)}" width="30" height="50" rx="6" fill="#1d2025" stroke="#9aa5af" stroke-width="2"/><rect x="34" y="${ty+(a?117:93)}" width="22" height="36" rx="3" fill="#cfe6ff" class="pant"/>`:''}
   ${o.globo?`<line x1="43" y1="${ty+108}" x2="70" y2="-40" stroke="#555" stroke-width="2"/><ellipse cx="72" cy="-80" rx="42" ry="50" fill="${o.globo}"/><ellipse cx="58" cy="-98" rx="10" ry="16" fill="#fff" opacity=".5"/>`:''}</g>
  <g class="cabeza" style="transform-box:view-box;transform-origin:0px ${hy+hr}px">
   <rect x="-12" y="${hy+hr-8}" width="24" height="${ty-hy-hr+14}" fill="${P}"/>
   <circle cx="0" cy="${hy}" r="${hr}" fill="${P}"/>
   <path d="M${-hr-2} ${hy-4} C ${-hr} ${hy-hr-20}, ${hr} ${hy-hr-24}, ${hr+2} ${hy-6} C ${hr*.5} ${hy-hr*.55}, ${-hr*.4} ${hy-hr*.7}, ${-hr-2} ${hy-4}Z" fill="${H}"/>
   ${o.flequillo?`<path d="M${-hr*.8} ${hy-hr*.5} q ${hr*.4} ${hr*.5} ${hr*.8} 0 q ${hr*.4} ${hr*.5} ${hr*.8} 0" fill="${H}"/>`:''}
   <g class="ojos" style="transform-box:view-box;transform-origin:0px ${hy+2}px"><ellipse cx="${-hr*.36}" cy="${hy+2}" rx="${hr*.11}" ry="${hr*.15}" fill="#2b2f36"/><ellipse cx="${hr*.36}" cy="${hy+2}" rx="${hr*.11}" ry="${hr*.15}" fill="#2b2f36"/>
    <circle cx="${-hr*.33}" cy="${hy-2}" r="${hr*.04}" fill="#fff"/><circle cx="${hr*.39}" cy="${hy-2}" r="${hr*.04}" fill="#fff"/></g>
   <circle cx="${-hr*.58}" cy="${hy+hr*.32}" r="${hr*.14}" fill="#ff8a8a" opacity=".5"/><circle cx="${hr*.58}" cy="${hy+hr*.32}" r="${hr*.14}" fill="#ff8a8a" opacity=".5"/>
   <path class="boca" d="M${-hr*.28} ${hy+hr*.34} q ${hr*.28} ${hr*.3} ${hr*.56} 0" stroke="#7a2a1a" stroke-width="${a?4:5}" fill="none" stroke-linecap="round"/>
  </g></g></svg>`};
const rot=(el,s,d)=>{const g=el.querySelector(s);if(g)g.style.transform=`rotate(${d}deg)`};
const anim=(el,t,modo='idle',ph=0)=>{const T=t+ph;let by=0,L=0,R=0,aL=0,aR=0,hd=Math.sin(T*1.6)*3,sq=1;
 if(modo==='idle'){by=Math.sin(T*3)*3;aL=Math.sin(T*2)*4;aR=-aL}
 if(modo==='salta'){const s=Math.abs(Math.sin(T*6));by=-s*60;sq=1+(1-s)*.04;aL=-150+s*30;aR=150-s*30;L=-s*15;R=s*15}
 if(modo==='camina'||modo==='corre'){const f=modo==='corre'?11:6.5,am=modo==='corre'?38:24;L=Math.sin(T*f)*am;R=-L;aL=-L*1.1;aR=L*1.1;by=-Math.abs(Math.sin(T*f))*(modo==='corre'?14:6)}
 if(modo==='saluda'){by=Math.sin(T*3)*3;aR=-150+Math.sin(T*10)*22;aL=6}
 if(modo==='baila'){by=-Math.abs(Math.sin(T*5))*22;aL=-120+Math.sin(T*10)*40;aR=120-Math.sin(T*10+1)*40;hd=Math.sin(T*5)*10;L=Math.sin(T*5)*12;R=-L}
 if(modo==='mira'){by=Math.sin(T*2)*2;aR=-25;hd=12+Math.sin(T)*2}
 if(modo==='celu'){by=Math.sin(T*2)*2;aR=-62;aL=4;hd=18}
 el.querySelector('.cuerpo').style.transform=`translateY(${by}px) scaleY(${sq})`;rot(el,'.legL',L);rot(el,'.legR',R);rot(el,'.armL',aL);rot(el,'.armR',aR);rot(el,'.cabeza',hd);
 const bl=(T%3.1)<.12;el.querySelector('.ojos').style.transform=`scaleY(${bl?.12:1})`;
 const sh=el.querySelector('.sombra');sh.setAttribute('rx',String((el.querySelector('.cuerpo')?60:60)*(1+by/200)))};
/* chispas: estallido de estrellitas en un punto */
const chispas=(n,seed)=>Array.from({length:n},(_,i)=>`<svg class="abs chi" data-i="${i}" width="40" height="40" viewBox="-20 -20 40 40" style="opacity:0"><path d="M0 -18 L4 -4 L18 0 L4 4 L0 18 L-4 4 L-18 0 L-4 -4Z" fill="${['#fff6a8','#ffd23b','#ff7ac6','#7fe3ff','#c6ff5e'][i%5]}"/></svg>`).join('');
const estallar=(sc,sel,t,t0,cx,cy,seed=1,R=260)=>sc.querySelectorAll(sel+' .chi').forEach((c,i)=>{const k=seg(t,t0,t0+.7),a=rnd(seed+i*3.3)*6.283,r=eo(k)*R*(.4+rnd(seed+i)*.6);
 c.style.opacity=k>0&&k<1?1-k:0;c.style.transform=`translate(${cx+Math.cos(a)*r-20}px,${cy+Math.sin(a)*r-20}px) rotate(${k*180}deg) scale(${1-k*.5})`});
