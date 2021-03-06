"not strict";

require("./comentario.scss");

var _credits = _interopRequireDefault(require("./Assets/credits.mp3"));

var _comentarioA = require("./comentarioA");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  let heade = document.createElement("HEADER");
  heade.setAttribute("id", "myHeader");
  document.body.appendChild(heade);
  let h2 = document.createElement("h2");
  h2.setAttribute = ("id", "nombre");
  let textNode = document.createTextNode("Creado por Roberto Vallecillos");
  h2.appendChild(textNode);
  document.getElementById("myHeader").appendChild(h2);
  let x = document.createElement("div");
  x.setAttribute("id", "progreso");
  x.setAttribute("class", "contenedor");
  document.body.appendChild(x);
  let pr = document.createElement("PROGRESS");
  pr.setAttribute("id", "ProgresoB");
  pr.setAttribute("value", 0);
  pr.setAttribute("max", 100);
  document.getElementById("progreso").appendChild(pr);
  let atr = document.createElement("attribute");
  atr.setAttribute("id", "article");
  document.body.appendChild(atr);
  let h1 = document.createElement("h1");
  h1.setAttribute = ("id", "Titulo");
  textNode = document.createTextNode("Beneficios del UX Design");
  h1.appendChild(textNode);
  document.getElementById("article").appendChild(h1);
  let h3 = document.createElement("h4");
  h3.setAttribute = ("id", "Texto1");
  textNode = document.createTextNode("Una de las cosas mas importantes del UX design, es la vieja frase 'El tiempo es dinero'");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Proyectos que han sido abandonados, o han tenido que ser arreglados, son muchos, y se pierde mucho dinero en cosas");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("que podían haber estado bien desde el principio");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Un mal diseño hace que los clientes huyan y no vuelva, haciendo ese dinero que se pierda ");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Y se gasta mas arreglando eso en vez en ingresos en vez de algo hecho bueno desde el principio");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Lo más importante no es sea maravillosa, moderna, o que sea excitante. Lo imporante es tener a los clientes en la mente, y que esto peinsen que sea bueno");
  document.getElementById("article").appendChild(h3);
  var fig = document.createElement('fig');
  fig.setAttribute("id", "UX");
  document.getElementById("article").appendChild(fig);
  var img = document.createElement('img');
  img.alt = '';
  img.src = 'Assets/UX.jpeg';
  document.getElementById("UX").appendChild(img);
  var caption = document.createElement("FIGCAPTION");
  caption.innerHTML = "Si al UX design";
  document.getElementById("article").appendChild(img);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "Opciones";
  let ul = document.createElement("ol");
  ul.setAttribute = ("id", "decisiones");
  let li = document.createElement("li");
  li.setAttribute = ("id", "opcion1");
  li.innerHTML = "<div><button id = indice type=button>Volver al indice</button>";
  ul.appendChild(li);
  detalles.appendChild(summary);
  detalles.appendChild(ul);
  document.getElementById("article").appendChild(detalles);
  let foot = document.createElement("FOOTER");
  foot.setAttribute("id", "myFooter");
  document.body.appendChild(foot);
  h2 = document.createElement("h2");
  h2.setAttribute = ("id", "clase");
  textNode = document.createTextNode("Sistemas y tecnologías web");
  h2.appendChild(textNode);
  document.getElementById("myFooter").appendChild(h2);
  var audio = document.createElement('audio');
  audio.id = "Audio";
  audio.controls = true;
  audio.autoplay = true;
  document.body.appendChild(audio);
  var source = document.createElement('source');
  source.src = _credits.default;
  source.type = "audio/ogg";
  document.getElementById("Audio").appendChild(source);
  (0, _comentarioA.cambio)();
};