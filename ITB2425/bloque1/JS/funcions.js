function init() {
    const letras = tecladoAlfanumerico();
    imprimirContenedor(letras);
    const numeros = tecladoNumerico();
    imprimirNum(numeros);
}

function añadirAlDom(id, resultado) {
    const container = document.getElementById(id);
    let p = document.createElement("p");
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute("class", "result");
}

function tecladoAlfanumerico() {
    let conenedorLetra = [];
    for (let i = 65; i <= 90; i++) {
        let letra = String.fromCharCode(i);
        conenedorLetra.push(letra);
    }
    return conenedorLetra;
}

function imprimirContenedor(contenedor) {
    for (let i = 0; i < contenedor.length; i++) {
        añadirAlDom("contenedorLetra", contenedor[i]);
    }
}

function tecladoNumerico() {
    let conenedorNum = [];
    let num0 = String.fromCharCode(48);
    for (let i = 49; i <= 57; i++) {
        let num = String.fromCharCode(i);
        conenedorNum.push(num);
    }
    conenedorNum.push(num0)
    return conenedorNum;
}

function imprimirNum(contenedor) {
    for (let i = 0; i < contenedor.length; i++) {
        añadirAlDom("contenedorNum", contenedor[i]);
    }
}