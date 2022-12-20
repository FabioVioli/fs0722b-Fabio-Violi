// le classi astratte si basano su una keyword => abstract
// sono classi base che non possono essere istanziate
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// devono avere almeno un metodo, su cui farò la dichiarazione senza che venga implementato
var Veicolo1 = /** @class */ (function () {
    function Veicolo1(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    Veicolo1.prototype.vernicia = function (colore) {
        this.colore = colore;
    };
    Veicolo1.prototype.coloreCorrente = function () {
        return this.colore;
    };
    return Veicolo1;
}());
var Automobile1 = /** @class */ (function (_super) {
    __extends(Automobile1, _super);
    function Automobile1(marca, modello, colore) {
        return _super.call(this, marca, modello, colore) || this;
    }
    Automobile1.prototype.dettagliVeicolo = function () {
        return "".concat(this.marca, " - ").concat(this.modello);
    };
    return Automobile1;
}(Veicolo1));
// const veicolo = new Veicolo1  // Errore, in quanto Veicolo1 è classe astratta - Cannot create an instance of an abstract class.
// posso però dire che 
var fiat = new Automobile1("Jaguar", "F-type", "blu");
console.log(fiat.dettagliVeicolo()); // Jaguar - F-Type
console.log(fiat.coloreCorrente()); // blu
fiat.vernicia("rosso"); // usiamo anche la funzione per cambiare colore
console.log(fiat.coloreCorrente()); // rosso
