import "./oeste.scss"; 
import { distraer } from "./oesteB";
import { hablar } from "./oesteC";
import { celda } from "./oesteD";
import { atacar } from "./oesteE";
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
    let textNode = document.createTextNode("Giras a la izquierda, y sigues ese camino en el calabozo");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Decides girar para al oeste, caminando para saber si hay una manera para salir de este lugar.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("En el pasillo, la única luz son las antorchas que estan presentes, y el ruido del agua callendo");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Ese frío sonido es roto por unos altos pasos, que llenan el pasillo de un gran eco");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    document.body.appendChild(document.createElement("br"));
    var audio = document.createElement('audio');
    audio.id = "Audio"; 
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);
    var source = document.createElement('source');
    source.src = "Assets/pasos.mp3";
    source.type = "audio/ogg";
    document.getElementById("Audio").appendChild(source);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode('"Que es eso?" Te dice Ana. Justo entonces, la poca luz que hay muestra a la vista el detras de un monstruo."');
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = '"¡Ay! ¿Que hacermos?';
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = distraer type=button>Creo una distracción y escabullirse</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML ="<div><button id = hablar type=button>Tratar de hablar</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion3");
    li.innerHTML ="<div><button id = atacar type=button>Atacarlo</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion4");
    li.innerHTML ="<div><button id = volver type=button>Volver a donde estabas</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    distraer();
    hablar();
    celda();
    atacar();


    

	


};

