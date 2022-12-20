var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
console.log(alphas[2]);
console.log(alphas[3]);
var nums = [1, 2, 3, 4];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
// posso anche creare un array usando l'oggetto Array
// argomento => un valore numerico che rappresenta la dimensione del mio array oppure un elenco di valori
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// argomento => un elenco di valori separato da virgole
var names = new Array("Mary", "Tom", "Nicolae", "Silvio", "Leroy");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// metodo pop => rimuove un elemento dall'array e lo restituisce => array.pop()
// let numbers = [1,4,9];
// let element = numbers.pop();
// console.log("element is :" + element)
// element = numbers.pop();
// console.log("element is :" + element)
// metodo push => aggiunge l'elemento ( o gli elementi ) forniti all'array, e restituisce il nuovo array
var numbers = [1, 4, 9];
var lunghezza = numbers.push(10);
console.log("new number is :" + numbers);
// destrutturazione di un array
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
// attraverso l'array con for
var j;
var numeri = [1001, 1002, 1003, 1004];
for (j in numeri) {
    console.log(numeri[j]);
}
// arrays multidimensionali ( ad esempio, array bidimensionale )
// let arr_name:number[][] = [[val1, val2, val3],[v1,v2,v3]]
// posso inoltre passare un array a una funzione
var nomi = new Array("Mary", "Tom", "Nicolae", "Silvio", "Leroy");
function display(arr_nomi) {
    for (var i = 0; i < arr_nomi.length; i++) {
        console.log(nomi[i]);
    }
}
display(nomi);
