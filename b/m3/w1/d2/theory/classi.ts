// TypeScript supporta l'ereditarietà delle classi
// la Keyword extends estende una classe "base"
// nel costruttore della classe derivata useremo super() per indicare il costruttore della classe base

class Vehicle {
    modello:string;
    marca:string;
    tipoVeicolo:string;

    constructor(modello:string, marca:string ,tipoVeicolo:string){
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;

    }

    dettagliVeicolo():string{
        return `${this.tipoVeicolo} - ${this.marca} - ${this.modello}`;
    }
}

// ora creaiamo 2 classi che estendono veicolo ( ad esempio, un veicolo potrebbe essere una macchina o una moto)

class Cars extends Vehicle{
    constructor(marca:string, modello:string){
        super(marca, modello, "auto");
    }
}

class Motorbike extends Vehicle{
    constructor(marca:string, modello:string){
        super(marca, modello, "moto");
    }
}

// creiamo quindi qualche istanza

const Jaguar = new Cars("Jaguar", "F-Type");
const Ducati = new Motorbike("Ducati", "Panigale V4");


// posso verificare se una classe che ho creato sia o meno istanza di un'altra classe

console.log(Jaguar instanceof Cars); // true
console.log(Ducati instanceof Motorbike); // true
console.log(Ducati instanceof Cars); // false
