let n:number = 5;
while (n > 5) {
    console.log("entered while")
}
do{
    console.log("entered dowhile")
}

while( n>5)

/*
                                WHILE => BREAK

let i:number = 1;
while (i<=10){
    if(i%5 == 0){
        console.log("the first multiple of 5 between 1 and 10 is " +i)
        break // exit the loop
    }
    i++
}

*/

let numero:number = 0;
let count:number = 0;


for (let numero = 0; numero <20; numero++) {
    if(numero % 2 == 0){ // tutte le volte che è pari esci e ( continue )
        continue
    }
    count++
    
}

console.log("the count of odd values between 0 and 20 is:" +count)