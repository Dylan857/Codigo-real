import type { RealLesson, LessonStub, CourseModule, AdjacentLesson } from "./course-types";

export type { RealLesson, LessonStub, CourseModule, AdjacentLesson };

export const CSS_MODULE_COUNT = 11;

export const FIRST_CSS_LESSON_PATH = "/css/introduccion-a-css/mi-primer-estilo-css";

const introduccionLessons: RealLesson[] = [
  {
    slug: "que-es-css",
    title: "¿Qué es CSS?",
    summary:
      "Antes de darle estilo a nada, entendamos qué es CSS y por qué existe. Es la pieza que separa el contenido (HTML) de su apariencia.",
    playgroundCode: {
      html: `<h1>Código Real</h1>\n<p>Este texto está escrito en HTML.</p>\n`,
      css: `h1 {\n  color: #2563eb;\n}\n`,
    },
    hint: "Cambia el color del h1 por otro código hexadecimal, como #16a34a, y observa el resultado.",
    explanationIntro:
      "CSS (Cascading Style Sheets, u \"hojas de estilo en cascada\") es el lenguaje que describe cómo se ve el HTML: colores, tamaños, espaciados, posiciones. Si HTML es el esqueleto de la página, CSS es la piel y la ropa.",
    explanationRows: [
      { code: "CSS", desc: "Lenguaje de estilos: no describe estructura, describe apariencia." },
      { code: "selector", desc: "La parte de una regla CSS que dice a qué elemento se aplica el estilo (por ejemplo h1)." },
      { code: "propiedad: valor;", desc: "Cada instrucción de estilo dentro de una regla, como color: blue;" },
    ],
    tip: "CSS nunca cambia el contenido de tu página, solo cómo se ve. Si necesitas cambiar el texto, edita el HTML.",
    extra: "El nombre \"cascada\" viene de que los estilos se aplican en orden y pueden sobrescribirse unos a otros según reglas de prioridad, algo que verás más adelante.",
    commonError: "Confundir HTML y CSS: intentar poner colores o tamaños directamente en las etiquetas HTML en vez de usar reglas CSS.",
    nextStepText: "Ya sabes qué es CSS. Ahora vamos a escribir tu primer estilo real.",
    challenge: {
      description:
        "Cambia el color del <h1> a tu color favorito usando un código hexadecimal. No te preocupes por memorizarlos: existen muchas herramientas gratuitas para elegir uno, como htmlcolorcodes.com/es",
      code: {
        html: `<h1>Código Real</h1>\n<p>Este texto está escrito en HTML.</p>\n`,
        css: `h1 {\n  color: #2563eb; /* prueba con otro color */\n}\n`,
      },
    },
  },
  {
    slug: "mi-primer-estilo-css",
    title: "Mi primer estilo CSS",
    summary:
      "En esta lección escribirás tu primer código CSS. Verás cómo unos simples estilos pueden cambiar por completo la apariencia de una página web. Escribe el código en el editor y observa el resultado en tiempo real.",
    playgroundCode: {
      html: `<h1>Hola, Código Real</h1>\n<p>El poder del diseño está en los detalles. Con CSS puedes hacer que tus ideas cobren vida.</p>\n<button>Comienza ahora</button>\n`,
      css: `body {\n  font-family: 'Segoe UI', sans-serif;\n  background-color: #f0f4ff;\n  color: #333;\n  margin: 0;\n  padding: 40px;\n}\n\nh1 {\n  color: #2563eb;\n  font-size: 2.5rem;\n  margin-bottom: 16px;\n}\n\np {\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 480px;\n}\n\nbutton {\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n`,
    },
    hint: "Cambia el valor de background-color en el body y observa cómo cambia el fondo completo de la página.",
    explanationIntro: "Estos son algunos conceptos básicos de CSS que usamos en el ejemplo:",
    explanationRows: [
      { code: "body", desc: "Selector que apunta al elemento <body> de la página." },
      { code: "font-family", desc: "Define el tipo de letra que se usaría en el texto." },
      { code: "color", desc: "Establece el color del texto." },
      { code: "background-color", desc: "Define el color de fondo del elemento." },
      { code: "font-size", desc: "Tamaño de la fuente del texto." },
      { code: "padding", desc: "Espacio interno entre el contenido y el borde del elemento." },
      { code: "border-radius", desc: "Redondea las esquinas de un elemento." },
      { code: "display", desc: "Define cómo se muestra el elemento (bloque, en línea, etc.)." },
    ],
    tip: "Empieza con selectores simples y pocos estilos. Es mejor entender bien cada propiedad antes de usar muchas.",
    extra: "CSS no solo sirve para cambiar colores. También puedes crear animaciones, efectos y diseños completos.",
    commonError: "Olvidar el punto y coma (;) al final de cada propiedad o las llaves { }. Esto puede causar que tus estilos no se apliquen.",
    nextStepText: "Ahora que ya creaste tus primeros estilos, aprende sobre selectores para aplicar CSS a más elementos.",
    challenge: {
      description: "Modifica el código y cambia el color de fondo, el tamaño del título o el estilo del botón.",
      code: {
        html: `<h1>Hola, Código Real</h1>\n<p>El poder del diseño está en los detalles. Con CSS puedes hacer que tus ideas cobren vida.</p>\n<button>Comienza ahora</button>\n`,
        css: `body {\n  font-family: 'Segoe UI', sans-serif;\n  background-color: #f0f4ff;\n  color: #333;\n  margin: 0;\n  padding: 40px;\n}\n\nh1 {\n  color: #2563eb;\n  font-size: 2.5rem;\n  margin-bottom: 16px;\n}\n\np {\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 480px;\n}\n\nbutton {\n  background-color: #2563eb;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n`,
      },
    },
  },
  {
    slug: "como-se-conecta-css",
    title: "Cómo se conecta CSS",
    summary:
      "CSS puede vivir en el mismo archivo HTML o en un archivo aparte. Veamos las tres formas de conectar estilos a tu página y cuál conviene usar.",
    playgroundCode: {
      html: `<h1 style="color: purple;">Estilo en línea</h1>\n<p>Este párrafo se ve afectado por el CSS de la pestaña de al lado.</p>\n`,
      css: `h1 {\n  color: #2563eb;\n}\n\np {\n  color: #475569;\n}\n`,
    },
    hint: "El h1 tiene un estilo en línea (style=\"color: purple\") que gana sobre el CSS de la otra pestaña. Quítalo y observa cómo cambia.",
    explanationIntro:
      "Existen tres formas de agregar CSS a una página, y cada una tiene su propio caso de uso:",
    explanationRows: [
      { code: 'style="..."', desc: "CSS en línea: se escribe directo en el atributo style de una etiqueta. Útil solo para pruebas rápidas." },
      { code: "<style>...</style>", desc: "CSS interno: se escribe dentro de una etiqueta <style> en el <head> del documento." },
      { code: '<link rel="stylesheet" href="...">', desc: "CSS externo: conecta un archivo .css aparte. Es la forma recomendada porque separa contenido y estilo, y se puede reutilizar en varias páginas." },
    ],
    tip: "En proyectos reales casi siempre se usa CSS externo: mantiene el HTML limpio y permite reutilizar los mismos estilos en muchas páginas.",
    extra: "Si usas los tres tipos de CSS al mismo tiempo, el CSS en línea gana casi siempre por tener más prioridad. Verás esto a fondo cuando estudies la cascada y la especificidad.",
    commonError: "Olvidar la etiqueta <link> en el <head>, o escribir mal la ruta del archivo .css: la página se ve sin ningún estilo aplicado y no hay ningún error visible en la página.",
    nextStepText: "Ya sabes cómo conectar CSS a tu HTML. Ahora veamos la sintaxis exacta que sigue cada regla de estilo.",
    challenge: {
      description: "Agrega un estilo en línea a otro elemento distinto y compáralo con el estilo que ya viene del CSS.",
      code: {
        html: `<h1 style="color: purple;">Estilo en línea</h1>\n<p>Agrega tu propio style=\"...\" aquí</p>\n`,
        css: `h1 {\n  color: #2563eb;\n}\n\np {\n  color: #475569;\n}\n`,
      },
    },
  },
  {
    slug: "sintaxis-y-reglas",
    title: "Sintaxis y reglas",
    summary:
      "Toda regla CSS sigue la misma estructura: selector, llaves y declaraciones. Dominar esta sintaxis te evita el 90% de los errores comunes.",
    playgroundCode: {
      html: `<h1>Título principal</h1>\n<p class="destacado">Un párrafo con clase.</p>\n<p>Un párrafo normal.</p>\n`,
      css: `h1 {\n  color: #1d4ed8;\n  text-align: center;\n}\n\n.destacado {\n  font-weight: bold;\n  color: #dc2626;\n}\n`,
    },
    hint: "Agrega un comentario /* así */ dentro de una regla y comprueba que el navegador lo ignora por completo.",
    explanationIntro: "Toda regla CSS se compone de las mismas tres partes:",
    explanationRows: [
      { code: "selector { }", desc: "El selector indica a qué elemento(s) se aplica la regla; las llaves delimitan sus declaraciones." },
      { code: "propiedad: valor;", desc: "Cada declaración tiene una propiedad, dos puntos, un valor y termina en punto y coma." },
      { code: "/* comentario */", desc: "Los comentarios en CSS se escriben así y el navegador los ignora por completo." },
    ],
    tip: "Indenta y organiza tus reglas: una por línea, una declaración por renglón. Te ahorrará muchos dolores de cabeza al depurar.",
    extra: "CSS ignora los espacios en blanco y saltos de línea extra, así que la indentación es solo por legibilidad para ti, no por el navegador.",
    commonError: "Escribir dos puntos en vez de punto y coma al final de una declaración, o dejar una llave sin cerrar: el navegador puede ignorar toda la regla o las siguientes.",
    nextStepText: "Con la sintaxis clara, es momento de aprender a seleccionar exactamente los elementos que quieres afectar.",
    challenge: {
      description: "Agrega una tercera regla que le dé un color de fondo a los párrafos con la clase destacado.",
      code: {
        html: `<h1>Título principal</h1>\n<p class="destacado">Un párrafo con clase.</p>\n<p>Un párrafo normal.</p>\n`,
        css: `h1 {\n  color: #1d4ed8;\n  text-align: center;\n}\n\n.destacado {\n  font-weight: bold;\n  color: #dc2626;\n  /* agrega background-color aquí */\n}\n`,
      },
    },
  },
];

