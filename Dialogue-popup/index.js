const btn = document.getElementById('btn');
const card = document.querySelector('.card');
console.log(card);
btn.addEventListener('click',() => {
    const visibiltyElem = card.style.visibility === 'hidden' ? 'visible' : 'hidden';
    card.style.visibility= visibiltyElem;
})