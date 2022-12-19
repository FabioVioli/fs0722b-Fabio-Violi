var n = 5;
while (n > 5) {
    console.log("entered while");
}
do {
    console.log("entered dowhile");
} while (n > 5);
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
var numero = 0;
var count = 0;
for (var numero_1 = 0; numero_1 < 20; numero_1++) {
    if (numero_1 % 2 == 0) {
        continue;
    }
    count++;
}
console.log("the count of odd values between 0 and 20 is:" + count);
