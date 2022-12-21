// type custom desrive un valore che può essere di diversi tipi
// lo usiamo quando un valore non è sotto il nostro controllo ( ad eempio, potrebbe essere sia stringa che number)

// non usiamo any poiché con custom limitiamo i tipi possibili, escludendo quelli che non vogliamo ricevere ( ex: deve dare number o string, ma non boolean)

let multiType: number | boolean;
multiType =20;
multiType = true;
// multiType = "waht"                       // Type '"waht"' is not assignable to type 'number | boolean'.

// ho valori che possono essere numeri o stringhe. se sono entrambi numeri > somma. se sono entrambe stringhe > concatena. Altrimenti errore

// function add(x:number | string, y:number | string){

//     if((typeof x == "number" && typeof y == "number") || (typeof x == "string" && typeof y == "string")){
//         return x + y;
//     }else{
//         throw new Error ("Parameters must be both numbers or both strings")
//     }
// }

function add(x:number | string, y:number | string){

    if(typeof x == "number" && typeof y == "number"){
        return x + y;
    }else if(typeof x == "string" && typeof y == "string"){
        return x.concat(y);
    }else{
        throw new Error ("Parameters must be both numbers or both strings")
    }
}

console.log( add("one","two"))          // returns "onetwo"
console.log( add(1,2))                  // returns "onetwo"
console.log( add(1,"prova"))                  // returns "onetwo"