const selectoresLessons: RealLesson[] = [
  {
    slug: "selector-de-elemento",
    title: "Selector de elemento",
    summary:
      "El selector más básico apunta directamente al nombre de una etiqueta HTML, como p o h1. Afecta a todos los elementos de ese tipo en la página.",
    playgroundCode: {
      html: `<h2>Encabezado</h2>\n<p>Primer párrafo.</p>\n<p>Segundo párrafo.</p>\n`,
      css: `p {\n  color: #334155;\n  line-height: 1.5;\n}\n`,
    },
    hint: "Agrega una regla para h2 y observa que solo afecta al encabezado, no a los párrafos.",
    explanationIntro: "Los selectores de elemento seleccionan directamente por nombre de etiqueta:",
    explanationRows: [
      { code: "p", desc: "Selecciona todas las etiquetas <p> de la página." },
      { code: "h2", desc: "Selecciona todas las etiquetas <h2>." },
      { code: "*", desc: "El selector universal: aplica el estilo a absolutamente todos los elementos." },
    ],
    tip: "Los selectores de elemento son útiles para estilos base que quieres en toda la página, como la tipografía general.",
    extra: "El selector universal (*) es potente pero se usa con cuidado: aplicar estilos a \"todo\" puede tener efectos inesperados en elementos que no imaginabas.",
    commonError: "Usar mayúsculas en el nombre de la etiqueta (P en vez de p). No genera error, pero por convención siempre se escriben en minúsculas.",
    nextStepText: "Seleccionar por etiqueta afecta a todos los elementos iguales. Ahora veamos cómo seleccionar solo algunos, con clases e IDs.",
    challenge: {
      description: "Agrega una regla para el selector h2 que cambie su color y alineación.",
      code: {
        html: `<h2>Encabezado</h2>\n<p>Primer párrafo.</p>\n<p>Segundo párrafo.</p>\n`,
        css: `p {\n  color: #334155;\n  line-height: 1.5;\n}\n\n/* agrega aquí una regla para h2 */\n`,
      },
    },
  },
  {
    slug: "clases-e-ids",
    title: "Clases e IDs",
    summary:
      "Cuando necesitas estilizar solo algunos elementos (no todos los de un tipo), usas clases (reutilizables) o IDs (únicos).",
    playgroundCode: {
      html: `<p class="alerta">Este mensaje es importante.</p>\n<p>Este es un párrafo normal.</p>\n<h1 id="titulo-principal">Bienvenido</h1>\n`,
      css: `.alerta {\n  color: #b91c1c;\n  font-weight: bold;\n}\n\n#titulo-principal {\n  text-align: center;\n}\n`,
    },
    hint: "Agrega la clase \"alerta\" a otro párrafo y observa cómo el mismo estilo se reutiliza en ambos.",
    explanationIntro: "Las clases y los IDs te permiten ser más selectivo que con el nombre de la etiqueta:",
    explanationRows: [
      { code: ".clase", desc: "Selecciona todos los elementos que tengan ese atributo class. Se puede repetir en varios elementos." },
      { code: "#id", desc: "Selecciona el único elemento con ese atributo id. Un id no debería repetirse en la misma página." },
      { code: 'class="a b"', desc: "Un elemento puede tener varias clases al mismo tiempo, separadas por espacios." },
    ],
    tip: "Usa clases para estilos que se repiten (botones, tarjetas, alertas) y reserva los IDs para casos únicos, como anclas de navegación.",
    extra: "Los IDs tienen más prioridad que las clases al decidir qué estilo gana si hay conflicto. Por eso muchos desarrolladores los evitan para estilos y los reservan para JavaScript o anclas.",
    commonError: "Olvidar el punto (.) antes de una clase o el numeral (#) antes de un id en el selector: sin ellos, CSS los interpreta como nombres de etiquetas que no existen.",
    nextStepText: "Ya puedes seleccionar por clase o id. El siguiente paso es combinar selectores para casos más específicos.",
    challenge: {
      description: "Agrega la clase alerta a un segundo párrafo para reutilizar el mismo estilo.",
      code: {
        html: `<p class="alerta">Este mensaje es importante.</p>\n<p>Agrega la clase alerta a este párrafo</p>\n<h1 id="titulo-principal">Bienvenido</h1>\n`,
        css: `.alerta {\n  color: #b91c1c;\n  font-weight: bold;\n}\n\n#titulo-principal {\n  text-align: center;\n}\n`,
      },
    },
  },
  {
    slug: "selectores-combinados",
    title: "Selectores combinados",
    summary:
      "Puedes combinar selectores para ser más específico: descendientes, hijos directos, o varios selectores que comparten el mismo estilo.",
    playgroundCode: {
      html: `<div class="tarjeta">\n  <h3>Título de la tarjeta</h3>\n  <p>Descripción dentro de la tarjeta.</p>\n</div>\n<p>Párrafo fuera de la tarjeta.</p>\n`,
      css: `.tarjeta p {\n  color: #475569;\n}\n\n.tarjeta > h3 {\n  color: #1d4ed8;\n}\n\nh3, h1 {\n  font-weight: 700;\n}\n`,
    },
    hint: "Cambia .tarjeta p por .tarjeta > p y observa que el resultado no cambia porque el párrafo sigue siendo hijo directo.",
    explanationIntro: "Combinar selectores te permite apuntar con más precisión dentro de una estructura HTML:",
    explanationRows: [
      { code: "A B", desc: "Selector descendiente: selecciona B en cualquier nivel dentro de A." },
      { code: "A > B", desc: "Selector de hijo directo: selecciona B solo si es hijo inmediato de A." },
      { code: "A, B", desc: "Selector de grupo: aplica el mismo estilo a A y a B, sin relación entre ellos." },
    ],
    tip: "El selector descendiente (con solo un espacio) es el que más vas a usar para aplicar estilos \"dentro de\" un contenedor.",
    extra: "Existen más combinadores, como el selector de hermano adyacente (A + B) y el general (A ~ B), útiles para casos más avanzados de diseño.",
    commonError: "Confundir \"A B\" (cualquier descendiente) con \"A > B\" (solo hijo directo): un selector demasiado amplio puede estilizar elementos que no querías tocar.",
    nextStepText: "Con selectores precisos ya puedes apuntar a casi cualquier parte del HTML. Ahora enfoquémonos en darle color y tipografía al texto.",
    challenge: {
      description: "Agrega una regla que solo afecte a los párrafos que están fuera de la tarjeta.",
      code: {
        html: `<div class="tarjeta">\n  <h3>Título de la tarjeta</h3>\n  <p>Descripción dentro de la tarjeta.</p>\n</div>\n<p>Párrafo fuera de la tarjeta.</p>\n`,
        css: `.tarjeta p {\n  color: #475569;\n}\n\n.tarjeta > h3 {\n  color: #1d4ed8;\n}\n\n/* agrega aquí una regla para el párrafo fuera de la tarjeta */\n`,
      },
    },
  },
];

const coloresYTextoLessons: RealLesson[] = [
  {
    slug: "colores",
    title: "Colores",
    summary: "CSS admite varias formas de definir color: nombres, hexadecimal, rgb() y hsl(). Cada una tiene sus ventajas.",
    playgroundCode: {
      html: `<h2>Paleta de colores</h2>\n<p class="rojo">Texto en rojo con nombre.</p>\n<p class="azul">Texto en azul hexadecimal.</p>\n<p class="verde">Texto en verde con rgb().</p>\n`,
      css: `.rojo {\n  color: red;\n}\n\n.azul {\n  color: #2563eb;\n}\n\n.verde {\n  color: rgb(22, 163, 74);\n}\n`,
    },
    hint: "Cambia rgb(22, 163, 74) por hsl(160, 84%, 39%) y comprueba que el color final es prácticamente el mismo.",
    explanationIntro: "Estas son las formas más comunes de escribir un color en CSS:",
    explanationRows: [
      { code: "red, blue...", desc: "Nombres de color predefinidos. Fáciles de leer pero limitados (unos 140 nombres)." },
      { code: "#2563eb", desc: "Color hexadecimal: 6 dígitos que representan rojo, verde y azul. El formato más usado en diseño web. No necesitas memorizar los códigos: existen muchas herramientas gratuitas para elegirlos, como htmlcolorcodes.com/es" },
      { code: "rgb(22, 163, 74)", desc: "Define un color con sus componentes rojo, verde y azul, cada uno de 0 a 255." },
      { code: "hsl(160, 84%, 39%)", desc: "Define un color por matiz, saturación y luminosidad; más intuitivo para crear variaciones de un mismo tono." },
    ],
    tip: "Puedes agregar un cuarto valor de transparencia con rgba() o hsla(), como rgba(0,0,0,0.5) para un negro semi-transparente.",
    extra: "Herramientas como el selector de color de las DevTools del navegador te muestran el mismo color en hex, rgb y hsl a la vez.",
    commonError: "Escribir un hexadecimal incompleto, como #2563e (5 dígitos) en vez de 6. El navegador simplemente ignora el color inválido.",
    nextStepText: "Con el color dominado, sigamos con las propiedades que controlan la tipografía del texto.",
    challenge: {
      description: "Agrega una cuarta línea de texto y dale un color usando el formato hsl().",
      code: {
        html: `<h2>Paleta de colores</h2>\n<p class="rojo">Texto en rojo con nombre.</p>\n<p class="azul">Texto en azul hexadecimal.</p>\n<p class="verde">Texto en verde con rgb().</p>\n<p class="morado">Agrega este párrafo a tu CSS</p>\n`,
        css: `.rojo {\n  color: red;\n}\n\n.azul {\n  color: #2563eb;\n}\n\n.verde {\n  color: rgb(22, 163, 74);\n}\n\n/* agrega aquí .morado con hsl() */\n`,
      },
    },
  },
  {
    slug: "tipografia",
    title: "Tipografía",
    summary: "font-family, font-size, font-weight y line-height controlan cómo se ve y se lee el texto de tu página.",
    playgroundCode: {
      html: `<h1>Título con tipografía</h1>\n<p>Este párrafo usa una fuente distinta y un interlineado más cómodo de leer.</p>\n`,
      css: `h1 {\n  font-family: Georgia, serif;\n  font-weight: 700;\n}\n\np {\n  font-family: system-ui, sans-serif;\n  font-size: 1.1rem;\n  line-height: 1.7;\n}\n`,
    },
    hint: "Cambia line-height a 1 y observa qué tan pegadas se ven las líneas del párrafo.",
    explanationIntro: "Estas son las propiedades básicas para controlar la tipografía:",
    explanationRows: [
      { code: "font-family", desc: "Define la tipografía; se recomienda listar varias como respaldo, terminando en una genérica (serif, sans-serif)." },
      { code: "font-size", desc: "Tamaño del texto. rem es la unidad más recomendada porque escala junto al tamaño base del navegador." },
      { code: "font-weight", desc: "Grosor del texto: valores comunes son 400 (normal) y 700 (negrita)." },
      { code: "line-height", desc: "Espacio vertical entre líneas de texto; mejora mucho la legibilidad de párrafos largos." },
    ],
    tip: "Un line-height entre 1.4 y 1.7 suele ser el punto dulce para párrafos largos y fáciles de leer.",
    extra: "Cuando listas varias fuentes en font-family, el navegador prueba cada una en orden hasta encontrar la primera instalada en el dispositivo del usuario.",
    commonError: "Olvidar una fuente genérica al final de font-family (serif, sans-serif, monospace): si ninguna de tus fuentes está disponible, el navegador no sabe qué tipo de letra usar de respaldo.",
    nextStepText: "Ya controlas cómo se ve el texto. Ahora veamos cómo alinearlo y organizarlo dentro de su contenedor.",
    challenge: {
      description: "Cambia font-family del párrafo por otra pila de fuentes, terminando siempre en una genérica.",
      code: {
        html: `<h1>Título con tipografía</h1>\n<p>Este párrafo usa una fuente distinta y un interlineado más cómodo de leer.</p>\n`,
        css: `h1 {\n  font-family: Georgia, serif;\n  font-weight: 700;\n}\n\np {\n  font-family: /* cambia esta pila de fuentes */;\n  font-size: 1.1rem;\n  line-height: 1.7;\n}\n`,
      },
    },
  },
  {
    slug: "alineacion-de-texto",
    title: "Alineación de texto",
    summary: "text-align, text-decoration y text-transform terminan de dar forma a cómo se presenta el texto en pantalla.",
    playgroundCode: {
      html: `<h2>TÍTULO DE SECCIÓN</h2>\n<p>Texto justificado y en mayúsculas automáticas gracias a CSS.</p>\n<a href="#">Enlace subrayado</a>\n`,
      css: `h2 {\n  text-align: center;\n  text-transform: uppercase;\n}\n\np {\n  text-align: justify;\n}\n\na {\n  text-decoration: underline;\n}\n`,
    },
    hint: "Cambia text-decoration: underline por none y observa cómo desaparece la línea del enlace.",
    explanationIntro: "Estas propiedades terminan de definir la presentación del texto:",
    explanationRows: [
      { code: "text-align", desc: "Alinea el texto horizontalmente: left, center, right o justify." },
      { code: "text-transform", desc: "Cambia mayúsculas/minúsculas visualmente sin tocar el texto real del HTML: uppercase, lowercase, capitalize." },
      { code: "text-decoration", desc: "Agrega o quita líneas del texto: underline, line-through o none." },
    ],
    tip: "Usa text-transform: uppercase en vez de escribir el texto en mayúsculas en el HTML: mantienes el contenido real accesible y fácil de leer.",
    extra: "text-decoration: none es la propiedad clásica para quitarle el subrayado por defecto a los enlaces (<a>) en un diseño personalizado.",
    commonError: "Usar text-align: center esperando centrar un elemento completo (como una caja): text-align solo centra el texto/contenido en línea dentro de su contenedor, no el contenedor en sí.",
    nextStepText: "El texto ya está bajo control. Ahora vamos a la base de todo diseño en CSS: el modelo de caja.",
    challenge: {
      description: "Cambia text-transform del h2 por lowercase o capitalize y observa la diferencia.",
      code: {
        html: `<h2>TÍTULO DE SECCIÓN</h2>\n<p>Texto justificado y en mayúsculas automáticas gracias a CSS.</p>\n<a href="#">Enlace subrayado</a>\n`,
        css: `h2 {\n  text-align: center;\n  text-transform: uppercase; /* prueba lowercase o capitalize */\n}\n\np {\n  text-align: justify;\n}\n\na {\n  text-decoration: underline;\n}\n`,
      },
    },
  },
];

