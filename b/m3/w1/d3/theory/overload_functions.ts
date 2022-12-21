// overload list => quando in una funzione dichiaro tipi diversi

// compilatore => analizza la lista e cerca la compilazione corretta da invocare in base agli argomenti passati

// Possiamo quindi definire più funzioni con lo stesso nome, ma che hanno parametri diversi per numero e tipo

// nell'ordine
// 1) elenco le varie versioni di una funzione ( senza il corpo della funzione, ma con i tipi di parametri + valori di ritorno )
// 2) definisco le funzioni e assegno diversi comportamenti

function somma(addendo1: number, adendo2:number):number;            // numero e numero che restituisce un numero
function somma(addendi: number[]):number;                             // array composto da numeri che restituisce un numero
function somma(a:number | number[], b?:number){
    if (typeof a === "number"){
        return a+b
    }

    return a.reduce(
        (
            parziale: number,
            valoreCorrente: number,
            indiceCorrente: number,
            a: number[]) =>{
                return parziale + valoreCorrente;
            }
        );
    }

    console.log(somma(11,22));              // 33
    console.log(somma([6,12,16,36]))        // 72