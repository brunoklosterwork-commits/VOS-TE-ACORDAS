"""Pista guía: pad ambient estilo Aero + efectos sintetizados (sin samples con derechos)."""
import numpy as np, wave

SR = 44100
SFX = .45   # efectos sutiles
DUR = 56.236
N = int(SR * DUR)
t = np.arange(N) / SR
out = np.zeros(N)

OLD=[0,3,6,10,14,18,21,24,28,31,34,38,42,45,49,52,57]
NEW=[0,3.15,5.55,10.25,15.25,20.1,23.0,25.85,31.15,34.65,37.05,41.2,45.4,46.9,49.8,51.05,57]
import json as _j
_M=_j.load(open('map.json'))
W=lambda x: float(np.interp(x,_M['old'],_M['new']))

def env(n, a=.01, r=.2):
    e = np.ones(n); na, nr = min(int(a * SR), n // 2), min(int(r * SR), n // 2)
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e

def put(sig, at, gain=1.0):
    gain *= SFX
    i = int(W(at) * SR); j = min(N, i + len(sig)); out[i:j] += sig[:j - i] * gain

def tone(f, d, decay=6, h=(1, .4, .2)):
    x = np.arange(int(d * SR)) / SR
    return sum(a * np.sin(2 * np.pi * f * (k + 1) * x) for k, a in enumerate(h)) * np.exp(-decay * x)

def noise(d, decay=30, lp=.0):
    n = np.random.default_rng(int(d * 1000)).standard_normal(int(d * SR))
    if lp:
        for i in range(1, len(n)): n[i] = lp * n[i - 1] + (1 - lp) * n[i]
    return n * np.exp(-decay * np.arange(len(n)) / SR)

click = lambda: noise(.03, 180) * .5
ding = lambda: tone(1046, .9, 4) + tone(1568, .9, 5) * .5
error = lambda: np.concatenate([tone(659, .18, 8), tone(440, .45, 5)])
bubble = lambda f: np.sin(2 * np.pi * np.cumsum(np.linspace(f, f * 2.2, int(.09 * SR))) / SR) * np.exp(-30 * np.arange(int(.09 * SR)) / SR)
notif = lambda: np.concatenate([tone(880, .12, 10), tone(1318, .5, 6)])
whoosh = lambda d=.7: noise(d, 0, .96) * np.sin(np.linspace(0, np.pi, int(d * SR))) * 1.5
static = lambda d=.4: noise(d, 4) * .35
shutdown = lambda: np.concatenate([tone(784, .25, 4), tone(587, .25, 4), tone(392, .7, 3)])

# --- pad: acordes suaves Cmaj7 - Am7 - Fmaj7 - G6 (4 s c/u) ---
chords = [[261.6, 329.6, 392.0, 493.9], [220.0, 261.6, 329.6, 392.0], [174.6, 220.0, 261.6, 329.6], [196.0, 246.9, 293.7, 329.6]]
pad = np.zeros(N)
for k in range(int(DUR / 4) + 1):
    c = chords[k % 4]; i0 = int(k * 4 * SR); n = min(int(4.4 * SR), N - i0)
    if n <= 0: break
    x = np.arange(n) / SR
    s = sum(np.sin(2 * np.pi * f * x + .3 * np.sin(2 * np.pi * .2 * x)) + .3 * np.sin(2 * np.pi * f * 2.003 * x) for f in c)
    pad[i0:i0 + n] += s * env(n, .8, 1.2) / 4
# campanitas
for k in range(0, int(DUR * 2)):
    at = k * .5
    if (k * 7) % 5 == 0:
        put(tone([1046, 1318, 1568, 1760][(k * 3) % 4], 1.2, 3, (1, .2)) * .08, at)
# volumen del pad: SIN música los primeros ~5 s; baja en la parte gris; vuelve plena en el remate
vol = np.interp(t,[W(v) for v in [0,5.45,5.9,47.2,47.8,53.0,56.2,63,64]],[0,0,.5,.5,.06,.06,.6,.6,0])
out += pad * vol * .11
air = np.random.default_rng(3).standard_normal(N)
for _ in range(2): air = np.convolve(air, np.ones(40)/40, mode='same')
out += air * .012
boom = lambda f=50, d=1.0: np.sin(2*np.pi*f*np.arange(int(d*SR))/SR)*np.exp(-4*np.arange(int(d*SR))/SR)
hum = lambda d, f=100: (np.sin(2*np.pi*f*np.arange(int(d*SR))/SR)+.4*np.sin(2*np.pi*f*3*np.arange(int(d*SR))/SR))*np.sin(np.linspace(0,np.pi,int(d*SR)))
tic = lambda: tone(3200,.04,80,(1,))
# --- SFX (tiempos de la voz original; put() los traduce) ---
# 1 gancho sin música: zumbido de tele de tubo + tic de lamparita + clic
put(hum(5.4, 60)*.5, 0.0, .12); put(tone(15700,5.4,0,(1,))*.0, 0, 0)
put(tic(), .05, .5); put(click(), 2.25, .8); put(ding(), 2.3, .25)
for at in (3.1, 4.25): put(bubble(700), at, .25); put(whoosh(.3), at-.05, .15)
# 2 retrospección: sliders
put(ding(), 6.5, .18)
for i in range(24): put(click()*.35, 8.8+i*.25, .5)
# 3 advertencia
put(error(), 15.0, .35)
# 4a lamparita
put(hum(4.0,100), 20.2, .08); put(click(), 20.3, .7); put(ding(), 20.35, .15)
for i in range(6): put(click()*.3, 22.1+i*.1, .4)
# 4b CRI y ley
for i in range(5): put(tone(880+i*110,.15,20,(1,.3)), 24.45+i*.15, .18)
put(boom(70,.5), 27.05, .7); put(noise(.12,40,.3), 27.05, .6)
put(click(), 28.5, .8); put(boom(40,.8), 28.55, .3)
# 5 calle: zumbido de sodio y recambio
put(hum(4.0,120), 29.7, .06)
for i in range(5): put(click(), 33.65+i*.35, .9); put(tone(2400,.08,30,(1,)), 33.7+i*.35, .15)
put(whoosh(.5), 35.7, .25)
# 6 color
for i in range(14): put(bubble(500+i*55), 38.5+i*.07, .3)
for at in (41.05, 42.7, 44.3, 45.9): put(bubble(900), at, .4); put(ding(), at, .08)
for i in range(8): put(click()*.3, 44.35+i*.2, .5)
# 7 gris
put(whoosh(1.2), 47.3, .3)
for i in range(3): put(tic(), 51.85+i*.25, .5)
# 8 restaurar
put(ding(), 53.25, .25); put(click(), 55.65, .9); put(whoosh(.8), 56.1, .3); put(click(), 56.3, .6)
for i in range(10): put(bubble(520+i*60), 56.4+i*.07, .2)
# 9 cierre
put(notif(), 58.9, .3)
for i in range(5): put(click()*.5, 60.6+i*.55, .5)
import subprocess
raw = subprocess.run(['ffmpeg','-v','error','-i','mat/vo_fast.wav','-ac','1','-ar',str(SR),'-f','s16le','-'],capture_output=True).stdout
vo = np.frombuffer(raw, np.int16).astype(float) / 32768
vo = np.pad(vo, (0, max(0, N - len(vo))))[:N]
# ducking: baja el fondo cuando habla
lvl = np.convolve(np.abs(vo), np.ones(SR//10)/(SR//10), mode='same')
duck = 1 - .45 * np.clip(lvl / (lvl.max() * .25), 0, 1)
out = out * duck + vo * 1.0
out = out / max(1e-6, np.abs(out).max()) * .92
pcm = (out * 32767).astype(np.int16)
with wave.open("render/mezcla.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print("ok")
