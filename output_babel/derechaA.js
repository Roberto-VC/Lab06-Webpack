"not strict";

var _salida = _interopRequireDefault(require("./Assets/salida4.jpg"));

require("./derecha.scss");

var _derechaB = require("./derechaB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  let x = document.createElement("div");
  x.setAttribute("id", "progreso");
  x.setAttribute("class", "contenedor");
  document.body.appendChild(x);
  let pr = document.createElement("PROGRESS");
  pr.setAttribute("id", "ProgresoB");
  pr.setAttribute("value", 75);
  pr.setAttribute("max", 100);
  document.getElementById("progreso").appendChild(pr);
  let h1 = document.createElement("h1");
  h1.setAttribute = ("id", "Titulo");
  let textNode = document.createTextNode("Giras a la derecha");
  h1.appendChild(textNode);
  document.body.appendChild(h1);
  let h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto1");
  textNode = document.createTextNode("De las dos direcciones, giras para la derecha, y te dirijes en esa dirección. ");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Sigues directo y encuentras otra reja, más grande.");
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  document.body.appendChild(document.createElement("br"));
  var img = document.createElement('img');
  img.alt = '';
  img.src = _salida.default;
  document.body.appendChild(img);
  h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto2");
  textNode = document.createTextNode("Ahí se te ocurre usar la llave que encontraste en el piso, así que la agarras y la usas ");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode("Abrís la rejas, y pasa al otro lado. Ahí enuenctras una puerta. Y la abres.");
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "Epilogo";
  let ul = document.createElement("ul");
  ul.setAttribute = ("id", "decisiones");
  let li = document.createElement("li");
  li.setAttribute = ("id", "opcion1");
  li.innerHTML = "<div><button id = epilogo type=button onclick>Epilogo</button>";
  ul.appendChild(li);
  detalles.appendChild(summary);
  detalles.appendChild(ul);
  document.body.appendChild(detalles);
  (0, _derechaB.cambio)();
};