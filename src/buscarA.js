import "./buscar.scss"; 
import { cambio } from "./buscarB";

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
    let textNode = document.createTextNode("Investigar la celda");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Buscas por toda parte por algo que podría ayudar a escapar. Lo único que vez en la zelda es una coma, esposas, y unas antorcahas al otro lado.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Vez al otro lado de la reja, donde vez una ");
    h3.appendChild(textNode);
    let b = document.createElement("b");
    let i = document.createElement("i");
    textNode = document.createTextNode("llave");
    i.appendChild(textNode);
    b.appendChild(i);
    h3.appendChild(b);
    textNode = document.createTextNode(" colgada, sin embargo, no puedes llegar debido por la reja");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/Llave.png'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    textNode = document.createTextNode("En ese momento se te ocurre algo. Le dices a Ana, que es chiquita que vaya por la llave..");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("'Va, así saliremos de esta junta.' Ana va a traves de la reja, y te va ayuda a conseguir la llave para abrir la puerta.");
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
    li.innerHTML = "<div><button id = abrir type=button>Abrir y salir</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    cambio();


    

	


};

