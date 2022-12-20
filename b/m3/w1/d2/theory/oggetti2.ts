// se non dichiariamo il tipo di oggetto, le classi sono pubbliche

class Persona {
    nome:string;
    cognome:string;
    private vislualizzaNomeCognome(){                           // 1) se non dichiaro nulla, è pubblico e quindi accessibile dall'esterno.      3) se metto private, è solo della classe
        return this.nome + " "+ this.cognome
    }
}

let accessoEsterno = new Persona ();
accessoEsterno.nome= "mario";
accessoEsterno.cognome ="Rossi"
// console.log(accessoEsterno.vislualizzaNomeCognome())            // 2) Mario Rossi - Accessibile anche da fuori       4) darà errore
                                                                // Property 'vislualizzaNomeCognome' is private and only accessible within class 'Persona'.


// static => si usa quando voglio usare un metodo senza necessità di creare un'istanza della classe

class Persona1 {
    nome:string;
    cognome:string;
    constructor(nome:string, cognome:string){
        this.nome= nome;
        this.cognome= cognome;

    }

    static concatenare(a:string, b:string){                 // non ho avuto bisogno di istanziare la classe. Faccio tutto dentro la funzione
        return a + " " + b;
    }
}

console.log(Persona1.concatenare("Mario","Rossi"));


// extends => estendo una classe

class Shape {
    area:number;

    constructor(a:number){
        this.area = a
    }
}

class Circle extends Shape{                     // extends consente alla classe figlia di ereditare la classe genitore ( accede quindi in automatico ad essa )
    display():void{
        console.log("Circle Area:" + this.area)
    }
}

let obj = new Circle(223);
obj.display();

// extends può andare su più livelli

class Root{                         // classe base
    str:string;
}

class Child extends Root{}          // eredita da root
class Leaf extends Child{}          // eredita da Child

let plant = new Leaf();
plant.str= "Hello";
console.log(plant.str)