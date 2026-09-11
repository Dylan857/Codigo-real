# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS (user-specified). Editor de código en vivo con Monaco Editor (el motor real de VS Code) cargado vía CDN en el cliente, evitando colisiones con el SSR de Astro.

## Users

Principiantes absolutos y autodidactas que quieren dar sus primeros pasos en desarrollo web (HTML, CSS, JavaScript). Buscan aprender practicando directamente en el navegador, sin instalar nada ni registrarse. [Inferido del copy de la maqueta: "Tu primer paso al desarrollo web", "100% gratis", "Sin registro", "Funciona en todos tus dispositivos".]

## Product Purpose

"Código Real" es una plataforma interactiva de aprendizaje de desarrollo web. Permite explorar HTML, CSS y JavaScript escribiendo código real y viendo el resultado renderizado al instante, con el objetivo de que el usuario construya proyectos reales desde el primer día. Fase 1 = landing page con editor en vivo funcional (Monaco Editor) como pieza central de conversión/demostración.

## Positioning

Aprendizaje "manos a la obra" inmediato: a diferencia de un curso tradicional en video, el visitante escribe código real en un editor profesional (Monaco/VS Code) y ve el resultado en tiempo real, sin fricción de registro ni instalación. [Inferido de la maqueta y del requerimiento explícito de usar el motor real de Monaco en vez de una simulación.]

## Operating Context

- Landing page pública, consumida en desktop y móvil.
- El Playground (editor) es el componente central: pestañas HTML/CSS/JS, editor Monaco a la izquierda, iframe de previsualización en vivo a la derecha, toggle "Vista en tiempo real" y botón "Abrir en nueva pestaña".
- Navegación superior con marca "Código Real", enlaces a secciones/categorías (Inicio, HTML, CSS, JavaScript, Ejercicios, Blog), buscador de etiquetas/ejemplos, toggle de tema y botón CTA "Apóyame".
- Footer con columnas Aprende, Recursos, Apóyame (Donaciones, Afiliados, Anúnciate aquí, Contacta) y redes sociales.

## Capabilities and Constraints

- Fase 1 = solo landing page (`index.astro`). Los enlaces de navbar a HTML/CSS/JavaScript/Ejercicios/Blog usan placeholders (`#` o anclas internas); esas páginas no se construyen en esta fase. [Confirmado por el usuario.]
- Enlaces de monetización (Apóyame, Donaciones, Afiliados, Anúnciate aquí) usan placeholders `#` — no hay URLs reales todavía. [Confirmado por el usuario.]
- El editor debe ser el motor real de Monaco Editor (no una simulación estática), cargado vía CDN con `require.config`/AMD loader, con `automaticLayout`, `minimap` desactivado, tema `vs-dark`.
- El iframe de previsualización se actualiza en tiempo real (`srcdoc`) al escuchar `onDidChangeModelContent`.
- Sin backend ni persistencia en esta fase: todo el estado del editor vive en el cliente.

## Brand Commitments

- Nombre del producto: **Código Real** (nombre oficial confirmado por el usuario; la maqueta de referencia dice "CodeLab" pero debe reemplazarse por "Código Real" en todo el clon).
- Tagline del footer en la maqueta: "El código también puede cambiar vidas."
- Idioma: español (todo el copy de la maqueta y del producto está en español).

## Evidence on Hand

- Maqueta visual de referencia (imagen adjunta por el usuario) que define layout, jerarquía, copy y componentes con alta fidelidad: navbar, hero con editor Monaco embebido, sección "Elige tu camino" (tarjetas HTML/CSS/JS), sección de etiquetas populares, CTA final, footer.
- No hay assets de marca reales (logo, ilustraciones) más allá de lo que se replique de la maqueta con iconografía/tipografía.

## Product Principles

1. Fidelidad visual máxima a la maqueta de referencia, adaptando solo el nombre/marca a "Código Real".
2. El Playground con Monaco real es el corazón funcional de la página — debe sentirse como un editor de código de verdad, no una demo falsa.
3. Cero fricción: gratis, sin registro, funciona en cualquier dispositivo — estos mensajes son promesas de producto, no solo copy decorativo.
4. Paleta oscura premium, sobria y con bordes sutiles — evitar cualquier estética "AI slop" (degradados genéricos, glow excesivo, iconografía genérica).

## Accessibility & Inclusion

[No se estableció un requisito de accesibilidad específico más allá de las prácticas estándar (contraste, foco visible, semántica). Se seguirá el piso de calidad estándar de Impeccable.]
