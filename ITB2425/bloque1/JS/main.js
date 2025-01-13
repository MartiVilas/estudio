/* console.log("Alo presidentes");

const x=5;
const y=15;
console.log(x+y);


console.log("Hola mundo!");
let nombre = "Manolo";
console.log("Bienvenido "+ nombre);


function init() {
  añadirAlDom("nombre", nombre());
  añadirAlDom("suma", suma());
}

function añadirAlDom(id, resultado) {
  const container = document.getElementById(id);
  let p = document.createElement("p");
  container.appendChild(p);
  p.textContent = resultado;
  p.setAttribute("class", "result");
}

function nombre() {
  let nombrePrompt = prompt("Dime tu nombre! ");
  let booleano = confirm("Es tu nombre " + nombrePrompt + " ?");

  if (booleano == true) {
    return "Bienvenido a mi página web "+ nombrePrompt;
  } else{
    nombrePrompt = prompt("Entonces cual es tu nombre?");
    return "Bienvenido a mi página web "+ nombrePrompt;
  }
}

function suma() {
  let num1 = parseInt(prompt("Dame el primer número a sumar"));
  let num2 = parseInt(prompt("Dame el segundo número a sumar"));

  let suma = num1 + num2;

  return "El resultado de la suma es " + suma;
}

*/

/*
for (let i = 0; i <= 10; i++){
    console.log("Número: "+i)
}
*/

let nota = 10
nota <=  5 ? console.log("suspendido"):console.log("aprobado")

/*
for (let i = 0; i < numUsuario; i++) {
  console.log((total += i));
}


for (let i = 1; i <= numUsuario; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

*/

/*
for (let i = 0; 1 <= numUsuario; i++){
    console.log("*" * i);
}




let randome = Math.floor(Math.random() * 101);
let numUsuario = prompt("Dime que número ") 

console.log(randome)
for (let i = 5; i > 0; i--) {

    if(numUsuario > randome){ 
    alert("El número randome está por debajo");
    numUsuario = prompt("Parece que no era ese prueba con otro: ");
    console.log(`Te quedan ${i} intentos`)

  } else if(numUsuario < randome){
    alert("El numero esta por encima");
    numUsuario = prompt("Parece que no era ese prueba con otro: "); 
    console.log(`Te quedan ${i} intentos`)    

  }else if (i>=0){
    console.log("Te has quedado sin intentos :(")

  }else if(numUsuario == randome){

    console.log("Exacto el numero era " + numUsuario + "!")


  }  
}

 for (let i = 2; i < numUsuario; i++) {
  if (numero % i === 0) {
      esPrimo = false;
      break;
  }
}


if (esPrimo) {
  resultado.textContent = `¡${numUsuario} es un número primo! 🎉`;
  resultado.style.color = "green";
} else {
  resultado.textContent = `No, ${numUsuario} no es un número primo. ❌`;
  resultado.style.color = "red";
}
*/

// Preguntamos al usuario que cantidad de números quiere, pero entre 1 i 30 máximo.
let numUsuario = prompt("Dime un valor inicial entre 1 i 30:");

//Hacemos el if para asegurarnos de que no pueda superar a 30
if (numUsuario>30){
  alert("El numero no puede ser mayor a 30!")
}

//Agarramos el div al que le hemos puesto un id contenedor.
let div = document.getElementById("contenedor");

// Creamos un bucle para que del 1 al numero que nos de el usuario cree el número que le toque

// y que lo añada a  al div contenedor para que se muestre por el html.
for (let num = 1; num <= numUsuario.valueOf(numUsuario); num++) {

  // Por cada número creamos el elemento p de parrafo
  let cuadro = document.createElement("p");

  //console.log(num % 2);
  // Por cada número creamos un texto en el que estará el numero.
  let numero = document.createTextNode(num);

  // Añadimos todas las modificaciones especificadas pares, impares y multiplos de tres.
  if (num % 2 == 0) {
    cuadro.setAttribute("class", "par");
  } else {
    cuadro.setAttribute("class", "impar");
  }
  if (num % 3 == 0) {
    cuadro.setAttribute("class", "multiplo");
  }

  // Para acabar añadimos al cuadro el número que toque
  cuadro.appendChild(numero);

  // Y despues añadimos dicho cuadro al div contenedor el cuadro que contiene el número.
  div.appendChild(cuadro);
}