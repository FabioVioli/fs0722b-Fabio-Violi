// Type assertion => imposta il tipo di un valore e dice al compilatore di non riferirlo.
// la usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TypeScript deduce da solo.
var code = 123; //dichiarato any
var employeeCode = code; // sappiamo che il codice è un numero, anche se abbiamo dichiarato any sopra
// abbiamo asserito che, in questo caso, il codice è di tipo number
console.log(typeof (employeeCode)); // ora employeeCode è number
var employee = {}; // possiamo ovviare al problema usando un'interfaccia, per definire i tipi
employee.name = "John";
employee.code = 123;
console.log("Type of name = " + typeof (employee.name), "Type of code = " + typeof (employee.code));
