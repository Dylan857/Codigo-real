import type { RealLesson, LessonStub, CourseModule, AdjacentLesson } from "./course-types";

export type { RealLesson, LessonStub, CourseModule, AdjacentLesson };

export const JS_MODULE_COUNT = 12;

export const FIRST_JS_LESSON_PATH = "/js/introduccion-a-javascript/que-es-javascript";

const introduccionLessons: RealLesson[] = [
  {
    slug: "que-es-javascript",
    title: "¿Qué es JavaScript?",
    summary:
      "JavaScript es el lenguaje que le da comportamiento a la web: reacciona a clics, valida formularios y actualiza la página sin recargarla. Aquí lo ves trabajando junto a HTML y CSS.",
    playgroundCode: {
      html: `<div class="tarjeta">\n  <h1>Código Real</h1>\n  <p>HTML da la estructura, CSS el estilo... ¿y JavaScript?</p>\n  <button id="boton">Descúbrelo</button>\n</div>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  background-color: #0f172a;\n  color: white;\n  display: flex;\n  justify-content: center;\n  padding: 60px 20px;\n}\n\n.tarjeta {\n  text-align: center;\n  max-width: 320px;\n}\n\nbutton {\n  margin-top: 16px;\n  padding: 10px 22px;\n  border: none;\n  border-radius: 8px;\n  background-color: #eab308;\n  color: #1e293b;\n  font-weight: 700;\n  cursor: pointer;\n}\n`,
      js: `// JavaScript agrega comportamiento a la página\ndocument.getElementById("boton").addEventListener("click", function () {\n  alert("¡JavaScript es el comportamiento!");\n});\n`,
    },
    hint: "Cambia el texto dentro del alert() y vuelve a hacer clic en el botón para ver tu propio mensaje.",
    explanationIntro: "HTML, CSS y JavaScript trabajan juntos, pero cada uno tiene un trabajo distinto:",
    explanationRows: [
      { code: "HTML", desc: "Define la estructura y el contenido: qué elementos existen en la página (el botón, el título, el párrafo)." },
      { code: "CSS", desc: "Define la apariencia: colores, tamaños, espaciados." },
      { code: "JavaScript", desc: "Define el comportamiento: qué pasa cuando el usuario interactúa, como hacer clic en el botón." },
      { code: "addEventListener", desc: 'Método que le dice a un elemento que "escuche" un evento (como un clic) y ejecute una función cuando ocurre.' },
    ],
    tip: "Si HTML es el esqueleto y CSS la ropa, JavaScript son los músculos: lo que hace que la página realmente se mueva y reaccione.",
    extra: "JavaScript es el único de los tres lenguajes que corre directamente en el navegador de cada usuario, sin necesidad de instalar nada ni compilar código.",
    commonError: "Escribir el <script> o vincular el archivo .js antes de que exista el elemento que busca (como el botón): document.getElementById devuelve null y el código lanza un error. Por eso el JS de un proyecto casi siempre se coloca al final del body.",
    nextStepText: "Ya entiendes qué rol cumple JavaScript. Ahora veamos de dónde viene y en cuántos lugares se usa hoy.",
    challenge: {
      description: "Cambia el mensaje del alert() y agrega un console.log() dentro de la misma función.",
      code: {
        html: `<div class="tarjeta">\n  <h1>Código Real</h1>\n  <p>HTML da la estructura, CSS el estilo... ¿y JavaScript?</p>\n  <button id="boton">Descúbrelo</button>\n</div>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  background-color: #0f172a;\n  color: white;\n  display: flex;\n  justify-content: center;\n  padding: 60px 20px;\n}\n\n.tarjeta {\n  text-align: center;\n  max-width: 320px;\n}\n\nbutton {\n  margin-top: 16px;\n  padding: 10px 22px;\n  border: none;\n  border-radius: 8px;\n  background-color: #eab308;\n  color: #1e293b;\n  font-weight: 700;\n  cursor: pointer;\n}\n`,
        js: `// JavaScript agrega comportamiento a la página\ndocument.getElementById("boton").addEventListener("click", function () {\n  alert("¡JavaScript es el comportamiento!"); /* cambia este mensaje */\n  // agrega aquí un console.log()\n});\n`,
      },
    },
  },
  {
    slug: "historia-y-usos",
    title: "Historia y usos",
    summary:
      "JavaScript nació en 1995 para darle vida a páginas estáticas, y hoy se usa en el navegador, en servidores, en apps móviles y hasta en aplicaciones de escritorio.",
    playgroundCode: {
      html: `<h1>JavaScript hoy</h1>\n<p id="info">Cargando información...</p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 480px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n#info {\n  color: #475569;\n  line-height: 1.6;\n}\n`,
      js: `console.log("JavaScript se creó en 1995 en 10 días.");\n\ndocument.getElementById("info").textContent =\n  "Hoy se usa en el navegador (frontend), en servidores con Node.js (backend), en apps móviles y de escritorio.";\n`,
    },
    hint: "Abre la consola (F12) para ver el dato histórico del console.log(), además del texto que cambia en la página.",
    explanationIntro: "Algunos datos clave sobre el lenguaje que vas a aprender:",
    explanationRows: [
      { code: "1995", desc: "Año en que Brendan Eich creó JavaScript en Netscape, originalmente en solo 10 días." },
      { code: "Frontend", desc: "Uso original y más común: JavaScript corre en el navegador y controla la interactividad de una página." },
      { code: "Node.js", desc: "Entorno que permite ejecutar JavaScript fuera del navegador, por ejemplo en un servidor." },
      { code: "textContent", desc: "Propiedad que cambia el texto visible de un elemento del HTML desde JavaScript." },
    ],
    tip: "No necesitas saber toda la historia de memoria: lo importante es entender que JavaScript dejó de ser \"solo del navegador\" hace años.",
    extra: "A pesar del nombre parecido, JavaScript no tiene relación directa con el lenguaje Java: el nombre fue una decisión de marketing de la época.",
    commonError: "Confundir JavaScript con Java, pensando que uno es una versión simplificada del otro: son lenguajes completamente distintos, con sintaxis y propósitos diferentes.",
    nextStepText: "Ya conoces el contexto de JavaScript. Es momento de escribir tu primer script de verdad.",
    challenge: {
      description: "Agrega un segundo console.log() con tu propio dato curioso sobre JavaScript.",
      code: {
        html: `<h1>JavaScript hoy</h1>\n<p id="info">Cargando información...</p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 480px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n#info {\n  color: #475569;\n  line-height: 1.6;\n}\n`,
        js: `console.log("JavaScript se creó en 1995 en 10 días.");\n// agrega aquí un segundo console.log()\n\ndocument.getElementById("info").textContent =\n  "Hoy se usa en el navegador (frontend), en servidores con Node.js (backend), en apps móviles y de escritorio.";\n`,
      },
    },
  },
  {
    slug: "tu-primer-script",
    title: "Tu primer script",
    summary:
      "En esta lección escribirás tu primer código en JavaScript. Verás cómo mostrar un mensaje en pantalla y comenzarás a entender cómo se ejecuta el código en el navegador.",
    playgroundCode: {
      html: `<h1>Aprendiendo JavaScript</h1>\n<p>Este es mi primer programa.</p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n  color: #1e293b;\n}\n`,
      js: `// Mi primer script en JavaScript\nalert("¡Hola, Código Real!");\n\nconsole.log("Este mensaje aparece en la consola.");\n\ndocument.write("<h2>Escrito desde JavaScript</h2>");\ndocument.write("<p>document.write agrega contenido directo a la página.</p>");\n`,
    },
    hint: "Abre la consola del navegador (F12) para ver el mensaje de console.log, además del alert y el texto agregado con document.write.",
    explanationIntro: 'Estas son las formas más básicas de "mostrar algo" en JavaScript:',
    explanationRows: [
      { code: "// comentario", desc: "Una línea que el navegador ignora por completo; solo sirve para explicar el código a otras personas (o a ti mismo)." },
      { code: 'alert("...")', desc: "Muestra un mensaje en una ventana emergente que detiene la página hasta que el usuario la cierra." },
      { code: 'console.log("...")', desc: "Escribe un mensaje en la consola del navegador (F12), sin interrumpir al usuario. Es la herramienta que más vas a usar para revisar tu código." },
      { code: 'document.write("...")', desc: "Escribe HTML directamente en la página mientras esta se está cargando." },
    ],
    tip: "console.log() es la herramienta más usada por cualquier programador de JavaScript: te acompañará todos los días para revisar qué está pasando en tu código.",
    extra: "document.write() es útil para aprender, pero casi no se usa en proyectos reales: si se llama después de que la página terminó de cargar, puede borrar todo el contenido existente. Más adelante verás formas más seguras de modificar el HTML.",
    commonError: 'Olvidar las comillas alrededor de un texto (alert(Hola) en vez de alert("Hola")): JavaScript intenta interpretar Hola como una variable que no existe, y el código lanza un error.',
    nextStepText: "Ya ejecutaste tu primer script. Ahora entendamos exactamente cómo y cuándo el navegador ejecuta tu código.",
    challenge: {
      description: "Modifica el mensaje del alert() y agrega un segundo document.write() con tu propio texto.",
      code: {
        html: `<h1>Aprendiendo JavaScript</h1>\n<p>Este es mi primer programa.</p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n  color: #1e293b;\n}\n`,
        js: `// Mi primer script en JavaScript\nalert("¡Hola, Código Real!"); /* cambia este mensaje */\n\nconsole.log("Este mensaje aparece en la consola.");\n\ndocument.write("<h2>Escrito desde JavaScript</h2>");\ndocument.write("<p>document.write agrega contenido directo a la página.</p>");\n// agrega aquí otro document.write()\n`,
      },
    },
  },
  {
    slug: "como-funciona-en-el-navegador",
    title: "Cómo funciona en el navegador",
    summary:
      "El navegador ejecuta JavaScript de arriba hacia abajo, línea por línea, en el momento en que encuentra el <script>. Entender este orden te evita muchos errores comunes.",
    playgroundCode: {
      html: `<h1>Orden de ejecución</h1>\n<p id="estado">Esperando...</p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#estado {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `console.log("1. El navegador empieza a leer el script.");\n\ndocument.getElementById("estado").textContent = "2. El script actualizó esta línea.";\n\nconsole.log("3. El script terminó de ejecutarse.");\n`,
    },
    hint: "Abre la consola (F12) y observa el orden exacto en el que aparecen los tres mensajes: 1, 2 y 3, de arriba hacia abajo.",
    explanationIntro: "El navegador ejecuta JavaScript siguiendo reglas simples:",
    explanationRows: [
      { code: "orden secuencial", desc: "El código se ejecuta línea por línea, de arriba hacia abajo, en el orden en que está escrito." },
      { code: "<script> en el HTML", desc: "El navegador ejecuta el script en el momento exacto en que lo encuentra mientras lee la página." },
      { code: "elemento aún no existe", desc: "Si el script busca un elemento (con getElementById, por ejemplo) antes de que el HTML lo haya cargado, no lo va a encontrar." },
    ],
    tip: "En este playground el HTML ya está cargado antes de que corra tu JavaScript, pero en un proyecto real esto depende de dónde coloques la etiqueta <script>: casi siempre va justo antes de cerrar </body>.",
    extra: "Este orden secuencial y predecible es una de las primeras cosas que distingue a un principiante de alguien con experiencia: saber exactamente qué existe (y qué no) en cada línea de tu código.",
    commonError: "Esperar que JavaScript espere \"automáticamente\" a que algo termine antes de seguir: por defecto, el navegador no espera nada, simplemente sigue leyendo la siguiente línea de inmediato.",
    nextStepText: "Ya entiendes cómo se ejecuta tu código paso a paso. Con esta base, en el siguiente módulo aprenderás a guardar información con variables.",
    challenge: {
      description: "Agrega un cuarto console.log() al final y comprueba que aparece después de los otros tres.",
      code: {
        html: `<h1>Orden de ejecución</h1>\n<p id="estado">Esperando...</p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#estado {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `console.log("1. El navegador empieza a leer el script.");\n\ndocument.getElementById("estado").textContent = "2. El script actualizó esta línea.";\n\nconsole.log("3. El script terminó de ejecutarse.");\n// agrega aquí un cuarto console.log()\n`,
      },
    },
  },
];

