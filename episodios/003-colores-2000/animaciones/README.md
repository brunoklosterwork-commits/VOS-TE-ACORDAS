# Animaciones — Episodio 003 (Colores de los 2000)

100 % animación (sin material de archivo). Voz: Daniela (ElevenLabs).
- `scenes.js`: 10 escenas + subtítulos + cámara. `video.html` se arma con la base del 001 + este archivo (reemplazando `%%WORDS%%`, `%%MAP%%`, `%%DUR%%` por `words.json`, `map.json` y la duración).
- Tiempos de escena = voz original; `map.json` traduce a la voz ajustada (pausas ~0,1 s, ×1,1). Aire extra antes de "Pero esta vez", "Así que no" y "Y vos".
- `audio.py`: sin música los primeros ~5 s, baja en la parte gris, vuelve plena en el remate.
- Necesita `mat/vo_fast.wav` (se genera desde la voz del Drive "Video 3").

## v2 — más estímulo y personajes
- `personajes.js` (también en `componentes/`): personajes vectoriales originales (`pj()` + `anim()` con modos idle, salta, camina, corre, saluda, baila, mira, celu) y `chispas()`/`estallar()`.
- Historia: un pibe (remera naranja) en el living, bajo la lamparita y corriendo con un globo bajo el sodio → un adulto gris con el celu bajo el LED → al "restaurar", al adulto le vuelve el color de la remera y aparece su versión pibe saludando.
- Más estímulo: recuerdos volando, chispas en cada momento clave, confeti y pibes bailando en "¡COLOR!", cámara con más recorrido.
