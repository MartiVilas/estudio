let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
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

function init(){
    coche.recorrer(125000)
    coche.recorrer(-100000)
    coche.arrancar()
    añadirAlDom("ex2", coche.toString());
}