const variablesLessons: RealLesson[] = [
  {
    slug: "declarar-variables",
    title: "Declarar variables: let, const y var",
    summary:
      "Una variable es un espacio con nombre donde guardas un valor. JavaScript te da tres formas de declararlas: let, const y var — cada una con reglas distintas.",
    playgroundCode: {
      html: `<h1>Perfil de usuario</h1>\n<p id="salida">Cargando...</p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #1e293b;\n}\n`,
      js: `let nombre = "Ana";\nconst edad = 28;\nvar activo = true;\n\nnombre = "Ana Torres"; // let permite reasignar\n// edad = 29; // esto lanzaría un error: const no se puede reasignar\n\ndocument.getElementById("salida").textContent =\n  \`\${nombre} tiene \${edad} años y está \${activo ? "activa" : "inactiva"}.\`;\n\nconsole.log(nombre, edad, activo);\n`,
    },
    hint: "Quita el comentario de la línea edad = 29 y observa el error en la consola: no se puede reasignar una const.",
    explanationIntro: "JavaScript tiene tres palabras clave para declarar variables:",
    explanationRows: [
      { code: "let", desc: "Declara una variable que se puede reasignar más adelante. Úsala cuando el valor va a cambiar." },
      { code: "const", desc: "Declara una variable que NO se puede reasignar. Es la opción recomendada por defecto para casi todo." },
      { code: "var", desc: "La forma más antigua de declarar variables. Se evita en código moderno porque tiene reglas de alcance más confusas que let y const." },
      { code: "`${variable}`", desc: "Template literal: permite insertar variables dentro de un texto usando comillas invertidas (`) y ${}." },
    ],
    tip: "Regla práctica: usa const por defecto, cambia a let solo si sabes que el valor necesita cambiar, y evita var en código nuevo.",
    extra: "let y const se agregaron a JavaScript en 2015 (ES6) específicamente para resolver problemas de var relacionados con su alcance poco predecible dentro de bloques {}.",
    commonError: "Intentar reasignar una const (por ejemplo, edad = 29): JavaScript lanza \"TypeError: Assignment to constant variable\" y detiene la ejecución del script.",
    nextStepText: "Ya sabes declarar variables. Ahora veamos qué tipos de valores puedes guardar dentro de ellas.",
    challenge: {
      description: "Cambia el valor de nombre después de declararlo y agrega una nueva variable con let para el país del usuario.",
      code: {
        html: `<h1>Perfil de usuario</h1>\n<p id="salida">Cargando...</p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #1e293b;\n}\n`,
        js: `let nombre = "Ana";\nconst edad = 28;\nvar activo = true;\n// agrega aquí let pais = "...";\n\nnombre = "Ana Torres"; /* cambia este valor */\n\ndocument.getElementById("salida").textContent =\n  \`\${nombre} tiene \${edad} años y está \${activo ? "activa" : "inactiva"}.\`;\n\nconsole.log(nombre, edad, activo);\n`,
      },
    },
  },
  {
    slug: "tipos-de-datos-primitivos",
    title: "Tipos de datos primitivos",
    summary:
      "Cada valor en JavaScript tiene un tipo: texto, número, verdadero/falso, y algunos casos especiales para representar la ausencia de valor.",
    playgroundCode: {
      html: `<h1>Tipos de datos</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  color: #475569;\n}\n`,
      js: `const texto = "Código Real";\nconst numero = 2026;\nconst esVerdadero = true;\nlet sinValor;\nconst vacioIntencional = null;\n\nconsole.log(typeof texto);\nconsole.log(typeof numero);\nconsole.log(typeof esVerdadero);\nconsole.log(typeof sinValor);\nconsole.log(typeof vacioIntencional);\n\ndocument.getElementById("salida").textContent =\n  \`\${texto} - \${numero} - \${esVerdadero}\`;\n`,
    },
    hint: "Abre la consola (F12) y compara los 5 resultados de typeof: fíjate en qué devuelve para sinValor y para vacioIntencional.",
    explanationIntro: "Estos son los tipos de datos primitivos más comunes en JavaScript:",
    explanationRows: [
      { code: "string", desc: 'Texto, siempre entre comillas: "Código Real".' },
      { code: "number", desc: "Cualquier número, sin distinguir entre enteros y decimales: 2026, 3.14, -5." },
      { code: "boolean", desc: "Solo puede valer true o false." },
      { code: "undefined", desc: "Valor automático de una variable que se declaró pero nunca se le asignó nada." },
      { code: "null", desc: 'Representa la ausencia de valor, pero asignada a propósito por quien escribió el código.' },
      { code: "typeof valor", desc: "Operador que devuelve, como texto, el tipo de dato de cualquier valor." },
    ],
    tip: "En JavaScript no declaras el tipo de una variable: la misma variable declarada con let puede guardar un texto y más adelante un número.",
    extra: 'Dato curioso: typeof null devuelve "object" en vez de "null". Es un error histórico del lenguaje de 1995 que nunca se corrigió, por compatibilidad con código antiguo.',
    commonError: "Confundir undefined con null: undefined significa que nadie asignó ningún valor todavía; null significa que alguien asignó \"ningún valor\" de forma intencional.",
    nextStepText: "Ya conoces los tipos de datos primitivos. Ahora veamos cómo convertir un valor de un tipo a otro.",
    challenge: {
      description: "Agrega una nueva variable de tipo string y comprueba con typeof que efectivamente lo es.",
      code: {
        html: `<h1>Tipos de datos</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  color: #475569;\n}\n`,
        js: `const texto = "Código Real";\nconst numero = 2026;\nconst esVerdadero = true;\nlet sinValor;\nconst vacioIntencional = null;\n// agrega aquí tu propia variable string\n\nconsole.log(typeof texto);\nconsole.log(typeof numero);\nconsole.log(typeof esVerdadero);\nconsole.log(typeof sinValor);\nconsole.log(typeof vacioIntencional);\n\ndocument.getElementById("salida").textContent =\n  \`\${texto} - \${numero} - \${esVerdadero}\`;\n`,
      },
    },
  },
  {
    slug: "conversion-de-tipos",
    title: "Conversión de tipos",
    summary:
      "A veces necesitas cambiar un valor de un tipo a otro, como convertir un texto en número. JavaScript lo hace explícitamente con funciones, o implícitamente por su cuenta (a veces con resultados sorprendentes).",
    playgroundCode: {
      html: `<h1>Conversión de tipos</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const cantidadTexto = "25";\nconst cantidadNumero = Number(cantidadTexto);\n\nconsole.log(typeof cantidadTexto, typeof cantidadNumero);\n\nconsole.log("5" + 3); // conversión automática: concatena -> "53"\nconsole.log("5" - 3); // conversión automática: resta -> 2\n\ndocument.getElementById("salida").textContent =\n  \`"\${cantidadTexto}" convertido a número: \${cantidadNumero + 10}\`;\n`,
    },
    hint: "Cambia \"5\" + 3 por \"5\" - 3 en el console.log y observa cómo el resultado pasa de concatenar texto a restar números.",
    explanationIntro: "Estas son las formas más comunes de convertir un valor de un tipo a otro:",
    explanationRows: [
      { code: "Number(valor)", desc: "Convierte un valor a número. Si el texto no se puede convertir, devuelve NaN (\"Not a Number\")." },
      { code: "String(valor)", desc: "Convierte cualquier valor a texto." },
      { code: "Boolean(valor)", desc: 'Convierte a true o false. Los valores 0, "", null, undefined y NaN se consideran "falsy" (se convierten en false); el resto es "truthy".' },
      { code: "conversión implícita", desc: 'JavaScript convierte tipos automáticamente en ciertas operaciones: + concatena si hay un texto de por medio, pero - siempre resta numéricamente.' },
    ],
    tip: "Cuando un valor venga de un formulario o de una API, trátalo como texto por defecto y conviértelo explícitamente con Number() antes de hacer operaciones matemáticas con él.",
    extra: "Esto también explica por qué existe el operador === (comparación estricta, sin convertir tipos) además de ==: lo vas a ver a fondo en el módulo de Operadores.",
    commonError: 'Usar + esperando sumar números cuando uno de los valores en realidad es texto: "5" + 3 da como resultado "53" (texto concatenado), no 8.',
    nextStepText: "Ya sabes convertir datos entre tipos. En el siguiente módulo veremos los operadores que te permiten combinarlos y compararlos.",
    challenge: {
      description: 'Agrega un console.log() que convierta el texto "10" a número con Number() y le sume 5.',
      code: {
        html: `<h1>Conversión de tipos</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const cantidadTexto = "25";\nconst cantidadNumero = Number(cantidadTexto);\n\nconsole.log(typeof cantidadTexto, typeof cantidadNumero);\n\nconsole.log("5" + 3); // conversión automática: concatena -> "53"\nconsole.log("5" - 3); // conversión automática: resta -> 2\n// agrega aquí tu propio console.log con Number("10") + 5\n\ndocument.getElementById("salida").textContent =\n  \`"\${cantidadTexto}" convertido a número: \${cantidadNumero + 10}\`;\n`,
      },
    },
  },
];

