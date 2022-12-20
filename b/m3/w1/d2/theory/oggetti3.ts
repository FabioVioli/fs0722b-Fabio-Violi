// Get & Set

class Persona3 {
    nome:string;
    cognome:string;
    // nomeCompleto:string;
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
        // this.nomeCompleto = nome + " " + cognome;
    }
    get nomeCompleto():string {
        return this.nome + " " + this.cognome
    }

    set nomeCompleto(valore:string){
        let parti = valore.toString().split(" ");               // l'argomento di split è "che cosa devo usare come separatore?" . Nel nostro caso, uno spazio
        this.nome = parti[0] || "";
        this.cognome = parti[1] || "";
    }
}

let marioRossi = new Persona3("Mario", "Rossi")
console.log(marioRossi.nomeCompleto)        // errore oggetti3.ts:12:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher
                                            // funziona da una certa versione di ECMA in su
                                            // tsc oggetti3.ts     e aggiungiamo      --target ES5   ( fammelo da ES5 in su )

                                            //oppure creiamo un json ( vedi tsconfig.json)

marioRossi.nomeCompleto = "Giuseppe Verdi";
console.log(marioRossi.nomeCompleto);
console.log(marioRossi.nome);
console.log(marioRossi.cognome);
