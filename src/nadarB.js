import "./nadar.scss"; 
import { cambio } from "./nadarA";
window.onload = function(){
    let x = document.createElement("div");
    x.setAttribute("id", "progreso");
    x.setAttribute("class", "contenedor");
    document.body.appendChild(x);
    let pr = document.createElement("PROGRESS");
    pr.setAttribute("id", "ProgresoB");
    pr.setAttribute("value", 33);
    pr.setAttribute("max", 100);
    document.getElementById("progreso").appendChild(pr);
    let h1 = document.createElement("h1");
    h1.setAttribute = ("id", "Titulo");
    let textNode = document.createTextNode("Decides nada");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto1");
    textNode = document.createTextNode("El agua es algo profunda, y son unos cuatro metros para el otro lado. Parace sencillo de realizar..");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Al saltar del agua, empiezas al nadar para el otro lado.");
    h3.appendChild(textNode);
    document.body.appendChild(h3);
    h3 = document.createElement("h3");
    h3.setAttribute = ("id", "Texto2");
    textNode = document.createTextNode("Sin embargo, sentis algo en la pierna en la mitad del camino, y antes de darte cuenta de que es, te trae al fondo.");
    h3.appendChild(textNode);
    textNode = document.createElement("br");
    h3.appendChild(textNode);
    textNode = document.createTextNode("Tratas de escapara de lo que se sea que es, pero sientes como tu pulmones se llenan de agua, y tu cuerpo le cuesta moverse y respirar.");
    document.body.appendChild(h3);
    h3.appendChild(textNode);
    h3 = document.createElement("h2");
    h3.setAttribute = ("id", "Texto3");
    textNode = document.createTextNode('"Noooooooo!!!"');
    h3.appendChild(textNode);
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