const operadoresLessons: RealLesson[] = [
  {
    slug: "operadores-aritmeticos",
    title: "Operadores aritméticos",
    summary:
      "Los operadores aritméticos te permiten hacer cálculos: sumar, restar, multiplicar, dividir y algunas operaciones más específicas como el resto de una división.",
    playgroundCode: {
      html: `<h1>Calculadora rápida</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #1e293b;\n}\n`,
      js: `const precio = 20;\nconst cantidad = 3;\nconst descuento = 5;\n\nconst subtotal = precio * cantidad;\nconst total = subtotal - descuento;\nconst resto = cantidad % 2;\n\nconsole.log("Subtotal:", subtotal);\nconsole.log("Total:", total);\nconsole.log("Resto de cantidad % 2:", resto);\n\ndocument.getElementById("salida").textContent =\n  \`\${cantidad} unidades a $\${precio} c/u, con descuento: $\${total}\`;\n`,
    },
    hint: "Cambia cantidad de 3 a 4 y observa cómo cambian el subtotal, el total y el resultado de cantidad % 2 en la consola.",
    explanationIntro: "Estos son los operadores aritméticos más comunes en JavaScript:",
    explanationRows: [
      { code: "+  -  *  /", desc: "Suma, resta, multiplicación y división, igual que en matemáticas." },
      { code: "%", desc: "Módulo: devuelve el resto de una división. Por ejemplo, 7 % 2 da 1." },
      { code: "**", desc: "Potencia: eleva un número a otro. Por ejemplo, 2 ** 3 da 8." },
      { code: "++  --", desc: "Incrementan o disminuyen una variable en 1: contador++ equivale a contador = contador + 1." },
    ],
    tip: "Los operadores respetan el orden matemático normal (primero * y /, luego + y -). Usa paréntesis () cuando quieras forzar un orden distinto.",
    extra: "El operador % es más útil de lo que parece: sirve para saber si un número es par o impar (numero % 2 === 0), o para repetir un patrón cada cierta cantidad de pasos.",
    commonError: "Esperar que / dé siempre un número entero, como en otros lenguajes: en JavaScript, 7 / 2 da 3.5, no 3. Si necesitas la parte entera, existen funciones como Math.floor() que verás más adelante.",
    nextStepText: "Ya sabes hacer cálculos con JavaScript. Ahora veamos cómo comparar valores entre sí.",
    challenge: {
      description: "Agrega una variable impuesto y súmala al total usando +.",
      code: {
        html: `<h1>Calculadora rápida</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #1e293b;\n}\n`,
        js: `const precio = 20;\nconst cantidad = 3;\nconst descuento = 5;\n// agrega aquí const impuesto = ...;\n\nconst subtotal = precio * cantidad;\nconst total = subtotal - descuento; /* súmale el impuesto */\nconst resto = cantidad % 2;\n\nconsole.log("Subtotal:", subtotal);\nconsole.log("Total:", total);\nconsole.log("Resto de cantidad % 2:", resto);\n\ndocument.getElementById("salida").textContent =\n  \`\${cantidad} unidades a $\${precio} c/u, con descuento: $\${total}\`;\n`,
      },
    },
  },
  {
    slug: "operadores-de-comparacion",
    title: "Operadores de comparación",
    summary:
      "Los operadores de comparación devuelven true o false al comparar dos valores. Elegir entre == y === es una de las decisiones más importantes que tomarás en JavaScript.",
    playgroundCode: {
      html: `<h1>Verificar edad</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const edad = 20;\nconst edadTexto = "20";\n\nconsole.log(edad == edadTexto);  // true: == convierte tipos antes de comparar\nconsole.log(edad === edadTexto); // false: === compara también el tipo\n\nconst esMayorDeEdad = edad >= 18;\nconsole.log(esMayorDeEdad);\n\ndocument.getElementById("salida").textContent = esMayorDeEdad\n  ? "Eres mayor de edad."\n  : "Todavía no eres mayor de edad.";\n`,
    },
    hint: "Cambia edad de 20 a 16 y observa cómo cambia el mensaje en pantalla y el resultado de esMayorDeEdad en la consola.",
    explanationIntro: "Estos son los operadores de comparación de JavaScript:",
    explanationRows: [
      { code: "==  !=", desc: "Comparan valores convirtiendo los tipos si hace falta. Evítalos: pueden dar resultados inesperados." },
      { code: "===  !==", desc: "Comparan valor Y tipo, sin convertir nada. Son los que deberías usar casi siempre." },
      { code: ">  <  >=  <=", desc: "Comparan orden: mayor que, menor que, mayor o igual, menor o igual. También funcionan con texto (orden alfabético)." },
    ],
    tip: "Usa siempre === y !== por defecto. Reserva == solo para casos muy específicos donde de verdad necesites que JavaScript convierta el tipo por ti.",
    extra: 'Dato curioso: en JavaScript, [] == false da true, por las reglas de conversión automática de ==. Es uno de los ejemplos más citados de por qué se prefiere ===.',
    commonError: 'Usar == en vez de === y obtener true en comparaciones que no deberían serlo, como "20" == 20: esto genera bugs difíciles de detectar porque el código "funciona" pero compara cosas distintas sin que te des cuenta.',
    nextStepText: "Ya sabes comparar valores. Ahora veamos cómo combinar varias comparaciones a la vez con operadores lógicos.",
    challenge: {
      description: "Agrega un console.log que compare edad !== edadTexto y observa que da true.",
      code: {
        html: `<h1>Verificar edad</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const edad = 20;\nconst edadTexto = "20";\n\nconsole.log(edad == edadTexto);  // true: == convierte tipos antes de comparar\nconsole.log(edad === edadTexto); // false: === compara también el tipo\n// agrega aquí console.log(edad !== edadTexto)\n\nconst esMayorDeEdad = edad >= 18;\nconsole.log(esMayorDeEdad);\n\ndocument.getElementById("salida").textContent = esMayorDeEdad\n  ? "Eres mayor de edad."\n  : "Todavía no eres mayor de edad.";\n`,
      },
    },
  },
  {
    slug: "operadores-logicos",
    title: "Operadores lógicos",
    summary:
      "Los operadores lógicos combinan varias condiciones en una sola: && exige que se cumplan todas, || exige que se cumpla al menos una, y ! invierte un valor booleano.",
    playgroundCode: {
      html: `<h1>Acceso al contenido</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
      js: `const usuarioRegistrado = true;\nconst esPremium = false;\nconst edad = 20;\n\nconst puedeVerContenido = usuarioRegistrado && edad >= 18;\nconst tieneAlgunBeneficio = esPremium || edad >= 65;\nconst noEsPremium = !esPremium;\n\nconsole.log(puedeVerContenido);\nconsole.log(tieneAlgunBeneficio);\nconsole.log(noEsPremium);\n\ndocument.getElementById("salida").textContent = puedeVerContenido\n  ? "Puedes ver el contenido."\n  : "Acceso denegado.";\n`,
    },
    hint: "Cambia usuarioRegistrado a false y observa cómo puedeVerContenido pasa a false aunque la edad siga cumpliendo.",
    explanationIntro: "Estos son los operadores lógicos de JavaScript:",
    explanationRows: [
      { code: "&&", desc: '"Y" lógico: el resultado es true solo si ambos lados son true.' },
      { code: "||", desc: '"O" lógico: el resultado es true si al menos uno de los dos lados es true.' },
      { code: "!", desc: "Niega un valor: convierte true en false y false en true." },
      { code: "cortocircuito", desc: "&& y || dejan de evaluar en cuanto ya saben el resultado final, sin revisar el resto de la expresión." },
    ],
    tip: "&& y || no solo funcionan con true/false: puedes combinarlos con cualquier valor gracias a los conceptos truthy/falsy que ya viste en Tipos de datos.",
    extra: 'Un patrón muy común es usar && como atajo: variable && haz algo — es una forma corta de decir "si variable es verdadera, ejecuta esto".',
    commonError: "Confundir && (deben cumplirse TODAS las condiciones) con || (basta con que se cumpla UNA): usar el operador equivocado invierte por completo la lógica de acceso de tu programa.",
    nextStepText: "Ya dominas los operadores. En el siguiente módulo usarás condicionales y bucles para controlar el flujo de tu programa.",
    challenge: {
      description: "Cambia esPremium a true y observa cómo tieneAlgunBeneficio pasa a true sin importar la edad.",
      code: {
        html: `<h1>Acceso al contenido</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
        js: `const usuarioRegistrado = true;\nconst esPremium = false; /* cambia este valor */\nconst edad = 20;\n\nconst puedeVerContenido = usuarioRegistrado && edad >= 18;\nconst tieneAlgunBeneficio = esPremium || edad >= 65;\nconst noEsPremium = !esPremium;\n\nconsole.log(puedeVerContenido);\nconsole.log(tieneAlgunBeneficio);\nconsole.log(noEsPremium);\n\ndocument.getElementById("salida").textContent = puedeVerContenido\n  ? "Puedes ver el contenido."\n  : "Acceso denegado.";\n`,
      },
    },
  },
];

