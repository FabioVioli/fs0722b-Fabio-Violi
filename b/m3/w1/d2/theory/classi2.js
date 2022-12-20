// ridefiniamo il metodo
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
var Veicolo = /** @class */ (function () {
    function Veicolo(modello, marca, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    Veicolo.prototype.dettagliVeicolo = function () {
        return "".concat(this.tipoVeicolo, " - ").concat(this.marca, " - ").concat(this.modello);
    };
    return Veicolo;
}());
var Macchine = /** @class */ (function (_super) {
    __extends(Macchine, _super);
    function Macchine(marca, modello) {
        return _super.call(this, marca, modello, "auto") || this;
    }
    Macchine.prototype.dettagliVeicolo = function () {
        console.log("Dettagli auto:");
        return _super.prototype.dettagliVeicolo.call(this);
    };
    return Macchine;
}(Veicolo));
var Giaguaro = new Macchine("Jaguar", "F-Type");
console.log(Giaguaro.dettagliVeicolo());
