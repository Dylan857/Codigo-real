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

const estructurasControlLessons: RealLesson[] = [
  {
    slug: "condicionales-if-else",
    title: "Condicionales: if / else",
    summary:
      "Los condicionales le permiten a tu programa tomar caminos distintos según el valor de una variable: mostrar un mensaje u otro, dependiendo de si algo se cumple o no.",
    playgroundCode: {
      html: `<h1>Verificar stock</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const stock = 0;\n\nlet mensaje;\n\nif (stock > 5) {\n  mensaje = "Hay stock disponible.";\n} else if (stock > 0) {\n  mensaje = "Quedan pocas unidades.";\n} else {\n  mensaje = "Producto agotado.";\n}\n\nconsole.log(mensaje);\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
    },
    hint: "Cambia stock a 3 y luego a 10 para ver cómo el mensaje pasa por los tres casos: agotado, pocas unidades y disponible.",
    explanationIntro: "Los condicionales evalúan una condición y deciden qué bloque de código ejecutar:",
    explanationRows: [
      { code: "if (condición) {...}", desc: "Ejecuta el bloque solo si la condición es true." },
      { code: "else if (condición) {...}", desc: "Se evalúa solo si el if anterior fue false; permite encadenar varias condiciones." },
      { code: "else {...}", desc: "Se ejecuta si ninguna de las condiciones anteriores fue true. Es el caso por defecto." },
      { code: "condición", desc: "Cualquier expresión que JavaScript pueda evaluar como true o false, como stock > 5." },
    ],
    tip: "Escribe primero la condición más específica y deja else como el caso general: así evitas que un else if más amplio \"atrape\" casos que deberían caer en otra rama.",
    extra: "Puedes anidar un if dentro de otro para revisar condiciones más específicas, pero muchos niveles anidados suelen ser señal de que conviene simplificar la lógica.",
    commonError: 'Escribir if (stock = 0) en vez de if (stock === 0): con un solo =, JavaScript asigna 0 a stock en vez de compararlo, y la condición se evalúa según ese valor recién asignado.',
    nextStepText: "Ya sabes ramificar tu código con if / else. Cuando compares una misma variable contra muchos valores posibles, switch te va a ahorrar escribir muchos else if seguidos.",
    challenge: {
      description: "Cambia el valor de stock y agrega una nueva condición else if para el caso en que stock sea exactamente igual a 5.",
      code: {
        html: `<h1>Verificar stock</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const stock = 0; /* cambia este valor */\n\nlet mensaje;\n\nif (stock > 5) {\n  mensaje = "Hay stock disponible.";\n} else if (stock > 0) {\n  mensaje = "Quedan pocas unidades.";\n// agrega aquí un else if para stock === 5\n} else {\n  mensaje = "Producto agotado.";\n}\n\nconsole.log(mensaje);\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
      },
    },
  },
  {
    slug: "switch",
    title: "Switch",
    summary:
      "switch compara un mismo valor contra varios casos posibles. Es una alternativa más ordenada a encadenar muchos else if cuando ya conoces los valores exactos que quieres comparar.",
    playgroundCode: {
      html: `<h1>Mensaje del día</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
      js: `const dia = "miercoles";\n\nlet mensaje;\n\nswitch (dia) {\n  case "lunes":\n    mensaje = "Arranca la semana con una lección nueva.";\n    break;\n  case "miercoles":\n    mensaje = "Vas a la mitad de la semana, ¡sigue así!";\n    break;\n  case "viernes":\n    mensaje = "Cierra la semana repasando lo aprendido.";\n    break;\n  default:\n    mensaje = "Cualquier día es bueno para programar.";\n}\n\nconsole.log(mensaje);\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
    },
    hint: 'Cambia dia a "viernes" y luego a "domingo" para ver cómo switch elige el case correcto o cae en default.',
    explanationIntro: "switch compara un valor contra varios case, en vez de encadenar comparaciones con else if:",
    explanationRows: [
      { code: "switch (valor) {...}", desc: "Abre el bloque y define qué variable o expresión se va a comparar contra cada case." },
      { code: 'case "algo":', desc: 'Se ejecuta si valor es estrictamente igual (===) a "algo".' },
      { code: "break;", desc: "Detiene el switch apenas termina el case actual. Sin break, la ejecución sigue cayendo en los siguientes case." },
      { code: "default:", desc: "Se ejecuta si ningún case anterior coincidió. Es opcional, pero conviene incluirlo casi siempre." },
    ],
    tip: "Usa switch cuando compares una misma variable contra valores exactos conocidos; si necesitas comparar rangos (como stock > 5), if / else sigue siendo la mejor opción.",
    extra: 'switch compara igual que ===, sin convertir tipos: switch ("5") nunca coincide con case 5 (número).',
    commonError: "Olvidar el break al final de un case: la ejecución \"cae\" (fall-through) al siguiente case sin revisar su condición, y terminas ejecutando código de más de un caso a la vez.",
    nextStepText: "Ya sabes elegir entre varios caminos con switch. Ahora veamos cómo repetir una acción varias veces con bucles.",
    challenge: {
      description: 'Agrega un nuevo case para "jueves" con tu propio mensaje.',
      code: {
        html: `<h1>Mensaje del día</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
        js: `const dia = "miercoles"; /* cambia este valor */\n\nlet mensaje;\n\nswitch (dia) {\n  case "lunes":\n    mensaje = "Arranca la semana con una lección nueva.";\n    break;\n  case "miercoles":\n    mensaje = "Vas a la mitad de la semana, ¡sigue así!";\n    break;\n  // agrega aquí un case "jueves"\n  case "viernes":\n    mensaje = "Cierra la semana repasando lo aprendido.";\n    break;\n  default:\n    mensaje = "Cualquier día es bueno para programar.";\n}\n\nconsole.log(mensaje);\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
      },
    },
  },
  {
    slug: "bucles-for-y-while",
    title: "Bucles: for y while",
    summary:
      "Los bucles repiten un bloque de código varias veces sin que tengas que copiar y pegar la misma línea. for y while son las dos formas más comunes de lograrlo.",
    playgroundCode: {
      html: `<h1>Cuenta regresiva</h1>\n<p id="salida">Esperando...</p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
      js: `let suma = 0;\n\nfor (let i = 1; i <= 5; i++) {\n  suma += i;\n  console.log(\`Sumando \${i}, total: \${suma}\`);\n}\n\ndocument.getElementById("salida").textContent = \`La suma de 1 a 5 es \${suma}.\`;\n\nlet contador = 3;\n\nwhile (contador > 0) {\n  console.log(\`Cuenta regresiva: \${contador}\`);\n  contador--;\n}\n\nconsole.log("¡Despegue!");\n`,
    },
    hint: 'Abre la consola (F12) y observa cómo el for suma paso a paso del 1 al 5, y luego el while cuenta regresivo del 3 al 1 antes de imprimir "¡Despegue!".',
    explanationIntro: "Los bucles repiten un bloque de código mientras se cumpla una condición:",
    explanationRows: [
      { code: "for (inicio; condición; paso) {...}", desc: "Repite el bloque mientras la condición sea true; inicio se ejecuta una vez al empezar, y paso después de cada vuelta (por ejemplo, i++)." },
      { code: "while (condición) {...}", desc: "Repite el bloque mientras la condición sea true, revisándola antes de cada vuelta. Tú controlas manualmente cuándo cambia esa condición dentro del bloque." },
      { code: "contador++ / contador--", desc: "Formas cortas de incrementar o disminuir una variable en 1 en cada vuelta del bucle." },
      { code: "break", desc: "Corta el bucle por completo antes de que termine, sin esperar a que la condición sea false." },
    ],
    tip: "Usa for cuando sepas de antemano cuántas veces quieres repetir algo (o tengas un array para recorrer), y while cuando la repetición dependa de una condición que puede cambiar de forma menos predecible.",
    extra: "También existe do...while, que ejecuta el bloque al menos una vez antes de revisar la condición: es poco común, pero útil cuando necesitas garantizar que algo corra mínimo una vez.",
    commonError: "Olvidar actualizar la variable que controla la condición del while (por ejemplo, no escribir contador--): la condición nunca se vuelve false y el bucle se repite para siempre, congelando la página (bucle infinito).",
    nextStepText: "Ya sabes repetir código con bucles y decidir caminos con condicionales. En el siguiente módulo vas a empaquetar toda esta lógica dentro de funciones reutilizables.",
    challenge: {
      description: "Cambia el rango del for para que sume del 1 al 10, y ajusta el contador inicial del while a 5.",
      code: {
        html: `<h1>Cuenta regresiva</h1>\n<p id="salida">Esperando...</p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
        js: `let suma = 0;\n\nfor (let i = 1; i <= 5; i++) { /* cambia el límite a 10 */\n  suma += i;\n  console.log(\`Sumando \${i}, total: \${suma}\`);\n}\n\ndocument.getElementById("salida").textContent = \`La suma de 1 a 5 es \${suma}.\`;\n\nlet contador = 3; // agrega aquí: cambia el valor inicial a 5\n\nwhile (contador > 0) {\n  console.log(\`Cuenta regresiva: \${contador}\`);\n  contador--;\n}\n\nconsole.log("¡Despegue!");\n`,
      },
    },
  },
];

const funcionesLessons: RealLesson[] = [
  {
    slug: "declarar-funciones",
    title: "Declarar funciones",
    summary:
      "Una función agrupa un bloque de código que quieres poder ejecutar (llamar) varias veces, sin repetirlo. Declarar una función no la ejecuta: solo la deja lista para cuando la llames.",
    playgroundCode: {
      html: `<h1>Bienvenida</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `function saludar() {\n  console.log("Ejecutando la función saludar...");\n  return "¡Bienvenido a Código Real!";\n}\n\nconst mensaje = saludar();\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
    },
    hint: 'Agrega una segunda llamada a saludar() en otra línea y observa en la consola que el mensaje "Ejecutando..." aparece dos veces: cada llamada vuelve a ejecutar el código.',
    explanationIntro: "Estas son las piezas básicas para declarar y usar una función:",
    explanationRows: [
      { code: "function nombre() {...}", desc: "Declara una función: define el bloque de código que se va a ejecutar cada vez que la llames." },
      { code: "nombre()", desc: "Llama (ejecuta) la función. El código dentro de la función solo corre cuando la llamas, no cuando la declaras." },
      { code: "return valor", desc: "Detiene la función y devuelve un valor a quien la llamó. Sin return, la función devuelve undefined." },
    ],
    tip: 'Declarar una función no ejecuta su código: solo lo ejecuta cuando la llamas con (). Es un error común pensar que function saludar() {...} ya "hizo" algo por sí sola.',
    extra: "El nombre de una función debería describir qué hace, normalmente con un verbo: saludar(), calcularTotal(), validarFormulario(). Facilita leer el código sin tener que abrir cada función.",
    commonError: "Olvidar los paréntesis al llamar la función (const mensaje = saludar; en vez de saludar();): mensaje termina guardando la función misma, no el resultado de ejecutarla.",
    nextStepText: "Ya sabes declarar y llamar funciones simples. Ahora veamos cómo pasarles información con parámetros y recibir resultados distintos con return.",
    challenge: {
      description: "Agrega una segunda llamada a saludar(), guardada en otra variable, y muestra ambos mensajes con console.log.",
      code: {
        html: `<h1>Bienvenida</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `function saludar() {\n  console.log("Ejecutando la función saludar...");\n  return "¡Bienvenido a Código Real!";\n}\n\nconst mensaje = saludar();\n// agrega aquí una segunda llamada a saludar() en otra variable\n\ndocument.getElementById("salida").textContent = mensaje;\n`,
      },
    },
  },
  {
    slug: "parametros-y-valores-de-retorno",
    title: "Parámetros y valores de retorno",
    summary:
      "Los parámetros permiten que una misma función trabaje con datos distintos cada vez que la llamas, y return te deja usar el resultado calculado fuera de la función.",
    playgroundCode: {
      html: `<h1>Calculadora de total</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
      js: `function calcularTotal(precio, cantidad, descuento) {\n  const subtotal = precio * cantidad;\n  return subtotal - descuento;\n}\n\nconst total = calcularTotal(20, 3, 5);\n\nconsole.log("Total calculado:", total);\n\ndocument.getElementById("salida").textContent = \`Total a pagar: $\${total}\`;\n`,
    },
    hint: "Cambia los valores al llamar calcularTotal(20, 3, 5) por otros números y observa cómo cambia el resultado sin tocar la función.",
    explanationIntro: "Los parámetros son la forma en que una función recibe información desde afuera:",
    explanationRows: [
      { code: "function nombre(param1, param2) {...}", desc: 'Los parámetros son variables que la función espera recibir; actúan como "espacios" que se llenan al llamarla.' },
      { code: "nombre(valor1, valor2)", desc: "Los argumentos son los valores reales que le pasas a la función en cada llamada, en el mismo orden que los parámetros." },
      { code: "return resultado", desc: "Devuelve un valor calculado dentro de la función para que puedas usarlo afuera, por ejemplo guardándolo en una variable." },
    ],
    tip: "El orden de los argumentos importa: calcularTotal(3, 20, 5) le da a precio el valor 3 y a cantidad el valor 20, aunque tu intención fuera la contraria.",
    extra: "Puedes darle un valor por defecto a un parámetro, como function calcularTotal(precio, cantidad, descuento = 0) {...}, para que la función funcione incluso si no le pasas ese argumento.",
    commonError: 'Calcular algo con return pero nunca usar ese valor devuelto (ni guardarlo en una variable ni pasarlo a console.log): el resultado se pierde apenas termina la función.',
    nextStepText: "Ya sabes pasar datos a una función y recibir resultados con return. Ahora veamos una forma más corta de escribir funciones: las funciones flecha.",
    challenge: {
      description: "Agrega un cuarto parámetro impuesto y súmalo al resultado dentro de return.",
      code: {
        html: `<h1>Calculadora de total</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
        js: `function calcularTotal(precio, cantidad, descuento) { // agrega aquí un cuarto parámetro: impuesto\n  const subtotal = precio * cantidad;\n  return subtotal - descuento; /* súmale el impuesto */\n}\n\nconst total = calcularTotal(20, 3, 5);\n\nconsole.log("Total calculado:", total);\n\ndocument.getElementById("salida").textContent = \`Total a pagar: $\${total}\`;\n`,
      },
    },
  },
  {
    slug: "funciones-flecha",
    title: "Funciones flecha",
    summary:
      "Las funciones flecha son una forma más corta de escribir funciones, muy usada en JavaScript moderno. Hacen exactamente lo mismo que una función normal, con una sintaxis más breve.",
    playgroundCode: {
      html: `<h1>Verificar mayoría de edad</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
      js: `const esMayorDeEdad = function (edad) {\n  return edad >= 18;\n};\n\nconst esMayorDeEdadFlecha = (edad) => edad >= 18;\n\nconsole.log(esMayorDeEdad(20));\nconsole.log(esMayorDeEdadFlecha(16));\n\ndocument.getElementById("salida").textContent = esMayorDeEdadFlecha(20)\n  ? "Eres mayor de edad."\n  : "Todavía no eres mayor de edad.";\n`,
    },
    hint: "Cambia el número dentro de esMayorDeEdadFlecha(20) por 15 y observa cómo cambia el mensaje en pantalla.",
    explanationIntro: "Las funciones flecha reemplazan la sintaxis function por una flecha =>:",
    explanationRows: [
      { code: "(parámetros) => {...}", desc: "Sintaxis de una función flecha: reemplaza la palabra function por una flecha => después de los parámetros." },
      { code: "(edad) => edad >= 18", desc: "Si el cuerpo es una sola expresión, puedes omitir las llaves {} y el return: el resultado de esa expresión se devuelve automáticamente." },
      { code: "const nombre = (...) => {...}", desc: "Las funciones flecha casi siempre se guardan en una variable con const, porque no se pueden declarar con la sintaxis function nombre() {...}." },
    ],
    tip: "Usa la forma corta (sin llaves ni return) solo cuando el cuerpo de la función sea una única expresión; si necesitas varias líneas, usa llaves {} con un return explícito.",
    extra: "Además de ser más cortas, las funciones flecha manejan this de forma distinta a las funciones normales: una diferencia que vas a notar más adelante, sobre todo trabajando con objetos y eventos.",
    commonError: "Usar llaves {} en una función flecha y olvidar el return (const esMayorDeEdad = (edad) => { edad >= 18 };): sin return explícito dentro de {}, la función devuelve undefined en vez del resultado esperado.",
    nextStepText: "Ya sabes escribir funciones de las dos formas más comunes en JavaScript. En el siguiente módulo vas a usarlas junto con arrays, para recorrer y transformar listas completas de datos.",
    challenge: {
      description: "Convierte esMayorDeEdad (la función normal) en una función flecha equivalente, guardada en una nueva variable.",
      code: {
        html: `<h1>Verificar mayoría de edad</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
        js: `const esMayorDeEdad = function (edad) {\n  return edad >= 18;\n};\n// agrega aquí esMayorDeEdad como función flecha, en una nueva variable\n\nconst esMayorDeEdadFlecha = (edad) => edad >= 18;\n\nconsole.log(esMayorDeEdad(20));\nconsole.log(esMayorDeEdadFlecha(16));\n\ndocument.getElementById("salida").textContent = esMayorDeEdadFlecha(20)\n  ? "Eres mayor de edad."\n  : "Todavía no eres mayor de edad.";\n`,
      },
    },
  },
];

const arraysLessons: RealLesson[] = [
  {
    slug: "crear-y-recorrer-arrays",
    title: "Crear y recorrer arrays",
    summary:
      "Un array guarda una lista ordenada de valores dentro de una sola variable. Puedes acceder a cada valor por su posición, y recorrerlos todos con forEach.",
    playgroundCode: {
      html: `<h1>Lista de tareas</h1>\n<ul id="lista"></ul>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 360px;\n  margin: 0 auto;\n}\n\n#lista {\n  padding-left: 20px;\n  color: #1e293b;\n}\n`,
      js: `const tareas = ["Aprender JS", "Practicar arrays", "Construir un proyecto"];\n\nconsole.log(tareas[0]);\nconsole.log("Total de tareas:", tareas.length);\n\nconst lista = document.getElementById("lista");\n\ntareas.forEach(function (tarea) {\n  const item = document.createElement("li");\n  item.textContent = tarea;\n  lista.appendChild(item);\n});\n`,
    },
    hint: "Agrega una cuarta tarea al array tareas y observa cómo aparece automáticamente en la lista, sin tocar el forEach.",
    explanationIntro: "Un array guarda una lista ordenada de valores, y forEach es la forma más común de recorrerla:",
    explanationRows: [
      { code: "[valor1, valor2]", desc: "Crea un array: una lista ordenada de valores separados por comas, entre corchetes." },
      { code: "array[indice]", desc: "Accede a un valor por su posición. El primer elemento está en el índice 0, no en el 1." },
      { code: "array.length", desc: "Propiedad que devuelve cuántos elementos tiene el array." },
      { code: "array.forEach(fn)", desc: "Ejecuta fn una vez por cada elemento del array, pasándoselo como argumento. Hace lo mismo que un for, pero sin que tengas que declarar ni controlar un índice manualmente." },
    ],
    tip: "forEach siempre recorre el array completo, de principio a fin: es la opción más limpia cuando solo necesitas \"hacer algo\" con cada elemento, sin condiciones para detenerte antes.",
    extra: "Por debajo, forEach sigue siendo un recorrido elemento por elemento, igual que un for clásico: JavaScript solo se encarga de avanzar el índice por ti, así que el código queda más corto y más fácil de leer.",
    commonError: "Usar break o continue dentro de un forEach esperando cortar el recorrido: forEach no los admite y siempre completa todos los elementos del array; si necesitas poder detenerte antes de terminar, un for tradicional sigue siendo la herramienta correcta.",
    nextStepText: "Ya sabes crear un array y recorrerlo con forEach. Ahora veamos métodos que ya vienen incluidos en JavaScript para modificar arrays: agregar, quitar y consultar valores.",
    challenge: {
      description: "Agrega una cuarta tarea al array y comprueba que aparece en la lista sin tocar el forEach.",
      code: {
        html: `<h1>Lista de tareas</h1>\n<ul id="lista"></ul>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 360px;\n  margin: 0 auto;\n}\n\n#lista {\n  padding-left: 20px;\n  color: #1e293b;\n}\n`,
        js: `const tareas = ["Aprender JS", "Practicar arrays", "Construir un proyecto"]; // agrega aquí una cuarta tarea\n\nconsole.log(tareas[0]);\nconsole.log("Total de tareas:", tareas.length);\n\nconst lista = document.getElementById("lista");\n\ntareas.forEach(function (tarea) {\n  const item = document.createElement("li");\n  item.textContent = tarea;\n  lista.appendChild(item);\n});\n`,
      },
    },
  },
  {
    slug: "metodos-comunes-de-arrays",
    title: "Métodos comunes de arrays",
    summary:
      "JavaScript incluye métodos listos para agregar, quitar y consultar elementos de un array, sin que tengas que escribir la lógica de recorrido a mano.",
    playgroundCode: {
      html: `<h1>Carrito de compras</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const carrito = ["Teclado", "Mouse"];\n\ncarrito.push("Monitor");\nconsole.log("Después de push:", carrito);\n\ncarrito.pop();\nconsole.log("Después de pop:", carrito);\n\nconsole.log("¿Incluye Mouse?", carrito.includes("Mouse"));\nconsole.log("Posición de Mouse:", carrito.indexOf("Mouse"));\n\ndocument.getElementById("salida").textContent = \`Carrito: \${carrito.join(", ")}\`;\n`,
    },
    hint: "Comenta la línea carrito.pop(); (agrega // al inicio) y observa cómo Monitor se queda en el carrito y en el mensaje final.",
    explanationIntro: "Estos son algunos de los métodos más usados para modificar y consultar arrays:",
    explanationRows: [
      { code: "array.push(valor)", desc: "Agrega un elemento al final del array." },
      { code: "array.pop()", desc: "Elimina y devuelve el último elemento del array." },
      { code: "array.includes(valor)", desc: "Devuelve true o false según si el array contiene ese valor." },
      { code: "array.indexOf(valor)", desc: "Devuelve el índice de la primera vez que aparece ese valor, o -1 si no está." },
      { code: "array.join(separador)", desc: "Une todos los elementos del array en un solo texto, separados por el texto que le indiques." },
    ],
    tip: "push y pop modifican el array original directamente (no crean uno nuevo): si necesitas conservar el array original sin cambios, primero deberías copiarlo.",
    extra: "Además de push/pop (que trabajan al final del array), existen unshift y shift, que hacen lo mismo pero al principio del array.",
    commonError: "Tratar el -1 que devuelve indexOf() como si fuera un índice válido cuando el valor no existe en el array: -1 en realidad significa \"no encontrado\", y usarlo directamente como índice (array[-1]) no funciona como en otros lenguajes.",
    nextStepText: "Ya sabes agregar, quitar y consultar elementos con métodos básicos. Ahora veamos map, filter y reduce: las herramientas más poderosas para transformar arrays completos.",
    challenge: {
      description: 'Agrega carrito.unshift("Cable USB") antes del console.log final y observa cómo cambia el orden del carrito.',
      code: {
        html: `<h1>Carrito de compras</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const carrito = ["Teclado", "Mouse"];\n\ncarrito.push("Monitor");\nconsole.log("Después de push:", carrito);\n\ncarrito.pop();\nconsole.log("Después de pop:", carrito);\n\nconsole.log("¿Incluye Mouse?", carrito.includes("Mouse"));\nconsole.log("Posición de Mouse:", carrito.indexOf("Mouse"));\n// agrega aquí carrito.unshift("Cable USB")\n\ndocument.getElementById("salida").textContent = \`Carrito: \${carrito.join(", ")}\`;\n`,
      },
    },
  },
  {
    slug: "map-filter-reduce",
    title: "map, filter y reduce",
    summary:
      "map, filter y reduce recorren un array y devuelven un resultado nuevo: transformar cada valor, quedarte solo con algunos, o resumirlos todos en un solo número.",
    playgroundCode: {
      html: `<h1>Precios con descuento</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
      js: `const precios = [10, 25, 40, 15, 60];\n\nconst conDescuento = precios.map((precio) => precio * 0.9);\nconsole.log("Con descuento:", conDescuento);\n\nconst caros = precios.filter((precio) => precio > 20);\nconsole.log("Mayores a 20:", caros);\n\nconst total = precios.reduce((acumulado, precio) => acumulado + precio, 0);\nconsole.log("Total:", total);\n\ndocument.getElementById("salida").textContent = \`Total de la lista: $\${total}\`;\n`,
    },
    hint: "Cambia la condición del filter de precio > 20 a precio > 40 y observa cómo cambia la lista de \"caros\" en la consola.",
    explanationIntro: "map, filter y reduce recorren un array y devuelven un resultado nuevo, sin que tengas que escribir un for:",
    explanationRows: [
      { code: "array.map(fn)", desc: "Devuelve un array nuevo con el resultado de aplicar fn a cada elemento. El array original no cambia." },
      { code: "array.filter(fn)", desc: "Devuelve un array nuevo solo con los elementos para los que fn devuelve true." },
      { code: "array.reduce(fn, inicial)", desc: "Recorre el array acumulando un solo resultado (como una suma o un total), empezando desde el valor inicial." },
      { code: "precio => precio * 0.9", desc: "Función flecha que recibe cada elemento del array y devuelve el valor transformado o la condición evaluada." },
    ],
    tip: "map siempre devuelve un array del mismo tamaño que el original; filter puede devolver uno más chico (o vacío); reduce devuelve un solo valor, no un array.",
    extra: "Estos tres métodos se pueden encadenar: precios.filter(...).map(...) primero filtra y luego transforma el resultado, todo en una sola línea.",
    commonError: "Olvidar el valor inicial en reduce (array.reduce((a, b) => a + b) sin el segundo argumento): si el array está vacío, reduce sin valor inicial lanza un error en vez de devolver 0.",
    nextStepText: "Ya sabes transformar, filtrar y resumir arrays completos con map, filter y reduce. En el siguiente módulo vas a trabajar con objetos, la otra estructura de datos fundamental de JavaScript.",
    challenge: {
      description: "Cambia la condición del filter a precio > 40 y agrega un console.log mostrando cuántos elementos quedaron (caros.length).",
      code: {
        html: `<h1>Precios con descuento</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
        js: `const precios = [10, 25, 40, 15, 60];\n\nconst conDescuento = precios.map((precio) => precio * 0.9);\nconsole.log("Con descuento:", conDescuento);\n\nconst caros = precios.filter((precio) => precio > 20); /* cambia el 20 por 40 */\nconsole.log("Mayores a 20:", caros);\n// agrega aquí console.log(caros.length)\n\nconst total = precios.reduce((acumulado, precio) => acumulado + precio, 0);\nconsole.log("Total:", total);\n\ndocument.getElementById("salida").textContent = \`Total de la lista: $\${total}\`;\n`,
      },
    },
  },
];

const objetosLessons: RealLesson[] = [
  {
    slug: "crear-objetos",
    title: "Crear objetos",
    summary:
      "Un objeto guarda datos relacionados agrupados en propiedades, cada una con su propio nombre. Es la estructura ideal cuando cada dato tiene un significado distinto, como nombre, edad o activo.",
    playgroundCode: {
      html: `<h1>Perfil de usuario</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const usuario = {\n  nombre: "Ana",\n  edad: 28,\n  activo: true,\n};\n\nconsole.log(usuario);\nconsole.log(usuario.nombre);\n\ndocument.getElementById("salida").textContent = \`\${usuario.nombre} tiene \${usuario.edad} años.\`;\n`,
    },
    hint: "Agrega una nueva propiedad pais al objeto usuario y muéstrala en el mensaje.",
    explanationIntro: "Un objeto agrupa varias propiedades relacionadas dentro de una sola variable:",
    explanationRows: [
      { code: "{ clave: valor }", desc: "Crea un objeto: una lista de propiedades escritas como clave: valor, separadas por comas, entre llaves." },
      { code: "objeto.propiedad", desc: "Accede al valor de una propiedad usando un punto seguido del nombre de la clave (notación de punto)." },
      { code: "objeto", desc: "Al mostrarlo directamente en console.log, ves todas sus propiedades y valores de una sola vez." },
    ],
    tip: "A diferencia de un array (que usa índices numéricos), un objeto usa nombres (claves) para acceder a cada valor: es la estructura ideal cuando cada dato tiene un significado distinto.",
    extra: 'Los nombres de las propiedades normalmente van sin comillas (nombre: "Ana"), pero si el nombre tiene espacios o caracteres especiales, necesitas comillas: "nombre completo": "Ana Torres".',
    commonError: 'Confundir la notación de objeto {} con la de array []: usuario[0] no accede a la propiedad nombre de un objeto (a menos que uses notación de corchetes con el nombre exacto de la clave, como usuario["nombre"]).',
    nextStepText: "Ya sabes crear un objeto y leer sus propiedades. Ahora veamos cómo modificarlas y agregarles comportamiento con métodos.",
    challenge: {
      description: "Agrega una nueva propiedad pais al objeto usuario y muéstrala en el mensaje final.",
      code: {
        html: `<h1>Perfil de usuario</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const usuario = {\n  nombre: "Ana",\n  edad: 28,\n  activo: true,\n  // agrega aquí pais: "..."\n};\n\nconsole.log(usuario);\nconsole.log(usuario.nombre);\n\ndocument.getElementById("salida").textContent = \`\${usuario.nombre} tiene \${usuario.edad} años.\`;\n`,
      },
    },
  },
  {
    slug: "propiedades-y-metodos",
    title: "Propiedades y métodos",
    summary:
      "Un objeto también puede guardar funciones como propiedades: eso se llama un método. Junto con this, te permite darle comportamiento propio a cada objeto.",
    playgroundCode: {
      html: `<h1>Ficha de producto</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
      js: `const producto = {\n  nombre: "Teclado mecánico",\n  precio: 45,\n  descuento: 0.1,\n  precioFinal() {\n    return this.precio - this.precio * this.descuento;\n  },\n};\n\nconsole.log(producto.precioFinal());\n\nproducto.precio = 50;\n\ndocument.getElementById("salida").textContent = \`Precio final: $\${producto.precioFinal()}\`;\n`,
    },
    hint: "Cambia producto.precio = 50; por otro número y observa cómo precioFinal() recalcula automáticamente el resultado.",
    explanationIntro: "Un método es una función guardada dentro de un objeto, y this te deja acceder a sus otras propiedades:",
    explanationRows: [
      { code: "metodo() {...}", desc: "Una función guardada dentro de un objeto se llama método. Se declara igual que una función, pero dentro de las llaves del objeto." },
      { code: "this", desc: "Dentro de un método, this hace referencia al objeto que lo contiene, y te permite acceder a sus otras propiedades." },
      { code: "objeto.propiedad = nuevoValor", desc: "Modifica el valor de una propiedad ya existente (o crea una nueva si no existía)." },
      { code: "objeto.metodo()", desc: "Llama un método igual que cualquier función, pero accediendo primero a través del objeto." },
    ],
    tip: "Usa this dentro de un método para referirte a las propiedades del mismo objeto, en vez de repetir el nombre de la variable: así el método sigue funcionando aunque cambies el nombre del objeto.",
    extra: "Puedes agregar o modificar propiedades de un objeto después de crearlo, incluso si lo declaraste con const: const impide reasignar la variable completa, pero no impide cambiar sus propiedades internas.",
    commonError: "Olvidar this dentro de un método y escribir solo precio en vez de this.precio: JavaScript busca una variable global llamada precio (que no existe) en vez del precio del objeto, y el código lanza un error.",
    nextStepText: "Ya sabes agregar comportamiento a un objeto con métodos. Ahora veamos desestructuración: una forma más corta de sacar varias propiedades de un objeto a la vez.",
    challenge: {
      description: "Cambia producto.precio a 50 y observa que precioFinal() recalcula el descuento automáticamente.",
      code: {
        html: `<h1>Ficha de producto</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #7c3aed;\n}\n`,
        js: `const producto = {\n  nombre: "Teclado mecánico",\n  precio: 45,\n  descuento: 0.1,\n  precioFinal() {\n    return this.precio - this.precio * this.descuento;\n  },\n};\n\nconsole.log(producto.precioFinal());\n\nproducto.precio = 50; /* cambia este valor */\n\ndocument.getElementById("salida").textContent = \`Precio final: $\${producto.precioFinal()}\`;\n`,
      },
    },
  },
  {
    slug: "desestructuracion",
    title: "Desestructuración",
    summary:
      "La desestructuración extrae varias propiedades de un objeto en variables individuales, en una sola línea, en vez de escribir objeto.propiedad repetidamente.",
    playgroundCode: {
      html: `<h1>Ficha del curso</h1>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
      js: `const curso = {\n  titulo: "JavaScript desde cero",\n  autor: "Código Real",\n  modulos: 12,\n};\n\nconst { titulo, autor } = curso;\n\nconsole.log(titulo);\nconsole.log(autor);\n\nconst { modulos: totalModulos } = curso;\nconsole.log(totalModulos);\n\ndocument.getElementById("salida").textContent = \`\${titulo} — \${totalModulos} módulos\`;\n`,
    },
    hint: "Agrega una tercera variable extraída con desestructuración, por ejemplo const { autor: creador } = curso;, y muéstrala en consola.",
    explanationIntro: "La desestructuración copia propiedades de un objeto hacia variables nuevas:",
    explanationRows: [
      { code: "const { clave } = objeto;", desc: "Crea una variable con el mismo nombre que la propiedad, y le asigna su valor directamente." },
      { code: "const { a, b } = objeto;", desc: "Extrae varias propiedades a la vez, separándolas por comas dentro de las llaves." },
      { code: "const { clave: nuevoNombre } = objeto;", desc: "Extrae una propiedad pero la guarda con otro nombre de variable, usando dos puntos." },
    ],
    tip: "La desestructuración no modifica el objeto original: solo copia los valores de esas propiedades hacia nuevas variables independientes.",
    extra: "También puedes desestructurar directamente los parámetros de una función, por ejemplo function mostrar({ titulo, autor }) {...}, para no tener que escribir curso.titulo y curso.autor dentro de la función.",
    commonError: "Escribir mal el nombre de la propiedad al desestructurar (const { titlo } = curso; en vez de const { titulo } = curso;): JavaScript no lanza un error, simplemente titlo queda como undefined, porque esa propiedad no existe en el objeto.",
    nextStepText: "Ya sabes crear objetos, darles comportamiento con métodos y extraer sus datos con desestructuración. En el siguiente módulo vas a usar todo esto para manipular el DOM directamente: seleccionar, modificar y crear elementos de la página.",
    challenge: {
      description: "Agrega una tercera variable extraída con desestructuración (const { autor: creador } = curso;) y muéstrala con console.log.",
      code: {
        html: `<h1>Ficha del curso</h1>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\n#salida {\n  font-weight: 600;\n  color: #16a34a;\n}\n`,
        js: `const curso = {\n  titulo: "JavaScript desde cero",\n  autor: "Código Real",\n  modulos: 12,\n};\n\nconst { titulo, autor } = curso;\n\nconsole.log(titulo);\nconsole.log(autor);\n\nconst { modulos: totalModulos } = curso;\nconsole.log(totalModulos);\n// agrega aquí const { autor: creador } = curso;\n\ndocument.getElementById("salida").textContent = \`\${titulo} — \${totalModulos} módulos\`;\n`,
      },
    },
  },
];

const domLessons: RealLesson[] = [
  {
    slug: "seleccionar-elementos",
    title: "Seleccionar elementos",
    summary:
      "Antes de modificar algo en la página, primero necesitas seleccionarlo. document.getElementById, querySelector y querySelectorAll son las formas más comunes de encontrar elementos del HTML desde JavaScript.",
    playgroundCode: {
      html: `<ul class="lista">\n  <li id="primero">Aprender HTML</li>\n  <li class="tarea">Aprender CSS</li>\n  <li class="tarea">Aprender JavaScript</li>\n</ul>\n<p id="salida"></p>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n}\n\n.lista {\n  padding-left: 20px;\n}\n\n#salida {\n  margin-top: 16px;\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
      js: `const primerElemento = document.getElementById("primero");\nconsole.log(primerElemento);\n\nconst primeraTarea = document.querySelector(".tarea");\nconsole.log(primeraTarea);\n\nconst todasLasTareas = document.querySelectorAll(".tarea");\nconsole.log(todasLasTareas);\n\ndocument.getElementById("salida").textContent = \`Hay \${todasLasTareas.length} tareas con la clase "tarea".\`;\n`,
    },
    hint: "Agrega un cuarto <li class=\"tarea\">...</li> en el HTML y observa cómo cambia el número en el mensaje final, sin tocar el JavaScript.",
    explanationIntro: "Antes de modificar algo en la página, primero necesitas seleccionarlo. Estos tres métodos son las formas más comunes de hacerlo:",
    explanationRows: [
      { code: 'document.getElementById("id")', desc: "Busca un único elemento por su atributo id (sin el símbolo #) y lo devuelve, o null si no existe." },
      { code: 'document.querySelector("selector")', desc: "Busca el primer elemento que coincide con un selector CSS (como .clase, #id o una etiqueta) y lo devuelve." },
      { code: 'document.querySelectorAll("selector")', desc: "Busca todos los elementos que coinciden con un selector CSS y devuelve una lista (NodeList) con todos ellos." },
      { code: "lista.length", desc: "Una NodeList tiene una propiedad length, igual que un array, que indica cuántos elementos contiene." },
    ],
    tip: "getElementById es el más rápido porque busca un id único, pero querySelector y querySelectorAll son más flexibles porque aceptan cualquier selector CSS que ya conoces.",
    extra: "querySelectorAll no devuelve un array real sino un NodeList. Se parece mucho (tiene length y se puede recorrer con forEach), pero no tiene métodos de array como map o filter directamente.",
    commonError: 'Escribir document.querySelector("primero") en vez de document.querySelector("#primero"): querySelector necesita el selector CSS completo, con # para ids y . para clases, a diferencia de getElementById que solo pide el nombre.',
    nextStepText: "Ya sabes seleccionar elementos de la página. Ahora vamos a modificarlos: cambiar su texto, sus clases y su estilo.",
    challenge: {
      description: 'Agrega un cuarto <li class="tarea">...</li> a la lista y confirma que el contador del mensaje sube a 3 tareas.',
      code: {
        html: `<ul class="lista">\n  <li id="primero">Aprender HTML</li>\n  <li class="tarea">Aprender CSS</li>\n  <li class="tarea">Aprender JavaScript</li>\n  <!-- agrega aquí un cuarto <li class="tarea">...</li> -->\n</ul>\n<p id="salida"></p>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n}\n\n.lista {\n  padding-left: 20px;\n}\n\n#salida {\n  margin-top: 16px;\n  font-weight: 600;\n  color: #2563eb;\n}\n`,
        js: `const primerElemento = document.getElementById("primero");\nconsole.log(primerElemento);\n\nconst primeraTarea = document.querySelector(".tarea");\nconsole.log(primeraTarea);\n\nconst todasLasTareas = document.querySelectorAll(".tarea");\nconsole.log(todasLasTareas);\n\ndocument.getElementById("salida").textContent = \`Hay \${todasLasTareas.length} tareas con la clase "tarea".\`;\n`,
      },
    },
  },
  {
    slug: "modificar-contenido-y-estilos",
    title: "Modificar contenido y estilos",
    summary:
      "Una vez que tienes un elemento seleccionado, puedes cambiar lo que muestra con textContent, activar o quitar clases con classList, y ajustar su apariencia directamente con style.",
    playgroundCode: {
      html: `<div class="tarjeta" id="tarjeta">\n  <p id="mensaje">Estado: inactivo</p>\n</div>\n<button id="activar">Activar</button>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.tarjeta {\n  padding: 20px 32px;\n  border-radius: 12px;\n  background-color: #e2e8f0;\n  transition: background-color 0.2s;\n}\n\n.tarjeta.activa {\n  background-color: #16a34a;\n}\n\n.tarjeta.activa #mensaje {\n  color: white;\n}\n\nbutton {\n  padding: 8px 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n`,
      js: `const tarjeta = document.getElementById("tarjeta");\nconst mensaje = document.getElementById("mensaje");\nconst boton = document.getElementById("activar");\n\nboton.addEventListener("click", function () {\n  tarjeta.classList.toggle("activa");\n\n  if (tarjeta.classList.contains("activa")) {\n    mensaje.textContent = "Estado: activo";\n    boton.style.backgroundColor = "#16a34a";\n  } else {\n    mensaje.textContent = "Estado: inactivo";\n    boton.style.backgroundColor = "#2563eb";\n  }\n});\n`,
    },
    hint: 'Cambia mensaje.textContent = "Estado: activo"; por otro texto y haz clic en el botón para ver tu propio mensaje.',
    explanationIntro: "Una vez que tienes un elemento seleccionado, puedes cambiar lo que muestra y cómo se ve:",
    explanationRows: [
      { code: 'elemento.textContent = "texto"', desc: "Reemplaza todo el texto dentro del elemento por el valor que le asignes." },
      { code: 'elemento.classList.toggle("clase")', desc: "Agrega la clase si no la tiene, o la quita si ya la tiene. Es útil para activar o desactivar un estado con un solo método." },
      { code: 'elemento.classList.contains("clase")', desc: "Devuelve true o false según si el elemento tiene esa clase en este momento." },
      { code: "elemento.style.propiedad = \"valor\"", desc: "Cambia una propiedad CSS directamente desde JavaScript. El nombre se escribe en camelCase (backgroundColor en vez de background-color)." },
    ],
    tip: "Siempre que puedas, cambia el estilo agregando o quitando una clase CSS con classList en vez de escribir estilos sueltos con .style: así mantienes el diseño en el CSS y el JavaScript solo decide cuándo aplicarlo.",
    extra: 'classList también tiene .add("clase") para agregar siempre y .remove("clase") para quitar siempre, por si no quieres el comportamiento de alternar de toggle.',
    commonError: "Usar innerHTML cuando solo necesitas cambiar texto plano: elemento.innerHTML = texto interpreta el contenido como HTML (más lento y riesgoso si el texto viene de un usuario), mientras que textContent siempre lo trata como texto simple y seguro.",
    nextStepText: "Ya sabes cambiar el contenido y el estilo de un elemento que ya existe en la página. Ahora veamos cómo crear elementos completamente nuevos y eliminar los que ya no necesitas.",
    challenge: {
      description: "Cambia el texto de mensaje.textContent para el estado activo e inactivo, y personaliza el color en boton.style.backgroundColor.",
      code: {
        html: `<div class="tarjeta" id="tarjeta">\n  <p id="mensaje">Estado: inactivo</p>\n</div>\n<button id="activar">Activar</button>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.tarjeta {\n  padding: 20px 32px;\n  border-radius: 12px;\n  background-color: #e2e8f0;\n  transition: background-color 0.2s;\n}\n\n.tarjeta.activa {\n  background-color: #16a34a;\n}\n\n.tarjeta.activa #mensaje {\n  color: white;\n}\n\nbutton {\n  padding: 8px 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n`,
        js: `const tarjeta = document.getElementById("tarjeta");\nconst mensaje = document.getElementById("mensaje");\nconst boton = document.getElementById("activar");\n\nboton.addEventListener("click", function () {\n  tarjeta.classList.toggle("activa");\n\n  if (tarjeta.classList.contains("activa")) {\n    mensaje.textContent = "Estado: activo"; /* cambia este texto */\n    boton.style.backgroundColor = "#16a34a"; /* cambia este color */\n  } else {\n    mensaje.textContent = "Estado: inactivo";\n    boton.style.backgroundColor = "#2563eb";\n  }\n});\n`,
      },
    },
  },
  {
    slug: "crear-y-eliminar-elementos",
    title: "Crear y eliminar elementos",
    summary:
      "document.createElement te permite construir elementos nuevos desde JavaScript, append los inserta en la página y remove los elimina. Con esto puedes generar contenido dinámico que no existía en el HTML original.",
    playgroundCode: {
      html: `<h1>Lista de compras</h1>\n<ul id="lista"></ul>\n<input type="text" id="entrada" placeholder="Nuevo producto" />\n<button id="agregar">Agregar</button>\n`,
      css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 320px;\n}\n\n#lista {\n  padding-left: 20px;\n  margin-bottom: 16px;\n}\n\nli {\n  margin-bottom: 6px;\n}\n\nli button {\n  margin-left: 8px;\n  border: none;\n  background: none;\n  color: #dc2626;\n  cursor: pointer;\n  font-weight: 700;\n}\n\ninput {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n}\n\nbutton#agregar {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n`,
      js: `const lista = document.getElementById("lista");\nconst entrada = document.getElementById("entrada");\nconst botonAgregar = document.getElementById("agregar");\n\nfunction agregarProducto(texto) {\n  const item = document.createElement("li");\n  item.textContent = texto;\n\n  const botonEliminar = document.createElement("button");\n  botonEliminar.textContent = "x";\n  botonEliminar.addEventListener("click", function () {\n    item.remove();\n  });\n\n  item.append(botonEliminar);\n  lista.append(item);\n}\n\nbotonAgregar.addEventListener("click", function () {\n  if (entrada.value === "") return;\n  agregarProducto(entrada.value);\n  entrada.value = "";\n});\n\nagregarProducto("Leche");\n`,
    },
    hint: 'Cambia agregarProducto("Leche"); por otro producto inicial, o agrega una segunda línea agregarProducto("Pan"); para empezar con dos productos en la lista.',
    explanationIntro: "Hasta ahora modificabas elementos que ya existían en el HTML. Estos métodos te permiten crear elementos nuevos desde JavaScript y quitarlos cuando ya no los necesitas:",
    explanationRows: [
      { code: 'document.createElement("etiqueta")', desc: "Crea un elemento nuevo en memoria (como un <li> o un <button>), pero todavía no aparece en la página." },
      { code: "elemento.append(hijo)", desc: "Inserta hijo dentro de elemento, al final de su contenido. El elemento aparece en la página en cuanto se agrega." },
      { code: "elemento.remove()", desc: "Elimina el elemento de la página por completo." },
    ],
    tip: "Un elemento creado con createElement no aparece en la página hasta que lo agregas con append (o un método similar) a un elemento que sí esté en el HTML.",
    extra: "Cada botón de eliminar se crea junto con su propio producto y guarda una referencia directa a item dentro de su addEventListener, así que siempre sabe exactamente qué elemento debe eliminar, sin importar cuántos productos haya en la lista.",
    commonError: "Crear el elemento con createElement y olvidar agregarlo con append: el código no marca ningún error, pero el elemento nunca aparece en la página porque nunca se agregó al DOM.",
    nextStepText: "Ya sabes seleccionar, modificar, crear y eliminar elementos del DOM. En el siguiente módulo vas a profundizar en addEventListener y los distintos tipos de eventos, para que tus páginas reaccionen a mucho más que un simple clic.",
    challenge: {
      description: 'Agrega un segundo producto inicial llamando a agregarProducto("Pan"); justo después de agregarProducto("Leche");.',
      code: {
        html: `<h1>Lista de compras</h1>\n<ul id="lista"></ul>\n<input type="text" id="entrada" placeholder="Nuevo producto" />\n<button id="agregar">Agregar</button>\n`,
        css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 40px;\n  max-width: 320px;\n}\n\n#lista {\n  padding-left: 20px;\n  margin-bottom: 16px;\n}\n\nli {\n  margin-bottom: 6px;\n}\n\nli button {\n  margin-left: 8px;\n  border: none;\n  background: none;\n  color: #dc2626;\n  cursor: pointer;\n  font-weight: 700;\n}\n\ninput {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n}\n\nbutton#agregar {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n`,
        js: `const lista = document.getElementById("lista");\nconst entrada = document.getElementById("entrada");\nconst botonAgregar = document.getElementById("agregar");\n\nfunction agregarProducto(texto) {\n  const item = document.createElement("li");\n  item.textContent = texto;\n\n  const botonEliminar = document.createElement("button");\n  botonEliminar.textContent = "x";\n  botonEliminar.addEventListener("click", function () {\n    item.remove();\n  });\n\n  item.append(botonEliminar);\n  lista.append(item);\n}\n\nbotonAgregar.addEventListener("click", function () {\n  if (entrada.value === "") return;\n  agregarProducto(entrada.value);\n  entrada.value = "";\n});\n\nagregarProducto("Leche");\n// agrega aquí agregarProducto("Pan");\n`,
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
    hasContent: true,
    lessons: estructurasControlLessons,
  },
  {
    slug: "funciones",
    title: "Funciones",
    hasContent: true,
    lessons: funcionesLessons,
  },
  {
    slug: "arreglos-arrays",
    title: "Arreglos (Arrays)",
    hasContent: true,
    lessons: arraysLessons,
  },
  {
    slug: "objetos",
    title: "Objetos",
    hasContent: true,
    lessons: objetosLessons,
  },
  {
    slug: "manipulacion-del-dom",
    title: "Manipulación del DOM",
    hasContent: true,
    lessons: domLessons,
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
