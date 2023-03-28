const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let arrayImg = [
    '<img class="item active" src="./assets/img/04.webp" alt="foto" width="100%">',
    '<img class="item" src="./assets/img/02.webp" alt="foto" width="100%">',
    '<img class="item" src="./assets/img/03.webp" alt="foto" width="100%">',
    '<img class="item" src="./assets/img/01.webp" alt="foto" width="100%">',
    '<img class="item" src="./assets/img/05.webp" alt="foto" width="100%">',
];
console.log(arrayImg);

let boxImg = document.querySelector('.items');

for (let i = 0; i < arrayImg.length; i++) {
    boxImg.innerHTML += arrayImg[i];

}



// assegno una funzione al elemento prev
prev.addEventListener('click', function () {
    let imgActive = document.querySelector('.item.active');
    // mi aggancio ad elem sucessivo cioe fratello ,creo un altra var
    boxImg = imgActive.nextElementSibling

    // rimovo dal attuale active
    imgActive.classList.remove('active')
    // agg al successivo fratello
    boxImg.classList.add('active')


})
// assegno una funzione al elemento next
next.addEventListener('click', function () {
    let imgActive = document.querySelector('.item.active');
    // mi aggancio ad elem sucessivo cioe fratello ,creo un altra var
    boxImg = imgActive.nextElementSibling

    // rimovo dal attuale active
    imgActive.classList.remove('active')
    // agg al successivo fratello
    boxImg.classList.add('active')


})