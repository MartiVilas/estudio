
let elemento = document.getElementById("titulo");
console.log(elemento.textContent);
elemento.textContent = "JS es el mejor lenguaje, aunque caotico";

console.log(elemento.textContent);
elemento.style.color='blue';

let contenedorBoton= document.getElementById("divBoton");
let boton = document.createElement("button");

contenedorBoton.appendChild(boton);
boton.textContent = "BOTON";
boton.id = "change-button"
boton.setAttribute('class','highlight')

console.log(boton.getAttribute("class"));
console.log(boton.getAttribute("id"));



