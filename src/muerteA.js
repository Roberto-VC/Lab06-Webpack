import "./muerte.scss"; 
import { cambio } from "./muerteB";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 0);
    pr.setAttribute("max", 100);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let span = document.createElement("span");
    span.style.cssText = "color:red;font-weight:bold";
    let textNode = document.createTextNode("GAME OVER");
    span.appendChild(textNode);
    h1.appendChild(span);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Moriste, no pudiste escapar y nadie va encontrarte..");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("¡Vuelve al comienzo y mira otra manera para poder escapar!");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/muerte.jpg'; 
	document.body.appendChild(img);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "Epilogo";
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = epilogo type=button>Volver al inicio</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    cambio();


    

	


};

