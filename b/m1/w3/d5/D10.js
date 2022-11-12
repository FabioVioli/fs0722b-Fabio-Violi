/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* 


           ██╗███████╗    ██████╗  █████╗ ███████╗██╗ ██████╗███████╗
           ██║██╔════╝    ██╔══██╗██╔══██╗██╔════╝██║██╔════╝██╔════╝
           ██║███████╗    ██████╔╝███████║███████╗██║██║     ███████╗
      ██   ██║╚════██║    ██╔══██╗██╔══██║╚════██║██║██║     ╚════██║
      ╚█████╔╝███████║    ██████╔╝██║  ██║███████║██║╚██████╗███████║
       ╚════╝ ╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚══════╝



*/

console.log("----------------------JS BASICS------------------------")



/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/


console.log("Exercise A - ok")


var sum = (10+20);  // ho creato una variabile con valore la somma tra 10 e 20)
console.log(sum)


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/


console.log("Exercise B - ok")


var random = Math.round(Math.random()*20);  
// ho creato una var associata ad un valore random tra 0 e 20 usando math.random. 

// Essendo il valore random non un numero intero, l'ho insetiro all'interno di un'altra funzione math round, trasformando il risultato in numero intero.
console.log(random)


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


console.log("Exercise C - ok")

var me = {          // ho creato un oggetto

  name: "Fabio",        // ho assegnato le varie proprietà
  surname: "Violi",
  age: "38"

}

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/


console.log("Exercise D - ok")

delete me.age           // ho rimosso la proprietà age dall'oggetto me.

