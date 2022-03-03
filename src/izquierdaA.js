import "./izquierda.scss"; 
import { cambio } from "./izquierdaB";
window.onload = function(){
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
    let textNode = document.createTextNode("Giras para la izquierda");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Giras para la izquierda y te diriges en esa dirección.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Sin embargo, al dar unos pasos en ese camino, el suelo se abre, y te caes al fondo");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    h3.setAttribute = ("id", "Texto2");
    textNode = document.createTextNode("Una caída de 10 metros es, y golpeandote el cuerpo, sentis como la vida sale de tu cuerpo");
    document.body.appendChild(h3);
    var audio = document.createElement('audio');
    audio.id = "Audio"; 
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);
    var source = document.createElement('source');
    source.src = "Assets/trampa.wav";
    source.type = "audio/ogg";
    document.getElementById("Audio").appendChild(source);
    h3 = document.createElement("h2");
    h3.setAttribute = ("id", "Texto3");
    textNode = document.createTextNode('"Noooooooo!!!"');
    document.body.appendChild(h3);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "Epilogo";
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = epilogo type=button>Epilogo</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    cambio();


    

	


};

