---
version: 1
slug: "index"
primary_target: "index"
related_targets: []
---

## Scope & Mode

Surface: landing page (`src/pages/index.astro`), Fase 1 de "Código Real". Modo dominante: **Persuade** (hero + CTA de conversión hacia el playground), con el Playground operando en registro **Operate** dentro de la página (el editor debe sentirse como una herramienta real, no una promesa).

Audiencia: principiantes absolutos que quieren aprender HTML/CSS/JS practicando en el navegador, sin registro ni instalación. Acción objetivo: empezar a escribir código en el Playground / hacer clic en "Comenzar a practicar". Prueba/contenido: el propio editor en vivo (Monaco real) + resultado renderizado al instante. Restricciones: sin backend, sin registro, sin URLs reales de monetización (placeholders `#`), nav de categorías apunta a `#` en esta fase.

## Direction contract

THESIS: El Playground con Monaco real ES el producto — la página no promete un editor, lo entrega en el primer viewport, y esa demostración funcional reemplaza el hero-genérico-con-screenshot-estático que domina esta categoría (landing de bootcamp con captura decorativa que no se puede tocar).

OWN-WORLD: Fondo sólido oscuro profundo (`#0B0F19` / slate-950), sin degradados decorativos; bordes delgados `slate-800`/`slate-700` en vez de sombras pesadas; acento violeta-índigo (`indigo-500`→`violet-500` solo en el texto de gancho y CTAs primarios, estrategia de color Restrained con un acento cargado). Tarjetas de lenguaje con fondo claro propio (naranja pálido HTML, azul pálido CSS, amarillo pálido JS) que rompen el fondo oscuro como "fichas" — es la única zona donde el mundo se aclara, y es deliberado (viene de la maqueta). Tipografía de sistema (Inter/system-ui), monoespaciada real para el código (la que trae Monaco). Radios de esquina suaves (`rounded-xl`/`rounded-2xl`), nunca esquinas puntiagudas ni glassmorphism.

STORY: El visitante entiende en un vistazo que puede escribir HTML/CSS/JS real y ver el resultado sin instalar nada; cree que esto es una herramienta seria (motor Monaco real, no juguete) y gratuita; actúa escribiendo en el editor o pulsando "Comenzar a practicar" hacia las categorías.

FIRST VIEWPORT: Navbar fija superior (marca "</> Código Real" + badge Beta, links Inicio/HTML/CSS/JavaScript/Ejercicios/Blog, buscador, toggle tema, botón "Apóyame"). Debajo, hero de dos columnas en desktop: izquierda = kicker "Aprende • Practica • Construye", H1 "Tu primer paso al [gradiente]desarrollo web[/gradiente]", párrafo, dos CTAs (primario sólido violeta, secundario outline), fila de 3 trust-badges (gratis/dispositivos/sin registro); derecha = el Playground completo (tabs HTML/CSS/JS, editor Monaco vs-dark a la izquierda del panel, "Resultado" con iframe en fondo claro a la derecha, toggle "Vista en tiempo real", botón "Abrir en nueva pestaña").

FORM: Clon directo de la maqueta de referencia proporcionada por el usuario (imagen adjunta), que actúa como comp ya aprobado — el usuario fijó explícitamente el mundo visual completo ("clonar con máxima fidelidad"). Por esta razón se omite concept-seed / el sorteo de direcciones (regla "el brief gana" de SKILL.md: un brief que pinta su propia maqueta no se redirige a exploración de conceptos). buildPath: code-led (la imagen ya es el objetivo pixel-a-pixel a igualar a mano; no hay generación de comps nueva que hacer — es transcripción fiel, no ideación).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Ninguna pendiente para Fase 1: alcance (solo landing), monetización (placeholders) y stack (Astro + Tailwind) ya confirmados con el usuario.
