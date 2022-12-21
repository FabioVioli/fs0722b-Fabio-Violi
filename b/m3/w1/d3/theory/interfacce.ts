/*

Il type System di typescript è di tipo strutturale ( structural type system)
Il compiler quando fa il controllo ( o la comparazione ) dei tipi di dato, si basa sulla struttura/forma.

facciamo un esempio. Immaginiamo di avere una funzione che si occupa di mandare un messaggio.

1 oggetto ( msg ) con 2 parametri ( email e message  )
*/

function sendMSG(msg:{email:string, message:string}){          
    // il parametro impone che abbia almeno le proprietà "email" e "messaggio"
    mailSender.sendTo(msg.email, msg.message);

    let myMessage = {email: "fabio.violi@epicode.it", message:"Morning!"}
    sendMSG(myMessage);  // questa chiamara risulterebbe corretta, in quanto l'oggetto myMessage ha sia email sia message

    // let myMessage1 = { message:"Morning!"}
    // sendMSG(myMessage1); // questa invece darà errore, in quanto manca uno dei parametri richiesto ( email )

    //Argument of type '{ message: string; }' is not assignable to parameter of type '{ email: string; message: string; }'.
    //Property 'email' is missing in type '{ message: string; }' but required in type '{ email: string; message: string; }'.

    // questo ci indica che all'invio di una funzione, typescript verifica che venga utilizzato un oggetto con la struttura dichiarata

    // TypeScript consente la definizione di un'interfaccia che definisca la struttura del nostro parametro
}

    // La sintassi di questa feature è 

    interface Messaggio {
        email:string;
        messaggio:string;
    }

    // 1) interface definisce quindi il tipo di dato ( che nel nostro caso è messaggio)

    // 2) Typescript quando compila ne verifica la struttura

    // 3) In questo modo, ci sarà consentito di utilizzare Messaggio come se fosse un tipo di dato predefinito ( riutilizzandolo anche altrove, al di fuori della funzione. In tutta la nostra App)

    function sendMSG2(msg:Messaggio){
        mailSender.sendTo(msg.email, msg.messaggio);
    }

    // 4) notare che la struttura dichiarata dall'interfaccia rappresenta gli elementi minimi. Nulla mi vieta di aggiungere altri elementi alla struttura.

    let myMessage = {
        email: "Mario.rosso@epicode.it",
        message: "buongiorno",
        data: new Date
    };

    sendMSG(myMessage);   // la presenza di data ( riga 51 ), non prevista in riga 31-33, non pregiudica l'avvio della funzione.

    // con interface possiamo inoltre definire una struttura con degli elementi opzionali

    interface Messaggio{
        email:string;
        nomeDestinatario?:string;               // elemento opzionale
        oggetto?:string                         // elemento opzionale
        messaggio: string

    }

    // gli elementi opzionali sono accettati, qualora presenti, ma non danno problemi se assenti.


    /*
    
                 ██████╗ ██████╗ ███╗   ██╗    ██╗   ██╗ █████╗ ██╗      ██████╗ ██████╗ ██╗    ███╗   ██╗██╗   ██╗███╗   ███╗███████╗██████╗ ██╗ ██████╗██╗
                ██╔════╝██╔═══██╗████╗  ██║    ██║   ██║██╔══██╗██║     ██╔═══██╗██╔══██╗██║    ████╗  ██║██║   ██║████╗ ████║██╔════╝██╔══██╗██║██╔════╝██║
                ██║     ██║   ██║██╔██╗ ██║    ██║   ██║███████║██║     ██║   ██║██████╔╝██║    ██╔██╗ ██║██║   ██║██╔████╔██║█████╗  ██████╔╝██║██║     ██║
                ██║     ██║   ██║██║╚██╗██║    ╚██╗ ██╔╝██╔══██║██║     ██║   ██║██╔══██╗██║    ██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗██║██║     ██║
                ╚██████╗╚██████╔╝██║ ╚████║     ╚████╔╝ ██║  ██║███████╗╚██████╔╝██║  ██║██║    ██║ ╚████║╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██║██║╚██████╗██║
                 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝      ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝
                                                                                                                                                            

    */ 



    // NB: LE INTERFACCE NON SERVONO A DEFINIRE UNICAMENTE OGGETTI, MA ANCHE ALTRI ELEMENTI DEL LINGUAGGIO.

    // ad esempio, possiamo definire una funzione numerica che opera su valori numerici

    interface FunzioneSuNumeri {
        (x:number, y:number):number             // (x è un numero, y è un numero) il risultato è un numero - Prendo due valori numerici come parametro, e restituisco un numero.
    }

    // facciamo ad esempio una funzione del tipo appena dichiarato

    let sommaNumeri: FunzioneSuNumeri;
    sommaNumeri = function(a:number, b:number){         // notare come l'aver dichiarato parametri diversi non ci impedisca di usare diversi parametri. Sopra era x/y, qua ho usato a/b
                                                        // L'unica cosa importante èche i tipi dei parametri siano corrispondenti
        return a+b
    }


    /* 
    
                                 ██████╗ ██████╗ ███╗   ██╗     █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗
                                ██╔════╝██╔═══██╗████╗  ██║    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝
                                ██║     ██║   ██║██╔██╗ ██║    ███████║██████╔╝██████╔╝███████║ ╚████╔╝ 
                                ██║     ██║   ██║██║╚██╗██║    ██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  
                                ╚██████╗╚██████╔╝██║ ╚████║    ██║  ██║██║  ██║██║  ██║██║  ██║   ██║   
                                ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                        


    */

    interface ArrayDiStringhe {
        [index:number]: string  // definisco il tipo dell'indice ( number ) e il tipo di ciascun elemento ( string )

    }

    let ArrayDiStringhe: ArrayDiStringhe = ["uno","due","tre"];

    // NB: PER L'INDICE DELL'ARRAY, OLTRE AL TIPO NUMBER È PREVISTO IL TIPO STRING ( TIPO INDICE ENCICLOPEDICO )

    interface Dizionario {
        [index:string]: string  // Usiamo string come index

    }

    let Dizionario: ArrayDiStringhe;
    Dizionario["chiave1"] = "valore1";
    Dizionario["chiave2"] = "valore2";

    // per l'indice, i tipi di dati possibili sono solo number e string, per gli elementi dell'array possiamo invece usare qualsiasi tipo.
    // ad esempio, possiamo creare un array di oggetti.

    interface ArrayDiOggetti {
        [index:number]: {id:number, label:string}
    }

    let x: ArrayDiOggetti = [
        {id:1, label:"aaa"},
        {id:2, label:"bbb"}

    ]