const cajaYEspaciadoLessons: RealLesson[] = [
  {
    slug: "modelo-de-caja",
    title: "El modelo de caja",
    summary:
      "Todo elemento HTML es una caja rectangular formada por contenido, padding, border y margin. Entender este modelo es la base de todo el diseño en CSS.",
    playgroundCode: {
      html: `<div class="caja">Contenido</div>\n`,
      css: `.caja {\n  width: 200px;\n  padding: 20px;\n  border: 4px solid #2563eb;\n  margin: 30px;\n  background-color: #e0e7ff;\n}\n`,
    },
    hint: "Cambia el valor de padding y observa cómo crece el espacio entre el texto y el borde azul.",
    explanationIntro: "Todo elemento está formado por cuatro capas, de adentro hacia afuera:",
    explanationRows: [
      { code: "content", desc: "El contenido real del elemento: texto, imágenes u otros elementos." },
      { code: "padding", desc: "Espacio interno entre el contenido y el borde de la caja." },
      { code: "border", desc: "El borde visible que rodea el padding y el contenido." },
      { code: "margin", desc: "Espacio externo entre la caja y los elementos vecinos; es transparente y nunca tiene fondo." },
    ],
    tip: "Activa las DevTools del navegador (F12) y selecciona cualquier elemento: la pestaña \"Computed\" te muestra el modelo de caja exacto con sus 4 capas.",
    extra: "El modelo de caja explica por qué agregar padding o border puede hacer que un elemento se vea más grande de lo esperado — lo resolverás con box-sizing más adelante.",
    commonError: "Confundir padding (espacio interno, con fondo) y margin (espacio externo, transparente): usar uno donde correspondía el otro es de los errores más comunes en CSS.",
    nextStepText: "Ya entiendes las 4 capas de la caja. Profundicemos en cómo controlar padding y margin con precisión.",
    challenge: {
      description: "Duplica el div y dale a la copia un margin y un padding distintos para comparar el efecto.",
      code: {
        html: `<div class="caja">Contenido</div>\n<div class="caja">Copia esta caja y cambia su estilo</div>\n`,
        css: `.caja {\n  width: 200px;\n  padding: 20px;\n  border: 4px solid #2563eb;\n  margin: 30px;\n  background-color: #e0e7ff;\n}\n`,
      },
    },
  },
  {
    slug: "margin-y-padding",
    title: "Margin y padding",
    summary:
      "Puedes controlar cada lado de margin y padding por separado, o usar las propiedades abreviadas para escribir menos código.",
    playgroundCode: {
      html: `<div class="tarjeta">\n  <h3>Tarjeta</h3>\n  <p>Contenido de la tarjeta con espaciado.</p>\n</div>\n`,
      css: `.tarjeta {\n  margin: 20px auto;\n  padding: 16px 24px;\n  max-width: 320px;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.tarjeta h3 {\n  margin-top: 0;\n  margin-bottom: 8px;\n}\n`,
    },
    hint: "Cambia margin: 20px auto por margin: 20px 60px y observa cómo deja de estar centrada.",
    explanationIntro: "Estas son las formas más comunes de escribir margin y padding:",
    explanationRows: [
      { code: "margin: 10px;", desc: "Aplica el mismo margen en los 4 lados." },
      { code: "margin: 10px 20px;", desc: "Primer valor arriba/abajo, segundo valor izquierda/derecha." },
      { code: "margin-top / -right / -bottom / -left", desc: "Controlan cada lado por separado, útil cuando no son simétricos." },
      { code: "margin: 0 auto;", desc: "Truco clásico para centrar horizontalmente un bloque con ancho definido (max-width o width)." },
    ],
    tip: "El patrón margin: 0 auto (con un ancho definido) es la forma más común de centrar contenedores horizontalmente en CSS.",
    extra: "Existe un fenómeno llamado \"colapso de márgenes\": cuando dos márgenes verticales se tocan, a veces el navegador usa solo el más grande en vez de sumarlos.",
    commonError: "Escribir margin: 20px auto esperando centrar también verticalmente: auto solo centra en el eje horizontal con este método, no en el vertical.",
    nextStepText: "Con margin y padding dominados, resolvamos el problema clásico de los tamaños con box-sizing.",
    challenge: {
      description: "Cambia el padding de la tarjeta a valores distintos arriba/abajo e izquierda/derecha.",
      code: {
        html: `<div class="tarjeta">\n  <h3>Tarjeta</h3>\n  <p>Contenido de la tarjeta con espaciado.</p>\n</div>\n`,
        css: `.tarjeta {\n  margin: 20px auto;\n  padding: 16px 24px; /* cambia estos valores */\n  max-width: 320px;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.tarjeta h3 {\n  margin-top: 0;\n  margin-bottom: 8px;\n}\n`,
      },
    },
  },
  {
    slug: "box-sizing",
    title: "Box-sizing",
    summary:
      "Por defecto, el ancho que defines no incluye el padding ni el borde. box-sizing: border-box resuelve este problema de raíz.",
    playgroundCode: {
      html: `<div class="caja-normal">content-box</div>\n<div class="caja-borde">border-box</div>\n`,
      css: `div {\n  width: 200px;\n  padding: 20px;\n  border: 4px solid #2563eb;\n  margin-bottom: 12px;\n  color: white;\n}\n\n.caja-normal {\n  box-sizing: content-box;\n  background-color: #f97316;\n}\n\n.caja-borde {\n  box-sizing: border-box;\n  background-color: #16a34a;\n}\n`,
    },
    hint: "Compara el ancho final de ambas cajas: aunque ambas tienen width: 200px, se ven de tamaño distinto.",
    explanationIntro: "box-sizing decide si el padding y el borde se suman o no al ancho que definiste:",
    explanationRows: [
      { code: "box-sizing: content-box", desc: "Valor por defecto: width solo define el contenido; padding y border se suman aparte, agrandando la caja final." },
      { code: "box-sizing: border-box", desc: "width incluye padding y border dentro de esa medida; la caja final mide exactamente lo que definiste." },
      { code: "* { box-sizing: border-box; }", desc: "Patrón muy común: aplicar border-box a todos los elementos al inicio de un proyecto para tamaños más predecibles." },
    ],
    tip: "La mayoría de los proyectos profesionales agregan \"* { box-sizing: border-box; }\" al inicio de su CSS. Ahorra muchos dolores de cabeza calculando tamaños.",
    extra: "Antes de que border-box fuera tan popular, calcular tamaños exactos con padding y bordes era una de las mayores frustraciones al aprender CSS.",
    commonError: "Definir width: 100% en un elemento con padding y sin border-box: el elemento termina siendo más ancho que su contenedor y provoca scroll horizontal inesperado.",
    nextStepText: "Ya dominas el tamaño de las cajas. Ahora aprende a sacarlas de su flujo normal con position.",
    challenge: {
      description: "Agrega * { box-sizing: border-box; } al inicio del CSS y observa si cambia el tamaño de ambas cajas.",
      code: {
        html: `<div class="caja-normal">content-box</div>\n<div class="caja-borde">border-box</div>\n`,
        css: `/* agrega aquí * { box-sizing: border-box; } */\n\ndiv {\n  width: 200px;\n  padding: 20px;\n  border: 4px solid #2563eb;\n  margin-bottom: 12px;\n  color: white;\n}\n\n.caja-normal {\n  box-sizing: content-box;\n  background-color: #f97316;\n}\n\n.caja-borde {\n  box-sizing: border-box;\n  background-color: #16a34a;\n}\n`,
      },
    },
  },
];

