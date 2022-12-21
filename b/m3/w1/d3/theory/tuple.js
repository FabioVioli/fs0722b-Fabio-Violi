// tuple sono un nuovo tipo di dato introdotto da TypeScript
// serve a definire un array che ha elementi di tipi diversi tra di loro
// ci permettono di fissare il tipo di un numero di elementi ( ad esempio, primi due elementi dell'array ).
// In questo modo, l'array avrà uno schema preciso dei tipi di dati.
var persona = ["Mario Rossi", 25];
// tuple non hanno una dimensione fissa => posso aggiungere senza definire i tipi
persona.push("prova");
console.log(persona);
persona.push("prova2");
console.log(persona);
