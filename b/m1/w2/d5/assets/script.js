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


function calc(bottone)
{
  var a2=0;


  var a1 = text.value;
  a2 = a1.charAt(a1.length-1);
  if(a2 == '/' || a2 == '+' || a2 == '-' || a2 == '*')
  { 
    text.value = a1.substring(0,a1.length-1);
    text.value += bottone.getAttribute('data-simbolo');   
  }
  else
  {
   text.value+= bottone.getAttribute('data-simbolo');
  }
}