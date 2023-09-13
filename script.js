//elements
const itemsWrapper = document.querySelector('.items-wrapper');
const circlesWrapper = document.querySelector('.circles');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');

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
}

//prendo tutti gli elementi ocn la classe item e li salvo in un array
const itemsCollection = document.getElementsByClassName('item');

//al primo elemento tolgo la classe hide
itemsCollection[counterImg].classList.remove('hide');