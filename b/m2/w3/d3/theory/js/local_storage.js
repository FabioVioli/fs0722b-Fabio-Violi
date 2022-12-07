salvaIlDato = function(info_da_salvare){
    localStorage.ultimo_pensiero = info_da_salvare;
    alert("memorizzazione effettuata");
};

recuperaIlDato = function (elemento){
    if(confirm("sostituire il contenuto attuale con l'ultimo pensiero memorizzato?")){
        elemento.value = localStorage.ultimo_pensiero;
    }
    
};