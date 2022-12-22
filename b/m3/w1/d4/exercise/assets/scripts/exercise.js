/*

 ██████╗██╗      █████╗ ███████╗███████╗    ██╗    ██╗██╗████████╗██╗  ██╗██╗███╗   ██╗    ███████╗███████╗████████╗ ██████╗██╗  ██╗
██╔════╝██║     ██╔══██╗██╔════╝██╔════╝    ██║    ██║██║╚══██╔══╝██║  ██║██║████╗  ██║    ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║
██║     ██║     ███████║███████╗███████╗    ██║ █╗ ██║██║   ██║   ███████║██║██╔██╗ ██║    █████╗  █████╗     ██║   ██║     ███████║
██║     ██║     ██╔══██║╚════██║╚════██║    ██║███╗██║██║   ██║   ██╔══██║██║██║╚██╗██║    ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║
╚██████╗███████╗██║  ██║███████║███████║    ╚███╔███╔╝██║   ██║   ██║  ██║██║██║ ╚████║    ██║     ███████╗   ██║   ╚██████╗██║  ██║
 ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝     ╚══╝╚══╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝
                                                                                                                                                                                            
*/
fetch('../exercise/assets/json/Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (result) {
    var Item = /** @class */ (function () {
        function Item(id, codprod, collezione, capo, modello, quantità, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo, immagine) {
            this.id = id;
            this.codprod = codprod;
            this.collezione = collezione;
            this.capo = capo;
            this.modello = modello;
            this.quantità = quantità;
            this.colore = colore;
            this.prezzoivaesclusa = prezzoivaesclusa;
            this.prezzoivainclusa = prezzoivainclusa;
            this.disponibile = disponibile;
            this.saldo = saldo;
            this.immagine = immagine;
        }
        Item.prototype.getSaldoCapo = function () {
            return ((this.prezzoivainclusa / 100) * this.saldo).toFixed(2);
        };
        Item.prototype.getAcquistoCapo = function () {
            var prezzoFinale = (this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2);
            return prezzoFinale;
        };
        return Item;
    }());
    result.forEach(function (element) {
        var Capo = new Item(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantità, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo, element.immagine);
        console.log("Dettagli ".concat(element.capo, ":"), Capo);
        console.log("Prezzo iniziale: " + element.prezzoivainclusa + "\u20AC");
        console.log("Percentuale di sconto su ".concat(element.capo, ": ") + Capo.getSaldoCapo() + "%");
        console.log("Costo finale ".concat(element.capo, ": ") + Capo.getAcquistoCapo() + "€");
        console.log("-----------------------------------------------------------");
        var parent = document.getElementById("parent");
        parent.innerHTML += "<div class=\"card col-3 g-2 mx-5\">\n            <div class=\"card-body d-flex flex-column justify-content-evenly align-items-center\">\n              <img src=\"".concat(element.immagine, "\" alt=\"\">\n              <h5 class=\"card-title\">").concat(element.capo, "</h5>\n              <p class=\"card-text\">Prezzo iniziale ").concat(element.prezzoivainclusa, " \u20AC</p>\n              <p class=\"card-text\">Sconto Black Friday ").concat(element.saldo, "%</p>\n              <p>Risparmi ").concat(Capo.getSaldoCapo(), "</p>\n              <p class=\"card-text\">Prezzo finale ").concat(Capo.getAcquistoCapo(), "\u20AC</p>\n              <button class\"btn-add\">Aggiungi al carrello</button>\n            </div>\n          </div>");
    });
});
/*

 ██████╗██╗      █████╗ ███████╗███████╗     ██████╗ ██╗   ██╗████████╗███████╗██╗██████╗ ███████╗    ███████╗███████╗████████╗ ██████╗██╗  ██╗
██╔════╝██║     ██╔══██╗██╔════╝██╔════╝    ██╔═══██╗██║   ██║╚══██╔══╝██╔════╝██║██╔══██╗██╔════╝    ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║
██║     ██║     ███████║███████╗███████╗    ██║   ██║██║   ██║   ██║   ███████╗██║██║  ██║█████╗      █████╗  █████╗     ██║   ██║     ███████║
██║     ██║     ██╔══██║╚════██║╚════██║    ██║   ██║██║   ██║   ██║   ╚════██║██║██║  ██║██╔══╝      ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║
╚██████╗███████╗██║  ██║███████║███████║    ╚██████╔╝╚██████╔╝   ██║   ███████║██║██████╔╝███████╗    ██║     ███████╗   ██║   ╚██████╗██║  ██║
 ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝     ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝╚═════╝ ╚══════╝    ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝
                                                                                                                                                                                            */