const posicionamientoLessons: RealLesson[] = [
  {
    slug: "static-y-relative",
    title: "Position: static y relative",
    summary:
      "position controla cómo se ubica un elemento respecto a su flujo normal. Empecemos por los dos valores más básicos: static y relative.",
    playgroundCode: {
      html: `<div class="caja">Caja normal</div>\n<div class="caja mover">Caja movida con relative</div>\n<div class="caja">Caja normal</div>\n`,
      css: `.caja {\n  padding: 16px;\n  margin-bottom: 8px;\n  background-color: #e0e7ff;\n  border: 2px solid #2563eb;\n}\n\n.mover {\n  position: relative;\n  top: 12px;\n  left: 24px;\n  background-color: #c7d2fe;\n}\n`,
    },
    hint: "Cambia top y left de .mover por valores negativos y observa que la caja se mueve hacia arriba/izquierda.",
    explanationIntro: "position controla cómo se posiciona un elemento respecto a su flujo normal. Estos son los dos valores más básicos:",
    explanationRows: [
      { code: "position: static", desc: "Valor por defecto de todo elemento: sigue el flujo normal del documento, uno detrás del otro." },
      { code: "position: relative", desc: "El elemento sigue ocupando su espacio original en el flujo, pero se puede desplazar visualmente con top/right/bottom/left." },
      { code: "top / right / bottom / left", desc: "Definen cuánto se desplaza el elemento desde su posición original. Solo funcionan si position no es static." },
    ],
    tip: "position: relative por sí solo no mueve nada: solo tiene efecto cuando lo combinas con top, right, bottom o left.",
    extra: "Aunque .mover se desplace visualmente, el espacio que ocupaba originalmente sigue reservado en el flujo — por eso puede solaparse con sus vecinos en vez de empujarlos.",
    commonError: "Esperar que top/left funcionen en un elemento con position: static (el valor por defecto): esas propiedades se ignoran por completo si no defines antes un position distinto de static.",
    nextStepText: "Ya sabes desplazar un elemento sin sacarlo del flujo. Ahora veamos cómo sacarlo por completo con position: absolute.",
    challenge: {
      description: "Cambia top y left de .mover por valores negativos y observa hacia dónde se mueve la caja.",
      code: {
        html: `<div class="caja">Caja normal</div>\n<div class="caja mover">Caja movida con relative</div>\n<div class="caja">Caja normal</div>\n`,
        css: `.caja {\n  padding: 16px;\n  margin-bottom: 8px;\n  background-color: #e0e7ff;\n  border: 2px solid #2563eb;\n}\n\n.mover {\n  position: relative;\n  top: 12px; /* prueba con un valor negativo */\n  left: 24px; /* prueba con un valor negativo */\n  background-color: #c7d2fe;\n}\n`,
      },
    },
  },
  {
    slug: "position-absolute",
    title: "Position: absolute",
    summary:
      "position: absolute saca a un elemento del flujo normal y lo posiciona respecto al ancestro posicionado más cercano — la base de badges, tooltips e íconos superpuestos.",
    playgroundCode: {
      html: `<div class="tarjeta">\n  <span class="badge">Nuevo</span>\n  <h3>Curso de CSS</h3>\n  <p>Aprende a posicionar elementos con precisión.</p>\n</div>\n`,
      css: `.tarjeta {\n  position: relative;\n  max-width: 280px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: #dc2626;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n`,
    },
    hint: "Quita position: relative de .tarjeta y observa cómo el badge salta a otra posición completamente distinta.",
    explanationIntro: "position: absolute saca al elemento del flujo normal y lo posiciona respecto a un punto de referencia:",
    explanationRows: [
      { code: "position: absolute", desc: "El elemento sale del flujo normal: deja de ocupar espacio y los demás elementos lo ignoran." },
      { code: "contenedor de posicionamiento", desc: "Un elemento absolute se posiciona respecto al ancestro más cercano que tenga position distinto de static (relative, absolute, fixed o sticky)." },
      { code: "sin ancestro posicionado", desc: "Si ningún ancestro tiene position definido, el elemento se posiciona respecto al <html> completo, lo que casi nunca es lo que quieres." },
    ],
    tip: "El patrón \"position: relative en el padre + position: absolute en el hijo\" es la base de casi cualquier badge, tooltip o ícono superpuesto en una interfaz real.",
    extra: "A diferencia de relative, un elemento absolute no deja ningún espacio vacío donde estaba: es como si lo levantaras del flujo y lo pegaras encima de la página.",
    commonError: "Usar position: absolute en un hijo sin darle position: relative (o similar) al padre: el elemento se posiciona respecto a toda la página en vez de quedarse dentro de la tarjeta.",
    nextStepText: "Ya sacas elementos del flujo con precisión. Para terminar, veamos elementos que siguen al usuario mientras hace scroll: fixed y sticky.",
    challenge: {
      description: "Mueve el badge a la esquina superior izquierda cambiando right por left.",
      code: {
        html: `<div class="tarjeta">\n  <span class="badge">Nuevo</span>\n  <h3>Curso de CSS</h3>\n  <p>Aprende a posicionar elementos con precisión.</p>\n</div>\n`,
        css: `.tarjeta {\n  position: relative;\n  max-width: 280px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.badge {\n  position: absolute;\n  top: -10px;\n  right: -10px; /* cambia esto por left: -10px */\n  background-color: #dc2626;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n`,
      },
    },
  },
  {
    slug: "fixed-sticky-y-z-index",
    title: "Fixed, sticky y z-index",
    summary:
      "position: fixed y sticky controlan qué pasa al hacer scroll, y z-index decide qué elemento queda encima cuando dos se superponen.",
    playgroundCode: {
      html: `<div class="scroll-area">\n  <div class="sticky-header">Sticky: se pega al hacer scroll aquí</div>\n  <p>Línea 1</p>\n  <p>Línea 2</p>\n  <p>Línea 3</p>\n  <p>Línea 4</p>\n  <p>Línea 5</p>\n  <p>Línea 6</p>\n</div>\n<div class="fixed-boton">Fixed: fijo en la pantalla</div>\n`,
      css: `.scroll-area {\n  height: 140px;\n  overflow-y: auto;\n  border: 2px solid #94a3b8;\n  padding: 8px 12px;\n  margin-bottom: 60px;\n}\n\n.sticky-header {\n  position: sticky;\n  top: 0;\n  background-color: #2563eb;\n  color: white;\n  padding: 6px 8px;\n  margin: -8px -12px 8px;\n  z-index: 1;\n}\n\n.fixed-boton {\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #dc2626;\n  color: white;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  z-index: 10;\n}\n`,
    },
    hint: "Haz scroll dentro del recuadro gris: el encabezado azul se queda pegado arriba, mientras el botón rojo se queda fijo en la esquina de toda la vista previa.",
    explanationIntro: "fixed y sticky son dos formas más de sacar (o casi sacar) un elemento del flujo normal, y z-index resuelve qué se ve encima cuando se superponen:",
    explanationRows: [
      { code: "position: fixed", desc: "El elemento se posiciona respecto a la ventana (viewport) y no se mueve nunca al hacer scroll, sin importar cuánto contenido haya." },
      { code: "position: sticky", desc: "Combina relative y fixed: se comporta como relative hasta que el scroll lo alcanza, y ahí se \"pega\" como fixed dentro de su contenedor." },
      { code: "z-index", desc: "Número que decide qué elemento queda encima cuando dos se superponen. Solo funciona en elementos con position distinto de static." },
    ],
    tip: "sticky es perfecto para encabezados de tabla o menús que deben quedarse visibles mientras el usuario lee una lista larga, sin bloquear toda la pantalla como fixed.",
    extra: "Un valor de z-index más alto no garantiza nada por sí solo si los elementos están en \"contextos de apilamiento\" distintos — un tema avanzado, pero para la mayoría de los casos alcanza con dar z-index solo a los elementos posicionados que realmente se superponen.",
    commonError: "Poner z-index en un elemento con position: static (el valor por defecto): z-index no tiene ningún efecto ahí, sin importar qué tan alto sea el número.",
    nextStepText: "Ya dominas position en sus cuatro variantes. Ahora toca darles personalidad con fondos y bordes.",
    challenge: {
      description: "Cambia bottom y right de .fixed-boton por top y left, y observa cómo el botón se mueve a la esquina opuesta.",
      code: {
        html: `<div class="scroll-area">\n  <div class="sticky-header">Sticky: se pega al hacer scroll aquí</div>\n  <p>Línea 1</p>\n  <p>Línea 2</p>\n  <p>Línea 3</p>\n  <p>Línea 4</p>\n  <p>Línea 5</p>\n  <p>Línea 6</p>\n</div>\n<div class="fixed-boton">Fixed: fijo en la pantalla</div>\n`,
        css: `.scroll-area {\n  height: 140px;\n  overflow-y: auto;\n  border: 2px solid #94a3b8;\n  padding: 8px 12px;\n  margin-bottom: 60px;\n}\n\n.sticky-header {\n  position: sticky;\n  top: 0;\n  background-color: #2563eb;\n  color: white;\n  padding: 6px 8px;\n  margin: -8px -12px 8px;\n  z-index: 1;\n}\n\n.fixed-boton {\n  position: fixed;\n  bottom: 16px; /* cambia por top: 16px */\n  right: 16px; /* cambia por left: 16px */\n  background-color: #dc2626;\n  color: white;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  z-index: 10;\n}\n`,
      },
    },
  },
];

const fondosYBordesLessons: RealLesson[] = [
  {
    slug: "fondos",
    title: "Fondos",
    summary: "background-color, background-image y sus propiedades relacionadas controlan el fondo visual de cualquier elemento.",
    playgroundCode: {
      html: `<div class="banner">Bienvenido a Código Real</div>\n`,
      css: `.banner {\n  height: 160px;\n  background-color: #1e293b;\n  background-image: linear-gradient(135deg, #2563eb, #7c3aed);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n`,
    },
    hint: "Cambia los dos colores del linear-gradient y observa cómo cambia la transición de color del fondo.",
    explanationIntro: "Estas propiedades controlan el fondo de un elemento:",
    explanationRows: [
      { code: "background-color", desc: "Define un color sólido de fondo." },
      { code: "background-image", desc: "Agrega una imagen o un gradiente como fondo del elemento." },
      { code: "linear-gradient()", desc: "Función que crea una transición suave entre dos o más colores, sin necesitar ninguna imagen." },
      { code: "background-size / -position", desc: "Controlan el tamaño y la posición de una imagen de fondo dentro del elemento." },
    ],
    tip: "Los gradientes con linear-gradient() son una forma ligera y flexible de dar fondos atractivos sin cargar imágenes pesadas.",
    extra: "Puedes combinar background-color y background-image en la misma regla: el color se ve mientras la imagen carga, o se asoma en los bordes si la imagen no cubre todo.",
    commonError: "Usar background-image con una ruta de archivo incorrecta: el elemento simplemente se queda sin fondo visible, sin ningún mensaje de error en pantalla.",
    nextStepText: "Con el fondo resuelto, sigue el otro gran protagonista visual: los bordes.",
    challenge: {
      description: "Cambia el ángulo del gradiente (135deg) por otro valor y observa cómo cambia la dirección del color.",
      code: {
        html: `<div class="banner">Bienvenido a Código Real</div>\n`,
        css: `.banner {\n  height: 160px;\n  background-color: #1e293b;\n  background-image: linear-gradient(135deg, #2563eb, #7c3aed); /* cambia el ángulo */\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n`,
      },
    },
  },
  {
    slug: "bordes",
    title: "Bordes",
    summary:
      "border define el contorno de un elemento, y border-radius le agrega esquinas redondeadas — la base de casi cualquier tarjeta o botón moderno.",
    playgroundCode: {
      html: `<div class="tarjeta">Tarjeta con bordes</div>\n<button class="boton">Botón redondeado</button>\n`,
      css: `.tarjeta {\n  border: 2px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n\n.boton {\n  border: none;\n  border-radius: 9999px;\n  padding: 10px 24px;\n  background-color: #2563eb;\n  color: white;\n}\n`,
    },
    hint: "Cambia border-radius del botón a 4px y observa cómo deja de verse como una píldora.",
    explanationIntro: "Estas propiedades controlan el borde de un elemento:",
    explanationRows: [
      { code: "border: 2px solid #color;", desc: "Forma abreviada: grosor, estilo (solid, dashed, dotted) y color, en ese orden." },
      { code: "border-width / -style / -color", desc: "Las mismas propiedades pero separadas, útil si necesitas cambiar solo una de ellas." },
      { code: "border-radius", desc: "Redondea las esquinas; con un valor muy alto (como 9999px) convierte cualquier caja en una píldora o círculo." },
    ],
    tip: "border-radius: 50% en un elemento cuadrado (mismo ancho y alto) lo convierte en un círculo perfecto.",
    extra: "border-radius acepta hasta 4 valores para redondear cada esquina de forma distinta, igual que margin y padding.",
    commonError: "Escribir border: solid 2px sin especificar color: el navegador usa el color del texto (currentColor) por defecto, lo que puede verse distinto a lo esperado.",
    nextStepText: "Ya tienes fondo y bordes. Para rematar la profundidad visual, veamos las sombras.",
    challenge: {
      description: "Agrega un div cuadrado de 60x60px con border-radius: 50% para crear un círculo.",
      code: {
        html: `<div class="tarjeta">Tarjeta con bordes</div>\n<button class="boton">Botón redondeado</button>\n<div class="circulo"></div>\n`,
        css: `.tarjeta {\n  border: 2px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n\n.boton {\n  border: none;\n  border-radius: 9999px;\n  padding: 10px 24px;\n  background-color: #2563eb;\n  color: white;\n}\n\n/* agrega aquí .circulo */\n`,
      },
    },
  },
  {
    slug: "sombras",
    title: "Sombras",
    summary: "box-shadow agrega profundidad a tus elementos, simulando que \"flotan\" sobre la página.",
    playgroundCode: {
      html: `<div class="tarjeta">Tarjeta con sombra</div>\n`,
      css: `.tarjeta {\n  padding: 24px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);\n}\n`,
    },
    hint: "Aumenta el valor de blur (el tercer número) y observa cómo la sombra se vuelve más suave y difusa.",
    explanationIntro: "box-shadow acepta varios valores en un orden específico:",
    explanationRows: [
      { code: "box-shadow: x y blur color;", desc: "Desplazamiento horizontal, vertical, difuminado y color de la sombra, en ese orden." },
      { code: "rgba(0,0,0,0.15)", desc: "Color con transparencia; las sombras casi siempre usan un color semi-transparente para verse naturales." },
      { code: "box-shadow: ... inset;", desc: "La palabra inset convierte la sombra externa en una sombra interna, hundida hacia adentro del elemento." },
    ],
    tip: "Sombras suaves y sutiles (blur alto, opacidad baja) suelen verse más profesionales que sombras duras y muy oscuras.",
    extra: "Puedes combinar varias sombras en una sola propiedad separándolas por comas, para crear efectos de profundidad más elaborados.",
    commonError: "Usar un color de sombra completamente opaco (sin transparencia): se ve como un bloque sólido pegado al elemento en vez de una sombra realista.",
    nextStepText: "Con fondos, bordes y sombras, tus elementos ya se ven bien de forma individual. Ahora aprenderás a organizarlos en el espacio con Flexbox.",
    challenge: {
      description: "Agrega una segunda tarjeta con una sombra usando inset para compararlas.",
      code: {
        html: `<div class="tarjeta">Tarjeta con sombra</div>\n<div class="tarjeta-inset">Tarjeta con sombra interna</div>\n`,
        css: `.tarjeta {\n  padding: 24px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);\n  margin-bottom: 12px;\n}\n\n/* agrega aquí .tarjeta-inset con box-shadow inset */\n`,
      },
    },
  },
];

