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
var Lavoratore = /** @class */ (function () {
    // tasseInps: number;
    // tasseIrpef: number;
    function Lavoratore(codRedd, redditoAnnuoLordo, nome) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.nome = nome;
        // this.tasseInps = tasseInps;
        // this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var out = 0;
        if (this.codRedd == 1) {
            out = this.redditoAnnuoLordo * 0.05;
        }
        else if (this.codRedd == 2) {
            out = this.redditoAnnuoLordo * 0.07;
        }
        else if (this.codRedd == 3) {
            out = this.redditoAnnuoLordo * 0.1;
        }
        return out;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * 0.0919;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var out = 0;
        if (this.redditoAnnuoLordo <= 15000) {
            out = this.redditoAnnuoLordo * 0.23;
        }
        else if (this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000) {
            out = (15000 * 0.23) + (this.redditoAnnuoLordo - 15000) * 0.25;
        }
        else if (this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 50000) {
            out = (15000 * 0.23) + (13000 * 0.25) + (this.redditoAnnuoLordo - 28000) * 0.35;
        }
        else if (this.redditoAnnuoLordo > 50000) {
            out = (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + (this.redditoAnnuoLordo - 50000) * 0.43;
        }
        return out;
    };
    Lavoratore.prototype.getRedditoAnnualeNetto = function () {
        return this.redditoAnnuoLordo - (this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef());
    };
    return Lavoratore;
}());
var Magazziniere = /** @class */ (function (_super) {
    __extends(Magazziniere, _super);
    function Magazziniere(codRedd, redditoAnnuoLordo, nome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome) || this;
    }
    return Magazziniere;
}(Lavoratore));
var Panettiere = /** @class */ (function (_super) {
    __extends(Panettiere, _super);
    function Panettiere(codRedd, redditoAnnuoLordo, nome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome) || this;
    }
    return Panettiere;
}(Lavoratore));
var Attrice = /** @class */ (function (_super) {
    __extends(Attrice, _super);
    function Attrice(codRedd, redditoAnnuoLordo, nome) {
        return _super.call(this, codRedd, redditoAnnuoLordo, nome) || this;
    }
    return Attrice;
}(Lavoratore));
var Roberto = new Magazziniere(1, 25000, "Roberto");
var Pino = new Panettiere(2, 30000, "Peter");
var Giorgia = new Attrice(3, 100000, "Giorgia");
// console.log(`Le tasse sull'utile di ${Roberto.nome} sono di `+ Roberto.getUtileTasse())
// console.log(`Le tasse Inps di ${Roberto.nome} sono di ` + Roberto.getTasseInps())
// console.log(`Le tasse Irpef di ${Roberto.nome} sono di ` + Roberto.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Roberto.nome} è di ` + Roberto.getRedditoAnnualeNetto())
// console.log(`Le tasse sull'utile di ${Pino.nome} sono di `+ Pino.getUtileTasse())
// console.log(`Le tasse Inps di ${Pino.nome} sono di ` + Pino.getTasseInps())
// console.log(`Le tasse Irpef di ${Pino.nome} sono di ` + Pino.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Pino.nome} è di ` + Pino.getRedditoAnnualeNetto())
// console.log(`Le tasse sull'utile di ${Giorgia.nome} sono di `+ Giorgia.getUtileTasse())
// console.log(`Le tasse Inps di ${Giorgia.nome} sono di ` + Giorgia.getTasseInps())
// console.log(`Le tasse Irpef di ${Giorgia.nome} sono di ` + Giorgia.getTasseIrpef())
// console.log(`Il reddito annuale netto di ${Giorgia.nome} è di ` + Giorgia.getRedditoAnnualeNetto())
var button = document.getElementById("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var cod = document.getElementById("cod").value;
    var reddito = document.getElementById("reddito").value;
    console.log(nome);
    console.log(cod);
    console.log(reddito);
    var User = new Magazziniere(Number(cod), Number(reddito), String(nome));
    document.getElementById("outcome").innerHTML = "<h3>Ciao ".concat(User.nome, ", il tuo reddito annuale esentasse \u00E8 di ").concat(User.getRedditoAnnualeNetto(), ".<div></h3> <hr> <h3>Utile Tasse = ").concat(User.getUtileTasse(), "</h3> <hr> <h3>UTasse INPS = ").concat(User.getTasseInps(), "</h3><hr><h3>Tasse IRPEF = ").concat(User.getUtileTasse(), "</h3></div>");
    console.log(User.getRedditoAnnualeNetto());
});
