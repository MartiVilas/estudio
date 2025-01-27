function init(){

    añadirAlDom("dado1par1", dado1par1)
    console.log(dado1par1)
    añadirAlDom("dado2par1", dado2par1)
    console.log(dado2par1)
    añadirAlDom("dado1par2", dado1par2)
    console.log(dado1par2)
    añadirAlDom("dado2par2", dado2par2)
    console.log(dado2par2)

}

function añadirAlDom(id,resultado){
    const container = document.getElementById(id)
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
}


let dado1par1 = Math.floor(Math.random()*6) + 1;
let dado1par2 = Math.floor(Math.random()*6) + 1;

let dado2par1 = Math.floor(Math.random()*6) + 1;
let dado2par2 = Math.floor(Math.random()*6) + 1;


function comprobarGanador() {
    let suma1 = dado1par1 + dado2par1;
    let suma2 = dado1par2 + dado2par2;

    let mensaje;
    if (suma1 === suma2) {
        mensaje = "¡Empate!";
    } else if (suma1 > suma2) {
        mensaje = "¡Ha ganado el Jugador 1!";
    } else {
        mensaje = "¡Ha ganado el Jugador 2!";
    }

    // Mostrar el resultado en el DOM
    añadirAlDom("body", mensaje);   
}


function recargarPagina(){
    location.reload()
}