const flexboxLessons: RealLesson[] = [
  {
    slug: "flex-container",
    title: "El contenedor flex",
    summary: "display: flex convierte un elemento en un contenedor flexible, donde sus hijos se acomodan automáticamente en fila o columna.",
    playgroundCode: {
      html: `<div class="contenedor">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n`,
      css: `.contenedor {\n  display: flex;\n  gap: 12px;\n  background-color: #f1f5f9;\n  padding: 16px;\n}\n\n.item {\n  background-color: #2563eb;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  flex: 1;\n}\n`,
    },
    hint: "Cambia flex-direction a column dentro de .contenedor y observa cómo los items pasan de fila a columna.",
    explanationIntro: "display: flex es el punto de partida de Flexbox:",
    explanationRows: [
      { code: "display: flex", desc: "Convierte al elemento en un \"flex container\"; sus hijos directos se vuelven \"flex items\"." },
      { code: "flex-direction", desc: "Define el eje principal: row (fila, por defecto) o column (columna)." },
      { code: "gap", desc: "Espacio uniforme entre los elementos flex, sin necesidad de margin manual." },
      { code: "flex: 1", desc: "Hace que un item crezca para repartirse el espacio disponible junto a sus hermanos." },
    ],
    tip: "Antes de Flexbox, centrar algo verticalmente en CSS era famoso por ser complicado. Con display: flex se resuelve en una línea.",
    extra: "Flexbox fue diseñado para layouts en una sola dimensión (fila O columna). Para layouts en dos dimensiones a la vez, existe Grid, que verás pronto.",
    commonError: "Aplicar propiedades de flex (como flex: 1 o align-items) a un elemento que no es hijo directo de un contenedor flex: esas propiedades no tienen ningún efecto ahí.",
    nextStepText: "Ya tienes tus elementos en fila. Ahora aprende a controlar exactamente cómo se alinean entre sí.",
    challenge: {
      description: "Agrega un cuarto item y dale flex: 2 para que ocupe el doble de espacio que los demás.",
      code: {
        html: `<div class="contenedor">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item grande">4</div>\n</div>\n`,
        css: `.contenedor {\n  display: flex;\n  gap: 12px;\n  background-color: #f1f5f9;\n  padding: 16px;\n}\n\n.item {\n  background-color: #2563eb;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  flex: 1;\n}\n\n/* agrega aquí .grande con flex: 2 */\n`,
      },
    },
  },
  {
    slug: "justify-y-align",
    title: "Justify-content y align-items",
    summary:
      "justify-content alinea los elementos a lo largo del eje principal; align-items los alinea en el eje cruzado. Juntas controlan toda la alineación de un contenedor flex.",
    playgroundCode: {
      html: `<div class="contenedor">\n  <div class="item">A</div>\n  <div class="item">B</div>\n</div>\n`,
      css: `.contenedor {\n  display: flex;\n  height: 160px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #f1f5f9;\n  padding: 16px;\n}\n\n.item {\n  background-color: #7c3aed;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n}\n`,
    },
    hint: "Cambia justify-content a center y observa cómo ambos items se agrupan en el centro en vez de separarse.",
    explanationIntro: "Flexbox tiene dos ejes de alineación, uno para cada propiedad:",
    explanationRows: [
      { code: "justify-content", desc: "Alinea en el eje principal: flex-start, center, flex-end, space-between, space-around." },
      { code: "align-items", desc: "Alinea en el eje cruzado (perpendicular): flex-start, center, flex-end, stretch." },
      { code: "space-between", desc: "Distribuye el espacio sobrante entre los elementos, dejando el primero y el último pegados a los bordes." },
    ],
    tip: "Para centrar algo perfectamente en ambos ejes, combina justify-content: center con align-items: center en el mismo contenedor flex.",
    extra: "Si cambias flex-direction a column, los ejes se invierten: justify-content pasa a controlar el eje vertical y align-items el horizontal.",
    commonError: "Confundir cuál propiedad controla qué eje: recuerda que \"justify\" siempre sigue la dirección principal (flex-direction), no siempre la horizontal.",
    nextStepText: "Con la alineación dominada, veamos qué pasa cuando los elementos no caben en una sola línea.",
    challenge: {
      description: "Cambia justify-content y align-items a distintos valores y observa cómo se mueven los items.",
      code: {
        html: `<div class="contenedor">\n  <div class="item">A</div>\n  <div class="item">B</div>\n</div>\n`,
        css: `.contenedor {\n  display: flex;\n  height: 160px;\n  justify-content: center; /* prueba otros valores */\n  align-items: flex-start; /* prueba otros valores */\n  background-color: #f1f5f9;\n  padding: 16px;\n}\n\n.item {\n  background-color: #7c3aed;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n}\n`,
      },
    },
  },
  {
    slug: "flex-wrap-y-gap",
    title: "Flex-wrap y gap",
    summary: "flex-wrap permite que los elementos pasen a una nueva línea cuando no caben, ideal para galerías y tarjetas responsivas.",
    playgroundCode: {
      html: `<div class="galeria">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n  <div class="tarjeta">4</div>\n  <div class="tarjeta">5</div>\n</div>\n`,
      css: `.galeria {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.tarjeta {\n  width: 120px;\n  height: 80px;\n  background-color: #16a34a;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n`,
    },
    hint: "Cambia flex-wrap: wrap por nowrap y observa cómo las tarjetas se aprietan en una sola línea.",
    explanationIntro: "flex-wrap decide qué pasa cuando los elementos ya no caben en una sola línea:",
    explanationRows: [
      { code: "flex-wrap: nowrap", desc: "Valor por defecto: todos los elementos se aprietan en una sola línea, aunque no quepan." },
      { code: "flex-wrap: wrap", desc: "Permite que los elementos salten a una nueva línea cuando ya no hay espacio horizontal." },
      { code: "gap", desc: "Define el espacio entre elementos, tanto en filas como en columnas cuando hay wrap activado." },
    ],
    tip: "flex-wrap: wrap junto con un ancho fijo por item (como width: 120px) es un patrón clásico para galerías de tarjetas responsivas sin usar media queries.",
    extra: "La combinación \"flex-direction: row; flex-wrap: wrap\" tiene un atajo: la propiedad flex-flow: row wrap hace lo mismo en una sola línea.",
    commonError: "Olvidar flex-wrap: wrap y luego intentar arreglar el desbordamiento con media queries complicadas, cuando una sola línea de CSS lo resuelve.",
    nextStepText: "Ya dominas Flexbox para una dimensión. Ahora conoce Grid, para diseñar en filas y columnas al mismo tiempo.",
    challenge: {
      description: "Agrega dos tarjetas más a la galería y observa cómo se acomodan automáticamente en nuevas líneas.",
      code: {
        html: `<div class="galeria">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n  <div class="tarjeta">4</div>\n  <div class="tarjeta">5</div>\n  <!-- agrega más tarjetas aquí -->\n</div>\n`,
        css: `.galeria {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.tarjeta {\n  width: 120px;\n  height: 80px;\n  background-color: #16a34a;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n`,
      },
    },
  },
];

