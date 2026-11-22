"""Pista guía: pad ambient estilo Aero + efectos sintetizados (sin samples con derechos)."""
import numpy as np, wave

SR = 44100
SFX = .45   # efectos sutiles
DUR = 57.0
N = int(SR * DUR)
t = np.arange(N) / SR
out = np.zeros(N)

OLD=[0,3,6,10,14,18,21,24,28,31,34,38,42,45,49,52,57]
NEW=[0,3.15,5.55,10.25,15.25,20.1,23.0,25.85,31.15,34.65,37.05,41.2,45.4,46.9,49.8,51.05,57]
W=lambda x: float(np.interp(x,OLD,NEW))

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
# volumen del pad: entra a los 3 s, se corta a los 22.75, vuelve tenue, baja en 42-52 y vuelve al final
vol = np.interp(t, [W(x) for x in [0, 2.9, 3.4, 22.7, 22.8, 24, 41, 44, 49, 51.8, 52.4, 56, 57]],
                   [.25, .25, .5, .5, .05, .35, .35, .15, .1, .05, .55, .55, 0])
out += pad * vol * .11
# aire: ruido muy suave filtrado (ambiente)
air = np.random.default_rng(3).standard_normal(N)
for _ in range(2): air = np.convolve(air, np.ones(40)/40, mode='same')
out += air * .012

# --- efectos, alineados a la escaleta ---
put(ding(), .15, .25); put(click(), 2.1, .9); put(whoosh(.5), 2.4, .15)
put(static(.3), 2.9, .6)
for i in range(10): put(bubble(500 + i * 60), 3.05 + i * .07, .25)
put(whoosh(), 6.0, .2); put(click(), 6.6, .5)
for i in range(6): put(bubble(700 + i * 40), 11.8 + i * .2, .2)
for i in range(15): put(click() * .4, 14.1 + i * .09, .5)
for at in (15.75, 16.35, 16.95): put(bubble(900), at, .35)
put(whoosh(.5), 18.3, .12)
put(error(), 22.75, .5); put(static(.25), 22.7, .5)
for i in range(3): put(click() * .4, 24.9 + i * .45, .5)
put(notif(), 29.3, .35)
put(whoosh(1.4), 31.3, .25)
put(static(.2), 34.9, .4); put(static(.2), 36.2, .4); put(ding(), 35.4, .15)
put(error(), 38.1, .3); put(click(), 39.4, .9); put(error(), 39.9, .3); put(click(), 41.2, .9)
put(ding(), 42.7, .15)
put(static(.6), 48.3, .4)
put(error(), 49.1, .5); put(shutdown(), 50.2, .35)
for i in range(10): put(bubble(520 + i * 50), 52.1 + i * .08, .2)
put(notif(), 52.6, .35)

import subprocess
raw = subprocess.run(['ffmpeg','-v','error','-i','mat/vo.mp3','-ac','1','-ar',str(SR),'-f','s16le','-'],capture_output=True).stdout
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
