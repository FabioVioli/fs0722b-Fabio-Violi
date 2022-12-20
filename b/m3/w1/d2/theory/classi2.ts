// ridefiniamo il metodo cambiando 

class Veicolo {
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
class Macchine extends Veicolo{
    constructor(marca:string, modello:string){
        super(marca, modello, "auto");
    }

    dettagliVeicolo():string {
        console.log("Dettagli auto:");
        return super.dettagliVeicolo();         
    }
}

const Giaguaro = new Macchine("Jaguar", "F-Type");




console.log(Giaguaro.dettagliVeicolo()); 