const gridLessons: RealLesson[] = [
  {
    slug: "grid-container",
    title: "El contenedor grid",
    summary: "display: grid convierte un elemento en una cuadrícula bidimensional, donde defines filas y columnas de forma explícita.",
    playgroundCode: {
      html: `<div class="grid">\n  <div class="celda">1</div>\n  <div class="celda">2</div>\n  <div class="celda">3</div>\n  <div class="celda">4</div>\n</div>\n`,
      css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n\n.celda {\n  background-color: #0ea5e9;\n  color: white;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n}\n`,
    },
    hint: "Cambia repeat(2, 1fr) por repeat(4, 1fr) y observa cómo las 4 celdas pasan a estar en una sola fila.",
    explanationIntro: "display: grid es el punto de partida de CSS Grid:",
    explanationRows: [
      { code: "display: grid", desc: "Convierte al elemento en un \"grid container\"; sus hijos directos se acomodan en la cuadrícula." },
      { code: "grid-template-columns", desc: "Define cuántas columnas tiene la cuadrícula y el ancho de cada una." },
      { code: "1fr", desc: "Unidad \"fracción\": reparte el espacio disponible en partes iguales entre las columnas o filas." },
      { code: "repeat(2, 1fr)", desc: "Atajo para repetir un mismo valor varias veces, en este caso 2 columnas de 1fr cada una." },
    ],
    tip: "La unidad fr es exclusiva de Grid (y Flexbox con flex) y es la forma más simple de crear columnas de igual o proporcional tamaño.",
    extra: "Grid resuelve de forma nativa layouts que antes requerían floats o trucos con Flexbox, como cuadrículas de tarjetas perfectamente alineadas en filas y columnas.",
    commonError: "Olvidar que display: grid solo afecta a los hijos directos del contenedor: los nietos (hijos de los hijos) no forman parte de la cuadrícula automáticamente.",
    nextStepText: "Ya tienes tu primera cuadrícula. Profundicemos en cómo definir filas y columnas con más control.",
    challenge: {
      description: "Agrega una quinta celda y cambia grid-template-columns para que haya 3 columnas.",
      code: {
        html: `<div class="grid">\n  <div class="celda">1</div>\n  <div class="celda">2</div>\n  <div class="celda">3</div>\n  <div class="celda">4</div>\n  <div class="celda">5</div>\n</div>\n`,
        css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr); /* cambia a 3 columnas */\n  gap: 12px;\n}\n\n.celda {\n  background-color: #0ea5e9;\n  color: white;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n}\n`,
      },
    },
  },
  {
    slug: "filas-y-columnas",
    title: "Filas y columnas",
    summary: "grid-template-rows, grid-template-columns y grid-column/-row te dan control total sobre el tamaño y la posición de cada celda.",
    playgroundCode: {
      html: `<div class="grid">\n  <div class="destacado">Destacado</div>\n  <div class="celda">2</div>\n  <div class="celda">3</div>\n</div>\n`,
      css: `.grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  grid-template-rows: 100px;\n  gap: 12px;\n}\n\n.destacado {\n  background-color: #dc2626;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.celda {\n  background-color: #f97316;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n`,
    },
    hint: "Agrega grid-column: span 2 a .destacado y observa cómo ocupa el doble de ancho.",
    explanationIntro: "Estas propiedades controlan el tamaño y la posición exacta de filas y columnas:",
    explanationRows: [
      { code: "grid-template-columns: 2fr 1fr 1fr", desc: "Define 3 columnas donde la primera ocupa el doble de espacio que las otras dos." },
      { code: "grid-template-rows", desc: "Define la altura de cada fila de la cuadrícula." },
      { code: "grid-column: span 2", desc: "Hace que una celda ocupe 2 columnas en vez de 1, uniendo el espacio." },
      { code: "grid-row: span 2", desc: "Igual que grid-column, pero para que una celda ocupe varias filas de alto." },
    ],
    tip: "Puedes mezclar unidades fijas (px) y flexibles (fr) en la misma línea de grid-template-columns, como \"200px 1fr 1fr\".",
    extra: "grid-column también acepta números de línea directamente, como grid-column: 1 / 3, que es equivalente a span 2 empezando en la línea 1.",
    commonError: "Poner un valor de span mayor al número de columnas disponibles: la celda simplemente se ajusta al espacio que exista, dando resultados inesperados.",
    nextStepText: "Ya controlas tamaños y posiciones numéricas. Ahora veamos una forma aún más visual de organizar tu grid: las áreas nombradas.",
    challenge: {
      description: "Agrega grid-column: span 2 a la clase .destacado para que ocupe dos columnas.",
      code: {
        html: `<div class="grid">\n  <div class="destacado">Destacado</div>\n  <div class="celda">2</div>\n  <div class="celda">3</div>\n</div>\n`,
        css: `.grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  grid-template-rows: 100px;\n  gap: 12px;\n}\n\n.destacado {\n  background-color: #dc2626;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* agrega aquí grid-column: span 2 */\n}\n\n.celda {\n  background-color: #f97316;\n  color: white;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n`,
      },
    },
  },
  {
    slug: "areas-de-grid",
    title: "Áreas de grid",
    summary: "grid-template-areas te permite diseñar el layout completo de tu página dibujándolo casi literalmente con nombres, como un mapa.",
    playgroundCode: {
      html: `<div class="layout">\n  <header class="header">Header</header>\n  <nav class="nav">Nav</nav>\n  <main class="main">Main</main>\n  <footer class="footer">Footer</footer>\n</div>\n`,
      css: `.layout {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  grid-template-areas:\n    "header header"\n    "nav main"\n    "footer footer";\n  gap: 8px;\n}\n\n.header { grid-area: header; background: #1e293b; color: white; padding: 16px; }\n.nav { grid-area: nav; background: #334155; color: white; padding: 16px; }\n.main { grid-area: main; background: #f1f5f9; padding: 16px; }\n.footer { grid-area: footer; background: #1e293b; color: white; padding: 16px; }\n`,
    },
    hint: "Cambia el mapa de grid-template-areas para poner el nav debajo del main y observa cómo se reordena todo sin tocar el HTML.",
    explanationIntro: "grid-template-areas dibuja el layout completo con nombres:",
    explanationRows: [
      { code: "grid-template-areas", desc: "Define el layout completo como un mapa de nombres, fila por fila, entre comillas." },
      { code: "grid-area", desc: "Asigna a un elemento el nombre del área donde debe ubicarse, definido antes en grid-template-areas." },
      { code: '"."', desc: "Un punto en el mapa de áreas representa una celda vacía, sin ningún elemento asignado." },
    ],
    tip: "grid-template-areas es ideal para layouts de página completa (header, sidebar, main, footer) porque el CSS se lee casi como un dibujo del diseño.",
    extra: "Puedes cambiar por completo el orden visual del layout en una media query solo reescribiendo grid-template-areas, sin tocar el HTML ni mover ningún elemento.",
    commonError: "Que los nombres de área no formen un rectángulo perfecto en el mapa (por ejemplo, usar el mismo nombre en celdas que no son contiguas): CSS lo rechaza y el layout no funciona.",
    nextStepText: "Ya diseñas layouts completos con Grid. Ahora hagamos que esos layouts se adapten a cualquier pantalla con diseño responsive.",
    challenge: {
      description: "Reordena el mapa de grid-template-areas para poner el nav a la derecha del main en vez de a la izquierda.",
      code: {
        html: `<div class="layout">\n  <header class="header">Header</header>\n  <nav class="nav">Nav</nav>\n  <main class="main">Main</main>\n  <footer class="footer">Footer</footer>\n</div>\n`,
        css: `.layout {\n  display: grid;\n  grid-template-columns: 1fr 160px;\n  grid-template-areas:\n    "header header"\n    "nav main"\n    "footer footer";\n  gap: 8px;\n}\n\n.header { grid-area: header; background: #1e293b; color: white; padding: 16px; }\n.nav { grid-area: nav; background: #334155; color: white; padding: 16px; }\n.main { grid-area: main; background: #f1f5f9; padding: 16px; }\n.footer { grid-area: footer; background: #1e293b; color: white; padding: 16px; }\n`,
      },
    },
  },
];

const responsiveLessons: RealLesson[] = [
  {
    slug: "unidades-relativas",
    title: "Unidades relativas",
    summary: "px es una unidad fija; rem, em y % son relativas y se adaptan mejor a distintos tamaños de pantalla y preferencias del usuario.",
    playgroundCode: {
      html: `<div class="tarjeta">\n  <h2>Título</h2>\n  <p>Este texto usa unidades relativas para su tamaño y espaciado.</p>\n</div>\n`,
      css: `html {\n  font-size: 16px;\n}\n\n.tarjeta {\n  width: 80%;\n  max-width: 400px;\n  padding: 1.5rem;\n  margin: 0 auto;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.tarjeta h2 {\n  font-size: 1.5rem;\n}\n\n.tarjeta p {\n  font-size: 1em;\n}\n`,
    },
    hint: "Cambia html { font-size: 16px } por 20px y observa cómo crecen tanto el h2 como el padding, porque ambos usan rem.",
    explanationIntro: "Estas son las unidades de medida más usadas en CSS:",
    explanationRows: [
      { code: "px", desc: "Unidad fija en píxeles; no cambia aunque el usuario ajuste el tamaño de fuente de su navegador." },
      { code: "rem", desc: "Relativa al tamaño de fuente del elemento raíz (<html>); es la unidad más recomendada para tamaños de texto." },
      { code: "em", desc: "Relativa al tamaño de fuente del elemento padre; útil pero puede acumularse de forma confusa si se anida mucho." },
      { code: "%", desc: "Relativa al tamaño del elemento contenedor; muy usada para anchos flexibles." },
    ],
    tip: "Usar rem para tipografía respeta la configuración de accesibilidad del usuario: si alguien agranda el texto en su navegador, tu diseño responde correctamente.",
    extra: "Por defecto, la mayoría de los navegadores usan 16px como tamaño base de fuente, por eso 1rem equivale normalmente a 16px.",
    commonError: "Fijar todos los tamaños en px, incluida la tipografía: el diseño se vuelve rígido y no respeta la preferencia de tamaño de texto del usuario.",
    nextStepText: "Con unidades relativas ya tienes una base flexible. El siguiente paso es adaptar el diseño según el tamaño de la pantalla con media queries.",
    challenge: {
      description: "Cambia width: 80% por un valor fijo en px y observa qué tan menos flexible se vuelve la tarjeta.",
      code: {
        html: `<div class="tarjeta">\n  <h2>Título</h2>\n  <p>Este texto usa unidades relativas para su tamaño y espaciado.</p>\n</div>\n`,
        css: `html {\n  font-size: 16px;\n}\n\n.tarjeta {\n  width: 80%; /* prueba un valor fijo en px */\n  max-width: 400px;\n  padding: 1.5rem;\n  margin: 0 auto;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n\n.tarjeta h2 {\n  font-size: 1.5rem;\n}\n\n.tarjeta p {\n  font-size: 1em;\n}\n`,
      },
    },
  },
  {
    slug: "media-queries",
    title: "Media queries",
    summary:
      "@media te permite aplicar reglas CSS solo cuando se cumple una condición, como un ancho máximo de pantalla — la base del diseño responsive.",
    playgroundCode: {
      html: `<div class="contenedor">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n</div>\n`,
      css: `.contenedor {\n  display: flex;\n  gap: 12px;\n}\n\n.tarjeta {\n  flex: 1;\n  background-color: #2563eb;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 640px) {\n  .contenedor {\n    flex-direction: column;\n  }\n}\n`,
    },
    hint: "Abre este playground en una pestaña nueva y reduce el ancho de la ventana para ver cómo las tarjetas se apilan.",
    explanationIntro: "@media aplica un bloque de estilos solo bajo cierta condición:",
    explanationRows: [
      { code: "@media (max-width: 640px)", desc: "El bloque de estilos dentro solo se aplica cuando el ancho de la ventana es de 640px o menos." },
      { code: "@media (min-width: 1024px)", desc: "Lo opuesto: aplica los estilos solo en pantallas de 1024px de ancho o más." },
      { code: "flex-direction: column", desc: "Aquí se usa dentro del media query para apilar verticalmente las tarjetas en pantallas pequeñas." },
    ],
    tip: "Puedes probar tus media queries sin cambiar de dispositivo: en las DevTools del navegador, activa el modo de diseño responsive (ícono de móvil/tablet).",
    extra: "Puedes combinar varias condiciones en un mismo media query, como @media (min-width: 640px) and (max-width: 1024px), para apuntar a un rango específico de pantallas.",
    commonError: "Escribir estilos para pantallas grandes dentro de un media query pensado para pantallas chicas (o viceversa): siempre revisa si usaste min-width o max-width correctamente.",
    nextStepText: "Ya sabes adaptar estilos según el tamaño de pantalla. Ahora veamos el orden recomendado para escribir esas reglas: mobile-first.",
    challenge: {
      description: "Agrega un segundo media query que cambie el color de fondo de las tarjetas en pantallas grandes.",
      code: {
        html: `<div class="contenedor">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n</div>\n`,
        css: `.contenedor {\n  display: flex;\n  gap: 12px;\n}\n\n.tarjeta {\n  flex: 1;\n  background-color: #2563eb;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 640px) {\n  .contenedor {\n    flex-direction: column;\n  }\n}\n\n/* agrega aquí un @media (min-width: ...) */\n`,
      },
    },
  },
  {
    slug: "diseno-mobile-first",
    title: "Diseño mobile-first",
    summary:
      "Mobile-first significa escribir primero los estilos para pantallas pequeñas, y usar min-width para ir agregando complejidad en pantallas más grandes.",
    playgroundCode: {
      html: `<div class="tarjetas">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n</div>\n`,
      css: `.tarjetas {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.tarjeta {\n  background-color: #16a34a;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (min-width: 640px) {\n  .tarjetas {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .tarjetas {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n`,
    },
    hint: "Abre el resultado en una pestaña nueva y agranda la ventana poco a poco para ver cómo aparecen las columnas.",
    explanationIntro: "Mobile-first es una estrategia, no una propiedad nueva de CSS:",
    explanationRows: [
      { code: "mobile-first", desc: "Estrategia de diseño: los estilos base (sin media query) están pensados para el celular, la pantalla más pequeña y restrictiva." },
      { code: "min-width", desc: "Se usa para ir sumando estilos a medida que la pantalla crece, en vez de quitarlos con max-width." },
      { code: "grid-template-columns: 1fr", desc: "Una sola columna en móvil; se convierte en 2 o 3 columnas conforme la pantalla se agranda en los media queries." },
    ],
    tip: "Diseñar mobile-first suele resultar en CSS más simple y fácil de mantener, porque vas \"agregando\" complejidad en vez de \"quitándola\".",
    extra: "La mayoría del tráfico web actual llega desde dispositivos móviles, por eso diseñar pensando primero en pantallas pequeñas se volvió el estándar de la industria.",
    commonError: "Mezclar min-width y max-width sin un criterio claro en el mismo proyecto: termina generando reglas que se pisan entre sí y comportamientos difíciles de depurar.",
    nextStepText: "Con el diseño responsive resuelto, es momento de darle vida y movimiento a tu página con animaciones.",
    challenge: {
      description: "Agrega un tercer breakpoint en 1280px que muestre 4 columnas en pantallas muy grandes.",
      code: {
        html: `<div class="tarjetas">\n  <div class="tarjeta">1</div>\n  <div class="tarjeta">2</div>\n  <div class="tarjeta">3</div>\n  <div class="tarjeta">4</div>\n</div>\n`,
        css: `.tarjetas {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n.tarjeta {\n  background-color: #16a34a;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (min-width: 640px) {\n  .tarjetas {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .tarjetas {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n/* agrega aquí @media (min-width: 1280px) */\n`,
      },
    },
  },
];

