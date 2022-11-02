/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JS sono 5:

-Number: Numbero - ovvero un valore numerico

-String: Stringa - ovvero una qualsiasi riga di testo ( si riconosce perché è tra '' o "")

-Booleano: il booleano è un datatype che può avere come attributo True oppure False. Viene utilizzato al fine di determinare se una variabile è vera o falsa.

-Array: L'array è un contenitore di valore. Si riconosce per via della presenza di parentesi quadre [] all'interno delle quali possiamo trovare numeri, stringhe e/o booleani. Ad esempio [1,5,'ciao, come stai?',2,7,true]

-Object: Oggetto - Sono datatype formati da coppie di valori. Si riconoscono per la presenza di parentesi graffe {} all'interno delle quali si vengono separati dalla virgola. A differenza degli array, fanno riferimento a caratteristiche di uno specifico "oggetto". Ad esempio, parlando di automobili, alcune delle caratteristiche presenti in un oggetto potrebbero essere costo, oppure velocità massima.


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = 'Fabio' // stringa

console.log(name) // variabile visualizzata nella console
console.log(typeof name) // variabile "type" visualizzato nella console

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var number1 = 12;     // numero1
var number2 = 20;     // numero2
console.log(number1+number2)      //comando console per effettuare un'addizione

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const name = Violi //Variabile Name cambiata da Fabio a Violi
const name = Fabio // Impossibilità di cambiare una variabile const già dichiarata. In console darà errore ( onde evitare che non si legga niente, metto tutto come commento.) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john"
var name2 = "John"

console.log(name1 != name2)

if(name1 == name2){
  console.log(true)
}




