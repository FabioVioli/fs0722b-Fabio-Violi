

document.querySelector('#add')
.addEventListener('click', function(){

let text = document.querySelector('#text')

let div = document.createElement('div')
div.textContent = text.value;
console.log(div)
div.classList.add('div-todo');

let complete = document.createElement('button');
complete.textContent = 'Fatto';



complete.addEventListener('click', ()=> {
div.classList.add('complete');
document.querySelector('#div-complete')
.append(div);
complete.textContent = 'cancella';

})

// complete.addEventListener('click', () => {
//     delete
// })


div.append(complete);
document.querySelector('#div-todo').append(div);

testo.value = ''

})

