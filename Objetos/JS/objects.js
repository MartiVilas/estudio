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
  television.toString();
  console.log(television.getImporte())
  añadirAlDom("ex1","Importe: "+television.getImporte())
  añadirAlDom("ex2", crearNuevaTele().toString())
  let teleAJSON = JSON.stringify(television)
  añadirAlDom("ex3", teleAJSON)
  let jsonAstring = JSON.parse(teleAJSON)
 imprimirObjeto(jsonAstring,"ex3")
}



