"not strict";

var _bote = _interopRequireDefault(require("./Assets/bote.jpg"));

var _calabozo = _interopRequireDefault(require("./Assets/calabozo.jpg"));

var _cantar = _interopRequireDefault(require("./Assets/cantar.mp3"));

var _grito = _interopRequireDefault(require("./Assets/grito.wav"));

var _Hadita = _interopRequireDefault(require("./Assets/Hadita.png"));

var _inicio = _interopRequireDefault(require("./Assets/inicio.jpg"));

var _inicio2 = _interopRequireDefault(require("./Assets/inicio.mp3"));

var _Llave = _interopRequireDefault(require("./Assets/Llave.png"));

var _minotauro = _interopRequireDefault(require("./Assets/minotauro.jpg"));

var _muerte = _interopRequireDefault(require("./Assets/muerte.jpg"));

var _pared = _interopRequireDefault(require("./Assets/pared.jpg"));

var _pasos = _interopRequireDefault(require("./Assets/pasos.mp3"));

var _rio = _interopRequireDefault(require("./Assets/rio.jpg"));

var _salida = _interopRequireDefault(require("./Assets/salida1.jpg"));

var _salida2 = _interopRequireDefault(require("./Assets/salida2.jpg"));

var _salida3 = _interopRequireDefault(require("./Assets/salida3.jpg"));

var _sirena = _interopRequireDefault(require("./Assets/sirena.png"));

var _trampa = _interopRequireDefault(require("./Assets/trampa.wav"));

var _UX = _interopRequireDefault(require("./Assets/UX.jpeg"));

var _indexB = require("./indexB");

var _indexA = require("./indexA");

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  let a = document.createElement("div");
  a.setAttribute("id", "todo");
  document.body.appendChild(a);
  console.log("Hello");
  let heade = document.createElement("HEADER");
  heade.setAttribute("id", "myHeader");
  document.getElementById("todo").appendChild(heade);
  let h2 = document.createElement("h2");
  h2.setAttribute = ("id", "nombre");
  let textNode = document.createTextNode("Creado por Roberto Vallecillos");
  h2.appendChild(textNode);
  document.getElementById("myHeader").appendChild(h2);
  let x = document.createElement("div");
  x.setAttribute("id", "progreso");
  x.setAttribute("class", "contenedor");
  document.getElementById("myHeader").appendChild(x);
  let pr = document.createElement("PROGRESS");
  pr.setAttribute("id", "ProgresoB");
  pr.setAttribute("value", 0);
  document.getElementById("progreso").appendChild(pr);
  let h1 = document.createElement("h1");
  h1.setAttribute = ("id", "Titulo");
  textNode = document.createTextNode("Has sido capturado y debes de escapar");
  h1.appendChild(textNode);
  document.getElementById("todo").appendChild(h1);
  let h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Titulo");
  textNode = document.createTextNode("Acabas de despertar, y te das cuenta que estas atrapado en un calabozo.");
  h3.appendChild(textNode);
  h3.appendChild(document.createElement("br"));
  textNode = document.createTextNode("Es tu misión escapar de este lugar y poder sobrevivir");
  h3.appendChild(textNode);
  document.getElementById("todo").appendChild(h3);
  let foot = document.createElement("FOOTER");
  foot.setAttribute("id", "myFooter");
  document.getElementById("todo").appendChild(foot);
  h2 = document.createElement("h2");
  h2.setAttribute = ("id", "clase");
  textNode = document.createTextNode("Sistemas y tecnologías web");
  h2.appendChild(textNode);
  document.getElementById("myFooter").appendChild(h2);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "Opciones";
  let ul = document.createElement("ul");
  ul.setAttribute = ("id", "decisiones");
  let li = document.createElement("li");
  li.setAttribute = ("id", "opcion1");
  li.innerHTML = "<div><button id = jugar type=button>Jugar</button>";
  ul.appendChild(li);
  li = document.createElement("li");
  li.setAttribute = ("id", "opcion2");
  li.innerHTML = "<div><button id = comentario type=button>Ver comentario de UX</button>";
  ul.appendChild(li);
  detalles.appendChild(summary);
  detalles.appendChild(ul);
  document.getElementById("todo").appendChild(detalles);
  var img = document.createElement('img');
  img.alt = '';
  img.src = './Assets/inicio.jpg';
  document.getElementById("todo").appendChild(img);
  var audio = document.createElement('audio');
  audio.id = "Audio";
  audio.controls = true;
  audio.autoplay = true;
  document.getElementById("todo").appendChild(audio);
  var source = document.createElement('source');
  source.src = "./Assets/inicio.mp3";
  source.type = "audio/ogg";
  document.getElementById("Audio").appendChild(source);
  (0, _indexB.com)();
  (0, _indexA.cambio)();
};