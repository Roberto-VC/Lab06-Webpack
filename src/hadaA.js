import "./hada.scss"; 
import { fuerza } from "./hadaB";
import { buscar } from "./hadaC";
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
    let textNode = document.createTextNode("Y ves en contacto a un hada");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Finalmente despertaste! Estaba muy preocupado por tí.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("El hada estaba viendote direactemene.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/Hadita.png'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto2");
    textNode = document.createTextNode("Me llamo Ana. Desperte contigo en este lugar, y no se que paso y por que estamos aquí!");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/Calabozo.jpg'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto3");
    document.body.appendChild(h3);
    textNode = document.createTextNode("No tengo idea en donde estamos, y tenemos que salir de aquí! Tal vez tu puedes hacer algo?");
    h3.appendChild(textNode);
    let detalles = document.createElement("details");
    detalles.setAttribute = ("id", "details");
    let summary = document.createElement("summary");
    summary.setAttribute = ("id", "summary");
    summary.innerHTML = "¿Que eliges hacer?";
    let ul = document.createElement("ol");
    ul.setAttribute = ("id", "decisiones");
    let li = document.createElement("li");
    li.setAttribute = ("id", "opcion1");
    li.innerHTML = "<div><button id = fuerza type=button>Usar fuerza bruta</button>"
    ul.appendChild(li);
    li = document.createElement("li");
    li.setAttribute = ("id", "opcion2");
    li.innerHTML = "<div><button id = buscar type=button>Buscar algo para abrir la reja</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    fuerza();
    buscar();

    

	


};

