// tuple sono un nuovo tipo di dato introdotto da TypeScript
// serve a definire un array che ha elementi di tipi diversi tra di loro

// ci permettono di fissare il tipo di un numero di elementi ( ad esempio, primi due elementi dell'array ).
// In questo modo, l'array avrà uno schema preciso dei tipi di dati.

let persona: [string,number] = ["Mario Rossi", 25]

// tuple non hanno una dimensione fissa => posso aggiungere senza definire i tipi

persona.push("prova")
console.log(persona)

persona.push(22222)
console.log(persona)

// array contiene ora elementi extra non dichiarati in precedenza.

persona.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
