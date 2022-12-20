var person = {
    firstname: "Federico",
    lastname: "De Ambrosis",
    sayHello: function () { } // 2) Type Template
};
console.log(person.firstname);
console.log(person.lastname);
// person.sayHello = function(){return "hello"}  // 1) => non è possibile aggiungere. Restituisce errore perché in TS gli oggetti devono avere un tipo ( Type Template )
// 3) ora che ho definito il type di sayHello, posso modificarlo
// oggetti con parametri in funzione
person.sayHello = function () {
    console.log("hello " + person.firstname);
};
person.sayHello();
var persona = {
    firstname: "Federico",
    lastname: "De Ambrosis"
};
var invokePersona = function (obj) {
    console.log("first name :" + obj.firstname); // per dichiarare quale proprietà, uso sempre il . 
    console.log("last name :" + obj.lastname);
};
invokePersona(persona); // durante l'invocazione specifichiamo l'oggetto da cui i parametri prendono i dati
// Dentro TypeScript sono ovviamente supportate le classi
var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona.prototype.visualizzaNomeCognome = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    // function 
    Car.prototype.disp = function () {
        console.log("Engine is  : " + this.engine);
    };
    ;
    return Car;
}());
// a questo punto, posso creare un object per istanziare Car
var obj = new Car("XXFASF");
// access field
console.log("Leggo l'attributo valore di Engine: " + obj.engine);
//access function
obj.disp();
