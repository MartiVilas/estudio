class Persona {
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre,nivel,puntosDeVida){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida=puntosDeVida;
    }

    atacar(){
        prompt("El personaje ha atacado.")
    }

    toString(){
        console.log("To String");
        return this.nombre;
    }

    valueOf(){
        console.log("Value Of");
        return this.nivel
    }

}

class Guerrero extends Persona{
    fuerza;
    defensa;

    constructor(nombre,nivel,puntosDeVida,fuerza,defensa){
        super(nombre,nivel,puntosDeVida);
        this.fuerza = fuerza;
        this.defensa = defensa;
    }

    recibirDaño(daño){
        let defensa = this.puntosDeVida = (daño-this.defensa);
        return "El ataque enemigo ha hecho "+defensa + " de daño. ";
    }

    atacar(daño){
        let ataque = this.fuerza * daño
        return "El ataque ha hecho "+ataque+" de daño al enemigo. "; 
    }

}


class Mago extends Persona{
    inteligencia;
    mana;

    constructor(nombre,nivel,puntosDeVida,inteligencia,mana){
        super(nombre,nivel,puntosDeVida);
        this.inteligencia = inteligencia;
        this.mana = mana;
    }


    lanzarHechizo(mana,inteligencia,daño){
        let ataque = daño*inteligencia;
        this.mana -= mana;
        return "El ataque hizo "+ataque+" de daño. Maná actual: "+this.mana;
    }

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
    // Crear array de personajes
    const listaPersonajes = [
        new Guerrero("Thorgar", 10, 150, 20, 10),
        new Guerrero("Ragnar", 12, 170, 25, 15),
        new Guerrero("Baldur", 8, 140, 18, 12),
        new Mago("Merlin", 15, 100, 30, 200),
        new Mago("Gandalf", 18, 120, 35, 250),
        new Mago("Morgana", 14, 110, 28, 180)
    ];
    
    //Ordenar por nombre con el toString()
    let personajesOrdenados = listaPersonajes.sort();
    console.log("Personajes ordenados por nombre");
    console.log(personajesOrdenados);

    //Ordenador por nivel con el ValueOf()
    let personajesOrdenadosPorLvl = listaPersonajes.sort((a,b) => b - a);
    console.log("Personajes ordenador por lvl");
    console.log(personajesOrdenadosPorLvl)

    //Imprimir nombres
    console.log(`El nombre de los personajes es: ${listaPersonajes.join(", ")}`)


    for (let i = 0; i < listaPersonajes.length; i++) {
        let nuevoId = `tabla-personaje-${i}`; 
        let div = document.createElement("div");
        div.id = nuevoId;
        document.getElementById("ex1").appendChild(div);
        tablaDom(nuevoId, listaPersonajes[i]);
    }


}

