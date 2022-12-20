// TypeScript supporta l'ereditarietà delle classi
// la Keyword extends estende una classe "base"
// nel costruttore della classe derivata useremo super() per indicare il costruttore della classe base
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
var Vehicle = /** @class */ (function () {
    function Vehicle(modello, marca, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    Vehicle.prototype.dettagliVeicolo = function () {
        return "".concat(this.tipoVeicolo, " - ").concat(this.marca, " - ").concat(this.modello);
    };
    return Vehicle;
}());
// ora creaiamo 2 classi che estendono veicolo ( ad esempio, un veicolo potrebbe essere una macchina o una moto)
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello) {
        return _super.call(this, marca, modello, "auto") || this;
    }
    return Cars;
}(Vehicle));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(marca, modello) {
        return _super.call(this, marca, modello, "moto") || this;
    }
    return Motorbike;
}(Vehicle));
// creiamo quindi qualche istanza
var Jaguar = new Cars("Jaguar", "F-Type");
var Ducati = new Motorbike("Ducati", "Panigale V4");
// posso verificare se una classe che ho creato sia o meno istanza di un'altra classe
console.log(Jaguar instanceof Cars); // true
console.log(Ducati instanceof Motorbike); // true
console.log(Ducati instanceof Cars); // false
