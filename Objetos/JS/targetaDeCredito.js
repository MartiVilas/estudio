class targetaDeCredito{
    
    //Propiedades solo poner las privadas y las que no quieres que esten en el constructor
    #cvv = '123';

    // Constructor
    constructor(numTargeta,fechaCaducidad,saldo,estado){
        this.numTargeta = numTargeta;
        this.#cvv;
        this.fechaCaducidad=fechaCaducidad;
        this.saldo=saldo;
        this.estado = estado;
    }

    // Métodos
    añadirDinero(nomina){
        this.saldo+=nomina
    }

    activarTargeta(){
        this.estado = true;
    }

    desactivarTargeta(){
        this.estado = false;
    }

    pagar(importe){
        this.saldo-=importe;
    }
    
    // Setters y Getters
    get cvv(){return this.#cvv};
    set cvv(cvv){return this.#cvv = cvv};
}

function imprimirClase(id, objeto) {
    for (const atributo in objeto) {
        añadirAlDom(id, `atributo: ${atributo}  -  valor: ${objeto[atributo]}`);
    }
}

function añadirAlDom(id, resultado) {
    const container = document.getElementById(id);
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
}

function init(){
    
    let targeta1 = new targetaDeCredito('1234456778901234', '30-11', 456, true);
    let targeta2 = new targetaDeCredito('9876543210987654', '25-12', 1000, false);
    let targeta3 = new targetaDeCredito('5678901234567890', '15-07', 200, true);
    
    console.log(targeta1);

    imprimirClase('ex1',targeta1);
    imprimirClase('ex2',targeta2);
    imprimirClase('ex3',targeta3);

    targeta1.añadirDinero(1000);
    console.log(targeta1);

    targeta1.cvv = '879';
    console.log(targeta1);

    targeta1.pagar(2000);
    console.log(targeta1);

    targeta1.desactivarTargeta()
    console.log(targeta1);
}