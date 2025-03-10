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
    let persona = new Persona("Marti",89,100);
    console.log(persona);

    let guerrero = new Guerrero("Ulises",12,150,50,75);
    console.log(guerrero);
    console.log(guerrero.atacar(120));
    console.log(guerrero.recibirDaño(120));

    let mago = new Mago("Carlos",345,400,80,1500);
    console.log(mago);
    console.log(mago.lanzarHechizo(200,mago.inteligencia,150));
}

