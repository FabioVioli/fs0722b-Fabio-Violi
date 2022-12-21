abstract class Lavoratore {
    codRedd: number;
    redditoAnnuoLordo: number;
    nome:string;
    // tasseInps: number;
    // tasseIrpef: number;

    constructor(codRedd: number, redditoAnnuoLordo: number, nome:string) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.nome = nome;
        // this.tasseInps = tasseInps;
        // this.tasseIrpef = tasseIrpef;
    }



    getUtileTasse():number {
        let out:number = 0
        if (this.codRedd == 1) {
            out= this.redditoAnnuoLordo * 0.05

        } else if (this.codRedd == 2) {
            out= this.redditoAnnuoLordo * 0.07

        } else if (this.codRedd == 3) {
            out= this.redditoAnnuoLordo * 0.1
        }
        return out
    }
    getTasseInps():number {
        return this.redditoAnnuoLordo * 0.0919
    }
    getTasseIrpef():number {
        let out:number = 0;
        
        if (this.redditoAnnuoLordo <= 15000) {
            out= this.redditoAnnuoLordo * 0.23
        } else if (this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000) {
            out= (15000 * 0.23) + (this.redditoAnnuoLordo - 15000) * 0.25
        } else if (this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 50000) {
            out= (15000 * 0.23) + (13000 * 0.25) + (this.redditoAnnuoLordo - 28000) * 0.35
        } else if (this.redditoAnnuoLordo > 50000) {
            out= (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + (this.redditoAnnuoLordo - 50000) * 0.43
        }
        
        return out
        
    }

    getRedditoAnnualeNetto():number {
        return this.redditoAnnuoLordo - (this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef() )
    }
}

class Magazziniere extends Lavoratore {
    constructor(codRedd: number, redditoAnnuoLordo: number, nome:string) {
        super(codRedd, redditoAnnuoLordo, nome)
    }
}

class Panettiere extends Lavoratore {
    constructor(codRedd: number, redditoAnnuoLordo: number, nome:string) {
        super(codRedd, redditoAnnuoLordo, nome)
    }
}

class Attrice extends Lavoratore {
    constructor(codRedd: number, redditoAnnuoLordo: number, nome:string) {
        super(codRedd, redditoAnnuoLordo, nome)
    }
}

let Roberto = new Magazziniere(1, 25000, "Roberto")
let Pino = new Panettiere(2, 30000, "Peter")
let Giorgia = new Attrice(3, 100000, "Giorgia")

// console.log(`Le tasse sull'utile di ${Roberto.nome} sono di `+ Roberto.getUtileTasse())
// console.log(`Le tasse Inps di ${Roberto.nome} sono di ` + Roberto.getTasseInps())
// console.log(`Le tasse Irpef di ${Roberto.nome} sono di ` + Roberto.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Roberto.nome} è di ` + Roberto.getRedditoAnnualeNetto())

// console.log(`Le tasse sull'utile di ${Pino.nome} sono di `+ Pino.getUtileTasse())
// console.log(`Le tasse Inps di ${Pino.nome} sono di ` + Pino.getTasseInps())
// console.log(`Le tasse Irpef di ${Pino.nome} sono di ` + Pino.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Pino.nome} è di ` + Pino.getRedditoAnnualeNetto())

// console.log(`Le tasse sull'utile di ${Giorgia.nome} sono di `+ Giorgia.getUtileTasse())
// console.log(`Le tasse Inps di ${Giorgia.nome} sono di ` + Giorgia.getTasseInps())
// console.log(`Le tasse Irpef di ${Giorgia.nome} sono di ` + Giorgia.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Giorgia.nome} è di ` + Giorgia.getRedditoAnnualeNetto())

let button = <HTMLButtonElement>document.getElementById("button")
button?.addEventListener("click", ()=>{
    let nome = (<HTMLInputElement>document.getElementById("nome")).value
    let cod = (<HTMLInputElement>document.getElementById("cod")).value
    let reddito = (<HTMLInputElement>document.getElementById("reddito")).value

    console.log(nome)
    console.log(cod)
    console.log(reddito)
    
    let User= new Magazziniere (Number(cod), Number(reddito), String(nome));
    

    (<HTMLDivElement>document.getElementById("outcome")).innerHTML = `<h3>Ciao ${User.nome}, il tuo reddito annuale esentasse è di ${User.getRedditoAnnualeNetto()}.<div></h3> <hr> <h3>Utile Tasse = ${User.getUtileTasse()}</h3> <hr> <h3>UTasse INPS = ${User.getTasseInps()}</h3><hr><h3>Tasse IRPEF = ${User.getUtileTasse()}</h3></div>`
    console.log(User.getRedditoAnnualeNetto())
})