import "./norte.scss"; 
import { nadar } from "./norteA";
import { celda } from "./norteC";
import { alrededor } from "./norteD";
window.onload = function(){
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
    let textNode = document.createTextNode("Caminas hacia adelante en el calabozo");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("En el calabozo, sigues caminando recto, mirando al tu alrededor, preguntando en donde estas.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Justo entonces, te das cuenta que escuchas algo, como si fuera un río, una corriente de agua en alguna parte");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Ahí es cuenado vez en frente que hay una corriente de agua en frente de tí, y en el otro lado.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    document.body.appendChild(document.createElement("br"));
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/rio.jpg'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode('"Como vamos a cruzar para el otro lado?" Pregunta Ana. Miras al tu alrededor para ver que podes hacer."');
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "¿Que decides hacer?";
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = nadar type=button>Nadar</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML ="<div><button id = alrededor type=button>Mirar a tu alrededor</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML ="<div><button id = volver type=button>Volver a donde estabas</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    nadar();
    celda();
    alrededor();


    

	


};

