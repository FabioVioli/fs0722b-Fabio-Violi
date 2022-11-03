
// FOR - PER CICLARE BASANDOSI SU UN INDICE A SCELTA ( il FOR classico)

for( let i = 0; i < 10; i++ ){             // all'interno delle tonde separato da 2 punti e virgola
    document.write(i)
}

document.write('<hr>')

// FOR - PER CICLARE ARRAYS

let animali = ['Tigre','Leone','Gatto','Cane','Alpaca'];
for( let i = 0; i < animali.length; i++ ){             
    document.write(animali[i])
} // solo esempio. non utilizzare for per ciclare arrays

document.write('<hr>')

// FOR OF - PER CICLARE ARRAYS

for(let animale of animali){
    document.write( animale + ' - ');
}

document.write('<hr>')

// FOR OF - PER CICLARE STRINGHE

let stringa = 'Ciao, come va?';
for(let lettera of stringa){
    document.write( lettera + '<br>')
}

document.write('<hr>')

// FOR IN - per ciclare gli oggetti

let utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    anni:'30'
}

let proprAccettate = ['nome', 'cognome','anni']  // lista proprietàche voglio mostrare
document.write('<ul>')
for(let proprietà in utente){
    if(proprAccettate.includes(proprietà)){
    document.write(`<li> ${proprietà}: ${utente[proprietà]} </li>`)
    break; // se messo, il break interrompe il ciclo dopo la prima interazione
    }
}

document.write('</ul>')