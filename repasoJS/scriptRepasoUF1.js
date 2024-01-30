
function init() {
  console.log(compruebaString(arrayStrings));
  console.log(compruebaPares(arrayInt2));
  console.log(alMenosUnoLongitud(alMenosUno));
  console.log(alMenosUnNumPar(alMenosUnoPar));
  console.log(transformaElArray(transforma2));
  console.log(multiplicacion(mult, 2));
  console.log(nuevoArrayConZ(arrayEmpieza));
  console.log(multiplosDe5(arrayNum));
  console.log(tamañoSuperiorOIgualA5(superiorA5));
  console.log(ultimoElementoPorP(superiorA5));
  console.log(primerElementoT(palabraPorP));
  console.log(ultimoElementoPar(arrayInt2));
  console.log(sumaElementos(arrayInt));
  console.log(restaElementosTotal(restaElementos));

  añadirResultAlDOM("todos1", compruebaString(arrayStrings));
  añadirResultAlDOM("todos1", compruebaString(arrayStrings2));

  añadirResultAlDOM("todos2", compruebaPares(arrayInt));
  añadirResultAlDOM("todos2", compruebaPares(arrayInt2));

  añadirResultAlDOM("alMenosUno1", alMenosUnoLongitud(alMenosUno));
  añadirResultAlDOM("alMenosUno1", alMenosUnoLongitud(alMenosUno2));

  añadirResultAlDOM("alMenosUno2", alMenosUnNumPar(alMenosUnoPar));
  añadirResultAlDOM("alMenosUno2", alMenosUnNumPar(alMenosUnoPar2));

  añadirResultAlDOM("transforma1", transformaElArray(transforma));
  añadirResultAlDOM("transforma1", transformaElArray(transforma2));

  añadirResultAlDOM("transforma2", multiplicacion(mult, 2));
  añadirResultAlDOM("transforma2", multiplicacion(mult2, 3));

  añadirResultAlDOM("newArray1", nuevoArrayConZ(arrayEmpieza));
  añadirResultAlDOM("newArray1", nuevoArrayConZ(arrayEmpieza2));

  añadirResultAlDOM("newArray2", multiplosDe5(arrayNum));
  añadirResultAlDOM("newArray2", multiplosDe5(arrayNum2));

  añadirResultAlDOM("busca1", tamañoSuperiorOIgualA5(superiorA5));
  añadirResultAlDOM("busca1", tamañoSuperiorOIgualA5(superiorA52));

  añadirResultAlDOM("busca2", ultimoElementoPorP(palabraPorP));
  añadirResultAlDOM("busca2", ultimoElementoPorP(palabraPorP2))

  añadirResultAlDOM("busca3", primerElementoT(palabraPorT));
  añadirResultAlDOM("busca3", primerElementoT(palabraPorT2));

  añadirResultAlDOM("busca4", ultimoElementoPar(arrayInt));
  añadirResultAlDOM("busca4", ultimoElementoPar(arrayInt2));

  añadirResultAlDOM("acumula1", sumaElementos(arrayInt));
  añadirResultAlDOM("acumula1", sumaElementos(arrayInt2));

  añadirResultAlDOM("acumula2", restaElementosTotal(restaElementos));
  añadirResultAlDOM("acumula2", restaElementosTotal(restaElementos2));
}

/**
 * Bateria de constantes de las funciones que hay a continuacion
 */

const arrayStrings = [" Hola ", " Futbol ", " Sawa ", " Iglesia "];
const arrayStrings2 = [" Hola ", 12, " Sawa ", 45];

const arrayInt = [2, 4, 6, 8, 12];
const arrayInt2 = [2, 3, 4, 5, 6];

const alMenosUno = ["E", "JOE", "B", "C "];
const alMenosUno2 = ["E", "O", "B", "C "];

const alMenosUnoPar = [3, 5, 7, 9];
const alMenosUnoPar2 = [1, 2, 3, 5];

const transforma = ["Hola", "Futbol", "Sawa", "Iglesia"];
const transforma2 = ["Baloncesto", "Luka", "Naruto", "Prado"];

const mult = [2, 4, 6, 8];
const mult2 = [1, 2, 3, 4];

const arrayEmpieza = ["chimpancé", "zebra", "zoo", "ulises"];
const arrayEmpieza2 = ["china", "zimbaue", "israel", "zambia"];

const arrayNum = [13, 15, 20, 25];
const arrayNum2 = [5, 10, 14, 55];

const superiorA5 = ["Papa", "Mama", "Victor", "Martí"];
const superiorA52 = ["Xavi", "Pep", "Hola", "Popp"];

const palabraPorP = ["Pablo", "Pedro", "Martí", "Padre"];
const palabraPorP2 = ["Pasta", "Cocacola", "Pesto", "Ingenieria Aeronautica"];

const palabraPorT = ["Pablo","Trincao","Pesto","Xavi"];
const palabraPorT2 = ["Carlos","Teta","Ulises","Tonto"];

const restaElementos = [12, 3, 4, 5]; //resultado 0
const restaElementos2 = [9, 3, 3]; // resultado 3

/**
 * Funcion que printa en el html lo que le pases por parametro
 * @author Martñi Vilas
 */

function añadirResultAlDOM(identificador, resultado) {
  let contenedor = document.getElementById(identificador);
  let p = document.createElement("p");
  contenedor.appendChild(p);
  p.textContent = resultado;
  p.setAttribute("class", "result");
}

/** ej1
 * funcnion que comprueba que dentro del array solo haya strings
 * @author Marti Vilas
 */
