//elements
const itemsWrapper = document.querySelector('.items-wrapper');
const circlesWrapper = document.querySelector('.circles');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');

//nascondo di defoult il bottone prev
btnPrev.classList.add('hide');

//nascondo di defoult il bottone prev
btnPrev.classList.add('hide');

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

let counterImg = 0;

//resetto lo slider
itemsWrapper.innerHTML = '';
circlesWrapper.innerHTML = '';

//con un ciclo stampo tutte le immagini dentro a items-wrapper
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(image);
    itemsWrapper.innerHTML += `<img src="${image}" class="item hide"></img>`;
    //stampare tanti pallini quanti sono le immagini
    circlesWrapper.innerHTML += `<div class="circle"></div>`;
}

//prendo tutti gli elementi ocn la classe item e li salvo in un array
const itemsCollection = document.getElementsByClassName('item');

//prendo tutta la collection dei pallini
const circlesCollection = document.getElementsByClassName('circle');

//al primo elemento tolgo la classe hide
itemsCollection[counterImg].classList.remove('hide');

//rendo attivo il primo pallino
circlesCollection[counterImg].classList.add('active');

//al click di next
btnNext.addEventListener('click', function(){
    //aggiungo la classe hide all'elemento corrente e rimuovo active dal pallino corrente
    itemsCollection[counterImg].classList.add('hide');
    circlesCollection[counterImg].classList.remove('active');
    //incrementa il contatore
    counterImg++;
    //BONUS 1
    // Verifica se si è raggiunta l'ultima immagine
    if (counterImg === itemsCollection.length) {
        // Se sì, torna alla prima immagine
        counterImg = 0;
    }
    //tolgo la classe hide all'elemento corrente e aggiungo active dal pallino corrente
    itemsCollection[counterImg].classList.remove('hide');
    circlesCollection[counterImg].classList.add('active');
    //al click di next appare prev
    btnPrev.classList.remove('hide');
});

//al click di prev come punto 4 va inverso
btnPrev.addEventListener('click', function(){
    itemsCollection[counterImg].classList.add('hide');
    circlesCollection[counterImg].classList.remove('active');
    counterImg--;
    //BONUS 1
    // Verifica se si è raggiunta la prima immagine
    if (counterImg < 0) {
        // Se sì, torna all'ultima immagine
        counterImg = itemsCollection.length - 1;
    }
    itemsCollection[counterImg].classList.remove('hide');
    circlesCollection[counterImg].classList.add('active');
    //al click di prev mostrio next togliendo la classe hide
    btnNext.classList.remove('hide');
    
});