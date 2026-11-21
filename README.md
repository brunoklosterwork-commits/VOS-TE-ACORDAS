# vosteacordás?

Videos verticales (Reels / TikTok / Shorts) sobre nostalgia argentina de los 2000, con estética Windows XP / Vista y Frutiger Aero.

## Estructura

```
skill/          → la skill de Claude con el concepto y el flujo de trabajo (SKILL.md)
componentes/    → piezas animadas reutilizables (ventanas XP, Vista, collage parallax, subtítulos…)
assets/         → recursos comunes a todos los episodios
  fuentes/
  sfx/
  texturas/
episodios/
  001-coca-cola-life/
    guion.md        → Fase 1: guion, escaleta, verificación de datos y curaduría
    animaciones/    → Fase 2: código de los motion graphics del episodio
    material/       → referencias al material de archivo (vive en Google Drive)
```

## Flujo por episodio

1. **Material:** se sube a la carpeta de Google Drive "Video N".
2. **Fase 1 — Guion:** investigación + verificación de datos → `guion.md`.
3. **Fase 2 — Motion graphics:** HTML/CSS/JS en 1080×1920 → `animaciones/`.
4. **Fase 3 (opcional) — Render:** exportación a MP4 o capas.

## Material de archivo

Los videos e imágenes pesados **no se suben al repo**: viven en Google Drive. Cada episodio tiene en `material/` un índice con los links.
