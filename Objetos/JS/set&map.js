function añadirAlDom(id, resultado) {
    const container = document.getElementById(id);
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
}

let array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
let set1 = new Set(array);

function borrarRepetidos(numeros){
    let newSet = new Set(numeros)
    return newSet
}



function init(){
    let repes = borrarRepetidos(array)
    console.log(repes)
}
