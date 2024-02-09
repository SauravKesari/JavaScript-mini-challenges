const input = document.getElementById('string');
const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
const camel = document.getElementById('camel');
const snake = document.getElementById('snake');
const kebab = document.getElementById('kebab');
const trim = document.getElementById('trim');

input.addEventListener('input',() => {
    const camelCase = input.value.trim().toLowerCase()
    .split(' ')
    .reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());
    lower.textContent = input.value.trim().toLowerCase();
    upper.textContent = input.value.trim().toUpperCase();
    camel.textContent = camelCase;
    snake.textContent = input.value.trim().split(' ').join('_');
    kebab.textContent = input.value.trim().split(' ').join('-');
    trim.textContent = input.value.trim();


})
