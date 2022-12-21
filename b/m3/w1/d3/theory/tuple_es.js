var myTuple = [10, "Wello", "World", "TypeScript"]; // i tipi vengono dedotti in automatico ( non sarà possibile aggiungere altri valori al di fuori di stringhe e numeri )
console.log(myTuple[0]);
console.log(myTuple[1]);
// per fare operazioni sulel tuple, sono supportati la maggior parte dei metodi degli array ( o tutti )
console.log("Items before push" + myTuple.length); // ritorna la lunghezza della tuple
myTuple.push(12); // pusha il valore in fondo alla tuple
console.log("Items after push" + myTuple.length); // ritorna il valore dopo il push
myTuple.pop();
console.log("items after pop" + myTuple.length); // ritorna il valore dopo il pop
// myTuple.push(true)                                         // darà errore poiché nell'array inizializzato sono presenti solo numbers & strings
// le tuple sono mutabili ( possono aggiornare i valori )
console.log("tuple value at index 0 is " + myTuple[0]);
//update tuple ( cambio il primo valore dell'array in 121)
myTuple[0] = 121;
console.log("tuple value at index 0 changed to " + myTuple[0]);
// infine, così come un'array, anche una tuple si può destrutturare:
var a = [10, "Hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
a.push("World");
var d = a[2];
console.log(d);
