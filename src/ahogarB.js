import "./ahogar.scss"; 
import { cambio } from "./ahogarA";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 66);
    pr.setAttribute("max", 100);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let textNode = document.createTextNode("Decides escuchar la voz");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Esa voz hermosa que escuchas, te da la curiosidad de ver de que es, asi que giras tu cabeza para ver directamente al agua.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Justo al hacer eso, vez una cosa saliendo del agua, y te trae hacie el fondo.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var audio = document.createElement('audio');
    audio.id = "Audio"; 
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);
    var source = document.createElement('source');
    source.src = "Assets/Grito.wav";
    source.type = "audio/ogg";
    document.getElementById("Audio").appendChild(source);
    document.body.appendChild(document.createElement("br"));
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/sirena.png'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto2");
    textNode = document.createTextNode("Con eso, sientes como el agua esta llenando tu pulmones, y como estas perdiendo la vida.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    h3 = document.createElement("h2");
    h3.setAttribute = ("id", "Texto3");
    textNode = document.createTextNode("NOOOOOOOO!");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "??A que direcci??n se dirijen?";
    let ul = document.createElement("ul");
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

