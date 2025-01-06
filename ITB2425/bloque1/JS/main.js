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

let numUsuario = prompt("Dame un número: ");
var total = 0;

/*
for (let i = 0; i < numUsuario; i++) {
  console.log((total += i));
}


for (let i = 1; i <= numUsuario; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; 1 <= numUsuario; i++){
    console.log("*" * i);
}
*/

let randome = Math.floor(Math.random() * 101);

console.log(randome)
for (let i = 5; i > 0; i--) {
  if(numUsuario > randome){ 
  alert("El número randome está por debajo");
  numUsuario = prompt("Parece que no era ese prueba con otro: ");
} else if(numUsuario < randome){
  alert("El numero esta por encima");
  numUsuario = prompt("Parece que no era ese prueba con otro: "); 
}else if (numUsuario == randome){
  console.log("Exacto el numero era " + numUsuario + "!")
}
  console.log(`Te quedan ${i} intentos`)
}
