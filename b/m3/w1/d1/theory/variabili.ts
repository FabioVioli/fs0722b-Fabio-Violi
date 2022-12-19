// sintassi per dichiarare una variabile

// let nome:string = "Mary";  // :string > memorizza un dato stringa

// let nome= "Mary" // Typescript riconosce il valore. doppio apcie = stringa.
// let nome; // il tipo di dato è "any" ed il valore è undefined

let nome:string = "john";
let score1:number = 50;
let score2:number = 42.50;
let sum = score1 + score2;
console.log("name: " + nome);
console.log("first score: " +score1);
console.log("second score: " +score2);
console.log("scores sum: " +score2);


// Type assertion

let code:any = 123;
let employeeCode = <number> code;
console.log(typeof(employeeCode));

// inferred typing

var num = 2;    // il mio datatype è dedotto coem numero ( inferred as number )
console.log("value of num" +num);
// num = "12" darà errore, rilevando una stringa, visto che num è ormai :number.


// ambiti delle variabili

let global_num = 12;            //Variabile globale  ( accessbile ovunque )
class Numbers{
    num_val = 13;               // class variable   ( interna a classe )
    static sval = 10;           //static field

    storeNum():void{
        var local_num = 14;     // local variable  ( interna a funzione )
    }
}   

console.log("Global num: " +global_num);
console.log(Numbers.sval);
let obje = new Numbers();
console.log("Global num: " + obje.num_val);

// console.log("local num" +local_num) // non la stamperà mai poiché dentro la dichiarazione

