# Guía visual — vosteacordás?

Referencias originales en [`referencias/`](referencias/) (copia de la carpeta de Drive "Referencias de estilo"). Valores en código: [`tokens.css`](tokens.css). Tablero visual: [`tablero.html`](tablero.html).

## 1. Clima general

Cielo azul saturado, colina verde lima, nubes blancas y agua cromada/líquida. Todo **brillante, limpio y optimista**: Frutiger Aero puro. Contrasta con el material de archivo, que va **cálido, lavado y un poco brumoso** (ver foto de la calle).

## 2. Paleta

| Rol | Color | Hex | De dónde sale |
|---|---|---|---|
| Cielo profundo | 🟦 | `#0E466B` | paleta-colina-agua |
| Cielo | 🟦 | `#1A82CC` | paleta-colina-agua (color dominante) |
| Cielo claro | 🟦 | `#519BF5` | paleta-colina-agua |
| Brillo de cielo | 🟦 | `#8BE3FE` | paleta-colina-agua |
| Cian Vista | 🟦 | `#22ADF8` / `#4FCFF5` | ventana-reproductor-aero, cursores |
| Verde colina | 🟩 | `#80CD05` | paleta-colina-agua |
| Verde Aero | 🟩 | `#96D076` | tipografia-glossy |
| Verde musgo | 🟩 | `#5E8D4F` | tipografia-glossy (fondo) |
| Verde agua | 🟩 | `#66C3AF` / `#9CCFBF` | paleta-colina-agua, ventana-notepad-vista |
| Menta | 🟩 | `#CCF4C8` | paleta-colina-agua |
| Azul de interfaz | 🟦 | `#2C5E95` | ventana-reproductor-aero |
| Nube / blanco | ⬜ | `#F7F9FC` | general |
| Foto cálida | 🟫 | `#C6BCB3` / sombra `#31272B` | foto-calle-buenos-aires |

**Regla:** fondos y motion graphics en azules + verdes. El blanco es para vidrio, nubes y texto. El cálido solo aparece en el material de archivo.

## 3. Tipografía

Referencia: `tipografia-glossy.jpg`. Sans serif humanista y redondeada, en tres pesos que conviven en el mismo título:
- **MAYÚSCULAS bold** para la idea principal ("EXPRESSING LANGUAGE").
- **minúscula light**, más grande y brillante, para la palabra puente ("with").
- **MAYÚSCULA black con efecto cromo** para la palabra clave ("TYPE").

Efecto: relleno degradado blanco → gris verdoso con corte en la mitad (brillo especular), sombra suave, a veces destellos o bokeh atrás.

Fuentes: Segoe UI si está en la compu; alternativa libre **Nunito Sans**. En diálogos estilo XP, Tahoma.

Ejemplo para el Video 1: **LA COCA** *(bold)* · *verde* *(light)* · **LIFE** *(cromo)*.

## 4. Ventanas

Referencias: `ventana-reproductor-aero.jpg` (reproductor) y `ventana-notepad-vista.jpg` (bloc de notas).
- Marco de **vidrio translúcido** celeste/blanco con desenfoque de lo que hay atrás.
- Barra de título con brillo en la mitad superior y texto chico arriba a la izquierda.
- Botones minimizar/maximizar/cerrar agrupados arriba a la derecha (el de cerrar, rojo al pasar).
- Bordes con radio leve (6–8 px), borde interno blanco de 1 px y sombra difusa.
- El reproductor tiene la botonera redonda abajo, con el botón de play grande y glossy en el centro.

Se usan para **enmarcar material de archivo** (publicidades 4:3 dentro del reproductor) y para **textos** (bloc de notas con cursor titilando).

Los diálogos de error y advertencia mantienen el estilo **XP** (barra azul Luna, botones con relieve): el contraste XP vs Vista suma.

## 5. Cursores y transiciones

Referencia: `cursores.jpg`. Tres elementos:
- **Flecha** clásica blanca con borde negro: señala cosas y hace clic.
- **Mano** con dedo índice: aparece sobre botones y links antes del clic.
- **Anillo de carga** cian/verde agua girando: se usa como **transición** entre bloques (la escena "carga" y aparece la siguiente).

Todos recreados en SVG, no los archivos originales del sistema.

## 6. Foto y material de archivo

Referencia: `foto-calle-buenos-aires.jpg` (Corrientes y el Obelisco, vertical).
- Encuadre **vertical**, con perspectiva profunda (calle que se pierde en el fondo).
- Colores **lavados y cálidos**, cielo casi blanco, contraste suave, leve bruma.
- Detalles argentinos reconocibles: taxis negro y amarillo, colectivos, carteles.

Tratamiento al usarlo: grano fino, leve viñeta, saturación −10 a −20 %. Para 4:3, siempre dentro de una ventana, nunca estirado.

## 7. Movimiento

- Entradas con `ease-out` suave (`--ease-aero`) o un rebote leve (`--ease-rebote`) para ventanas y pop-ups.
- Collage parallax: 3 a 5 capas, la del fondo se mueve 20 % y la del frente 100 %, con zoom lento constante.
- Burbujas que suben lento, con reflejo especular arriba a la izquierda.
- Un estímulo nuevo cada 2 a 4 segundos.

## 8. Subtítulos

Estándar desde el episodio 002 (código de referencia: `episodios/002-flappy-bird/animaciones/scenes.js`, bloque "subtítulos").
- **Sin fondo.** Solo una sombra sutil y bien difuminada (`0 3px 24px rgba(0,18,36,.7)` + `0 1px 5px rgba(0,18,36,.5)`).
- **Máximo 3 palabras** en pantalla. El grupo corta antes si hay puntuación.
- **Dos animaciones que se alternan** grupo por grupo, para que no se vuelva repetitivo:
  - **A (de a una):** cada palabra aparece cuando la dice la voz, sube 14 px con un fade corto (0,22 s, ease-out).
  - **B (juntas):** las 3 palabras suben al mismo tiempo cuando arranca el grupo (0,28 s).
  - El grupo sale con un fade de 0,1 s.
- Fira Sans 700, 70 px, blanco, centrado a la altura y ≈ 1385 (dentro de la zona segura).
- **Palabras clave** (cifras, la palabra que cuenta la historia: *dólares*, *adicta*, *explotó*…) en **Fira Sans 900 itálica, verde Aero `#C6FF5E`**.
- No llevan puntuación final, salvo "…" y signos de pregunta.
- Donde el texto ya está en pantalla (un tuit, un chat), no se subtitula.

## 9. Lo que no hacemos

- No usamos el wallpaper "Bliss" original ni logos de Windows/Microsoft: la colina se recrea (la referencia de colores ya es una versión libre).
- No redibujamos logos de marcas: el producto real aparece en fotos o archivo.
