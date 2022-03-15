import bote from "./Assets/bote.jpg"; 
import calobozo from "./Assets/calabozo.jpg"; 
import cantar from './Assets/cantar.mp3';
import grito from './Assets/grito.wav';
import hada from './Assets/Hadita.png';
import inciio from './Assets/inicio.jpg';
import incio from './Assets/inicio.mp3';
import llave from './Assets/Llave.png';
import min from './Assets/minotauro.jpg';
import muere from './Assets/muerte.jpg';
import pared from './Assets/pared.jpg';
import pasos from './Assets/pasos.mp3';
import rio from './Assets/rio.jpg';
import salida1 from './Assets/salida1.jpg';
import salida2 from './Assets/salida2.jpg';
import salida3 from './Assets/salida3.jpg';
import sirena from './Assets/sirena.png';
import trampa from './Assets/trampa.wav';
import UX from './Assets/UX.jpeg';


import { com } from "./indexB";
import { cambio } from "./indexA";
import "./index.scss"; 
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));

const saludo = "    hola".trimStart();
console.log(saludo);

window.onload = function(){
    let a = document.createElement("div");
    let v = Math.trunc(10.1);
    a.setAttribute("id", "todo");
    document.body.appendChild(a);
    console.log(v);
    let heade = document.createElement("HEADER");
    heade.setAttribute("id", "myHeader");
    document.getElementById("todo").appendChild(heade);
    let h2 = document.createElement("h2");
    h2.setAttribute = ("id", "nombre");
    let textNode = document.createTextNode("Creado por Roberto Vallecillos");
    h2.appendChild(textNode);
    document.getElementById("myHeader").appendChild(h2);
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.getElementById("myHeader").appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 0);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    textNode = document.createTextNode("Has sido capturado y debes de escapar");
    h1.appendChild(textNode);
    document.getElementById("todo").appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Titulo");
    textNode = document.createTextNode("Acabas de despertar, y te das cuenta que estas atrapado en un calabozo.")
    h3.appendChild(textNode);
    h3.appendChild(document.createElement("br"));
    textNode = document.createTextNode("Es tu misión escapar de este lugar y poder sobrevivir");
    h3.appendChild(textNode);
    document.getElementById("todo").appendChild(h3);
    let foot = document.createElement("FOOTER");
    foot.setAttribute("id", "myFooter");
    document.getElementById("todo").appendChild(foot);
    h2 = document.createElement("h2");
    h2.setAttribute = ("id", "clase");
    textNode = document.createTextNode("Sistemas y tecnologías web");
    h2.appendChild(textNode);
    document.getElementById("myFooter").appendChild(h2);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "Opciones";
    let ul = document.createElement("ul");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = jugar type=button>Jugar</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML = "<div><button id = comentario type=button>Ver comentario de UX</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.getElementById("todo").appendChild(detalles);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = './Assets/inicio.jpg'; 
	document.getElementById("todo").appendChild(img);
    var audio = document.createElement('audio');
    audio.id = "Audio"; 
    audio.controls = true;
    audio.autoplay = true;
    document.getElementById("todo").appendChild(audio);
    var source = document.createElement('source');
    source.src = "./Assets/inicio.mp3";
    source.type = "audio/ogg";
    document.getElementById("Audio").appendChild(source);
    com();
    cambio();

    

	


};

