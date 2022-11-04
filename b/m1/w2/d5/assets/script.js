function aggiungiCifra(bottone){

    document.getElementById("text").value += bottone.getAttribute('data-simbolo');

}

function tot(){
    let text = document.getElementById("text");
    text.value = eval(text.value);
}

function canc(){
    text.value = '';
}

function del(){
    text.value = text.value.slice(0, -1)
}

function help(){
    alert('È stato appena inviato un messaggio a Riccardo Calvi, che sarà lieto di rispondere ad ogni tuo dubbio, e a risolvere ogni tuo problema. Resta in attesa.')
}

