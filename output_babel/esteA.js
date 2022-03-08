"not strict";

require("./este.scss");

var _esteB = require("./esteB");

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
  let textNode = document.createTextNode("Giras a la derecha y caminas para el este");
  h1.appendChild(textNode);
  document.body.appendChild(h1);
  let h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto1");
  textNode = document.createTextNode("Caminas para el este y sigues recto, pero al seguir caminando, descubrees que realmente no lleva a ninguna parte.");
  h3.appendChild(textNode);
  textNode = document.createElement("br");
  h3.appendChild(textNode);
  textNode = document.createTextNode('Solo hay una pared. "Hay que volver a donde estabamos." Te dice Ana.');
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  var img = document.createElement('img');
  img.alt = '';
  img.src = 'Assets/pared.jpg';
  document.body.appendChild(img);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "¿A que dirección se dirijen?";
  let ul = document.createElement("ul");
  ul.setAttribute = ("id", "decisiones");
  let li = document.createElement("li");
  li.setAttribute = ("id", "opcion1");
  li.innerHTML = "<div><button id = celda type=button>Volver</button>";
  ul.appendChild(li);
  detalles.appendChild(summary);
  detalles.appendChild(ul);
  document.body.appendChild(detalles);
  (0, _esteB.cambio)();
};