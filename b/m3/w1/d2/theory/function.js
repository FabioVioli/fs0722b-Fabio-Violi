// definizione di una funzione
function function_name() {
    console.log("function called");
}
// not called
// chiamata funzione
function test() {
    console.log("Function Called");
}
test(); // called
// restituzione di una funzione
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // function greet invoked within function caller
    console.log(msg);
}
caller();
// parameters ( optionals )
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("name:", name);
    if (mail_id != undefined) {
        console.log("Email ID", mail_id); // mi stampi l'argomento se c'è
    }
}
disp_details(123, "john");
disp_details(111, "Mary", "email_placeholder");
// parametri rest ... in Typescript => devono essere tutti dello stesso tipo
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (var i_1 = 0; i_1 < nums.length; i_1++) {
        sum = sum + nums[i_1];
    }
    console.log("numbers sum is " + sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//parametri predefiniti => ad esempio, una funzione che calcola un prezzo che ha uno sconto
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount amout", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30); // posso sovrascrivere il parametro dichiarato in riga 63 con uno nuovo.
// anonymus functions
var msg = function () {
    return "Chili Dogs!";
};
console.log(msg());
// anonymus functions with parameters
var res = function (a, b) {
    return a * b;
};
console.log(res(1, 2));
// anche typescript supporta il costruttore function
var myFunction = new Function("a", "b", "return a+b");
var x = myFunction("Hello", " World"); // o [5,9] ad esempio
console.log(x);
