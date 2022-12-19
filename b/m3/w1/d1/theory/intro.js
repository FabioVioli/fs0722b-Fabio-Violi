// var num:number = 1234;     //dichiarazione di un numero :number
// console.log(num)
// var message:string = "Hello World" // dichiarazione di una stringa :string
// console.log(message)
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("helloworld");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
