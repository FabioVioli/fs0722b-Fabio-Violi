// Type assertion => imposta il tipo di un valore e dice al compilatore di non riferirlo.
// la usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TypeScript deduce da solo.

let code:any = 123;                         //dichiarato any
let employeeCode = <number> code;           // sappiamo che il codice è un numero, anche se abbiamo dichiarato any sopra
                                            // abbiamo asserito che, in questo caso, il codice è di tipo number

console.log(typeof(employeeCode))           // ora employeeCode è number

// let employee = {};                          // siccome non esiste alcun tipo
// employee.name = "John"                      // error - Property 'name' does not exist on type '{}'.
// employee.code = 123                         // error - Property 'code' does not exist on type '{}'.

interface Employee{
    name:string;
    code:number;
}

let employee = <Employee> {}                    // possiamo ovviare al problema usando un'interfaccia, per definire i tipi
    employee.name = "John"
    employee.code = 123

    console.log( "Type of name = " + typeof(employee.name), "Type of code = " + typeof(employee.code))