function compruebaString(array) {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) == false) {
      return (
        "El array " + array.join(", ") + " es completamente Strings " + false
      );
    }
  }
  return "El array " + array.join(", ") + " es completamente Strings " + true;
}

/** ej2
 * funcion que comprueba que dentro el array solo haya numeros pares
 * @author Marti Vilas
 */
function compruebaPares(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      return (
        "El array " + array.join(", ") + " es completamente pares " + false
      );
    }
  }
  return "El array " + array.join(", ") + " es completamente pares " + true;
}

/** ej3
 * Funcion que compureba que dentro del array haya al menos una posicion que sea de mas de 2 caracteres
 * @authorn Marti Vilas
 */
function alMenosUnoLongitud(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 2) {
      return (
        "Al menos un elemento  del " +
        array.join(", ") +
        " tiene una longitud mayor que 2 " +
        true
      );
    }
  }
  return (
    "Al menos un elemento  del " +
    array.join(", ") +
    " tiene una longitud mayor que 2 " +
    false
  );
}

/** ej4
   *Funcion que comprueba que al menos uno de los numeros del array sea par
   @author Marti Vilas
  */
function alMenosUnNumPar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      return (
        "Al menos uno de los numero que hay en el array " +
        array.join(", ") +
        " es par " +
        true
      );
    }
  }
  return (
    "Al menos uno de los numero que hay en el array " +
    array.join(", ") +
    " es par " +
    false
  );
}

/** ej5
 * Creador de un elemento HTML que lo incluye dentro del div tranforma1
 * @author Marti Vilas
 */
function transformaElArray(array) {
  let arrayVacio = [];
  for (let i = 0; i < array.length; i++) {
    arrayVacio.push(array[i].length);
  }
  return (
    "El numero de caracteres de las posiciones del array " +
    array.join(", ") +
    " es igual a " +
    arrayVacio.join(", ")
  );
}

/** ej6
 * funcion que multiplica los numeros del array pasado por parametro, por el numero pasado por parametro
 * @author Marti Vilas
 */
function multiplicacion(array, numMult) {
  let arrayVacio = [];
  for (let i = 0; i < array.length; i++) {
    arrayVacio.push(array[i] * numMult);
  }
  return (
    "Los numeros del array " +
    array.join(", ") +
    " multicplicados por " +
    numMult +
    " dan " +
    arrayVacio.join(", ")
  );
}

/** ej7
 * funcion que recibe un array por parametro y devuelvo solo los elementos que empiezen por Z
 * @author MArti Vilas
 */

function nuevoArrayConZ(array) {
  let arrayVacio = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "z") {
      arrayVacio.push(array[i]);
    }
  }
  return (
    "Les paraules que començen per 'Z' del array " +
    "[ " +
    array.join(", ") +
    " ]" +
    " son " +
    arrayVacio.join(", ")
  );
}

/**
 * Funcion que devuelve solo los elementos que sean multiplos de 5
 * @author Marti Vilas
 */

function multiplosDe5(array) {
  arrayVacio = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0) {
      arrayVacio.push(array[i]);
    }
  }
  return (
    "Los numero del array " +
    "[ " +
    array.join(", ") +
    " ]" +
    " que son multiplos de 5 son: " +
    arrayVacio.join(", ")
  );
}

/**
 * Fucion que devuelve la primera palabra que haya en el array que sea mas larga o igual a 5 caracteres.
 * @author Marti Vilas
 */
function tamañoSuperiorOIgualA5(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      return (
        "La palabra " +
        array[i] +
        " tiene una longitud mas larga que 5 en el array " +
        array.join(", ")
      );
    }
  }
  return (
    "No hay ninguna palabra que su longitud sea mas grande que 5 en el array " +
    array.join(", ")
  );
}

/**
 * Funcion que devuelve el ultimo elemento que empieza por P
 * @author Martí Vilas
 */

function ultimoElementoPorP(array) {
  let palabraP;
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "P") {
      palabraP = array[i];
    }
  }
  return "La ultima palabra que empieza por 'P' en el array "+"[ "+array.join(", ")+"]"+" es la palabra: "+ palabraP
}


/**
 * Funcion que  devuelve la posicion del primer elemento que empiece por T
 */

function primerElementoT(array){
    for (let i = 0; i < array.length; i++) {
      if(array[i][0]=="T"){

        return "La palabra "+array[i]+" es la primera palabra que empieza por 'T' en el array "+array.join(", ")
      
      }
    }
    return "Ninguna palabra en el array "+array.join(", ")+" tiene una palabra que empeiza por 'T'"
}


/**
 * funcion que devuelve el ultimo elemento que sea par del array seleccionado.
 */

function ultimoElementoPar(array){
  let elementoPar;
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2==0){
          elementoPar=array[i]
        }
    }

    return "El ultimo elemento que es par en el "+"[ "+array.join(", ")+"]"+" es el elemento: "+ elementoPar
}


/**
 *  funcion que suma todos los elementos del array pasado por parametro
 * @author Marti Vilas
 */

function sumaElementos(array){
  let acumulado=0;
  for (let i = 0; i < array.length; i++) {
    acumulado+=array[i]       
  }
  return "El total de la suma del array "+array.join(", ")+" es de: "+ acumulado
}


function restaElementosTotal(array){
  
  let acumulado=0
  for (let i = 0; i < array.length; i++) {
      acumulado-=array[i]
  }
  return "El total de la resta del array "+array.join(", ")+" es de: "+ acumulado
}