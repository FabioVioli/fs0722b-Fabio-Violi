// definizione di una funzione

function function_name(){
    console.log("function called")
}

// not called


// chiamata funzione
function test(){
    console.log("Function Called")
}

test()          // called


// restituzione di una funzione

function greet():string{                    // definisco che la funzione restituisce una stringa
return "Hello World"

}

function caller(){
    let msg = greet()                   // function greet invoked within function caller
    console.log(msg)
}

caller()

// parameters ( optionals )

function disp_details(id:number, name:string, mail_id?:string){                 // il punto interrogativo ( ? ) implica che può esserci oppure no
    console.log("ID:", id);                                                     
    console.log("name:", name);                                                 
    
    if (mail_id != undefined){
        console.log("Email ID", mail_id)                            // mi stampi l'argomento se c'è
    }
    }

    disp_details(123, "john");
    disp_details(111, "Mary", "email_placeholder")

    // parametri rest ... in Typescript => devono essere tutti dello stesso tipo
    function addNumbers(...nums:number[]){
        let i;
        let sum:number = 0;

        for (let i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
            
        }
        console.log("numbers sum is " + sum)
    }

    addNumbers(1,2,3)
    addNumbers(10,10,10,10,10)

    //parametri predefiniti => ad esempio, una funzione che calcola un prezzo che ha uno sconto

    function calculate_discount(price:number, rate:number = 0.50){    // dichiaro che il prezzo deve essere un numero, e che lo sconto è fisso ed è un numero
        let discount = price * rate;
        console.log("Discount amout", discount)
    }

    calculate_discount(1000)
    calculate_discount(1000, 0.30)  // posso sovrascrivere il parametro dichiarato in riga 63 con uno nuovo.

    // anonymus functions

    let msg = function(){
        return "Chili Dogs!"
    }

    console.log(msg())

    // anonymus functions with parameters

    let res = function(a:number, b:number){
        return a*b
    }

    console.log(res(1,2))

    // anche typescript supporta il costruttore function

    let myFunction = new Function("a","b","return a+b");
    let ops = myFunction("Hello"," World")            // o [5,9] ad esempio
    console.log(ops)