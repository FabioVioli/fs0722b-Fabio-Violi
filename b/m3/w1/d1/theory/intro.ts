// var num:number = 1234;     //dichiarazione di un numero :number
// console.log(num)

// var message:string = "Hello World" // dichiarazione di una stringa :string
// console.log(message)

class Greeting{                              // definisco una classe
    greet():void{                           // aggiungo un metodo ( greet )
        console.log("helloworld")           // che stampa una stringa in colsone
    }
}

let obj = new Greeting();                   // new crea un oggetto
obj.greet();                                // l'oggetto invoca un metodo ( greet )