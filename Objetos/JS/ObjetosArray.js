const diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

/*Hacer ejercicios find, some etc*/
function añadirAlDom(id, resultado) {
  const container = document.getElementById(id);
  let p = document.createElement("p");
  container.appendChild(p);
  p.textContent = resultado;
  p.setAttribute("class", "result");
}

function ex1Map() {
  let arrayNums = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];
  let total = arrayNums.reduce(
    (total, nota) => total + nota / arrayNums.length,
    0
  );
  console.log("La media de notas es " + total);
}

function ex2Map() {
  let arrayNums = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];
  let maxNota = arrayNums.find((nota) => nota >= 5);
  console.log("La primera nota superior a 5 es: " + maxNota);
}

function ex3Map() {
  let arrayNums = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];
  let notaPor2 = arrayNums.map((nota) => nota * 2);
  console.log("Las notas sobre 20 son " + notaPor2);
}

let coches = [
  ["seat", "Cordoba", 1997, 10000],
  ["Kia", "Sorento", 1994, 1000],
  ["seat", "Todelo", 2000, 10000],
  ["Fiat", "Bravo", 2010, 10200],
  ["Fiat", "500", 2010, 10000],
  ["Mercedes", "Calse B", 2001, 39000],
  ["seat", "Ibiza", 1993, 10100],
  ["Alfa Romeo", "Julieta", 2002, 10000],
  ["Alfa Romeo", "159", 2002, 10400],
  ["Mercedes", "Calse C", 2001, 1000],
  ["Alfa Romeo", "147", 1990, 10500],
  ["Fiat", "Punto", 1990, 999],
  ["Citroen", "Saxo", 1980, 10300],
  ["Renault", "Superc 5", 1980, 12000],
  ["BWM", "M3", 2020, 1000],
  ["Kia", "Picanto", 1990, 1000],
  ["Alfa Romeo", "spider", 1970, 14500],
  ["Mercedes", "Calse A", 1994, 60100],
  ["Mercedes", "Calse D", 2011, 21221],
];

function ex1Coches(array) {
  let currentYear = 2025;
  let arrayVacio = [];

  for (let i = 0; i < array.length; i++) {
    let marca = array[i][0];
    let año = array[i][2];

    if (marca !== "Alfa Romeo" && marca !== "Kia" && currentYear - año > 20) {
      arrayVacio.push(array[i]);
    }
  }

  return arrayVacio;
}

function ordenarPorPreciosCoches(array) {
  array.sort((a, b) => b[3] - a[3]);
  return array;
}

// 1er return: Retorna un array del resultado del map.
// 2do return: Dentro del map devuelve el array cambiado para cada coche.

function rebajaPrecio(array) {
    return array.map((coches) => {
      coches[3] = coches[3] * 0.8;
      return coches;
    });
  }

function init() {
  ex1Map();
  ex2Map();
  ex3Map();
  console.log(ex1Coches(coches));
  console.log(ordenarPorPreciosCoches(coches));
  console.log(rebajaPrecio(coches));
}
