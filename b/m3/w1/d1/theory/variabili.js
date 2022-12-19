// sintassi per dichiarare una variabile
// let nome:string = "Mary";  // :string > memorizza un dato stringa
// let nome= "Mary" // Typescript riconosce il valore. doppio apcie = stringa.
// let nome; // il tipo di dato è "any" ed il valore è undefined
var nome = "john";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name: " + nome);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("scores sum: " + score2);
// Type assertion
var code = 123;
var employeeCode = code;
console.log(typeof (employeeCode));
// inferred typing
var num = 2; // il mio datatype è dedotto coem numero ( inferred as number )
console.log("value of num" + num);
// num = "12" darà errore, rilevando una stringa, visto che num è ormai :number.
// ambiti delle variabili
var global_num = 12; //Variabile globale  ( accessbile ovunque )
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // class variable   ( interna a classe )
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // local variable  ( interna a funzione )
    };
    Numbers.sval = 10; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
