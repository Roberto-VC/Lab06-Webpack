"not strict";

require("./celda.scss");

var _crldaB = require("./crldaB");

var _crldaC = require("./crldaC");

var _crldaD = require("./crldaD");

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
  let textNode = document.createTextNode("Regresaste");
  h1.appendChild(textNode);
  document.body.appendChild(h1);
  let h3 = document.createElement("h3");
  h3.setAttribute = ("id", "Texto1");
  textNode = document.createTextNode("Estas en tu celda.");
  h3.appendChild(textNode);
  document.body.appendChild(h3);
  var img = document.createElement('img');
  img.alt = '';
  img.src = 'Assets/Dungeon.jpg';
  document.body.appendChild(img);
  let detalles = document.createElement("details");
  detalles.setAttribute = ("id", "details");
  let summary = document.createElement("summary");
  summary.setAttribute = ("id", "summary");
  summary.innerHTML = "¿Que decides hacer?";
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
  (0, _crldaB.norte)();
  (0, _crldaC.oeste)();
  (0, _crldaD.este)();
};