console.log(me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/


console.log("Exercise E - ok")


me["skills"] =["Java Script"]   // ho inserito una nuova proprietà contenente un array con al suo interno l'unico linguaggio di programmazione che conosco.


console.log(me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/


console.log("Exercise F - ok")

me.skills.push("nuovo elemento")     // ho aggiunto un ""nuovo elemento" all'array

console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/


console.log("Exercise G - ok")

me.skills.pop()       // ho rimosso l'ultimo elemento dall'array.

console.log(me)



/*

        ███████╗██╗   ██╗███╗   ██╗███████╗██╗ ██████╗ ███╗   ██╗██╗
        ██╔════╝██║   ██║████╗  ██║╚══███╔╝██║██╔═══██╗████╗  ██║██║
        █████╗  ██║   ██║██╔██╗ ██║  ███╔╝ ██║██║   ██║██╔██╗ ██║██║
        ██╔══╝  ██║   ██║██║╚██╗██║ ███╔╝  ██║██║   ██║██║╚██╗██║██║
        ██║     ╚██████╔╝██║ ╚████║███████╗██║╚██████╔╝██║ ╚████║██║
        ╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝
                                                                    

*/

console.log("-----------------FUNZIONI--------------------")



/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


console.log("Exercise 1 - ok")


const dice = function(){

  let x = Math.round(Math.random()*(6-1)+1);   
  // come nell'esercizio B. Ho aggiunto però il Min-Max, visto che dovevo escludere lo 0
  console.log(x)
  return x
}

dice() 



/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


console.log("Exercise 2 - ok")


const whoIsBigger = function(n1,n2){

  if(n1 > n2){  // condizione 1
    console.log("il primo numero è maggiore del secondo")
  }else if(n1 < n2){  // condizione 2
    console.log("il secondo numero è maggiore del primo")
  }else{  // se condizione 1 e 2 risultano false
    console.log("i numeri sono uguali")
  }
}

whoIsBigger(5,1)


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("Exercise 3 - ok")


const splitMe = function(){
    let splitMe = "I love coding";  // string
    let okIsplitYou = splitMe.split(" ")  // eseguo lo split, splittando gli elementi ad ogni spazio.

    console.log(okIsplitYou)
}

splitMe()

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/


console.log("Exercise 4 - ok")

const deleteOne = function (){

  let x = "stringa"   // string
  let y = false         //boolean

  if(y == true){        // condizione 1
    x = x.substring(1,7) // seleziono dal secondo carattere(1) fino al settimo (6) che però viene escluso (7)
    console.log(x)
  }else{                // condizione 2
    x = x.substring(0,6) // seleziono dal primo carattere (0), fino al penultimo (6)
    console.log(x)
  }
}

deleteOne()

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


console.log("Exercise 5 - ok")

const onlyLetters = function(){

  let a = "I have 4 dogs and 5 camels";  // stringa con numeri e parole
  
  let b = a.replace(/[0-9]/g,"") // funzione replace. vista la presenza di più numeri, resa global.

  console.log(b)

}

onlyLetters()


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/


console.log("Exercise 6 - ok")

 const isThisAnEmail = function(){

let reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); // applico una RegExp

let check = ["google.it", "fabio.violi@gmail.it", "fabio.violi@google.it", "www.unicredit.it"];      // Email e fake mails da testare

check.forEach((email) => {  // for each check

    console.log(reg.test(email))  
});
}

isThisAnEmail()
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


console.log("Exercise 7 - ok")

const whatDayIsIt = function(){

  let weekday = new Date().toLocaleString('it-it', {  weekday: 'long' })
  console.log(weekday)  // nuova data. per avere il nome ( in italiano ) per esteso. in alternativa = new Date().getDay() per il numero.
}

whatDayIsIt()



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/


console.log("Exercise 8 - ok")


const rollTheDices = function(throws){

    let x = [];
    let y = [];

    for (let i = 0; i < throws; i++) { // in base al valore del parametro
      y.push(dice());       // invoco la funzione il nr di volte specificato
                            // e inserisco i valori dentro y
    }
    
    x.values = y;               // x ora possiede y come proprietà
    x.sum = eval(y.join('+'))   // associo una seconda proprietà ( somma) ad x
    console.log(x)
}

rollTheDices(3)

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


console.log("Exercise 9 - ok")

const howManyDays = function(){

  let dateX = new Date('06/11/1984');       // data scelta 
  let today = new Date();                   // today
  
  const days = (dateX, today) =>{
      let diff = dateX.getTime() - today.getTime();  // prendo entrambe le date con il medesimo formato.
      console.log(dateX)
      let sum = Math.ceil(diff / (1000 * 3600 * 24));
      // ottengo la diff tra le due date in giorni ( valore negativo)
      console.log(sum)
      return sum;
  }
  console.log(" Ci sono " + Math.abs(days(dateX, today)) + " giorni tra la data selezionata e oggi"); // uso abs per convertire il valore negativo in positivo
  
}
howManyDays()

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("Exercise 10 - ok")


const isTodayMyBirthday = function(){

    let bMonth = 11;        // mese

    let bDay = 06;         // giorno
    
    let data = new Date();      // data odierna

    if(bDay == data.getDate()           // check del giorno ( da non confondere con
                                        //getDay......)
    && bMonth == data.getMonth()+1){   // check del mese 

      return console.log(true)

    }else{

      return  console.log(false);

    }
}

isTodayMyBirthday()



/*


       █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗       ██╗   
      ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝       ██║   
      ███████║██████╔╝██████╔╝███████║ ╚████╔╝ ███████╗    ████████╗
      ██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  ╚════██║    ██╔═██╔═╝
      ██║  ██║██║  ██║██║  ██║██║  ██║   ██║   ███████║    ██████║  
      ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═════╝  

       ██████╗  ██████╗  ██████╗ ███████╗████████╗████████╗██╗      
      ██╔═══██╗██╔════╝ ██╔════╝ ██╔════╝╚══██╔══╝╚══██╔══╝██║      
      ██║   ██║██║  ███╗██║  ███╗█████╗     ██║      ██║   ██║      
      ██║   ██║██║   ██║██║   ██║██╔══╝     ██║      ██║   ██║      
      ╚██████╔╝╚██████╔╝╚██████╔╝███████╗   ██║      ██║   ██║      
       ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚═╝      



*/

console.log("--------------ARRAYS & OGGETTI-------------------")

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]




// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("Exercise 11 - ok")


const obj = {
  primo: 'primo',                 // obj con 2 prop
  secondo: 'secondo'
  }

const deleteProp = function (obj, prop) {     // parametri
  delete obj[prop];               // rimuovo il sec
  return obj;                     // e ritorno obj
}