const animacionesLessons: RealLesson[] = [
  {
    slug: "transiciones",
    title: "Transiciones",
    summary: "transition anima el cambio entre dos estados de una propiedad CSS, como al pasar el mouse sobre un botón.",
    playgroundCode: {
      html: `<button class="boton">Pasa el mouse aquí</button>\n`,
      css: `.boton {\n  background-color: #2563eb;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\n.boton:hover {\n  background-color: #1d4ed8;\n  transform: translateY(-2px);\n}\n`,
    },
    hint: "Cambia 0.3s por 2s en la propiedad transition y observa qué tan lenta se vuelve la animación.",
    explanationIntro: "transition necesita una propiedad, una duración y (opcionalmente) un estado que la dispare:",
    explanationRows: [
      { code: "transition: propiedad duración;", desc: "Define qué propiedad animar y cuánto tarda el cambio, en segundos." },
      { code: ":hover", desc: "Pseudo-clase que aplica un estilo mientras el mouse está sobre el elemento; combinada con transition, crea la animación." },
      { code: "ease, linear, ease-in-out", desc: "Funciones de tiempo: controlan si la animación acelera, desacelera o va a velocidad constante." },
    ],
    tip: "transition: all 0.3s ease anima cualquier propiedad que cambie, pero es más eficiente (y predecible) especificar solo las propiedades que realmente necesitas animar.",
    extra: "Las transiciones solo animan entre dos estados (por ejemplo, normal y :hover). Para animaciones más complejas con varios pasos, se usan @keyframes.",
    commonError: "Poner transition en el estado :hover en vez del estado normal del elemento: la animación solo funciona en un sentido (al entrar) pero no al salir.",
    nextStepText: "Ya animas cambios simples de estado. Ahora veamos transform, la propiedad detrás de casi todo movimiento en CSS.",
    challenge: {
      description: "Agrega box-shadow a la lista de propiedades animadas en transition y a :hover.",
      code: {
        html: `<button class="boton">Pasa el mouse aquí</button>\n`,
        css: `.boton {\n  background-color: #2563eb;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.3s ease; /* agrega box-shadow aquí */\n}\n\n.boton:hover {\n  background-color: #1d4ed8;\n  transform: translateY(-2px);\n  /* agrega box-shadow aquí también */\n}\n`,
      },
    },
  },
  {
    slug: "transform",
    title: "Transform",
    summary:
      "transform mueve, rota, escala o inclina un elemento sin afectar el flujo del resto de la página — la base de casi cualquier efecto visual moderno.",
    playgroundCode: {
      html: `<div class="caja">Transforma</div>\n`,
      css: `.caja {\n  width: 140px;\n  padding: 20px;\n  background-color: #7c3aed;\n  color: white;\n  text-align: center;\n  border-radius: 8px;\n  transition: transform 0.3s ease;\n}\n\n.caja:hover {\n  transform: scale(1.1) rotate(3deg);\n}\n`,
    },
    hint: "Cambia rotate(3deg) por rotate(15deg) y observa cuánto más gira la caja al pasar el mouse.",
    explanationIntro: "Estas son las funciones más comunes de transform:",
    explanationRows: [
      { code: "translate(x, y)", desc: "Mueve el elemento desde su posición original, sin afectar a los elementos vecinos." },
      { code: "scale(n)", desc: "Agranda o achica el elemento; 1 es tamaño normal, 1.1 es 10% más grande." },
      { code: "rotate(deg)", desc: "Rota el elemento un número de grados sobre su centro." },
      { code: "transform: a b;", desc: "Se pueden combinar varias transformaciones en la misma propiedad, separadas por espacios." },
    ],
    tip: "transform es una de las propiedades más eficientes para animar en el navegador (junto con opacity), porque no obliga a recalcular el layout de toda la página.",
    extra: "Puedes cambiar el punto desde el que se aplica una transformación (por defecto el centro) con la propiedad transform-origin.",
    commonError: "Esperar que transform: translate() cambie la posición de los elementos vecinos: transform es puramente visual y no afecta el flujo normal del documento.",
    nextStepText: "Ya mueves y transformas elementos en un solo paso. Para secuencias de varios pasos, usarás @keyframes.",
    challenge: {
      description: "Agrega translate(0, -4px) a la transformación del hover, combinado con scale y rotate.",
      code: {
        html: `<div class="caja">Transforma</div>\n`,
        css: `.caja {\n  width: 140px;\n  padding: 20px;\n  background-color: #7c3aed;\n  color: white;\n  text-align: center;\n  border-radius: 8px;\n  transition: transform 0.3s ease;\n}\n\n.caja:hover {\n  transform: scale(1.1) rotate(3deg); /* agrega translate aquí */\n}\n`,
      },
    },
  },
  {
    slug: "keyframes",
    title: "Keyframes",
    summary: "@keyframes define una animación con varios pasos intermedios, que luego se activa (y puede repetirse) con la propiedad animation.",
    playgroundCode: {
      html: `<div class="loader"></div>\n`,
      css: `.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: girar 1s linear infinite;\n}\n\n@keyframes girar {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n`,
    },
    hint: "Cambia 1s por 3s en la propiedad animation y observa cómo el giro se vuelve mucho más lento.",
    explanationIntro: "@keyframes y animation trabajan siempre en pareja:",
    explanationRows: [
      { code: "@keyframes nombre { }", desc: "Define los pasos de una animación con nombre propio, usando from/to o porcentajes (0%, 50%, 100%)." },
      { code: "animation: nombre duración timing repetición;", desc: "Aplica la animación definida a un elemento: qué animación, cuánto dura, cómo se acelera y cuántas veces se repite." },
      { code: "infinite", desc: "Hace que la animación se repita para siempre, muy usado en indicadores de carga (loaders o spinners)." },
    ],
    tip: "Usa porcentajes (0%, 50%, 100%) en vez de solo from/to cuando necesites más de dos pasos en tu animación.",
    extra: "El spinner de carga que ves en la esquina de esta página mientras cambias de lección usa exactamente esta misma técnica: @keyframes con rotate().",
    commonError: "Olvidar la duración en la propiedad animation (solo poner el nombre): sin una duración explícita en segundos, la animación no se ejecuta.",
    nextStepText: "Ya tienes todas las piezas de CSS: selectores, caja, layout, responsive y animación. Es momento de unirlas en un proyecto real.",
    challenge: {
      description: "Agrega un paso intermedio (50%) al @keyframes que cambie el color del borde superior.",
      code: {
        html: `<div class="loader"></div>\n`,
        css: `.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: girar 1s linear infinite;\n}\n\n@keyframes girar {\n  from {\n    transform: rotate(0deg);\n  }\n  /* agrega aquí un paso al 50% */\n  to {\n    transform: rotate(360deg);\n  }\n}\n`,
      },
    },
  },
];

