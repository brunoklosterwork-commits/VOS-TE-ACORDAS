# Animaciones — Episodio 002 (Flappy Bird)

- `video.html`: video completo 1080×1920, 41 s. `render(t)` dibuja el cuadro del segundo `t`; los tiempos salen directo de la locución de Malena.
- `scenes.js`: las 7 escenas (fuente de `video.html`, que se arma con la base del episodio 001 + este archivo).
- `render.py`, `audio.py`, `frames.py`: igual que en el episodio 001.

Necesita al lado (no se suben al repo, salen del Drive "Video 2"): `assets/` (ebay1.png, ebay2.png, iphone_foto.jpg), `ad/G` y `ad/GW` (cuadros del gameplay recortado) y `mat/vo.mp3`.

## Versión rápida (v4, 34 s)
- La voz se aceleró ×1,12 y las pausas se achicaron a ~0,1 s (`mat/vo_fast.wav`). `map.json` traduce tiempos viejos → nuevos; `render(tn)` convierte con `toOld()`, así las escenas y subtítulos (definidos en tiempo original) se comprimen solos.
- Ritmo: cada escena tiene su movimiento de cámara (zoom in, zoom out o traveling lateral, `CAM` en scenes.js) + flash corto y whoosh en cada corte. Sin golpes de cámara.
- Subtítulos a 88 px, se achican solos si un grupo no entra en el ancho.
