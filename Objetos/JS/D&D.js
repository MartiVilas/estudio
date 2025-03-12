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
}