let obj2_0 = deleteProp(obj, 'secondo')  // nuovo obj
console.log(obj2_0)

//let newuser = deleteProp(user, 'surname')

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


console.log("Exercise 12 - ok")

const newestMovie = function(){

  
  let y = []  // array per sort
for (let i = 0; i < movies.length; i++) {   // ciclo
    let x = movies[i].Year      // ogni year
    y.push(x)                   // viene pushato in y
}
    y.sort((a,b)=>a-b)          // ordino y
    console.log(y[y.length -1])
    
}

newestMovie()

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("Exercise 13 - ok")

const countMovies = function(){

let numeroFilm = movies.length;  // misuro la lunghezza dell'array, che è uguale al numero di film.
console.log(numeroFilm)

}

countMovies()
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


console.log("Exercise 14 - ok")

let onlyTheyears = function(){

  let x = []  // array vuoto

  for (let i = 0; i < movies.length; i++) {  // ciclo
    
    let y = movies[i].Year;  // associo ad y un valore diverso per ogni ciclo
    x.push(y);      // pusho quel valore ad ogni ciclo all'interno dell'array
    
  }

  console.log(x)
}

onlyTheyears()

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("Exercise 15 - ok")


function onlyInLastMillennium(){

  let x = [];

  for(i=0; i < movies.length;i++){

    if(parseInt(movies[i].Year) < 2000) // converto ogni stringa in numero e vedo se è maggiore o superiore a 2000.

    x.push(movies[i]);    // quelli inferiori, li metto nell'array
  } 
     return console.log(x)   
  }

      onlyInLastMillennium()

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/


console.log("Exercise 16 - ok")

const sumAllTheYears = function(){
  
  let x = [];
  let sum = [];  
  let tot = 0;

    for (let i = 0; i < movies.length; i++) {  
      // ciclo per recuperare tutti gli di uscita dei film

        let y = movies[i].Year;  
        x.push(y);      

    }

    for (let i = 0; i < x.length; i++) {
      // converto gli anni "stringhe" in numeri
        sum.push(parseInt(x[i]))
    }
    for (let i = 0; i < sum.length; i++) {
      // faccio la somma degli anni, ora convertiti in numeri
        tot += sum[i]

    }
  console.log(tot)

}

sumAllTheYears()


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


console.log("Exercise 17 - ok")


const searchByTitle = function(movie){
  let arr = [];                             // arr vuoto
  let x;                                    // var indefinita

  for (let i = 0; i < movies.length; i++) {
    arr.push(movies[i].Title);            // ciclo e pusho i titoli
    
  } 

  x = arr.filter(m => m.includes(movie));     //filtro titolo sull'array
  console.log(x) ;
  return x;                 // aggiunge ciclo dopo ciclo i titoli al log
  
}

searchByTitle('Lord')

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


console.log("Exercise 18 - da sistemare")

const searchByDivide = function(movie){
  let unmatch = []; 
  let match = [];                            // arr vuoto extra rispetto al 17
  let x;                                    

  for (let i = 0; i < movies.length; i++) {
    unmatch.push(movies[i].Title);            // ciclo e pusho i titoli
    
  } 

  x = unmatch.filter(m => m.includes(movie));     //filtro titolo sull'array
  match.push(x);                  // e pusho ogni singolo result dentro match
  console.log(match);
  unmatch.reduce(function(match){
    return match

  })
  

                                  // aggiunge ciclo dopo ciclo i titoli al log
  console.log(unmatch);
}

searchByDivide('Lord')

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)


console.log("Exercise 19 - ok")

const removeIndex = function(x){

  movies.splice(x,1)       // rimuovo il valore del parametro dalla lsita 
}                           // in questo caso il 6 (0,1,2,3,4,"5")
console.log(movies)
removeIndex(5)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


console.log("Exercise 20 - ok")

const ex20 = function(){

  document.getElementById('container')  // selezione l'elemento id "container"

}


ex20()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/




console.log("Exercise 21 - ok")

const ex21 = function(){

  let x = document.querySelectorAll("td")       // seleziono tutti i td
  console.log(x)
}


ex21()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("Exercise 22 - ok")

