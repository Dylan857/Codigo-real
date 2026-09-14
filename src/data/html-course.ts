export interface RealLesson {
  slug: string;
  title: string;
  summary: string;
  playgroundCode: string;
  hint: string;
  explanationIntro: string;
  explanationRows: { code: string; desc: string }[];
  tip: string;
  extra: string;
  commonError: string;
  nextStepText: string;
  challenge: { description: string; code: string };
}

export interface LessonStub {
  title: string;
}

export interface CourseModule {
  slug: string;
  title: string;
  lessons: RealLesson[] | LessonStub[];
  hasContent: boolean;
}

export const HTML_MODULE_COUNT = 10;

export const FIRST_HTML_LESSON_PATH = "/html/introduccion-a-html/mi-primera-pagina-web";

const introduccionLessons: RealLesson[] = [
  {
    slug: "que-es-html",
    title: "¿Qué es HTML?",
    summary:
      "Antes de escribir una sola línea de código, entendamos qué es HTML y para qué sirve. Es el punto de partida de todo lo que viene.",
    playgroundCode: `<h1>¡Hola, mundo!</h1>\n<p>HTML se construye con <strong>etiquetas</strong>.</p>\n`,
    hint: "Agrega tu propia etiqueta debajo, por ejemplo <h2>Mi etiqueta</h2>, y observa cómo aparece en el resultado.",
    explanationIntro:
      "HTML (HyperText Markup Language) es el lenguaje de marcado que describe la estructura de una página web: qué es un título, qué es un párrafo, qué es una imagen. No es un lenguaje de programación, sino un sistema de etiquetas que el navegador interpreta.",
    explanationRows: [
      { code: "<h1>", desc: "Etiqueta de encabezado principal, la más importante de la página." },
      { code: "<p>", desc: "Etiqueta de párrafo, para bloques de texto normal." },
      { code: "<strong>", desc: "Resalta texto importante; el navegador lo muestra en negrita." },
    ],
    tip: "Las etiquetas casi siempre van en pares: una de apertura <etiqueta> y otra de cierre </etiqueta>, con el contenido en el medio.",
    extra: "HTML no tiene lógica ni cálculos como un lenguaje de programación: solo describe la estructura y el significado del contenido.",
    commonError: "Olvidar los signos < > alrededor del nombre de la etiqueta, o escribir mal el nombre (por ejemplo h1> en vez de <h1>).",
    nextStepText: "Ya sabes qué es HTML. Ahora veamos cómo tu navegador convierte ese código en la página que ves.",
    challenge: {
      description: "Agrega un segundo párrafo con tu nombre y usa <strong> para resaltar una palabra dentro de él.",
      code: `<h1>¡Hola, mundo!</h1>\n<p>HTML se construye con <strong>etiquetas</strong>.</p>\n\n<!-- Agrega aquí tu párrafo con tu nombre -->\n`,
    },
  },
  {
    slug: "como-funciona-la-web",
    title: "Cómo funciona la web",
    summary:
      "Tu navegador convierte código en páginas visuales. Entender ese viaje —de un servidor a tu pantalla— te ayuda a razonar cualquier error que veas.",
    playgroundCode: `<!-- Cuando abres una página, tu navegador hace este viaje: -->\n<h1>Petición → Servidor → Respuesta → Renderizado</h1>\n<p>Este texto ya está "renderizado": tu navegador transformó el HTML en algo visual.</p>\n`,
    hint: "Cambia el comentario por tus propias palabras y observa que los comentarios nunca se ven en el resultado.",
    explanationIntro:
      "Cuando escribes una dirección web, ocurren cuatro pasos básicos antes de que veas algo en pantalla:",
    explanationRows: [
      { code: "Petición HTTP", desc: "Tu navegador le pide al servidor el archivo HTML de esa dirección." },
      { code: "Servidor", desc: "La computadora que guarda los archivos de la página y responde a la petición." },
      { code: "Respuesta", desc: "El servidor envía el HTML (y CSS/JS) de vuelta a tu navegador." },
      { code: "Renderizado", desc: "El navegador lee el HTML y lo dibuja como la página que ves." },
    ],
    tip: "Puedes ver el HTML de cualquier página con clic derecho → \"Ver código fuente\".",
    extra: "Las siglas WWW vienen de \"World Wide Web\": la red de documentos conectados por enlaces que hizo popular a Internet.",
    commonError: "Pensar que el HTML se ejecuta en el servidor. En realidad el servidor solo lo envía; quien lo interpreta y dibuja es el navegador.",
    nextStepText: "Con la teoría clara, es hora de escribir tu primera página completa.",
    challenge: {
      description: "Reemplaza el comentario por uno propio, explicando con tus palabras qué hace el paso de \"Renderizado\".",
      code: `<!-- Escribe aquí tu explicación de "Renderizado" -->\n<h1>Petición → Servidor → Respuesta → Renderizado</h1>\n`,
    },
  },
  {
    slug: "mi-primera-pagina-web",
    title: "Mi primera página web",
    summary:
      "En esta lección crearás tu primera página web con HTML. Es el punto de partida para todo lo que viene. Escribe el código en el editor y observa el resultado en tiempo real.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi primera página</title>\n</head>\n<body>\n  <h1>¡Hola, Código Real!</h1>\n  <p>Esta es mi primera página web.</p>\n</body>\n</html>\n`,
    hint: "Prueba cambiar el texto del título y del párrafo. El resultado se actualizará automáticamente.",
    explanationIntro: "Este ejemplo contiene la estructura básica de un documento HTML:",
    explanationRows: [
      { code: "<!DOCTYPE html>", desc: "Le indica al navegador que el documento es HTML5." },
      { code: '<html lang="es">', desc: "Etiqueta raíz que contiene todo el documento. El atributo lang define el idioma." },
      { code: "<head>", desc: "Contiene información del documento, como el título y metadatos." },
      { code: '<meta charset="UTF-8">', desc: "Define la codificación de caracteres (permite usar tildes y ñ)." },
      { code: "<title>", desc: "Es el título que se muestra en la pestaña del navegador." },
      { code: "<body>", desc: "Contiene todo el contenido visible de la página." },
      { code: "<h1>", desc: "Es un título principal." },
      { code: "<p>", desc: "Es un párrafo de texto." },
    ],
    tip: "Siempre comienza tus proyectos con la estructura básica. Te evitará muchos problemas más adelante.",
    extra: "Puedes cambiar el título y volver a la pestaña del navegador para ver cómo se actualiza en tiempo real.",
    commonError: "Olvidar cerrar las etiquetas. Por ejemplo: <h1>Hola (sin </h1>), puede causar resultados inesperados.",
    nextStepText: "Ahora que ya tienes tu primera página, continúa con la estructura del documento.",
    challenge: {
      description: "Modifica el código y cambia el título y el párrafo por una presentación personal.",
      code: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi primera página</title>\n</head>\n<body>\n  <!-- Cambia este título y este párrafo por tu presentación -->\n  <h1>¡Hola, Código Real!</h1>\n  <p>Esta es mi primera página web.</p>\n</body>\n</html>\n`,
    },
  },
  {
    slug: "editores-de-codigo",
    title: "Editores de código",
    summary:
      "No necesitas instalar nada para practicar aquí, pero vale la pena conocer las herramientas que usan los desarrolladores reales todos los días.",
    playgroundCode: `<!doctype html>\n<html lang="es">\n<head>\n<meta charset="UTF-8">\n<title>Sin ordenar</title>\n</head>\n<body>\n<h1>Este código funciona,</h1>\n<p>pero está mal indentado y es difícil de leer.</p>\n</body>\n</html>\n`,
    hint: "Selecciona todo el código (Ctrl/Cmd + A) y usa Shift + Alt + F para que Monaco lo formatee automáticamente.",
    explanationIntro:
      "Un editor de código no es solo un lugar para escribir texto: te ayuda a evitar errores antes de que ocurran. Estas son las funciones que más vas a usar:",
    explanationRows: [
      { code: "Resaltado de sintaxis", desc: "Colorea las etiquetas y atributos para que el código sea más fácil de leer." },
      { code: "Autocompletado", desc: "Sugiere etiquetas y atributos mientras escribes, y cierra las que abres." },
      { code: "Errores en tiempo real", desc: "Marca etiquetas mal cerradas o mal escritas antes de que ejecutes nada." },
      { code: "Formateo automático", desc: "Ordena la indentación del código con un atajo de teclado." },
    ],
    tip: "El editor de Código Real usa Monaco, el mismo motor de Visual Studio Code, directo en tu navegador.",
    extra: "Cuando quieras programar fuera del navegador, Visual Studio Code (gratis) es el editor más usado por la comunidad web.",
    commonError: "Guardar el archivo con la extensión incorrecta (por ejemplo .txt en vez de .html) hace que el navegador no lo reconozca como una página web.",
    nextStepText: "Terminaste el módulo de introducción. El siguiente módulo profundiza en la estructura del documento HTML.",
    challenge: {
      description: "Reordena e indenta el código a mano, línea por línea, para practicar antes de usar el formateo automático.",
      code: `<!doctype html>\n<html lang="es">\n<head>\n<meta charset="UTF-8">\n<title>Sin ordenar</title>\n</head>\n<body>\n<h1>Ahora ordénalo tú</h1>\n<p>Dale sangría (indentación) a cada etiqueta según su nivel.</p>\n</body>\n</html>\n`,
    },
  },
];

const estructuraLessons: RealLesson[] = [
  {
    slug: "doctype",
    title: "DOCTYPE",
    summary:
      "Toda página HTML empieza con una línea que casi nadie mira dos veces, pero que le dice al navegador cómo interpretar todo lo demás: el DOCTYPE.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Documento con DOCTYPE</title>\n</head>\n<body>\n  <h1>Esta página empieza con &lt;!DOCTYPE html&gt;</h1>\n  <p>Gracias a eso, el navegador la interpreta en modo estándar.</p>\n</body>\n</html>\n`,
    hint: "Intenta borrar la línea <!DOCTYPE html> del principio. Aquí el resultado no cambia porque el ejemplo es simple, pero en un sitio real activaría el modo de compatibilidad del navegador.",
    explanationIntro:
      "El DOCTYPE (Document Type Declaration) es la primera línea de cualquier documento HTML. No es una etiqueta como las demás: es una instrucción para el navegador que indica qué reglas usar para interpretar la página.",
    explanationRows: [
      { code: "<!DOCTYPE html>", desc: "La declaración de HTML5. Le dice al navegador: interpreta esta página en modo estándar." },
      { code: "Modo estándar", desc: "El navegador sigue las reglas actuales de HTML y CSS al pie de la letra." },
      { code: "Modo quirks", desc: "Si falta el DOCTYPE, el navegador asume que la página es antigua y activa un modo de compatibilidad que puede romper el diseño." },
    ],
    tip: "El DOCTYPE no distingue mayúsculas de minúsculas, pero la convención es escribirlo siempre como <!DOCTYPE html>.",
    extra: 'En HTML4 y XHTML el DOCTYPE era una línea larga y difícil de recordar, como <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">. HTML5 lo redujo a una sola palabra.',
    commonError: "Escribir el DOCTYPE después de otra etiqueta, agregarle atributos, o colocarlo dentro de <html>. Debe ser siempre la primerísima línea del archivo.",
    nextStepText: "Ya sabes qué hace la primera línea de un documento HTML. Ahora veamos las tres etiquetas que forman el esqueleto de toda página: html, head y body.",
    challenge: {
      description: "Este documento no tiene DOCTYPE. Agrégalo como primera línea y, debajo del <h1>, escribe un párrafo explicando con tus palabras qué hace.",
      code: `<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Practica el DOCTYPE</title>\n</head>\n<body>\n  <h1>Practicando el DOCTYPE</h1>\n  <!-- Agrega aquí tu párrafo explicando qué hace el DOCTYPE -->\n</body>\n</html>\n`,
    },
  },
  {
    slug: "html-head-body",
    title: "html, head y body",
    summary:
      "Toda página HTML se apoya en tres etiquetas: html, head y body. Entender qué va dentro de cada una evita la mayoría de los errores de estructura.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Estructura básica</title>\n</head>\n<body>\n  <h1>Todo lo que ves está dentro de body</h1>\n  <p>El title de arriba, en cambio, vive dentro de head y no se muestra aquí.</p>\n</body>\n</html>\n`,
    hint: "Cambia el texto de <title> y mira la pestaña del navegador (o el nombre de la vista previa); luego cambia el <h1> y mira el resultado. Solo uno de los dos es visible en la página.",
    explanationIntro: "Después del DOCTYPE, cada documento HTML se organiza en tres partes anidadas:",
    explanationRows: [
      { code: '<html lang="es">', desc: "La etiqueta raíz: contiene todo el documento. El atributo lang indica en qué idioma está escrito el contenido." },
      { code: "<head>", desc: "Contiene información sobre la página que no se muestra directamente: título, metadatos, enlaces a hojas de estilo." },
      { code: "<body>", desc: "Contiene todo el contenido visible: textos, imágenes, botones; todo lo que el usuario ve en la ventana del navegador." },
    ],
    tip: "head siempre va antes que body, y ambos van dentro de html. Si el editor marca un error de etiqueta, revisa primero ese orden.",
    extra: "El atributo lang no es decorativo: los lectores de pantalla lo usan para elegir la pronunciación correcta, y los traductores automáticos lo usan para saber desde qué idioma traducir.",
    commonError: "Poner texto o etiquetas visibles (como <p> o <h1>) directamente dentro de <head>, o al revés, meter <title> dentro de <body>. El navegador no lo corrige ni lo muestra donde esperas.",
    nextStepText: "Ya conoces el esqueleto completo del documento. Ahora veamos qué información suele vivir dentro del head: los metadatos.",
    challenge: {
      description: "El <title> de este documento está mal ubicado dentro de body. Muévelo a head y, en su lugar, agrega un párrafo de presentación.",
      code: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <title>Título fuera de lugar</title>\n  <h1>Mi página</h1>\n  <!-- Agrega aquí tu párrafo de presentación -->\n</body>\n</html>\n`,
    },
  },
  {
    slug: "metadatos",
    title: "Metadatos",
    summary:
      "Dentro de head viven etiquetas que no se ven en pantalla pero que definen cómo se comporta y se encuentra tu página: los metadatos.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="description" content="Una página de ejemplo para practicar metadatos.">\n  <title>Metadatos en acción</title>\n</head>\n<body>\n  <h1>Ninguna de las etiquetas de arriba se ve aquí</h1>\n  <p>Pero todas cambian cómo se comporta o se encuentra esta página.</p>\n</body>\n</html>\n`,
    hint: "Cambia el texto de meta name=\"description\" e imagina cómo se vería como resultado de búsqueda en Google: ese texto suele aparecer debajo del título.",
    explanationIntro: "Estas son las etiquetas de metadatos más comunes dentro de head:",
    explanationRows: [
      { code: '<meta charset="UTF-8">', desc: "Define la codificación de caracteres. Sin ella, tildes y la ñ pueden verse como símbolos raros." },
      { code: "<title>", desc: "El texto que aparece en la pestaña del navegador y en los resultados de buscadores. No es un encabezado visible en la página." },
      { code: '<meta name="viewport" ...>', desc: "Indica al navegador móvil que ajuste el ancho de la página al del dispositivo, en vez de mostrar una versión de escritorio reducida." },
      { code: '<meta name="description" ...>', desc: "Un resumen breve de la página que los buscadores suelen mostrar debajo del título en los resultados de búsqueda." },
      { code: '<link rel="stylesheet" ...>', desc: "Conecta un archivo CSS externo a la página. Lo verás en detalle en el curso de CSS." },
    ],
    tip: "El viewport es obligatorio en cualquier página moderna: sin él, tu diseño se verá diminuto en pantallas de celular.",
    extra: "El texto de meta description no mejora el posicionamiento en buscadores por sí solo, pero sí influye en si alguien hace clic en tu resultado, porque es lo primero que lee después del título.",
    commonError: 'Olvidar meta charset (los acentos se rompen), o escribir mal el nombre del atributo (por ejemplo "unicode" en vez de "UTF-8").',
    nextStepText: "Terminaste el módulo de estructura del documento. El siguiente módulo se enfoca en el contenido de texto: títulos, párrafos y formato.",
    challenge: {
      description: "A este documento le faltan meta charset y viewport. Agrégalos dentro de head, y escribe una meta description con un resumen de una página inventada.",
      code: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <title>Mi página</title>\n  <!-- Agrega aquí meta charset, viewport y meta description -->\n</head>\n<body>\n  <h1>Bienvenido</h1>\n</body>\n</html>\n`,
    },
  },
];

const textoLessons: RealLesson[] = [
  {
    slug: "titulos",
    title: "Títulos (h1 - h6)",
    summary:
      "HTML tiene seis niveles de encabezado, de h1 a h6. No son tamaños de letra: son la jerarquía que le da estructura y sentido a tu contenido.",
    playgroundCode: `<h1>Título principal</h1>\n<h2>Una sección importante</h2>\n<h3>Una subsección</h3>\n<h4>Un detalle dentro de la subsección</h4>\n<h5>Algo más específico</h5>\n<h6>El nivel más profundo</h6>\n`,
    hint: "Cambia el orden de los encabezados o borra alguno, y observa cómo cambia el tamaño de letra por defecto en cada nivel.",
    explanationIntro: "HTML define seis niveles de encabezado, del más importante al menos importante:",
    explanationRows: [
      { code: "<h1>", desc: "El título principal de la página. Debe usarse una sola vez." },
      { code: "<h2> a <h6>", desc: "Subniveles para organizar el contenido en secciones y subsecciones, en orden descendente de importancia." },
      { code: "Tamaño visual", desc: "El tamaño de letra que ves es solo el estilo por defecto del navegador; con CSS se puede cambiar sin alterar el significado de la etiqueta." },
    ],
    tip: "Piensa en los encabezados como el índice de un libro: usa el nivel según el lugar que ocupa la idea en la estructura, no según qué tan grande quieres que se vea.",
    extra: "Los lectores de pantalla permiten saltar de un encabezado a otro para navegar rápido por la página; una jerarquía desordenada hace esa navegación confusa.",
    commonError: 'Elegir un nivel de encabezado porque "se ve del tamaño correcto" (por ejemplo, usar <h3> en vez de <h2> solo porque es más pequeño), o usar más de un <h1> en la misma página.',
    nextStepText: "Ya entiendes la jerarquía de títulos. Ahora veamos la etiqueta que vas a usar más que ninguna otra: el párrafo.",
    challenge: {
      description: "Este documento salta de <h1> directo a <h4> para sus dos secciones. Cámbialos a <h2>, que es el nivel correcto para no saltarse niveles.",
      code: `<h1>Mi receta favorita</h1>\n<h4>Ingredientes</h4>\n<p>Necesitas harina, huevos y leche.</p>\n<h4>Preparación</h4>\n<p>Mezcla todo y hornea 30 minutos.</p>\n`,
    },
  },
  {
    slug: "parrafos",
    title: "Párrafos",
    summary:
      "El párrafo es el bloque de texto más común en cualquier página. Entender cómo lo trata el navegador evita errores de espaciado que se ven por todos lados.",
    playgroundCode: `<p>Este es el primer párrafo. Tiene varias palabras y ocupa varias líneas cuando el navegador lo necesita.</p>\n<p>Este   es   el   segundo   párrafo,   con      espacios      extra   en   el código.</p>\n`,
    hint: "Observa que, aunque en el código el segundo párrafo tiene muchos espacios seguidos, en el resultado se ven como uno solo: HTML colapsa los espacios en blanco.",
    explanationIntro: "El párrafo es la unidad básica de texto en HTML, y tiene un comportamiento que sorprende a quienes recién empiezan:",
    explanationRows: [
      { code: "<p>", desc: "Define un bloque de texto independiente. El navegador le agrega un margen antes y después por defecto." },
      { code: "<br>", desc: "Fuerza un salto de línea dentro del mismo bloque, sin crear un párrafo nuevo. Se usa poco y con cuidado." },
      { code: "Colapso de espacios en blanco", desc: "Varios espacios, tabulaciones o saltos de línea seguidos en el código se muestran como un solo espacio en el resultado." },
    ],
    tip: "Si necesitas separar bloques de texto, usa otro <p>, no varios <br> seguidos: así el navegador aplica el espaciado correcto automáticamente.",
    extra: "El espacio que ves entre párrafos no es parte de la etiqueta <p>: es un margen que el navegador aplica por defecto, y se puede ajustar (o quitar) con CSS.",
    commonError: "Usar <br><br> para simular la separación entre párrafos en vez de cerrar uno y abrir otro <p>; o anidar un <p> dentro de otro <p> (no está permitido).",
    nextStepText: "Ya sabes cómo se comporta el texto en bloques. Ahora veamos cómo resaltar palabras específicas dentro de ese texto.",
    challenge: {
      description: "Este párrafo usa <br><br> para separar dos ideas. Sepáralas en dos etiquetas <p> independientes.",
      code: `<p>Esta es la primera idea.<br><br>Esta es la segunda idea, separada con brs en vez de un párrafo nuevo.</p>\n`,
    },
  },
  {
    slug: "formato-de-texto",
    title: "Formato de texto",
    summary:
      "Dentro de un párrafo, algunas palabras necesitan más peso que otras. HTML tiene etiquetas para eso, pero no todas significan lo mismo.",
    playgroundCode: `<p>Este paso es <strong>obligatorio</strong>, no lo saltes.</p>\n<p>El resultado fue <em>sorprendentemente</em> bueno.</p>\n<p>Busca la palabra <mark>clave</mark> en el texto.</p>\n<p>Texto normal con <small>una nota al pie más pequeña</small>.</p>\n<p>El agua es H<sub>2</sub>O, y 10<sup>2</sup> es 100.</p>\n`,
    hint: "Prueba cambiar <strong> por <b> y <em> por <i>: visualmente no cambia nada, pero el significado que le das al texto sí.",
    explanationIntro: "Estas etiquetas dan formato a palabras dentro de un texto, cada una con un propósito distinto:",
    explanationRows: [
      { code: "<strong>", desc: "Marca texto como importante. El navegador lo muestra en negrita, pero el significado (importancia) es lo que realmente aporta." },
      { code: "<em>", desc: "Marca énfasis, como si se dijera con otro tono de voz. El navegador lo muestra en cursiva." },
      { code: "<mark>", desc: "Resalta texto, como si estuviera marcado con un resaltador. Pensada originalmente para destacar coincidencias de búsqueda." },
      { code: "<small>", desc: "Texto secundario o de letra pequeña, como notas legales o aclaraciones." },
      { code: "<sub> / <sup>", desc: "Texto subíndice y superíndice, para fórmulas químicas, exponentes o notas." },
    ],
    tip: "<strong> y <em> tienen significado; <b> y <i> son solo apariencia visual. Si el texto es realmente importante o enfatizado, usa <strong>/<em>.",
    extra: "Los lectores de pantalla pueden cambiar el tono de voz al leer <strong> o <em>, pero ignoran <b> e <i> porque no aportan significado, solo estilo.",
    commonError: "Usar <b> o <i> cuando en realidad quieres dar importancia o énfasis reales al texto: se ven igual que <strong>/<em>, pero no comunican lo mismo a un lector de pantalla ni a un buscador.",
    nextStepText: "Terminaste el módulo de texto y contenido. El siguiente módulo trata sobre enlaces e imágenes: cómo conectar tu página con el resto de la web.",
    challenge: {
      description: "Este texto usa <b> e <i> donde en realidad se quiere dar importancia y énfasis reales. Cámbialos por <strong> y <em>.",
      code: `<p>Este paso es <b>obligatorio</b>, no lo saltes.</p>\n<p>El resultado fue <i>sorprendentemente</i> bueno.</p>\n`,
    },
  },
];

const enlacesLessons: RealLesson[] = [
  {
    slug: "enlaces",
    title: "Enlaces <a>",
    summary:
      "Los enlaces son lo que convierte páginas sueltas en la web. La etiqueta <a> es simple, pero tiene detalles de seguridad y accesibilidad que vale la pena dominar.",
    playgroundCode: `<p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Documentación de MDN</a> (se abre en una pestaña nueva)</p>\n<p><a href="#seccion-final">Ir directo al final de esta página</a></p>\n<p><a href="mailto:hola@ejemplo.com">Escríbenos un correo</a></p>\n\n<h2 id="seccion-final">Sección final</h2>\n<p>Llegaste usando el enlace de ancla de arriba.</p>\n`,
    hint: "Haz clic en el enlace \"Ir directo al final\" dentro del resultado y observa cómo la página salta a la sección con ese id.",
    explanationIntro: "La etiqueta <a> (anchor) crea un enlace. Su comportamiento depende de los atributos que le agregues:",
    explanationRows: [
      { code: "href", desc: "La dirección de destino: otra página, una URL externa, un correo, etc. Sin este atributo, el enlace no hace nada." },
      { code: 'target="_blank"', desc: "Abre el enlace en una pestaña nueva en vez de reemplazar la página actual." },
      { code: 'rel="noopener noreferrer"', desc: "Se agrega junto con target=\"_blank\" por seguridad: evita que la pestaña nueva pueda manipular la pestaña original." },
      { code: "#seccion-final", desc: "Un enlace de ancla: salta a un elemento de la misma página que tenga id=\"seccion-final\"." },
      { code: "mailto: / tel:", desc: "Abren el programa de correo o de llamadas del dispositivo con el destinatario ya escrito." },
    ],
    tip: 'El texto del enlace debe describir a dónde lleva ("Lee el artículo completo") en vez de algo genérico como "haz clic aquí" — ayuda a la accesibilidad y al SEO.',
    extra: "Un enlace de ancla como #seccion-final solo funciona si existe, en algún lugar de la página, un elemento con exactamente ese id.",
    commonError: 'Olvidar el atributo href (el enlace deja de ser enfocable con teclado y no hace nada), o usar target="_blank" sin agregar rel="noopener noreferrer".',
    nextStepText: "Ya sabes conectar páginas entre sí. Ahora veamos cómo mostrar imágenes dentro de ellas.",
    challenge: {
      description: 'Este enlace usa target="_blank" pero le falta rel="noopener noreferrer". Agrégalo.',
      code: `<p><a href="https://developer.mozilla.org" target="_blank">Documentación de MDN</a></p>\n`,
    },
  },
  {
    slug: "imagenes",
    title: "Imágenes <img>",
    summary:
      "La etiqueta <img> parece trivial, pero el atributo alt que casi todos olvidan es uno de los más importantes de todo HTML para accesibilidad.",
    playgroundCode: `<img src="https://placehold.co/320x180" alt="Ilustración de ejemplo con un rectángulo de color y texto placeholder" width="320" height="180">\n<p>La imagen de arriba tiene un texto alternativo descriptivo.</p>\n`,
    hint: "Cambia el texto de alt y luego, en las herramientas de desarrollador del navegador, busca cómo un lector de pantalla vería esa descripción.",
    explanationIntro: "La etiqueta <img> no tiene contenido ni etiqueta de cierre; toda su información va en atributos:",
    explanationRows: [
      { code: "src", desc: "La ruta o URL del archivo de imagen." },
      { code: "alt (descriptivo)", desc: "Describe la imagen en palabras. Lo usan los lectores de pantalla, los buscadores, y se muestra si la imagen no carga." },
      { code: 'alt=""', desc: "Un alt vacío, a propósito, para imágenes puramente decorativas: le dice al lector de pantalla que la ignore." },
      { code: "width / height", desc: "Reservan el espacio de la imagen en la página antes de que termine de cargar, evitando que el contenido salte." },
    ],
    tip: "Piensa el alt como si describieras la imagen por teléfono a alguien que no puede verla.",
    extra: "<img> no tiene etiqueta de cierre (no existe </img>); es un elemento vacío, igual que <br> o <meta>.",
    commonError: 'Omitir el atributo alt por completo, o rellenarlo con algo no descriptivo como alt="imagen" o alt="foto1".',
    nextStepText: "Ya sabes mostrar imágenes correctamente. Ahora veamos cómo escribir bien la ruta del atributo src.",
    challenge: {
      description: "A esta imagen le falta el atributo alt. Agrégale uno que describa lo que muestra.",
      code: `<img src="https://placehold.co/320x180" width="320" height="180">\n`,
    },
  },
  {
    slug: "rutas-relativas-y-absolutas",
    title: "Rutas relativas y absolutas",
    summary:
      "Casi todos los errores de \"la imagen no carga\" o \"el enlace no funciona\" vienen de una ruta mal escrita. Entender cómo se resuelven te ahorra ese dolor de cabeza.",
    playgroundCode: `<!-- Ruta absoluta: la dirección completa, funciona desde cualquier lugar -->\n<p><a href="https://developer.mozilla.org/es/">Ruta absoluta externa</a></p>\n\n<!-- Ruta relativa a la raíz: siempre empieza en la raíz del sitio -->\n<p><a href="/index.html">Ruta relativa a la raíz</a></p>\n\n<!-- Ruta relativa: depende de en qué carpeta está este mismo archivo -->\n<p><a href="./contacto.html">Ruta relativa (misma carpeta)</a></p>\n<p><a href="../inicio.html">Ruta relativa (sube una carpeta)</a></p>\n`,
    hint: "Estas rutas son solo de ejemplo (no llevan a páginas reales dentro de este playground); fíjate en la diferencia de símbolos entre cada una: https://, /, ./ y ../.",
    explanationIntro: "Existen tres formas de escribir una ruta en href o src:",
    explanationRows: [
      { code: "./archivo.html", desc: "Relativa: busca el archivo en la misma carpeta donde está el HTML actual." },
      { code: "../carpeta/archivo.html", desc: "Relativa: sube un nivel de carpeta antes de buscar. Cada ../ adicional sube un nivel más." },
      { code: "/ruta-desde-la-raiz.html", desc: "Relativa a la raíz: siempre empieza desde la raíz del sitio, sin importar en qué carpeta esté el archivo actual." },
      { code: "https://ejemplo.com/pagina", desc: "Absoluta: la dirección completa de otro sitio (o del propio), funciona desde cualquier lugar." },
    ],
    tip: "Si mueves tu archivo HTML a otra carpeta, las rutas relativas dentro de él pueden dejar de funcionar; una ruta relativa a la raíz o absoluta no se ve afectada.",
    extra: "Una ruta relativa se resuelve según dónde vive el archivo HTML que la contiene, no según dónde está el archivo al que apunta.",
    commonError: 'Usar una ruta absoluta del propio computador (como "C:\\Usuarios\\tú\\foto.png"), que solo funciona en esa máquina; o poner de más o de menos ../ al subir de carpeta.',
    nextStepText: "Terminaste el módulo de enlaces e imágenes. El siguiente módulo trata sobre cómo organizar el contenido de una página con divs, spans y etiquetas semánticas.",
    challenge: {
      description: "Este enlace tiene un ../ de más y apunta a una carpeta que no existe. Quítale un nivel para que suba solo una carpeta.",
      code: `<p><a href="../../contacto.html">Ir a contacto</a></p>\n`,
    },
  },
];

const organizacionLessons: RealLesson[] = [
  {
    slug: "divs-y-spans",
    title: "Divs y spans",
    summary:
      "Cuando ninguna etiqueta describe exactamente lo que necesitas agrupar, existen dos contenedores genéricos: <div> y <span>. Aprende cuándo usar cada uno.",
    playgroundCode: `<div class="tarjeta">\n  <h2>Ana Martínez</h2>\n  <p>Desarrolladora <span class="destacado">frontend</span> con 3 años de experiencia.</p>\n</div>\n`,
    hint: "Prueba envolver otra palabra del párrafo en un <span> y agrégale una segunda clase al <div> exterior.",
    explanationIntro:
      "<div> y <span> son contenedores genéricos: no significan nada por sí mismos, solo agrupan contenido para poder darle estilo o estructura con una clase.",
    explanationRows: [
      { code: "<div>", desc: "Contenedor de bloque: ocupa todo el ancho disponible y agrupa varios elementos." },
      { code: "<span>", desc: "Contenedor en línea: envuelve una parte de texto sin romper el flujo del párrafo." },
      { code: 'class="..."', desc: "Identifica el grupo para poder aplicarle estilos con CSS o seleccionarlo con JavaScript." },
    ],
    tip: "Usa <span> cuando necesites estilizar solo una parte de una línea de texto, y <div> cuando necesites agrupar varios elementos de bloque completos.",
    extra: "<div> y <span> no traen ningún estilo visual por defecto: son invisibles hasta que tú les aplicas CSS.",
    commonError: 'Usar <div> para todo, incluso donde ya existe una etiqueta más adecuada (como <p> o <button>). A este abuso se le conoce como "divitis" y hace el HTML menos legible y accesible.',
    nextStepText: "Ya sabes agrupar contenido de forma genérica. Ahora conoce las etiquetas que sí describen su significado: las semánticas.",
    challenge: {
      description: "Agrupa el título y el párrafo de abajo dentro de un <div class=\"perfil\"> y envuelve la palabra \"backend\" en un <span class=\"destacado\">.",
      code: `<!-- Agrupa estos dos elementos en un div, y envuelve "backend" en un span -->\n<h2>Carlos Ruiz</h2>\n<p>Desarrollador backend con experiencia en bases de datos.</p>\n`,
    },
  },
  {
    slug: "etiquetas-semanticas",
    title: "Etiquetas semánticas",
    summary:
      "\"Semántica\" significa significado. Una etiqueta semántica no solo agrupa contenido, sino que describe qué es. Eso mejora la accesibilidad, el SEO y la legibilidad de tu código.",
    playgroundCode: `<!-- Poco semántico: no dice nada sobre el propósito de cada parte -->\n<div class="titulo-principal">Mi Blog</div>\n<div class="boton" onclick="alert('Enviado')">Enviar</div>\n\n<!-- Semántico: el nombre de la etiqueta ya explica su función -->\n<h1>Mi Blog</h1>\n<button onclick="alert('Enviado')">Enviar</button>\n`,
    hint: "Haz clic en ambos \"botones\" del resultado: el <div> con onclick funciona, pero no es accesible ni enfocable con teclado como el <button> real.",
    explanationIntro: "Compara estas etiquetas semánticas con su equivalente genérico:",
    explanationRows: [
      { code: "<h1>", desc: "Comunica \"este es el título principal\", a diferencia de un <div> con solo apariencia de título." },
      { code: "<button>", desc: "Es enfocable con teclado y accesible para lectores de pantalla; un <div onclick> no lo es por defecto." },
      { code: "<strong>", desc: "Comunica \"esto es importante\", no solo \"esto se ve en negrita\" como haría un <span> con estilo." },
      { code: "<main>", desc: "Identifica el contenido principal de la página para navegación rápida y lectores de pantalla." },
    ],
    tip: "Antes de usar un <div> genérico, pregúntate si existe una etiqueta HTML que describa exactamente lo que estás construyendo.",
    extra: "Los lectores de pantalla permiten a las personas saltar directamente entre secciones semánticas (como <nav> o <main>) de una página, algo que no pueden hacer con <div>s genéricos.",
    commonError: "Elegir una etiqueta semántica solo por su apariencia visual por defecto, y no por su significado. Por ejemplo, usar <strong> únicamente porque quieres texto en negrita, cuando el texto no es realmente \"importante\".",
    nextStepText: "Ya entiendes por qué la semántica importa. Ahora conoce las etiquetas semánticas que forman el esqueleto de una página completa.",
    challenge: {
      description: "Reemplaza el <div class=\"boton\"> por un <button> real, manteniendo el mismo texto.",
      code: `<!-- Reemplaza este div por un button -->\n<div class="boton" onclick="alert('Hola')">Saludar</div>\n`,
    },
  },
  {
    slug: "section-article-nav-footer",
    title: "section, article, nav y footer",
    summary:
      "Estas seis etiquetas forman el esqueleto semántico de una página moderna: header, nav, main, section, article y footer. Con ellas, la estructura de tu HTML cuenta su propia historia.",
    playgroundCode: `<header>\n  <h1>Código Real</h1>\n  <nav>\n    <a href="#inicio">Inicio</a>\n    <a href="#blog">Blog</a>\n  </nav>\n</header>\n\n<main>\n  <section>\n    <h2>Últimos artículos</h2>\n    <article>\n      <h3>Aprende HTML</h3>\n      <p>Un lenguaje de marcado, no de programación.</p>\n    </article>\n  </section>\n</main>\n\n<footer>\n  <p>&copy; 2026 Código Real</p>\n</footer>\n`,
    hint: "Agrega un segundo <article> dentro del <section>, con su propio <h3> y <p>.",
    explanationIntro: "Cada una de estas etiquetas describe una parte específica de la estructura de una página:",
    explanationRows: [
      { code: "<header>", desc: "Cabecera introductoria de la página o de una sección: suele contener el título y la navegación." },
      { code: "<nav>", desc: "Agrupa los enlaces de navegación principal del sitio." },
      { code: "<main>", desc: "El contenido principal de la página. Debe existir una sola vez por página." },
      { code: "<section>", desc: "Agrupa contenido relacionado por tema, normalmente con su propio encabezado." },
      { code: "<article>", desc: "Contenido autónomo que tendría sentido distribuido por separado, como un post de blog o una noticia." },
      { code: "<footer>", desc: "Pie de página o de una sección: suele contener información de cierre, como derechos de autor." },
    ],
    tip: "Para elegir entre <section> y <article>, pregúntate: ¿este contenido tendría sentido por sí solo, sacado de esta página (como una noticia o un producto)? Si sí, es <article>.",
    extra: "Puedes tener varias etiquetas <section> o <article> en una misma página, pero solo debe existir un único <main>.",
    commonError: "Confundir <section> con <div>: usar <section> para cualquier agrupación puramente visual, sin que tenga un encabezado o un tema propio. Ahí un <div> es lo correcto.",
    nextStepText: "Terminaste el módulo de organización del contenido. El siguiente módulo trata sobre listas: cómo mostrar elementos ordenados y sin ordenar.",
    challenge: {
      description: "Cada div de abajo tiene un comentario indicando qué etiqueta semántica debería ser. Reemplázalos.",
      code: `<!-- Este div debería ser un header -->\n<div>\n  <h1>Mi sitio</h1>\n</div>\n\n<!-- Este div debería ser un nav -->\n<div>\n  <a href="#">Inicio</a>\n</div>\n\n<!-- Este div debería ser un footer -->\n<div>\n  <p>&copy; 2026</p>\n</div>\n`,
    },
  },
];

const listasLessons: RealLesson[] = [
  {
    slug: "listas-ordenadas",
    title: "Listas ordenadas",
    summary:
      "Cuando el orden importa —los pasos de una receta, un ranking— usas una lista ordenada. El navegador se encarga de numerarla por ti.",
    playgroundCode: `<ol>\n  <li>Precalienta el horno a 180°C</li>\n  <li>Mezcla los ingredientes secos</li>\n  <li>Hornea durante 25 minutos</li>\n</ol>\n`,
    hint: "Agrega un cuarto paso al final y observa cómo el navegador lo numera automáticamente como 4.",
    explanationIntro: "Una lista ordenada se construye con dos etiquetas y algunos atributos opcionales:",
    explanationRows: [
      { code: "<ol>", desc: "Contenedor de la lista ordenada. Le indica al navegador que numere cada elemento." },
      { code: "<li>", desc: "Cada elemento de la lista (\"list item\"), sin importar si está dentro de <ol> o <ul>." },
      { code: 'start="N"', desc: "Hace que la numeración empiece en N en vez de en 1." },
      { code: "reversed", desc: "Numera la lista de mayor a menor en vez de de menor a mayor." },
    ],
    tip: "Si reordenas los <li> en tu código, la numeración se actualiza sola: nunca necesitas tocar un número a mano.",
    extra: "Puedes anidar una lista dentro de otra: basta con colocar un <ol> o <ul> completo dentro de un <li>.",
    commonError: "Escribir el número dentro del propio texto, como <li>1. Precalienta el horno</li>, en vez de dejar que <ol> lo genere automáticamente.",
    nextStepText: "Ya sabes ordenar pasos. Ahora veamos las listas donde el orden no importa.",
    challenge: {
      description: "Estos pasos tienen el número escrito a mano dentro de cada elemento. Conviértelos en una lista <ol> correcta, sin números manuales.",
      code: `<!-- Convierte esto en una <ol> con <li> correctos, sin numerar a mano -->\n<p>1. Corta las verduras</p>\n<p>2. Cocina a fuego medio</p>\n<p>3. Sirve caliente</p>\n`,
    },
  },
  {
    slug: "listas-desordenadas",
    title: "Listas desordenadas",
    summary:
      "Cuando el orden de los elementos no importa —ingredientes, características de un producto— usas una lista desordenada, con viñetas en vez de números.",
    playgroundCode: `<h3>Ingredientes</h3>\n<ul>\n  <li>Harina</li>\n  <li>Huevos</li>\n  <li>Azúcar</li>\n</ul>\n`,
    hint: "Agrega dos ingredientes más a la lista y observa que el orden en que los escribas no cambia su significado.",
    explanationIntro: "La lista desordenada reutiliza <li> para cada elemento, igual que <ol>, pero cambia el contenedor:",
    explanationRows: [
      { code: "<ul>", desc: "Contenedor de la lista desordenada. El navegador muestra una viñeta antes de cada elemento." },
      { code: "<li>", desc: "Cada elemento, exactamente igual que en una lista ordenada." },
      { code: "<ul> dentro de <li>", desc: "Permite anidar una sublista dentro de un elemento, igual que con <ol>." },
    ],
    tip: "Los menús de navegación de casi cualquier sitio web están construidos con una <ul> dentro de un <nav>, y luego se les quita la viñeta con CSS.",
    extra: "La viñeta que ves por defecto es solo el estilo del navegador: se puede cambiar o quitar por completo con la propiedad CSS list-style.",
    commonError: "Usar <ul>/<li> solo por el estilo de viñeta que traen por defecto, en vez de porque el contenido realmente es una lista de elementos relacionados.",
    nextStepText: "Ya conoces las dos listas más comunes. Ahora veamos una tercera, pensada para pares de término y descripción.",
    challenge: {
      description: "Agrega dos ingredientes más dentro de la lista.",
      code: `<h3>Ingredientes</h3>\n<ul>\n  <li>Harina</li>\n  <!-- Agrega dos elementos más aquí -->\n</ul>\n`,
    },
  },
  {
    slug: "listas-de-definicion",
    title: "Listas de definición",
    summary:
      "Un glosario, las especificaciones de un producto, una lista de preguntas y respuestas: cuando tienes pares de término y descripción, existe una lista pensada justo para eso.",
    playgroundCode: `<dl>\n  <dt>HTML</dt>\n  <dd>Lenguaje de marcado que define la estructura de una página web.</dd>\n\n  <dt>CSS</dt>\n  <dd>Lenguaje que define los estilos visuales de una página web.</dd>\n</dl>\n`,
    hint: "Agrega un segundo <dd> debajo de \"HTML\" con otra descripción, y observa que un mismo término puede tener varias.",
    explanationIntro: "La lista de definición usa tres etiquetas en vez de dos:",
    explanationRows: [
      { code: "<dl>", desc: "Contenedor de la lista de definición (\"description list\")." },
      { code: "<dt>", desc: "El término que se define (\"description term\")." },
      { code: "<dd>", desc: "La descripción de ese término (\"description details\")." },
    ],
    tip: "Un mismo <dt> puede ir seguido de varios <dd> si el término tiene más de un significado o descripción.",
    extra: "<dl> es menos común que <ul>/<ol>, pero es la etiqueta correcta para glosarios, preguntas frecuentes y datos tipo \"etiqueta: valor\".",
    commonError: "Usar <dl>/<dt>/<dd> para un diálogo o conversación entre personas: su propósito semántico es un par término-descripción, no una secuencia de intervenciones.",
    nextStepText: "Terminaste el módulo de listas. El siguiente módulo trata sobre tablas: cómo organizar datos en filas y columnas.",
    challenge: {
      description: "El término \"JavaScript\" no tiene su descripción. Agrégale un <dd> con una definición breve.",
      code: `<dl>\n  <dt>JavaScript</dt>\n  <!-- Agrega aquí la descripción -->\n</dl>\n`,
    },
  },
];

const tablasLessons: RealLesson[] = [
  {
    slug: "estructura-de-una-tabla",
    title: "Estructura de una tabla",
    summary:
      "Una tabla organiza datos reales en filas y columnas, como un horario de clases o los resultados de un torneo. Tres etiquetas bastan para construir una.",
    playgroundCode: `<table>\n  <tr>\n    <td>Lunes</td>\n    <td>Matemáticas</td>\n  </tr>\n  <tr>\n    <td>Martes</td>\n    <td>Historia</td>\n  </tr>\n</table>\n`,
    hint: "Agrega una tercera fila con <tr> y dos <td>, siguiendo el mismo patrón que las anteriores.",
    explanationIntro: "Toda tabla se construye anidando estas tres etiquetas:",
    explanationRows: [
      { code: "<table>", desc: "Contenedor de la tabla completa." },
      { code: "<tr>", desc: "Una fila de la tabla (\"table row\")." },
      { code: "<td>", desc: "Una celda de datos dentro de una fila (\"table data\")." },
    ],
    tip: "Cuenta cuántos <td> tiene cada <tr>: todas las filas de una tabla bien formada deberían tener el mismo número de celdas.",
    extra: "Las tablas no tienen ningún borde visible por defecto; el que sueles ver en los ejemplos viene de CSS (border).",
    commonError: "Usar <table> para maquetar el diseño visual de una página (columnas, menús) en vez de para datos tabulares reales. Rompe la accesibilidad y no es responsive.",
    nextStepText: "Ya sabes construir la estructura básica. Ahora veamos cómo marcar cuáles celdas son encabezados.",
    challenge: {
      description: "A esta fila le falta una celda. Agrégale un segundo <td> con la materia \"Química\".",
      code: `<table>\n  <tr>\n    <td>Lunes</td>\n    <td>Matemáticas</td>\n  </tr>\n  <tr>\n    <td>Miércoles</td>\n    <!-- Agrega aquí el segundo <td> -->\n  </tr>\n</table>\n`,
    },
  },
  {
    slug: "encabezados-y-celdas",
    title: "Encabezados y celdas",
    summary:
      "No todas las celdas son iguales: algunas encabezan una columna o una fila. Usar la etiqueta correcta para ellas ayuda tanto a la vista como a la accesibilidad.",
    playgroundCode: `<table>\n  <thead>\n    <tr>\n      <th scope="col">Día</th>\n      <th scope="col">Materia</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Lunes</td>\n      <td>Matemáticas</td>\n    </tr>\n  </tbody>\n</table>\n`,
    hint: "Agrega una segunda fila dentro de <tbody> con otro día y otra materia.",
    explanationIntro: "Para las celdas de encabezado y para agrupar la tabla, existen etiquetas específicas:",
    explanationRows: [
      { code: "<th>", desc: "Celda de encabezado (\"table header\"), en vez de <td>. El navegador la muestra en negrita y centrada." },
      { code: 'scope="col"', desc: "Indica que ese <th> encabeza una columna completa." },
      { code: 'scope="row"', desc: "Indica que ese <th> encabeza una fila completa." },
      { code: "<thead> / <tbody>", desc: "Agrupan la fila de encabezado y el cuerpo de datos por separado." },
    ],
    tip: "Usa scope=\"col\" o scope=\"row\" en cada <th> para que un lector de pantalla anuncie correctamente a qué fila o columna pertenece una celda.",
    extra: "<thead> y <tbody> son opcionales, pero se recomiendan en tablas más grandes: ayudan a leer el código y a aplicar estilos por separado.",
    commonError: "Usar <td> con negrita por CSS para simular un encabezado, en vez de un <th> real: se ve igual, pero pierde el significado semántico para accesibilidad.",
    nextStepText: "Ya distingues celdas de datos y de encabezado. Ahora veamos cómo combinar varias celdas en una.",
    challenge: {
      description: "Esta primera fila usa <td>, pero debería ser una fila de encabezados. Cambia sus dos celdas a <th> con scope=\"col\".",
      code: `<table>\n  <tr>\n    <!-- Cambia estas dos celdas a <th scope="col"> -->\n    <td>Producto</td>\n    <td>Precio</td>\n  </tr>\n  <tr>\n    <td>Café</td>\n    <td>$3</td>\n  </tr>\n</table>\n`,
    },
  },
  {
    slug: "combinar-celdas",
    title: "Combinar celdas",
    summary:
      "A veces una celda necesita ocupar más de una columna o más de una fila, como un título que abarca toda la tabla. Dos atributos lo resuelven.",
    playgroundCode: `<table>\n  <tr>\n    <th colspan="2">Horario semanal</th>\n  </tr>\n  <tr>\n    <td>Lunes</td>\n    <td>Matemáticas</td>\n  </tr>\n</table>\n`,
    hint: "Cambia colspan=\"2\" por colspan=\"3\" y agrega una tercera columna en la fila de abajo para ver cómo se ajusta.",
    explanationIntro: "Estos dos atributos permiten que una celda ocupe más espacio del normal:",
    explanationRows: [
      { code: 'colspan="N"', desc: "Hace que la celda ocupe N columnas en vez de una sola." },
      { code: 'rowspan="N"', desc: "Hace que la celda ocupe N filas en vez de una sola." },
    ],
    tip: "Cuando una celda usa colspan=\"2\", esa fila debe tener una celda menos que las demás para que las columnas sigan alineadas.",
    extra: "colspan y rowspan se pueden combinar en la misma celda, para que ocupe un bloque rectangular de varias filas y columnas a la vez.",
    commonError: "Usar colspan o rowspan sin ajustar el número de celdas restantes en esa fila: la tabla queda descuadrada porque las columnas ya no coinciden entre filas.",
    nextStepText: "Terminaste el módulo de tablas. El siguiente módulo trata sobre formularios: cómo capturar información del usuario.",
    challenge: {
      description: "Este encabezado está separado en dos <th> con el mismo texto repetido. Únelos en un solo <th colspan=\"2\">.",
      code: `<table>\n  <tr>\n    <!-- Une estas dos celdas en un solo <th colspan="2"> -->\n    <th>Reporte mensual</th>\n    <th>Reporte mensual</th>\n  </tr>\n  <tr>\n    <td>Enero</td>\n    <td>$1200</td>\n  </tr>\n</table>\n`,
    },
  },
];

const formulariosLessons: RealLesson[] = [
  {
    slug: "etiqueta-form",
    title: "Etiqueta form",
    summary:
      "Todo formulario empieza con <form>, la etiqueta que agrupa los campos y define a dónde y cómo se envían los datos que el usuario escribe.",
    playgroundCode: `<form action="/enviar" method="post">\n  <label for="nombre">Nombre</label>\n  <input type="text" id="nombre" name="nombre">\n</form>\n`,
    hint: "Haz clic en el texto \"Nombre\" del resultado: el cursor salta directo al campo, gracias al for/id.",
    explanationIntro: "Un formulario básico usa estos elementos:",
    explanationRows: [
      { code: "<form>", desc: "Contenedor que agrupa todos los campos relacionados." },
      { code: "action", desc: "La dirección a la que se envían los datos cuando se completa el formulario." },
      { code: 'method="post"', desc: "Envía los datos ocultos en el cuerpo de la petición (en vez de en la URL, como hace \"get\")." },
      { code: '<label for="...">', desc: "Etiqueta de texto asociada al id de un input, para accesibilidad y para poder hacer clic en ella." },
    ],
    tip: "Al asociar <label for=\"nombre\"> con <input id=\"nombre\">, puedes hacer clic en el texto de la etiqueta y el cursor salta directo al campo.",
    extra: 'Si no defines method, el navegador usa "get" por defecto, lo que hace visibles los datos en la URL — nunca uses "get" para contraseñas u otra información sensible.',
    commonError: "No asociar un <label> con su input mediante for/id: un lector de pantalla no anuncia qué representa el campo, y el usuario no puede hacer clic en el texto para enfocarlo.",
    nextStepText: "Ya sabes agrupar y enviar un formulario. Ahora conoce los distintos tipos de campo que puedes usar dentro de él.",
    challenge: {
      description: "Este input no tiene un <label> asociado. Agrégale uno con for=\"correo\", enlazado al id del input.",
      code: `<form action="/enviar" method="post">\n  <!-- Agrega aquí un <label for="correo"> -->\n  <input type="text" id="correo" name="correo">\n</form>\n`,
    },
  },
  {
    slug: "inputs-y-tipos",
    title: "Inputs y tipos",
    summary:
      "El atributo type es el que decide cómo se comporta un <input>: como campo de texto, casilla, botón de opción o algo más. Elegir el correcto mejora la experiencia sin escribir una sola línea de JavaScript.",
    playgroundCode: `<form>\n  <label for="email">Correo</label>\n  <input type="email" id="email" name="email">\n\n  <p>\n    <input type="radio" id="plan-basico" name="plan" checked>\n    <label for="plan-basico">Plan básico</label>\n  </p>\n  <p>\n    <input type="radio" id="plan-pro" name="plan">\n    <label for="plan-pro">Plan pro</label>\n  </p>\n\n  <textarea placeholder="Cuéntanos algo más..."></textarea>\n</form>\n`,
    hint: "Haz clic en cada radio: al compartir el mismo name=\"plan\", solo uno puede estar seleccionado a la vez.",
    explanationIntro: "<input> es un elemento vacío (sin etiqueta de cierre) cuyo comportamiento cambia según su type:",
    explanationRows: [
      { code: 'type="email"', desc: "Valida automáticamente que el texto tenga forma de correo (algo@algo.algo)." },
      { code: 'type="password"', desc: "Oculta el texto escrito con puntos o asteriscos." },
      { code: 'type="checkbox"', desc: "Casilla independiente que se puede marcar o desmarcar sin afectar a otras." },
      { code: 'type="radio" + name', desc: "Botón de opción. Varios radios con el mismo name son mutuamente excluyentes." },
      { code: "<textarea>", desc: "Campo de texto multilínea. A diferencia de <input>, sí tiene etiqueta de cierre." },
    ],
    tip: 'Usa type="email" o type="number" en vez de type="text" cuando el dato tiene un formato esperado: el navegador valida el formato básico y muestra un teclado apropiado en móvil.',
    extra: 'Existen muchos más tipos de input (date, color, range, tel, url), cada uno con su propio control nativo del navegador.',
    commonError: "Dar el mismo name a checkboxes que deberían ser independientes, o dar distinto name a radios que deberían ser mutuamente excluyentes: rompe el comportamiento esperado del grupo.",
    nextStepText: "Ya conoces los tipos de campo más comunes. Ahora aprende a validar que el usuario los complete correctamente.",
    challenge: {
      description: "Estos radios deberían ser mutuamente excluyentes, pero tienen name distinto. Corrígelos para que ambos usen name=\"envio\".",
      code: `<form>\n  <!-- Dale a ambos inputs el mismo name="envio" -->\n  <input type="radio" id="envio-estandar" name="estandar">\n  <label for="envio-estandar">Envío estándar</label>\n\n  <input type="radio" id="envio-express" name="express">\n  <label for="envio-express">Envío exprés</label>\n</form>\n`,
    },
  },
  {
    slug: "validacion-basica",
    title: "Validación básica",
    summary:
      "El navegador puede validar un formulario sin necesidad de JavaScript: campos obligatorios, longitud mínima y hasta patrones con expresiones regulares.",
    playgroundCode: `<form id="registro">\n  <label for="usuario">Usuario</label>\n  <input type="text" id="usuario" name="usuario" required minlength="3">\n\n  <label for="clave">Contraseña</label>\n  <input type="password" id="clave" name="clave" required minlength="8">\n\n  <button type="submit">Crear cuenta</button>\n</form>\n\n<script>\n  document.getElementById('registro').addEventListener('submit', function (event) {\n    event.preventDefault();\n    alert('Formulario válido. Aquí normalmente lo enviarías a un servidor.');\n  });\n</script>\n`,
    hint: "Deja el usuario vacío y presiona \"Crear cuenta\": el navegador te avisa que el campo es obligatorio, sin ninguna línea de JavaScript de validación.",
    explanationIntro: "Estos atributos activan la validación nativa del navegador, sin JavaScript:",
    explanationRows: [
      { code: "required", desc: "El campo debe completarse antes de poder enviar el formulario." },
      { code: 'minlength="N" / maxlength="N"', desc: "Exige un mínimo o máximo de caracteres." },
      { code: 'pattern="..."', desc: "Exige que el valor coincida con una expresión regular." },
      { code: "placeholder", desc: "Texto de ejemplo dentro del campo. No es un valor real ni reemplaza a un <label>." },
    ],
    tip: "La validación nativa del navegador es un buen primer nivel, pero en un proyecto real siempre se complementa con validación en el servidor.",
    extra: 'Puedes personalizar el mensaje de error de la validación nativa con title="..." en un input que use pattern.',
    commonError: "Usar placeholder como si fuera un <label>: el texto de ejemplo desaparece en cuanto el usuario escribe, y no todos los navegadores lo asocian con accesibilidad como sí lo hace un <label> real.",
    nextStepText: "Terminaste el módulo de formularios. El siguiente módulo trata sobre multimedia: cómo incluir audio, video e iframes en tu página.",
    challenge: {
      description: "Este campo de contraseña no exige nada. Agrégale required y minlength=\"8\".",
      code: `<form>\n  <label for="clave-nueva">Nueva contraseña</label>\n  <!-- Agrega required y minlength="8" a este input -->\n  <input type="password" id="clave-nueva" name="clave-nueva">\n\n  <button type="submit">Guardar</button>\n</form>\n`,
    },
  },
];

const multimediaLessons: RealLesson[] = [
  {
    slug: "audio",
    title: "Audio <audio>",
    summary:
      "La etiqueta <audio> reproduce sonido directamente en el navegador, sin plugins ni reproductores externos. Sus reglas son casi idénticas a las de <video>.",
    playgroundCode: `<h1>Reproductor de audio</h1>\n<audio controls>\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">\n  Tu navegador no soporta la etiqueta de audio.\n</audio>\n`,
    hint: "Presiona play en el reproductor de arriba. Luego quita el atributo controls y observa que el audio deja de ser visible, aunque sigue existiendo en la página.",
    explanationIntro: "La etiqueta <audio> reproduce sonido sin necesidad de plugins externos. Estos son sus atributos más comunes:",
    explanationRows: [
      { code: "controls", desc: "Muestra los controles nativos del navegador (play, pausa, volumen). Sin este atributo, el usuario no puede controlar el audio." },
      { code: "<source>", desc: "Etiqueta hija que indica un archivo de audio. Puedes repetirla con distintos formatos como fallback." },
      { code: "autoplay", desc: "Reproduce el audio automáticamente al cargar la página. La mayoría de navegadores lo bloquean, sobre todo si tiene sonido." },
      { code: "loop", desc: "Repite el audio en bucle en cuanto termina." },
      { code: "Contenido de fallback", desc: "El texto dentro de <audio>...</audio> solo se muestra si el navegador no soporta la etiqueta." },
    ],
    tip: "Usa <source> en vez de un src directo en <audio> cuando quieras ofrecer más de un formato (mp3, ogg): el navegador probará cada uno hasta encontrar el que soporte.",
    extra: "Los navegadores bloquean el autoplay con sonido para evitar que las páginas reproduzcan audio sin que el usuario lo pida.",
    commonError: "Olvidar el atributo controls: el audio existe (e incluso podría reproducirse con autoplay), pero el usuario no tiene forma de pausarlo ni de saber que está ahí.",
    nextStepText: "Ya sabes reproducir audio. El video funciona de forma casi idéntica, pero con una regla extra sobre el autoplay.",
    challenge: {
      description: "A este audio le falta el atributo controls, así que el usuario no puede reproducirlo ni pausarlo. Agrégaselo.",
      code: `<audio>\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">\n  Tu navegador no soporta la etiqueta de audio.\n</audio>\n`,
    },
  },
  {
    slug: "video",
    title: "Video <video>",
    summary:
      "La etiqueta <video> incrusta un reproductor de video nativo. Comparte casi todos los atributos de <audio>, más algunos propios como poster y las dimensiones del reproductor.",
    playgroundCode: `<h1>Reproductor de video</h1>\n<video controls width="360" poster="https://placehold.co/360x203">\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">\n  Tu navegador no soporta la etiqueta de video.\n</video>\n`,
    hint: 'Reproduce el video. Luego agrega los atributos muted y autoplay a la etiqueta <video> y recarga: ahora sí se reproduce solo, porque el navegador permite autoplay sin sonido.',
    explanationIntro: "La etiqueta <video> comparte casi todos los atributos de <audio>, más un par propios:",
    explanationRows: [
      { code: "controls", desc: "Igual que en <audio>: muestra los controles nativos del navegador." },
      { code: "width / height", desc: "Definen el tamaño del reproductor dentro de la página." },
      { code: "poster", desc: "Imagen que se muestra antes de que el video empiece a reproducirse." },
      { code: "muted + autoplay", desc: "Combinación necesaria para que el navegador permita reproducir el video automáticamente al cargar la página." },
      { code: "loop", desc: "Repite el video en bucle en cuanto termina." },
    ],
    tip: "Si necesitas autoplay (por ejemplo, un video de fondo decorativo), agrega siempre muted: sin sonido, casi todos los navegadores lo permiten.",
    extra: "Igual que con <audio>, puedes usar varias etiquetas <source> con distintos formatos (mp4, webm) para que el navegador elija el que soporte.",
    commonError: "Poner autoplay sin muted esperando que el video se reproduzca solo: el navegador lo ignora en silencio y el video se queda pausado en el primer cuadro.",
    nextStepText: "Ya sabes incrustar audio y video propios. La última pieza de multimedia es el <iframe>, que incrusta contenido de otra página dentro de la tuya.",
    challenge: {
      description: "Este video tiene autoplay pero no se reproduce solo porque le falta muted. Agrégaselo.",
      code: `<video autoplay width="360">\n  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">\n</video>\n`,
    },
  },
  {
    slug: "iframes",
    title: "iframes <iframe>",
    summary:
      "Un <iframe> incrusta una página web completa dentro de otra, con su propio HTML, CSS y JS aislados. Es la base de reproductores de YouTube, mapas y widgets embebidos.",
    playgroundCode: `<h1>Contenido incrustado</h1>\n<iframe src="https://example.com" title="Página de ejemplo" width="100%" height="200" loading="lazy"></iframe>\n`,
    hint: "Cambia el src por otra dirección, por ejemplo https://developer.mozilla.org, y observa cómo el iframe carga una página completamente distinta dentro de la tuya.",
    explanationIntro: "Un <iframe> es básicamente una ventana de navegador dentro de tu página. Sus atributos más importantes son:",
    explanationRows: [
      { code: "src", desc: "La dirección de la página que se incrusta dentro del iframe." },
      { code: "title", desc: "Describe el contenido del iframe para lectores de pantalla. Obligatorio por accesibilidad, igual que alt en <img>." },
      { code: "width / height", desc: "El tamaño del recuadro donde se muestra el contenido incrustado." },
      { code: 'loading="lazy"', desc: "Retrasa la carga del iframe hasta que esté a punto de ser visible, mejorando el rendimiento de la página." },
      { code: "sandbox", desc: "Atributo opcional que restringe lo que puede hacer el contenido incrustado (scripts, formularios, popups); útil con contenido de terceros en el que no confías del todo." },
    ],
    tip: "Un iframe tiene su propio HTML, CSS y JS, completamente aislado del resto de tu página: los estilos de uno no afectan al otro.",
    extra: "Los reproductores de YouTube, los mapas de Google Maps y muchos widgets de redes sociales que ves incrustados en otras páginas casi siempre son un <iframe>.",
    commonError: "Omitir el atributo title: el iframe queda sin descripción para quienes usan un lector de pantalla, que solo escucharán \"marco sin título\".",
    nextStepText: "Terminaste el módulo de multimedia. El siguiente módulo es un proyecto final donde aplicarás todo lo aprendido en una página completa.",
    challenge: {
      description: "A este iframe le falta el atributo title. Agrégale uno que describa qué contenido muestra.",
      code: `<iframe src="https://example.com" width="100%" height="200"></iframe>\n`,
    },
  },
];

const proyectoFinalLessons: RealLesson[] = [
  {
    slug: "planifica-tu-proyecto",
    title: "Planifica tu proyecto",
    summary:
      "Antes de escribir contenido real, vas a bosquejar la estructura semántica de tu proyecto final: una página de presentación personal que usará todo lo que aprendiste en el curso.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Mi página de presentación</title>\n</head>\n<body>\n  <header>\n    <!-- Aquí irá tu nombre y un menú de navegación con enlaces a cada sección -->\n  </header>\n\n  <main>\n    <section id="sobre-mi">\n      <!-- Presentación: título, texto e imagen -->\n    </section>\n\n    <section id="habilidades">\n      <!-- Lista con tus habilidades -->\n    </section>\n\n    <section id="experiencia">\n      <!-- Tabla con tu experiencia -->\n    </section>\n\n    <section id="proyectos">\n      <!-- Tus proyectos, con video de demostración -->\n    </section>\n\n    <section id="preguntas-frecuentes">\n      <!-- Lista de definición con preguntas frecuentes -->\n    </section>\n\n    <section id="contacto">\n      <!-- Formulario de contacto -->\n    </section>\n  </main>\n\n  <footer>\n    <!-- Enlaces sociales y derechos de autor -->\n  </footer>\n</body>\n</html>\n`,
    hint: 'Este esqueleto no tiene contenido real todavía: fíjate en que cada <section> ya tiene el id con el que la vas a enlazar desde el menú de navegación.',
    explanationIntro: "Antes de llenar una página de contenido, vale la pena bosquejar su esqueleto semántico. Así se reparte tu proyecto final:",
    explanationRows: [
      { code: "<header>", desc: "Encabezado de la página completa: tu nombre y el menú de navegación." },
      { code: "<main>", desc: "Envuelve todo el contenido único de la página (el que no se repite en otras páginas)." },
      { code: '<section id="...">', desc: "Cada bloque temático del proyecto (sobre mí, habilidades, experiencia...); el id permite enlazarlo desde el menú." },
      { code: "<footer>", desc: "Cierre de la página: enlaces sociales y derechos de autor." },
    ],
    tip: "Escribir primero el esqueleto con comentarios, sin contenido real, te obliga a pensar en la jerarquía antes de perderte en los detalles de cada sección.",
    extra: 'Los id de cada <section> no son decorativos: en la siguiente lección el menú del <header> los usa como enlaces de ancla (<a href="#sobre-mi">).',
    commonError: "Meter todo el contenido en un único <div> gigante en vez de repartirlo en <header>, <main> y <footer>: funciona visualmente, pero pierde todo el significado semántico que ya aprendiste.",
    nextStepText: "Con el esqueleto planeado, en la siguiente lección vas a llenarlo con contenido real: texto, imágenes, una lista, una tabla, un formulario y multimedia.",
    challenge: {
      description: "A este esqueleto le falta la etiqueta <footer> de cierre. Agrégala después de </main>, con un comentario adentro.",
      code: `<body>\n  <header>\n    <!-- Nombre y navegación -->\n  </header>\n\n  <main>\n    <section id="sobre-mi">\n      <!-- Presentación -->\n    </section>\n  </main>\n\n  <!-- Agrega aquí la etiqueta <footer> de cierre -->\n</body>\n`,
    },
  },
  {
    slug: "construye-tu-pagina",
    title: "Construye tu página",
    summary:
      "Es hora de llenar el esqueleto con contenido real. Esta página combina, en un solo documento, casi todo lo que aprendiste en el curso: texto, imágenes, listas, tabla, formulario y multimedia.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Alex Rivera — Desarrollador web</title>\n</head>\n<body>\n  <header>\n    <h1>Alex Rivera</h1>\n    <nav>\n      <a href="#sobre-mi">Sobre mí</a>\n      <a href="#habilidades">Habilidades</a>\n      <a href="#experiencia">Experiencia</a>\n      <a href="#proyectos">Proyectos</a>\n      <a href="#contacto">Contacto</a>\n    </nav>\n  </header>\n\n  <main>\n    <section id="sobre-mi">\n      <h2>Sobre mí</h2>\n      <img src="https://placehold.co/120x120" alt="Foto de perfil de Alex Rivera" width="120" height="120">\n      <p>Soy <strong>desarrollador web</strong> y estoy terminando el curso de <em>Código Real</em>. Esta página está construida solo con HTML: cada sección usa algo distinto que aprendí en el curso.</p>\n      <audio controls>\n        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">\n        Tu navegador no soporta audio.\n      </audio>\n    </section>\n\n    <section id="habilidades">\n      <h2>Habilidades</h2>\n      <ul>\n        <li>HTML semántico</li>\n        <li>Formularios accesibles</li>\n        <li>Tablas de datos</li>\n      </ul>\n    </section>\n\n    <section id="experiencia">\n      <h2>Experiencia</h2>\n      <table>\n        <thead>\n          <tr>\n            <th scope="col">Puesto</th>\n            <th scope="col">Empresa</th>\n            <th scope="col">Año</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan="2">Estudiante de desarrollo web — Código Real</td>\n            <td>Actual</td>\n          </tr>\n        </tbody>\n      </table>\n    </section>\n\n    <section id="proyectos">\n      <h2>Proyectos</h2>\n      <article>\n        <h3>Landing de práctica</h3>\n        <p>Un video corto mostrando el proyecto en funcionamiento:</p>\n        <video controls width="320" poster="https://placehold.co/320x180">\n          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">\n          Tu navegador no soporta video.\n        </video>\n        <p><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">Ver más proyectos como este</a></p>\n      </article>\n    </section>\n\n    <section id="preguntas-frecuentes">\n      <h2>Preguntas frecuentes</h2>\n      <dl>\n        <dt>¿Dónde vives?</dt>\n        <dd>Remoto, disponible para trabajar desde cualquier lugar.</dd>\n        <dt>¿Qué tecnologías usas?</dt>\n        <dd>Por ahora, HTML. CSS y JavaScript vienen en los próximos cursos.</dd>\n      </dl>\n    </section>\n\n    <section id="contacto">\n      <h2>Contacto</h2>\n      <form>\n        <label for="nombre">Nombre</label>\n        <input type="text" id="nombre" name="nombre" required minlength="2">\n\n        <label for="correo">Correo</label>\n        <input type="email" id="correo" name="correo" required>\n\n        <label for="mensaje">Mensaje</label>\n        <textarea id="mensaje" name="mensaje" required></textarea>\n\n        <button type="submit">Enviar</button>\n      </form>\n\n      <iframe src="https://example.com" title="Ubicación aproximada" width="100%" height="150" loading="lazy"></iframe>\n    </section>\n  </main>\n\n  <footer>\n    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>\n    <a href="mailto:alex@ejemplo.com">alex@ejemplo.com</a>\n    <p>&copy; 2026 Alex Rivera</p>\n  </footer>\n</body>\n</html>\n`,
    hint: "Recorre el resultado de arriba a abajo: cada sección corresponde a algo que ya construiste por separado en un módulo anterior del curso, ahora combinado en una sola página real.",
    explanationIntro: "Esta página combina, en un solo documento, casi todo el curso. Revisa qué aporta cada sección:",
    explanationRows: [
      { code: "header + nav", desc: 'Organización semántica + enlaces de ancla (<a href="#sobre-mi">) para navegar dentro de la misma página.' },
      { code: "#sobre-mi", desc: "Texto y contenido (<strong>, <em>), una imagen con alt y un <audio> de presentación." },
      { code: "#habilidades", desc: "Lista desordenada (<ul>) del módulo de Listas." },
      { code: "#experiencia", desc: 'Una <table> completa con encabezados (<th scope="col">) y colspan, del módulo de Tablas.' },
      { code: "#proyectos", desc: '<article> con un <video> de demostración y un enlace externo seguro (target="_blank" rel="noopener noreferrer").' },
      { code: "#preguntas-frecuentes", desc: "Lista de definición (<dl>/<dt>/<dd>) del módulo de Listas." },
      { code: "#contacto", desc: "Un <form> con validación nativa (required, minlength) y un <iframe> de ubicación." },
    ],
    tip: "No necesitas memorizar todo esto de una vez: vuelve a la lección de cada módulo cuando no recuerdes un detalle. Este proyecto es la referencia que puedes reusar en tu propia página.",
    extra: "Esta misma estructura —header, main con varias section, footer— es la que usan la mayoría de páginas de presentación personal reales en la web.",
    commonError: 'Escribir el for del <label> distinto al id de su <input> (por ejemplo for="nombre" con id="name"): el navegador ya no relaciona la etiqueta con el campo, y hacer clic en el texto deja de enfocar el input.',
    nextStepText: "Tu página está completa. Ahora aprende cómo publicarla para que cualquiera pueda verla en internet, no solo tú en este editor.",
    challenge: {
      description: 'En este formulario el label "Correo" tiene for="email" pero el input tiene id="correo": no coinciden. Corrige el for para que coincida con el id.',
      code: `<form>\n  <label for="email">Correo</label>\n  <input type="email" id="correo" name="correo" required>\n</form>\n`,
    },
  },
  {
    slug: "publica-tu-trabajo",
    title: "Publica tu trabajo",
    summary:
      "Ya tienes el HTML completo. Esta última lección es conceptual: cómo nombrar y subir tu archivo para que cualquiera pueda ver tu página en internet, no solo tú en este editor.",
    playgroundCode: `<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Alex Rivera — Desarrollador web</title>\n  <meta name="description" content="Página de presentación de Alex Rivera: habilidades, experiencia, proyectos y contacto.">\n</head>\n<body>\n  <h1>Alex Rivera</h1>\n  <p>Este archivo debe guardarse exactamente como index.html para publicarse correctamente.</p>\n</body>\n</html>\n`,
    hint: "Fíjate en el nombre sugerido del archivo en el texto: index.html no es un nombre cualquiera, es una convención que los servidores web reconocen automáticamente.",
    explanationIntro: "Ya tienes el HTML: publicarlo es más sencillo de lo que parece. Estos son los pasos:",
    explanationRows: [
      { code: "index.html", desc: "El archivo principal de un sitio siempre se llama así: los servidores web lo sirven automáticamente al entrar a la raíz del dominio, sin que tengas que escribir el nombre del archivo en la URL." },
      { code: "GitHub Pages", desc: "Sube tu carpeta a un repositorio de GitHub y activa Pages en Settings → Pages: tu sitio queda publicado en una URL gratuita." },
      { code: "Netlify Drop", desc: "Alternativa sin usar git: arrastras la carpeta del proyecto a netlify.com/drop y obtienes un link público al instante." },
      { code: '<meta name="description">', desc: "El texto que buscadores y redes sociales muestran al compartir el link de tu página; sin él, muestran un resumen genérico o vacío." },
    ],
    tip: "Prueba siempre tu página abriendo el archivo index.html localmente en el navegador antes de subirla: si algo se ve mal ahí, se verá mal también publicado.",
    extra: "Las rutas relativas que usaste en tus <img> y <a> (del módulo de Enlaces e imágenes) siguen funcionando igual una vez publicado, siempre que subas también esos archivos junto al HTML.",
    commonError: 'Nombrar el archivo principal de otra forma (por ejemplo "pagina.html" o "Home.html"): la página existe y funciona, pero no carga sola al entrar a la URL raíz del sitio — hay que escribir el nombre completo en la dirección.',
    nextStepText: "¡Felicidades, terminaste el curso completo de HTML! Ya sabes construir y publicar una página real desde cero. Los cursos de CSS y JavaScript de Código Real están en camino para que le des estilo y comportamiento a lo que ya sabes construir.",
    challenge: {
      description: 'A este <head> le falta el <meta name="description"> que resume la página para buscadores y redes sociales. Agrégalo.',
      code: `<head>\n  <meta charset="UTF-8">\n  <title>Alex Rivera — Desarrollador web</title>\n</head>\n`,
    },
  },
];

export const htmlModules: CourseModule[] = [
  {
    slug: "introduccion-a-html",
    title: "Introducción a HTML",
    hasContent: true,
    lessons: introduccionLessons,
  },
  {
    slug: "estructura-del-documento",
    title: "Estructura del documento",
    hasContent: true,
    lessons: estructuraLessons,
  },
  {
    slug: "texto-y-contenido",
    title: "Texto y contenido",
    hasContent: true,
    lessons: textoLessons,
  },
  {
    slug: "enlaces-e-imagenes",
    title: "Enlaces e imágenes",
    hasContent: true,
    lessons: enlacesLessons,
  },
  {
    slug: "organizacion-del-contenido",
    title: "Organización del contenido",
    hasContent: true,
    lessons: organizacionLessons,
  },
  {
    slug: "listas",
    title: "Listas",
    hasContent: true,
    lessons: listasLessons,
  },
  {
    slug: "tablas",
    title: "Tablas",
    hasContent: true,
    lessons: tablasLessons,
  },
  {
    slug: "formularios",
    title: "Formularios",
    hasContent: true,
    lessons: formulariosLessons,
  },
  {
    slug: "multimedia",
    title: "Multimedia",
    hasContent: true,
    lessons: multimediaLessons,
  },
  {
    slug: "proyecto-final",
    title: "Proyecto final",
    hasContent: true,
    lessons: proyectoFinalLessons,
  },
];

export type AdjacentLesson = RealLesson & { moduleSlug: string };

export function getRealLessonBySlug(moduleSlug: string, lessonSlug: string) {
  const moduleIndex = htmlModules.findIndex((m) => m.slug === moduleSlug && m.hasContent);
  if (moduleIndex === -1) return null;
  const module = htmlModules[moduleIndex];
  const lessons = module.lessons as RealLesson[];
  const index = lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;

  const prevModule = htmlModules
    .slice(0, moduleIndex)
    .reverse()
    .find((m) => m.hasContent);
  const nextModule = htmlModules.slice(moduleIndex + 1).find((m) => m.hasContent);

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

export function getAllRealLessonParams() {
  return htmlModules
    .filter((m) => m.hasContent)
    .flatMap((m) => (m.lessons as RealLesson[]).map((l) => ({ module: m.slug, lesson: l.slug })));
}
