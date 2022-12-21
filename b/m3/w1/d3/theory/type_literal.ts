// tipi letterali => possiamo definire un set customizzato di valori possibili
// non siamo quindi limitati definire il TIPO () string, number, boolean, etc...)  ma possiamo in aggiunta specificare quale VALORE devono avare

type testResult = "Passato" | "Fallito" | "Incompleto"                  // dichiaro possibilità

let myResult: testResult;                                               // i valori possibili sono quelli che ho elencato

myResult = "Fallito"
myResult= "Incompleto"
myResult= "Passato"                                                     // valide poiché presenti come alternative ( suggerimenti attivi )
myResult ="fallimento"                                                  //Type '"fallimento"' is not assignable to type 'testResult'. Did you mean '"Fallito"'?


type dado = 1 | 2 | 3 | 4| 5 | 6;
let tiroDado: dado;
tiroDado= 1;
tiroDado= 2;
tiroDado= 3;
tiroDado= 4;
tiroDado= 5;
tiroDado= 6;
tirodado= 7;                                                            //Cannot find name 'tirodado'. Did you mean 'tiroDado'?