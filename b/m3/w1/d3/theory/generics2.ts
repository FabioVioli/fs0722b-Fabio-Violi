// proviamo una funzione con più variabili di tipo
// funzione identity, accetterà due parametri => posso quindi usare due generics T, U e assegno tipi diversi a ogni parametro.


// 1) value e message avranno tipo differente ( struttura dichiarata )

function identity<T, U > ( value: T, message: U):T{
    console.log(message);
    return value
}

// 2) inizializzo una variabile chiamando la funzione identity, e assegno i tipi di dato per gli argomenti value e message

let returnNumber = identity<number, string> (100, "prova")
let returnString = identity<string, number> ("prova",100)
let returnBoolean = identity<boolean, number> (true,100)

// typescript controlla il tipo di dati, e restituisce un errore qualora si verifichi un conflitto.

returnNumber = returnNumber * 100   // ok
returnString = returnString * 100   // error - Type 'number' is not assignable to type 'string' - The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
returnBoolean = returnBoolean * 100 // error - Type 'number' is not assignable to type 'boolean'- The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.