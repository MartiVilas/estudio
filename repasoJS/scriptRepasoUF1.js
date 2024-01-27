
function init() {
    console.log(compruebaString(arrayStrings));
    console.log(compruebaPares(arrayInt2));
    console.log(alMenosUnoLongitud(alMenosUno));
    console.log(alMenosUnNumPar(alMenosUnoPar));
    console.log(transformaElArray(transforma2));
    console.log(multiplicacion(mult,2));
    
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

  const transforma = ["Hola", "Futbol", "Sawa", "Iglesia"]
  const transforma2 = ["Baloncesto", "Luka", "Naruto", "Prado"]

  const mult = [2, 4, 6, 8]
  const mult2 = [1, 2, 3, 4]

  /** ej1
   * funcnion que comprueba que dentro del array solo haya strings
   * @author Marti Vilas
   */
  function compruebaString(array) {
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i]) == false) {
        return (
          "El array " +
          array.join(", ") +
          " es completamente Strings " +
          false
        );
      }
    }
    return (
      "El array " + array.join(", ") + " es completamente Strings " + true
    );
  }

  /**
   * Creador de un elemento HTML que lo incluye dentro del div todos1
   */
  let contenedor = document.getElementById("todos1");
  let p = document.createElement("p");
  contenedor.appendChild(p);
  p.textContent = compruebaString(arrayStrings);
  p.setAttribute("class", "result");
  /**
   * Creador de un elemento HTML que lo incluye dentro del div todos1
   */
  let contenedorString = document.getElementById("todos1");
  let pString = document.createElement("p");
  contenedorString.appendChild(pString);
  pString.textContent = compruebaString(arrayStrings2);
  pString.setAttribute("class", "result");

  /** ej2
   * funcion que comprueba que dentro el array solo haya numeros pares
   * @author Marti Vilas
   */
  function compruebaPares(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 != 0) {
        return (
          "El array " +
          array.join(", ") +
          " es completamente pares " +
          false
        );
      }
    }
    return (
      "El array " + array.join(", ") + " es completamente pares " + true
    );
  }

  /**
   * Creador de un elemento HTML que lo incluye dentro del div todos1
   */
  let contenedor2 = document.getElementById("todos2");
  let p2 = document.createElement("p");
  contenedor2.appendChild(p2);
  p2.textContent = compruebaPares(arrayInt);
  p2.setAttribute("class", "result");
  /**
   * Creador de un elemento HTML que lo incluye dentro del div todos1
   */
  let contenedorInt = document.getElementById("todos2");
  let pInt = document.createElement("p");
  contenedorInt.appendChild(pInt);
  pInt.textContent = compruebaPares(arrayInt2);
  pInt.setAttribute("class", "result");

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

  /**
   * Creador de un elemento HTML que lo incluye dentro del div alMenosUno1
   */
  let contenedor3 = document.getElementById("alMenosUno1");
  let p3 = document.createElement("p");
  contenedor3.appendChild(p3);
  p3.textContent = alMenosUnoLongitud(alMenosUno);
  p3.setAttribute("class", "result");

  /**
   * Creador de un elemento HTML que lo incluye dentro del div alMenosUno1
   */

  let contenedorAlMenosUno = document.getElementById("alMenosUno1");
  let pAlMenosUno = document.createElement("p");
  contenedorAlMenosUno.appendChild(pAlMenosUno);
  pAlMenosUno.textContent = alMenosUnoLongitud(alMenosUno2);
  pAlMenosUno.setAttribute("class", "result");


  /** ej4
   *Funcion que comprueba que al menos uno de los numeros del array sea par
   @author Marti Vilas
  */
  function alMenosUnNumPar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2==0) {
          return ("Al menos uno de los numero que hay en el array "+array.join(", ")+" es par "+true);
        }
    }
    return (("Al menos uno de los numero que hay en el array "+array.join(", ")+" es par "+false));
  }

  /**
   * Creador de un elemento HTML que lo incluye dentro del div alMenosUno2
   */
  let contenedor4 = document.getElementById("alMenosUno2");
  let p4 = document.createElement("p");
  contenedor4.appendChild(p4);
  p4.textContent = alMenosUnNumPar(alMenosUnoPar);
  p4.setAttribute("class", "result");

  /**
   * Creador de un elemento HTML que lo incluye dentro del div alMenosUno2
  */
  let contenedorAlMenosUnNumPar = document.getElementById("alMenosUno2");
  let pAlMenosUnNumPar = document.createElement("p");
  contenedorAlMenosUnNumPar.appendChild(pAlMenosUnNumPar);
  pAlMenosUnNumPar.textContent = alMenosUnNumPar(alMenosUnoPar2);
  pAlMenosUnNumPar.setAttribute("class", "result");


  /** ej5
   * Creador de un elemento HTML que lo incluye dentro del div tranforma1
  */
  function transformaElArray(array){
    let arrayVacio=[]
    for (let i = 0; i < array.length; i++) {
      arrayVacio.push(array[i].length) 
    }
    return ("El numero de caracteres de las posiciones del array "+array.join(", ")+" es igual a "+arrayVacio.join(", "));
  }
  /**
   * Creador de un elemento HTML que lo incluye dentro del div tranforma1
  */
  let contenedor5=document.getElementById("transforma1")
  let p5 = document.createElement("p");
  contenedor5.appendChild(p5)
  p5.textContent=transformaElArray(transforma)
  p5.setAttribute("class", "result")

  /**
   * Creador de un elemento HTML que lo incluye dentro del div tranforma1
  */
  let contenedorTranformaArray=document.getElementById("transforma1")
  let pTransformaArray = document.createElement("p");
  contenedorTranformaArray.appendChild(pTransformaArray)
  pTransformaArray.textContent=transformaElArray(transforma2)
  pTransformaArray.setAttribute("class", "result")


  /** ej6
   * funcion que multiplica los numeros del array pasado por parametro, por el numero pasado por parametro
   */ 
    function multiplicacion(array, numMult){
      let arrayVacio=[]
        for (let i = 0; i < array.length; i++) {
          arrayVacio.push(array[i]*numMult)
        }
        return ("Los numeros del array "+array.join(", ")+" multicplicados por "+ numMult+" dan "+arrayVacio.join(", "));
    }

  /**
   * Creador de un elemento HTML que lo incluye dentro del div tranforma2
  */
  let contenedor6=document.getElementById("transforma2")
  let p6 = document.createElement("p");
  contenedor6.appendChild(p6)
  p6.textContent=multiplicacion(mult,2)
  p6.setAttribute("class", "result")
  
  /**
   * Creador de un elemento HTML que lo incluye dentro del div tranforma2
  */
  let contenedorMulti=document.getElementById("transforma2")
  let pMulti = document.createElement("p");
  contenedorMulti.appendChild(pMulti)
  pMulti.textContent=multiplicacion(mult2,3)
  pMulti.setAttribute("class", "result")


  /** ej7
   * funcion que recibe un array por parametro y devuelvo solo los elementos que empiezen por Z
   */ 