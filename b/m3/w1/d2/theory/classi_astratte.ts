// le classi astratte si basano su una keyword => abstract
// sono classi base che non possono essere istanziate

// devono avere almeno un metodo, su cui farò la dichiarazione senza che venga implementato

abstract class Veicolo1 {
    private colore:string;                  // private > accessibile solo all'interno della classe
    protected modello:string;               // accessibile nella classe + nelle estensioni
    protected marca:string;                 // accessibile nella classe + nelle estensioni


    constructor(marca:string, modello:string, colore:string){
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;

    }

    public vernicia(colore:string):void{
        this.colore = colore;
    }
    public coloreCorrente():string{
        return this.colore;
    }
    public abstract dettagliVeicolo():string;
}

class Automobile1 extends Veicolo1 {
    constructor(marca:string, modello:string, colore:string){
        super(marca,modello,colore)
    }
    public dettagliVeicolo(): string {
        return `${this.marca} - ${this.modello}`
    }
}

// const veicolo = new Veicolo1  // Errore, in quanto Veicolo1 è classe astratta - Cannot create an instance of an abstract class.

// posso però dire che 

const fiat = new Automobile1 ("Jaguar", "F-type", "blu")   

console.log(fiat.dettagliVeicolo()) // Jaguar - F-Type
console.log(fiat.coloreCorrente()) // blu

fiat.vernicia("rosso")              // usiamo anche la funzione per cambiare colore

console.log(fiat.coloreCorrente()) // rosso