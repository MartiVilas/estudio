let television = {
  nombre: "Samsung 42 pulgadas",
  categoria: "Televisores",
  unidades: 4,
  precio: 345.95,
  getImporte: function () {
    return this.precio * this.unidades;
  },
  toString: function () {
    imprimirObjeto(television, "ex1");
  },
};

function crearNuevaTele(){

  let nuevaTele = {
    nombre: prompt("Nombre de la nueva tele?")|| "Tele nueva indefinida",
    categoria: prompt("Nombre de categoria?") || "Televisores",
    unidades: parseInt(prompt("Cuantas hay?")) || 1,
    precio: parseFloat(prompt("Cual es el precio de la unidad?"))||120.0,
    getImporte: function () {
      return this.precio * this.unidades;
    },
    toString: function () {
      return `Televisor: ${this.nombre}, Categoría: ${this.categoria}, Unidades: ${this.unidades}, Precio: ${this.precio}, Importe Total: ${this.getImporte()}`;
    }
  }
  return nuevaTele
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

function imprimirObjeto(objeto, id) {
  for (const atributo in objeto) {
    añadirAlDom(id, `Atributo: ${objeto[atributo]}`);
  }
}

function añadirAlDom(id, resultado) {
  const container = document.getElementById(id);
  let p = document.createElement("p");
  container.appendChild(p);
  p.textContent = resultado;
  p.setAttribute("class", "result");
}

function init() {
  let teleAJSON = JSON.stringify(television)
  let jsonAstring = JSON.parse(teleAJSON)
  tablaDom("ex1",jsonAstring)
}

