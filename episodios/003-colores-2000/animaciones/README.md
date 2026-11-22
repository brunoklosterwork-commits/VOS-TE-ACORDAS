# Animaciones — Episodio 003 (Colores de los 2000)

100 % animación (sin material de archivo). Voz: Daniela (ElevenLabs).
- `scenes.js`: 10 escenas + subtítulos + cámara. `video.html` se arma con la base del 001 + este archivo (reemplazando `%%WORDS%%`, `%%MAP%%`, `%%DUR%%` por `words.json`, `map.json` y la duración).
- Tiempos de escena = voz original; `map.json` traduce a la voz ajustada (pausas ~0,1 s, ×1,1). Aire extra antes de "Pero esta vez", "Así que no" y "Y vos".
- `audio.py`: sin música los primeros ~5 s, baja en la parte gris, vuelve plena en el remate.
- Necesita `mat/vo_fast.wav` (se genera desde la voz del Drive "Video 3").
