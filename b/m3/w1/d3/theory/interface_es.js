// interface è un contratto sintattico che stabilisce la sintassi a cui deve aderire qualsiasi entità
// definisce proprietà/metodi che sono i membri dell'interfaccia.
var customer = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHi: function () { return "hi there"; }
};
console.log(customer.sayHi());
console.log(customer.firstname);
console.log(customer.lastname);
var drummer = {}; // questa sarà la definizione minima
drummer.age = 27;
drummer.instrument = "Batteria"; // potrò poi inserire tutte le caratteristiche extra che voglio
console.log(drummer.age);
console.log(drummer.instrument);