const ex22 = function(){

  let x = document.querySelectorAll('td');  // seleziono tutti i td

  for (let i = 0; i < x.length; i++) {   // per ognuno di essi

    let y = x[i].textContent = "text"   // cambio il testo

  }

}

ex22()



/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/


console.log("Exercise 23 - ok")

  const backgroundColor = function() {

  let x = document.querySelectorAll('a')  // seleziono ogni a/link nella pagina

  for (let i = 0; i < x.length; i++) {  // per ogni a
    x[i].style.backgroundColor = "red"  // associo il background color red
    
  }

}

  backgroundColor()



/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/


console.log("Exercise 24 - ok")

const ex24 = function (){

    let x = document.getElementById('myList')  // seleziono la lista
    let y = document.createElement('li')      // creo nuovo elemento
        y.innerHTML = "d";   // associo un testo al nuovo elemento
        x.appendChild(y)      // lo collego al padre
}

ex24()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/


console.log("Exercise 25 - ok")

const ex25 = function(){

    document.getElementById('myList');        // seleziono myList tramite Id

    myList.innerHTML = '';                // rimuovo il contenuto ( blank )

}

ex25()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/


console.log("Exercise 26 - ok")

const ex26 = function(){

  let x = document.querySelectorAll("tr") // seleziono tutti i tr
  for (let i = 0; i < x.length; i++) {  // ciclo for
    x[i].classList.add("test");  // assegno ad ognuno di essi la clsse test
}
  console.log(x) 
}

ex26()


/*

                      ███████╗██╗  ██╗████████╗██████╗  █████╗     
                      ██╔════╝╚██╗██╔╝╚══██╔══╝██╔══██╗██╔══██╗    
                      █████╗   ╚███╔╝    ██║   ██████╔╝███████║    
                      ██╔══╝   ██╔██╗    ██║   ██╔══██╗██╔══██║    
                      ███████╗██╔╝ ██╗   ██║   ██║  ██║██║  ██║    
                      ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝    
                                                              
                       ██╗███████╗     █████╗ ██████╗ ██╗   ██╗
                       ██║██╔════╝    ██╔══██╗██╔══██╗██║   ██║
                       ██║███████╗    ███████║██║  ██║██║   ██║
                  ██   ██║╚════██║    ██╔══██║██║  ██║╚██╗ ██╔╝
                  ╚█████╔╝███████║    ██║  ██║██████╔╝ ╚████╔╝ 
                  ╚════╝ ╚══════╝    ╚═╝  ╚═╝╚═════╝   ╚═══╝  
                                                              

*/



console.log("-----------------------EXTRA JS ADVANCED------------------------")



/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/


console.log("Exercise 27 - ok")


function halfTree(n) {
  let string = "";                //stringa inizialmente vuota
  for (let i = 1; i <= n; i++) {      
    for (let x = 0; x < i; x++) {     
      string += "*";      // aggiung "i" asterisco + il precedente valore    
    }                     // della stringa
                     
    string += "\n";       // vado a capo 
  }
  console.log(string);      // mezzo albero
};

halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/



console.log("Exercise 28 - ok")

function tree(n) { // vedi ex 27

  let string = "";
  
  for (let i = 1; i <= n; i++) {
    
    for (let x = 1; x <= n - i; x++) {  // aggiungo uno spazio ad ogni ciclo,
      string += " ";                    // al fine di dare la forma dell'albero
    }                                   
    for (let y = 0; y < 2 * i - 1; y++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

tree(3)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/



console.log("Exercise 29 - ok")


  function isItPrime(n){

    if ( n == 1 || n == 2 ) {   // escludo 1 ee 2 
      
      return console.log(true); 
  }
  for ( let i = 2; i < n; i++ ) {  
    // effettua un nr di cicli pari al valore del numero

      if ( n % i == 0 ) {

          return console.log(false);
          // se a qualsiasi punto del ciclo trova che il numero si divide per un numero che non sia lo stesso, senza decimali, allora non si tratta di un numero primo.
      }
  } 

  return console.log(true);
  // viceversa, se a fine ciclo non è stato possibile dividerlo per numeri più piccoli, è un numero primo.
  
  };
  
  isItPrime(7)



