
/* 

 ██████╗██╗      █████╗ ███████╗███████╗    ██╗    ██╗██╗████████╗██╗  ██╗██╗███╗   ██╗    ███████╗███████╗████████╗ ██████╗██╗  ██╗                    
██╔════╝██║     ██╔══██╗██╔════╝██╔════╝    ██║    ██║██║╚══██╔══╝██║  ██║██║████╗  ██║    ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║                    
██║     ██║     ███████║███████╗███████╗    ██║ █╗ ██║██║   ██║   ███████║██║██╔██╗ ██║    █████╗  █████╗     ██║   ██║     ███████║                    
██║     ██║     ██╔══██║╚════██║╚════██║    ██║███╗██║██║   ██║   ██╔══██║██║██║╚██╗██║    ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║                    
╚██████╗███████╗██║  ██║███████║███████║    ╚███╔███╔╝██║   ██║   ██║  ██║██║██║ ╚████║    ██║     ███████╗   ██║   ╚██████╗██║  ██║                    
 ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝     ╚══╝╚══╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝                    
                                                                                                                                                                                            
*/

fetch('../exercise/assets/json/Abbigliamento.json')
    .then(response => response.json())
    .then(result =>{

        class Item {
            id:number;
            codprod:number;
            collezione:string;
            capo:string;
            modello:number;
            quantità:number;
            colore:string;
            prezzoivaesclusa:number;
            prezzoivainclusa:number;
            disponibile:string;
            saldo:number;
            immagine:string;

            constructor (id:number,codprod:number,collezione:string,capo:string,modello:number,quantità:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number,immagine:string){

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

            getSaldoCapo():any{
               return ((this.prezzoivainclusa/100)*this.saldo).toFixed(2)
                
            }
            getAcquistoCapo():any{
                let prezzoFinale = (this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2)
                return prezzoFinale
            }
        }        
        result.forEach(element => {
            
            let Capo = new Item (element.id, element.codprod, element.collezione,element.capo,element.modello,element.quantità,element.colore,element.prezzoivaesclusa,element.prezzoivainclusa,element.disponibile,element.saldo,element.immagine)
            console.log(`Dettagli ${element.capo}:`, Capo)
            console.log(`Prezzo iniziale: `+ element.prezzoivainclusa + `€`)
            console.log(`Percentuale di sconto su ${element.capo}: `+ Capo.getSaldoCapo()+"%")
            console.log(`Costo finale ${element.capo}: `+ Capo.getAcquistoCapo()+"€")
            console.log("-----------------------------------------------------------")


            let parent = (<HTMLDivElement>document.getElementById("parent"))
            parent.innerHTML += `<div class="card col-3 g-2 mx-5">
            <div class="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src="${element.immagine}" alt="">
              <h5 class="card-title">${element.capo}</h5>
              <p class="card-text">Prezzo iniziale ${element.prezzoivainclusa} €</p>
              <p class="card-text">Sconto Black Friday ${element.saldo}%</p>
              <p>Risparmi ${Capo.getSaldoCapo()}</p>
              <p class="card-text">Prezzo finale ${Capo.getAcquistoCapo()}€</p>
              <button>Aggiungi al carrello</button>
            </div>
          </div>`
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
