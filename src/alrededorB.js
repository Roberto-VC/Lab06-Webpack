import "./alrededor.scss"; 
import { ahogar } from "./alrededorA";
import { ignorar } from "./alrededorC";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 50);
    pr.setAttribute("max", 100);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let textNode = document.createTextNode("Decides investigar a tu alrededor");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Miras al rededor si hay algo que te ayuda a cruzar al otro lado del agua");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Ahí te encuentras con bote que estas ahí. Agarras ese bote, y lo empujas");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    document.body.appendChild(document.createElement("br"));
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/bote.jpg'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Al subirte de al bote, te mueves al otro, pero al llegar a la mitad, sientes mover el bote.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Escuchas una voz cantando hermosa viniendo del agua.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("'Que voz más hermosa...' dice Ana");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var audio = document.createElement('audio');
    audio.id = "Audio"; 
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);
    var source = document.createElement('source');
    source.src = "Assets/cantar.mp3";
    source.type = "audio/ogg";
    document.getElementById("Audio").appendChild(source);
    document.body.appendChild(document.createElement("br"));
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "¿Que decides hacer?";
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = agua type=button>Mirar al agua</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML ="<div><button id = ignorar type=button>Ignorar y seguir adelante</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    ahogar();
    ignorar();


    

	


};

