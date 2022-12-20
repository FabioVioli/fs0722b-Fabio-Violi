// se non dichiariamo il tipo di oggetto, le classi sono pubbliche
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
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.vislualizzaNomeCognome = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
var accessoEsterno = new Persona();
accessoEsterno.nome = "mario";
accessoEsterno.cognome = "Rossi";
// console.log(accessoEsterno.vislualizzaNomeCognome())            // 2) Mario Rossi - Accessibile anche da fuori       4) darà errore
// Property 'vislualizzaNomeCognome' is private and only accessible within class 'Persona'.
// static => si usa quando voglio usare un metodo senza necessità di creare un'istanza della classe
var Persona1 = /** @class */ (function () {
    function Persona1(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona1.concatenare = function (a, b) {
        return a + " " + b;
    };
    return Persona1;
}());
console.log(Persona1.concatenare("Mario", "Rossi"));
// extends => estendo una classe
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.display = function () {
        console.log("Circle Area:" + this.area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.display();
// extends può andare su più livelli
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root)); // eredita da root
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); // eredita da Child
var plant = new Leaf();
plant.str = "Hello";
console.log(plant.str);
