import "./epilogo1.scss"; 
import { cambio } from "./epilogo1B";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 100);
    pr.setAttribute("max", 100);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let textNode = document.createTextNode("Somos libres!");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Saliste con Ana a través de la reja, esquivando el minotauro! ");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Ahora sos libre es este nuevo mundo para ver que haces! ");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("¡Felicitaciones!");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/salida2.jpg'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Vuelve al principio para ver otros finales de esta historia");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    let btn = document.createElement("button");
    btn.id = "inicio";
    btn.innerHTML = "Reiniciar";
    document.body.appendChild(btn);
    cambio();
};

