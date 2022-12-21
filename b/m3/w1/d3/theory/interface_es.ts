// interface è un contratto sintattico che stabilisce la sintassi a cui deve aderire qualsiasi entità
// definisce proprietà/metodi che sono i membri dell'interfaccia.

// sarà poi responsabilità delle classi che derivano a definire tali membri.

// Interfaccia "dichiaro i membri"
// classe "definisco i membri" ( posso anche dichiararli, se assente l'interfaccia 

interface IPerson {
    firstname:string;
    lastname:string,
    sayHi: ()=> string
}

let customer: IPerson = {
    firstname:"Tom",
    lastname:"Hanks",
    sayHi: ():string=>{return "hi there"}
}

console.log(customer.sayHi())
console.log(customer.firstname)
console.log(customer.lastname)


interface Person {
    age:number
}

interface Musician extends Person {      // extends interface
    instrument:string
}

let drummer = <Musician>{};             // questa sarà la definizione minima ( age + instrument )
drummer.age = 27                        
drummer.instrument = "Batteria"         

console.log(drummer.age)
console.log(drummer.instrument)