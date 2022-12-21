// duck-typing => due oggetti sono considerato dello stesso tipo se condividono lo stesso insieme di proprietà ( vincolo minimo- non necessariamente le proprietà opzionali )

// il compilatore TypeScript verifica la presenza delle proprietà negli oggetti. In questo modo possiamo creare degli oggetti in modo più rapido.
// teniamo il tipo di dato indipendente dalla creazione ( a patto che la struttura coincida )

// ad esempio:

interface Ipoint {
    x:number;
    y:number;
}

function addPoints(p1:Ipoint, p2:Ipoint):IPoint {
    let x = p1.x + p2.x
    let y = p1.y + p2.y

    return { x:x, y:y}
}

let newPoint = addPoints({x:3,y:4},{x:3,y:4})  // se uso la struttura correttamente è ok
// let newPoint2 = addPoints({x:3},{x:3,y:4})   // se cambio la struttura, mi darà errore. Manca la proprietà y, che però è obbligatoria nell'interfaccia che ho dichiarato.
