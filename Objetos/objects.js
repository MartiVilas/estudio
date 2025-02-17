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
}