export const jsModules: CourseModule[] = [
  {
    slug: "introduccion-a-javascript",
    title: "Introducción a JavaScript",
    hasContent: true,
    lessons: introduccionLessons,
  },
  {
    slug: "variables-y-tipos-de-datos",
    title: "Variables y tipos de datos",
    hasContent: true,
    lessons: variablesLessons,
  },
  {
    slug: "operadores",
    title: "Operadores",
    hasContent: true,
    lessons: operadoresLessons,
  },
  {
    slug: "estructuras-de-control",
    title: "Estructuras de control",
    hasContent: false,
    lessons: [
      { title: "Condicionales: if / else" },
      { title: "Switch" },
      { title: "Bucles: for y while" },
    ],
  },
  {
    slug: "funciones",
    title: "Funciones",
    hasContent: false,
    lessons: [
      { title: "Declarar funciones" },
      { title: "Parámetros y valores de retorno" },
      { title: "Funciones flecha" },
    ],
  },
  {
    slug: "arreglos-arrays",
    title: "Arreglos (Arrays)",
    hasContent: false,
    lessons: [
      { title: "Crear y recorrer arrays" },
      { title: "Métodos comunes de arrays" },
      { title: "map, filter y reduce" },
    ],
  },
  {
    slug: "objetos",
    title: "Objetos",
    hasContent: false,
    lessons: [
      { title: "Crear objetos" },
      { title: "Propiedades y métodos" },
      { title: "Desestructuración" },
    ],
  },
  {
    slug: "manipulacion-del-dom",
    title: "Manipulación del DOM",
    hasContent: false,
    lessons: [
      { title: "Seleccionar elementos" },
      { title: "Modificar contenido y estilos" },
      { title: "Crear y eliminar elementos" },
    ],
  },
  {
    slug: "eventos",
    title: "Eventos",
    hasContent: false,
    lessons: [
      { title: "addEventListener" },
      { title: "Eventos de formulario" },
      { title: "Delegación de eventos" },
    ],
  },
  {
    slug: "apis-y-almacenamiento",
    title: "APIs y almacenamiento",
    hasContent: false,
    lessons: [
      { title: "fetch y peticiones" },
      { title: "localStorage y sessionStorage" },
      { title: "Trabajar con JSON" },
    ],
  },
  {
    slug: "proyecto-practico",
    title: "Proyecto práctico",
    hasContent: false,
    lessons: [
      { title: "Planifica tu proyecto" },
      { title: "Construye la lógica" },
    ],
  },
  {
    slug: "proyecto-final",
    title: "Proyecto final",
    hasContent: false,
    lessons: [
      { title: "Integra HTML, CSS y JS" },
      { title: "Publica tu proyecto" },
    ],
  },
];

export function getJsLessonBySlug(moduleSlug: string, lessonSlug: string) {
  const moduleIndex = jsModules.findIndex((m) => m.slug === moduleSlug && m.hasContent);
  if (moduleIndex === -1) return null;
  const module = jsModules[moduleIndex];
  const lessons = module.lessons as RealLesson[];
  const index = lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;

  const prevModule = jsModules
    .slice(0, moduleIndex)
    .reverse()
    .find((m) => m.hasContent);
  const nextModule = jsModules.slice(moduleIndex + 1).find((m) => m.hasContent);

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

export function getAllJsLessonParams() {
  return jsModules
    .filter((m) => m.hasContent)
    .flatMap((m) => (m.lessons as RealLesson[]).map((l) => ({ module: m.slug, lesson: l.slug })));
}
