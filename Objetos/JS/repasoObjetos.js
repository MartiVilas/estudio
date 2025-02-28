function init(){
    añadirAlDom("todos1",comprobarTipo(arrayStrings));
    añadirAlDom("todos2",comprobarTipoPares(arrayMixto));

    añadirAlDom("alMenosUno1",comprobarTipoAlgunos(arrayLetras));
    añadirAlDom("alMenosUno2",comprobarPares(arrayNumerosMezclados));
    
    añadirAlDom("transforma1",arrayTransforma(arrayPalabras));
    añadirAlDom("transforma2",arrayMult(arrayNumeros,2));


    añadirAlDom("filtro1",arrayZ(arrayLetras));
    añadirAlDom("filtro2",multiplos5(arrayNumerosMezclados));

    añadirAlDom("busca1",primeroA5(arrayPalabras));
    añadirAlDom("busca2",ultimoPorP(arrayPalabrasConP));
    añadirAlDom("busca3",primeraT(arrayPalabras));
    añadirAlDom("busca4",ultimoPar(arrayMixto));

    añadirAlDom("acumula1",sumaTotal(arrayNumeros));
    añadirAlDom("acumula2",restaTotal(arrayNumerosImpares));
    añadirAlDom("acumula3",restaTotalInversa(arrayNumerosImpares));
    
}

// Arrays para hacer los ejercicios 
const arrayStrings = ["Hola", "Mundo", "JavaScript", "Código"];

const arrayMixto = ["Hola", 2, "Mundo", 4, "JS"];

const arrayNumeros = [2, 4, 6, 8, 10];

const arrayNumerosImpares = [1, 3, 5, 7, 9];

const arrayNumerosMezclados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayLetras = ["A", "B", "C", "D", "Zorro", "Zapato"];

const arrayPalabras = ["Casa", "Perro", "Gato", "Pelota", "Tigre"];

const arrayPalabrasConP = ["Pan", "Pelota", "Papel", "Pizarra"];

const arrayPalabrasConT = ["Taza", "Tigre", "Tomate", "Tortuga"];


function añadirAlDom(id, resultado) {
    const container = document.getElementById(id);
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
} 

function comprobarTipo(array){
   return array.every(elemento => typeof(elemento)=='string') ? "Son todos string":"No son todos string";
}

function comprobarTipoPares(array){
    return array.every(elemento => elemento%2==0) ? "Son todos pares":"No son todos pares";
 }

function comprobarTipoAlgunos(array){
    return array.some(elemento => elemento.length > 2)? "Al menos uno tiene longitud superior a 2": "Todos son menores a dos";
}

function comprobarPares(array){
    return array.some(elemento => elemento%2==0)? "Al menos uno es par":"No hay ningun par";
}

function arrayTransforma(array){
    return array.map(elemento => elemento.length).join(" - ");
}

function arrayMult(array, numMult){
    return array.map(numero => numero * numMult).join(" - ");
}

function arrayZ(array){
    return array.filter(elemento => elemento.startsWith("Z")).join(", ")
}

function multiplos5(array){
    return array.filter(elemento => elemento%5==0).join(" - ");
}


function primeroA5(array){
    return array.find(elemento => elemento.length>5);
}

function ultimoPorP(array){
    return array.reverse().find(elemento => elemento.startsWith('P'));
}

function primeraT(array){
    return array.findIndex(elemento => elemento.startsWith('T'));
}

function ultimoPar(array){
    return array.reverse().find(elemento => elemento%2==0);
}

function sumaTotal(array){
    return array.reduce((acumulador, elemento) => acumulador + elemento,0);
}

function restaTotal(array){
    return array.reduce((acumulador, elemento) => acumulador - elemento,0);
}

function restaTotalInversa(array){
    return array.reverse().reduce((acumulador, elemento) => acumulador - elemento,0);
}