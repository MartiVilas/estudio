let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: [2020,2021,2022,2023],
  encendido: false,
  kilometraje: 0,
  arrancar: function () {
    if (!this.encendido) {
      this.encendido = true;
    }
  },
  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
    }
  },
  recorrer: function(km){
    if(km<0){
        console.log("No se han actualizado los km, no se pueden restar km")
    }else{
    console.log("Km antes de la suma "+this.kilometraje)
    this.kilometraje += km
    console.log("Km despues de la suma "+this.kilometraje)
    }
  },
  toString: function(){
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Encendido: ${this.encendido}, Kilometraje: ${this.kilometraje}`;
  }
};


function añadirAlDom(id,resultado){
    const container = document.getElementById(id)
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
}

/**
 * Genera una tabla HTML en el DOM a partir de un objeto dado.
 *
 * @param {string} id - ID del contenedor donde se insertará la tabla.
 * @param {Object} objeto - Objeto cuyos atributos y valores se mostrarán en la tabla.
 * @param {Object} [opciones={}] - Opciones de personalización.
 * @param {boolean} [opciones.incluirFunciones=false] - Si es `true`, incluirá métodos del objeto.
 * @param {string} [opciones.claseTabla="tabla-estilo"] - Clase CSS para la tabla.
 */
function tablaDom(id, objeto, opciones = {}) {
  const contenedor = document.getElementById(id);
  if (!contenedor) {
    console.error(`No se encontró ningún elemento con id "id"`);
    return;
  }
  const { incluirFunciones = false, claseTabla = "tabla-estilo" } = opciones;
  const tabla = document.createElement("table");
  tabla.className = claseTabla;
  tabla.style.borderCollapse = "collapse";
  tabla.style.width = "100%";
  tabla.style.textAlign = "left";
  const filaAtributos = document.createElement("tr");
  const filaValores = document.createElement("tr");
  const claves = Object.keys(objeto).filter(clave => incluirFunciones || typeof objeto[clave] !== "function");
  for (const clave of claves) {
    const th = document.createElement("th");
    th.textContent = clave;
    th.style.border = "1px solid #ccc";
    th.style.padding = "8px";
    filaAtributos.appendChild(th);
    const td = document.createElement("td");
    td.style.border = "1px solid #ccc";
    td.style.padding = "8px";
    td.appendChild(formatearValor(objeto[clave]));
    filaValores.appendChild(td);
  }
  tabla.appendChild(filaAtributos);
  tabla.appendChild(filaValores);
  contenedor.appendChild(tabla);
}

/**
 * Formatea un valor para ser insertado en la tabla, manejando objetos y arrays.
 *
 * @param {*} valor - Valor a formatear.
 * @returns {HTMLElement} - Elemento HTML con el valor formateado.
 */
function formatearValor(valor) {
  if (Array.isArray(valor)) {
    const ul = document.createElement("ul");
    valor.forEach(item => {
      const li = document.createElement("li");
      li.appendChild(formatearValor(item));
      ul.appendChild(li);
    });
    return ul;
  } else if (typeof valor === "object" && valor !== null) {
    return document.createTextNode(JSON.stringify(valor, null, 2));
  } else {
    return document.createTextNode(valor);
  }
}

function init(){
    coche.recorrer(125000)
    coche.recorrer(-100000)
    coche.arrancar()
    tablaDom("ex1",coche);
}