const proyectoFinalLessons: RealLesson[] = [
  {
    slug: "planifica-tu-diseno",
    title: "Planifica tu diseño",
    summary:
      "Antes de escribir una sola línea de CSS para tu proyecto final, planifica: qué layout usarás, qué colores, qué tipografía y cómo se adaptará a móvil.",
    playgroundCode: {
      html: `<div class="wireframe">\n  <div class="bloque">Header</div>\n  <div class="bloque">Contenido principal</div>\n  <div class="bloque">Footer</div>\n</div>\n`,
      css: `.wireframe {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.bloque {\n  border: 2px dashed #94a3b8;\n  padding: 24px;\n  text-align: center;\n  color: #64748b;\n  font-family: system-ui, sans-serif;\n}\n`,
    },
    hint: "Agrega un cuarto bloque llamado \"Sidebar\" a tu wireframe antes de pasar a la siguiente lección.",
    explanationIntro: "Estos son los tres elementos clave que conviene decidir antes de escribir CSS de detalle:",
    explanationRows: [
      { code: "wireframe", desc: "Un boceto simple, sin diseño final, que solo marca dónde va cada bloque de contenido." },
      { code: "paleta de color", desc: "Define de 2 a 4 colores principales antes de empezar, para mantener consistencia visual en todo el proyecto." },
      { code: "breakpoints", desc: "Decide de antemano en qué anchos de pantalla cambiará tu layout (por ejemplo 640px y 1024px)." },
    ],
    tip: "Planificar 10 minutos antes de escribir CSS te ahorra horas de reescribir estilos a mitad del proyecto.",
    extra: "Muchos diseñadores empiezan con bloques como estos (bordes punteados, sin color) antes de aplicar cualquier tipografía o color final.",
    commonError: "Empezar a escribir CSS detallado (colores, sombras, tipografías) antes de tener claro el layout general: termina reescribiendo mucho trabajo cuando el layout cambia.",
    nextStepText: "Con el plan claro, empecemos a construir el estilo real de tu proyecto.",
    challenge: {
      description: "Agrega un bloque de \"Sidebar\" a tu wireframe y decide en qué parte del layout debería ir.",
      code: {
        html: `<div class="wireframe">\n  <div class="bloque">Header</div>\n  <div class="bloque">Contenido principal</div>\n  <!-- agrega aquí el bloque de Sidebar -->\n  <div class="bloque">Footer</div>\n</div>\n`,
        css: `.wireframe {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.bloque {\n  border: 2px dashed #94a3b8;\n  padding: 24px;\n  text-align: center;\n  color: #64748b;\n  font-family: system-ui, sans-serif;\n}\n`,
      },
    },
  },
  {
    slug: "construye-tu-estilo",
    title: "Construye tu estilo",
    summary:
      "Aplica todo lo aprendido — caja, flexbox, colores, tipografía y transiciones — para construir la interfaz completa de tu proyecto final.",
    playgroundCode: {
      html: `<div class="tarjeta-perfil">\n  <div class="avatar"></div>\n  <h2>Ana Torres</h2>\n  <p>Desarrolladora frontend apasionada por el buen diseño.</p>\n  <button class="boton">Ver perfil</button>\n</div>\n`,
      css: `.tarjeta-perfil {\n  max-width: 280px;\n  margin: 0 auto;\n  padding: 24px;\n  border-radius: 16px;\n  background-color: white;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);\n  text-align: center;\n  font-family: system-ui, sans-serif;\n}\n\n.avatar {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #2563eb, #7c3aed);\n  margin: 0 auto 16px;\n}\n\n.tarjeta-perfil h2 {\n  margin: 0 0 8px;\n  color: #1e293b;\n}\n\n.tarjeta-perfil p {\n  color: #64748b;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.boton {\n  margin-top: 16px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #2563eb;\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.boton:hover {\n  background-color: #1d4ed8;\n}\n`,
    },
    hint: "Cambia el gradiente del avatar y el color del botón para hacer tu propia versión de la tarjeta.",
    explanationIntro: "Esta tarjeta combina varias técnicas que ya conoces:",
    explanationRows: [
      { code: "box-shadow + border-radius", desc: "La combinación clásica para tarjetas modernas: esquinas suaves y una sombra ligera que las despega del fondo." },
      { code: "margin: 0 auto", desc: "Centra la tarjeta horizontalmente dentro de su contenedor." },
      { code: "transition + :hover", desc: "Da feedback visual inmediato al usuario cuando pasa el mouse sobre el botón." },
    ],
    tip: "Construye por capas: primero el layout general, luego el espaciado, después colores y tipografía, y al final los detalles como sombras y transiciones.",
    extra: "Esta misma estructura de tarjeta (avatar + título + descripción + botón) es uno de los componentes más reutilizados en interfaces reales, desde redes sociales hasta tiendas en línea.",
    commonError: "Intentar perfeccionar cada detalle (sombra exacta, animación) antes de tener el layout general funcionando: avanza primero en estructura, pule los detalles al final.",
    nextStepText: "Tu proyecto ya tiene forma y estilo. El último paso es publicarlo para que cualquiera pueda verlo.",
    challenge: {
      description: "Cambia los colores del avatar y del botón para crear tu propia versión de la tarjeta de perfil.",
      code: {
        html: `<div class="tarjeta-perfil">\n  <div class="avatar"></div>\n  <h2>Tu nombre</h2>\n  <p>Escribe aquí tu propia descripción.</p>\n  <button class="boton">Ver perfil</button>\n</div>\n`,
        css: `.tarjeta-perfil {\n  max-width: 280px;\n  margin: 0 auto;\n  padding: 24px;\n  border-radius: 16px;\n  background-color: white;\n  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);\n  text-align: center;\n  font-family: system-ui, sans-serif;\n}\n\n.avatar {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #2563eb, #7c3aed); /* cambia estos colores */\n  margin: 0 auto 16px;\n}\n\n.tarjeta-perfil h2 {\n  margin: 0 0 8px;\n  color: #1e293b;\n}\n\n.tarjeta-perfil p {\n  color: #64748b;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.boton {\n  margin-top: 16px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #2563eb; /* cambia este color */\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.boton:hover {\n  background-color: #1d4ed8;\n}\n`,
      },
    },
  },
  {
    slug: "publica-tu-trabajo",
    title: "Publica tu trabajo",
    summary:
      "Un proyecto de CSS no está completo hasta que alguien más puede verlo. Aquí revisamos las opciones más simples para publicar tu página gratis.",
    playgroundCode: {
      html: `<div class="resumen">\n  <h2>Proyecto listo para publicar</h2>\n  <ul>\n    <li>HTML validado y sin errores</li>\n    <li>CSS organizado y sin estilos sueltos</li>\n    <li>Probado en pantallas grandes y pequeñas</li>\n  </ul>\n</div>\n`,
      css: `.resumen {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 24px;\n  border-radius: 12px;\n  background-color: #ecfdf5;\n  border: 1px solid #6ee7b7;\n  font-family: system-ui, sans-serif;\n}\n\n.resumen h2 {\n  color: #065f46;\n  font-size: 1.1rem;\n}\n\n.resumen ul {\n  margin: 12px 0 0;\n  padding-left: 20px;\n  color: #047857;\n  line-height: 1.6;\n}\n`,
    },
    hint: "Agrega un cuarto punto a tu propia lista de verificación antes de publicar cualquier proyecto.",
    explanationIntro: "Estas son las formas más simples y gratuitas de publicar un sitio estático:",
    explanationRows: [
      { code: "GitHub Pages", desc: "Servicio gratuito para publicar sitios estáticos (HTML/CSS/JS) directamente desde un repositorio de GitHub." },
      { code: "Netlify / Vercel", desc: "Plataformas gratuitas que publican tu sitio arrastrando una carpeta o conectando un repositorio, sin configurar ningún servidor." },
      { code: "checklist final", desc: "Antes de publicar: revisa que no queden estilos sin usar, que el sitio se vea bien en móvil, y que no haya enlaces o imágenes rotas." },
    ],
    tip: "Publicar pronto (aunque sea una versión simple) es mejor que esperar la perfección: siempre puedes seguir mejorando tu CSS después con el sitio ya en línea.",
    extra: "Muchos desarrolladores mantienen un \"portafolio en vivo\" publicado con estos mismos servicios gratuitos, actualizándolo cada vez que aprenden algo nuevo.",
    commonError: "Olvidar probar el sitio publicado en un dispositivo real después de subirlo: algo que se veía bien en tu editor a veces se comporta distinto una vez en línea.",
    nextStepText: "¡Felicidades! Completaste el curso de CSS. Ya puedes combinar estructura (HTML) y estilo (CSS) para construir interfaces reales.",
    challenge: {
      description: "Agrega tu propio cuarto punto a la lista antes de considerar un proyecto listo para publicar.",
      code: {
        html: `<div class="resumen">\n  <h2>Proyecto listo para publicar</h2>\n  <ul>\n    <li>HTML validado y sin errores</li>\n    <li>CSS organizado y sin estilos sueltos</li>\n    <li>Probado en pantallas grandes y pequeñas</li>\n    <!-- agrega aquí tu propio punto -->\n  </ul>\n</div>\n`,
        css: `.resumen {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 24px;\n  border-radius: 12px;\n  background-color: #ecfdf5;\n  border: 1px solid #6ee7b7;\n  font-family: system-ui, sans-serif;\n}\n\n.resumen h2 {\n  color: #065f46;\n  font-size: 1.1rem;\n}\n\n.resumen ul {\n  margin: 12px 0 0;\n  padding-left: 20px;\n  color: #047857;\n  line-height: 1.6;\n}\n`,
      },
    },
  },
];

export const cssModules: CourseModule[] = [
  {
    slug: "introduccion-a-css",
    title: "Introducción a CSS",
    hasContent: true,
    lessons: introduccionLessons,
  },
  {
    slug: "selectores",
    title: "Selectores",
    hasContent: true,
    lessons: selectoresLessons,
  },
  {
    slug: "colores-y-texto",
    title: "Colores y texto",
    hasContent: true,
    lessons: coloresYTextoLessons,
  },
  {
    slug: "caja-y-espaciado",
    title: "Caja y espaciado",
    hasContent: true,
    lessons: cajaYEspaciadoLessons,
  },
  {
    slug: "posicionamiento",
    title: "Posicionamiento",
    hasContent: true,
    lessons: posicionamientoLessons,
  },
  {
    slug: "fondos-y-bordes",
    title: "Fondos y bordes",
    hasContent: true,
    lessons: fondosYBordesLessons,
  },
  {
    slug: "flexbox",
    title: "Flexbox",
    hasContent: true,
    lessons: flexboxLessons,
  },
  {
    slug: "grid",
    title: "Grid",
    hasContent: true,
    lessons: gridLessons,
  },
  {
    slug: "responsive",
    title: "Responsive",
    hasContent: true,
    lessons: responsiveLessons,
  },
  {
    slug: "animaciones",
    title: "Animaciones",
    hasContent: true,
    lessons: animacionesLessons,
  },
  {
    slug: "proyecto-final",
    title: "Proyecto final",
    hasContent: true,
    lessons: proyectoFinalLessons,
  },
];

export function getCssLessonBySlug(moduleSlug: string, lessonSlug: string) {
  const moduleIndex = cssModules.findIndex((m) => m.slug === moduleSlug && m.hasContent);
  if (moduleIndex === -1) return null;
  const module = cssModules[moduleIndex];
  const lessons = module.lessons as RealLesson[];
  const index = lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;

  const prevModule = cssModules
    .slice(0, moduleIndex)
    .reverse()
    .find((m) => m.hasContent);
  const nextModule = cssModules.slice(moduleIndex + 1).find((m) => m.hasContent);

  const prevLesson: AdjacentLesson | null =
    index > 0
      ? { ...lessons[index - 1], moduleSlug: module.slug }
      : prevModule
        ? { ...(prevModule.lessons as RealLesson[]).at(-1)!, moduleSlug: prevModule.slug }
        : null;

  const nextLesson: AdjacentLesson | null =
    index < lessons.length - 1
      ? { ...lessons[index + 1], moduleSlug: module.slug }
      : nextModule
        ? { ...(nextModule.lessons as RealLesson[])[0], moduleSlug: nextModule.slug }
        : null;

  return { module, lesson: lessons[index], prevLesson, nextLesson };
}

export function getAllCssLessonParams() {
  return cssModules
    .filter((m) => m.hasContent)
    .flatMap((m) => (m.lessons as RealLesson[]).map((l) => ({ module: m.slug, lesson: l.slug })));
}
