import "./ignorar.scss"; 
import { cambio } from "./ignorarB";
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
    let textNode = document.createTextNode("Mejor es ignorarlo");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("Escuchas la voz y te senties tentado de ver. Sin embargo, decides que es mejor ignorar esa voz.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Mejor vez para adelante, y llegas al otro del ese fuente de agua..");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Sales del bote, y sigues adelante.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    var img = document.createElement('img'); 
    img.alt = '';
    img.src = 'Assets/salida1.jpg'; 
	document.body.appendChild(img);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto2");
    textNode = document.createTextNode("Seguis para adelante, y vez que una luz para adelante. Corres para ver que es, y encuentras que vez que es pared rota, donde esta la luz de afuera.");
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
    li.innerHTML = "<div><button id = epilogo type=button>Epilogo</button>"
    ul.appendChild(li);
    detalles.appendChild(summary);
    detalles.appendChild(ul);
    document.body.appendChild(detalles);
    cambio();


    

	


};

