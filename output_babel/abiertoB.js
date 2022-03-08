"not strict";

var _Celda = _interopRequireDefault(require("./Assets/Celda.mp3"));

var _Celda2 = _interopRequireDefault(require("./Assets/Celda.wav"));

var _Dungeon = _interopRequireDefault(require("./Assets/Dungeon.jpg"));

require("./abierto.scss");

var _abiertoA = require("./abiertoA");

var _abiertoD = require("./abiertoD");

var _abiertoC = require("./abiertoC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  let x = document.createElement("div");
  x.setAttribute("id", "progreso");
  x.setAttribute("class", "contenedor");
  document.body.appendChild(x);
  let pr = document.createElement("PROGRESS");
  pr.setAttribute("id", "ProgresoB");
  pr.setAttribute("value", 25);
  pr.setAttribute("max", 100);
  document.getElementById("progreso").appendChild(pr);
  let h1 = document.createElement("h1");
  h1.setAttribute = ("id", "Titulo");
  let textNode = document.createTextNode("Se abre la reja");
  h1.appendChild(textNode);
  document.body.appendChild(h1);
  let h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto1");
  textNode = document.createTextNode("Abris la puerta, y salis de la celda en donde estabas, pero ahora te enuentras en la nada de un calabozo.");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Somos libres! Bueno..., casi, necesitamos salir de aquí, ante que algo nos pase...");
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  var audio = document.createElement('audio');
  audio.id = "Audio";
  audio.controls = true;
  audio.autoplay = true;
  document.body.appendChild(audio);
  var source = document.createElement('source');
  source.src = "Assets/Celda.mp3";
  source.type = "audio/ogg";
  document.getElementById("Audio").appendChild(source);
  document.body.appendChild(document.createElement("br"));
  var img = document.createElement('img');
  img.alt = '';
  img.src = 'Assets/Dungeon.jpg';
  document.body.appendChild(img);
  h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto2");
  textNode = document.createTextNode("Saliste, pero ahora debes de encontrar tu camino para salir de este condenado calabozo.");
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "¿A que dirección se dirijen?";
  let ul = document.createElement("ol");
  ul.setAttribute = ("id", "decisiones");
  let li = document.createElement("li");
  li.setAttribute = ("id", "opcion1");
  li.innerHTML = "<div><button id = norte type=button >Norte</button>";
  ul.appendChild(li);
  li = document.createElement("li");
  li.setAttribute = ("id", "opcion2");
  li.innerHTML = "<div><button id = oeste type=button >Oeste</button>";
  ul.appendChild(li);
  li = document.createElement("li");
  li.setAttribute = ("id", "opcion2");
  li.innerHTML = "<div><button id = este type=button >Este</button>";
  ul.appendChild(li);
  detalles.appendChild(summary);
  detalles.appendChild(ul);
  document.body.appendChild(detalles);
  (0, _abiertoA.este)();
  (0, _abiertoD.oeste)();
  (0, _abiertoC.norte)();
};