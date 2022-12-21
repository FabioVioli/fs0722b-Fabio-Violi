// I generics sono un modo per indicare a funzioni/classi/interfacce etc... che tipo di dati si vuole usare al momento della chiamata
// il suo funzionamento è simile al passaggio di argomento ad una funzione, MA indica anche il tipo che deve aspettarsi alla chiamata.
// quando si usano => quando abbiamo una gamma di dati diversi, oppure quando usiamo quel tipo di dati in diversi punti
// VANTAGGI => possibilità di riutilizzare il codice + ridurre la necessità di fare ricorso al tipo any.
function getArray(items) {
    return new Array().concat(items); // restituisce un array che concatena gli items
}
// la funzione getArray genera un array di elementi di tipo any
// variabile numberArray che chiama la funzione getArray, e passa ad essa dei valori
var numberArray = getArray([5, 10, 15, 20]); // posso passare numeri
var stringArray = getArray(["cats", "dogs", "ducks", "birds"]); // posso passare stringhe
numberArray.push(25); // è ok, in quanto posso pushare dentro un array any un numero
stringArray.push("rabbits"); // è ok, in quanto posso pushare dentro un array any una stringa
numberArray.push("This is not a number"); // è ok, in quanto posso pushare dentro un array any una stringa
stringArray.push(25); // è ok, in quanto posso pushare dentro un array any una numero
console.log(numberArray); // 5,10,15,20,25, "This is not a number"
console.log(stringArray); // "cats","dogs","ducks","birds", "rabbits", 25
// Posso però stabilire il tipo di valore che l'array contiene, e che quindi TypeScript possa verificare che quel tipo venga rispettato
// Entrano quindi in gioco i Generics
// 1) riscrivo la funzione getArray usando i generics
function getArray1(items) {
    return new Array().concat(items);
}
// i generics definiscono una o più variabile tipo => identificano i tipi che vengono passati racchiusi tra  < >
// come detto prima, T è comunemente usato, ma possiamo chiamarlo come vogliamo ( usiamo T per comodità )
// la prima volta che lo dichiaro viene usato per popolare 
// nella funzione getArray uso T per specificare il tipo di parametri, il tipo restituito dalla funzione, ed infine restituisce la nuova matrice ( il nuovo array )
// adesso, per richiamare la funzione, è sufficiente passare il <Type> 
// getArray<number> accetterà una matrice di valori number, e restituirà una matrice di valori number
var numberArray1 = getArray1([5, 10, 15, 20]);
numberArray1.push(25); // ok - perché pusho un numero
// numberArray1.push("prova")      // no - Argument of type 'string' is not assignable to parameter of type 'number'.
var numberArray2 = getArray1(["cats", "dogs", "ducks", "birds"]);
// numberArray2.push(25)              // no - Argument of type 'number' is not assignable to parameter of type 'string'.
numberArray2.push("prova"); // ok - pusho stringhe
// usare any spegne il controllo sui tipi ( vanifica l'esistenza di TypeScript). Quando possibile, non usiamo Any ( usiamo invece il generics )
var numberArray3 = getArray1(["cats", 15,]);
console.log(numberArray3);
