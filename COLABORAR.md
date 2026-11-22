# Cómo sumarte a vosteacordás?

1. **Skill de Claude:** subí `vosteacordas-videos.zip` (o la carpeta `skill/`) en Claude → Customize → Skills → "+" → Create skill → Upload a skill.
2. **Conectores en tu Claude:** GitHub (este repo) y Google Drive (carpeta compartida "vosteacordás?").
3. **Pedile a Claude:** "Hacé el video N de vosteacordás? sobre <tema>". Va a seguir la skill: investigar, guion, esperar la voz de ElevenLabs (voz "Malena"), animar y renderizar.

## Dónde está cada cosa
- `estilo/` → guía visual, paleta (`tokens.css`), subtítulos (§8), referencias.
- `episodios/NNN-tema/` → `guion.md` + `animaciones/` (video.html, scenes.js, render.py, audio.py). Usá el 002 como plantilla: es el más reciente.
- El material pesado (videos, fotos, voces) **no está en el repo**: vive en el Drive, carpeta "Video N".

## Flujo
1. Tema → guion con datos verificados (tabla de fuentes) → revisión.
2. Locución final → se genera en ElevenLabs → se sube a "Video N" con el material.
3. Animación 1080×1920 30 fps sincronizada con las pausas de la voz → render → mezcla (voz + ambiente bajito + SFX sutiles).
4. El código va al repo; el MP4 final, al Drive.
