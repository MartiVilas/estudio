let titulo = document.getElementById("titulos");
let p = document.getElementById("txt");

titulo.textContent = "Titulo cambiado";
p.textContent = "Texto actualizado";


let foto = document.getElementById("foto");
foto.setAttribute("src","momo.jpg");
console.log(foto.src);


let parrafo = document.createElement("p");
parrafo.textContent = "Imagen Actualizada";
document.body.appendChild(parrafo);


let div = document.getElementById("contenedor");
let pDiv= document.createElement("p")
pDiv.textContent = "Este es un parrafo añadido";
div.appendChild(pDiv);