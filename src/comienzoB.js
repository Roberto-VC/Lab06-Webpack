import "./comienzo.scss"; 
import { cambio } from "./comienzoA";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 0);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let textNode = document.createTextNode("Despierta..., por favor despierta");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto");
    textNode = document.createTextNode("Soñando, escuchas una voz, pero suena bastante real para ser fictia");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "Opciones";
    let ul = document.createElement("ul");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = despertar type=button>Despierta</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    cambio();


    

	


};

