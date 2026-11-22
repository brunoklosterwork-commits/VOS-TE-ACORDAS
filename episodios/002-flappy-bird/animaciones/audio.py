"""Pista guía: pad ambient estilo Aero + efectos sintetizados (sin samples con derechos)."""
import numpy as np, wave

SR = 44100
SFX = .45   # efectos sutiles
DUR = 34.2
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
# volumen del pad (ambiente bajito)
vol = np.interp(t,[W(v) for v in [0,.5,19.4,19.8,21.5,22,28.7,29.2,40,41]],[.3,.5,.5,.08,.08,.22,.22,.5,.5,0])
out += pad * vol * .11
air = np.random.default_rng(3).standard_normal(N)
for _ in range(2): air = np.convolve(air, np.ones(40)/40, mode='same')
out += air * .012
boom = lambda f=50, d=1.0: np.sin(2*np.pi*f*np.arange(int(d*SR))/SR)*np.exp(-4*np.arange(int(d*SR))/SR)
coin = lambda: tone(1975, .25, 14, (1, .5)) + tone(2637, .25, 16, (1,)) * .6
# --- SFX ---
# 1 subasta: clics que se aceleran + ding al llegar a 99.900
tt=.35
while tt<2.25:
    put(click()*.6, tt, .7); tt += max(.05, .28*(1-(tt-.35)/2))
put(ding(), 2.3, .45); put(coin(), 2.32, .35); put(whoosh(.8), 2.95, .3)
# 2 fenómeno
put(whoosh(.6), 4.9, .25)
for i in range(6): put(bubble(600+i*50), 6.95+i*.08, .3)
put(ding(), 8.0, .15)
# 3 creador
put(ding(), 10.5, .12)
for i in range(14): put(coin(), 12.4+i*.13, .18)
# 4 notificaciones en cascada -> silencio
for i in range(14): put(notif(), 16.85+i*.17, .22)
put(boom(45, 1.4), 19.55, .5)
# 5 tuit + tic-tac + error
put(notif(), 21.75, .3)
for i in range(7): put(tone(1200 if i%2==0 else 900, .06, 40, (1,)), 24.45+i*.5, .35)
put(error(), 27.95, .55)
# 6 internet explotó
put(whoosh(1.0), 28.85, .35)
for i in range(16): put(bubble(480+i*40), 28.9+i*.06, .25)
for i in range(4): put(click(), 31.75+i*.35, .8); put(coin(), 31.8+i*.35, .15)
# whoosh en cada corte
for c in [4.9,9.9,14.7,21.55,28.8,35.85]: put(whoosh(.35), c-.12, .3)
# 7 cierre
for i in range(8): put(bubble(520+i*60), 35.9+i*.08, .2)
put(notif(), 36.1, .3)
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
