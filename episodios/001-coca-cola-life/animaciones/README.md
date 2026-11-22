# Animaciones — Episodio 001

- `video.html`: todo el video (1080×1920). `render(t)` dibuja el cuadro del segundo `t`. Los cortes están sincronizados con la voz de Malena (`CUT_NEW`).
- `render.py`: graba cada escena a MP4 con Chrome headless y arma `render/lista.txt` para unirlas.
- `audio.py`: mezcla voz + pad ambiente + SFX sintetizados (con ducking).
- `frames.py`: saca cuadros sueltos para revisar.

## Para regenerar
Necesita, al lado de `video.html` (no se suben al repo, salen del Drive "Video 1"):
- `assets/`: `botella.png` y `stevia.png` (recortes), `lata.jpg`, `botella_600.jpg`, `cartel.jpg`
- `ad/A|NAT|B|C|D/`: cuadros de la publicidad (ver tramos en `guion.md`)
- `mat/vo.mp3`: la locución

```
python3 render.py && ffmpeg -f concat -safe 0 -i render/lista.txt -c copy render/mudo.mp4
python3 audio.py && ffmpeg -i render/mudo.mp4 -i render/mezcla.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest final.mp4
```
