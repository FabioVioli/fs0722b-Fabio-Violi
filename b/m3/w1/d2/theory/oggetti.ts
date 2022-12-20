let person = {
    firstname: "Federico",
    lastname: "De Ambrosis",
    sayHello:function(){}               // 2) Type Template

}

console.log(person.firstname)
console.log(person.lastname)

// person.sayHello = function(){return "hello"}  // 1) => non è possibile aggiungere. Restituisce errore perché in TS gli oggetti devono avere un tipo ( Type Template )

// 3) ora che ho definito il type di sayHello, posso modificarlo



// oggetti con parametri in funzione

person.sayHello = function(){
    console.log("hello " +person.firstname)
}

person.sayHello()


let persona = {
    firstname: "Federico",
    lastname: "De Ambrosis",
};

let invokePersona = function(obj:{firstname:string, lastname:string}) {         // invoco una funzione che ha come parametri un oggetto, definendolo 

console.log("first name :" + obj.firstname)                                     // per dichiarare quale proprietà, uso sempre il . 
console.log("last name :" + obj.lastname)


}

invokePersona(persona)                                                          // durante l'invocazione specifichiamo l'oggetto da cui i parametri prendono i dati




// Dentro TypeScript sono ovviamente supportate le classi

class Persona2 {
    nome:string;                                                    // la diff sta nella dichiarazione dei tipi di dato
cognome:string;                                                     // la diff sta nella dichiarazione dei tipi di dato
    constructor(nome:string, cognome:string){                       // la diff sta nella dichiarazione dei tipi di dato
        this.nome = nome;
        this.cognome = cognome;
    }

    visualizzaNomeCognome(){
        return this.nome + " " + this. cognome;
    }
}

class Car {
    //field
    engine:string;
    constructor(engine:string){         // è una funzione speciale di class, che serve a inizializzare le variabili ( e in quanto funzione può avere parametri)
        this.engine = engine
    }

    // function 
    disp():void{
        console.log( "Engine is  : " + this.engine)
    };
    
}

// a questo punto, posso creare un object per istanziare Car

let obje = new Car ("XXFASF")

// access field
console.log("Leggo l'attributo valore di Engine: " +obje.engine)
//access function
obje.disp()