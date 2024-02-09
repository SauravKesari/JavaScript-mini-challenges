const btn = document.getElementById('calc');
const result = document.getElementById('result');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

btn.addEventListener('click',() => {
    const w = parseInt(weight.value);
    const h = parseInt(height.value);
    const meter = parseFloat(h/100);
    
    result.innerText = Number(w/(meter*meter)).toFixed(2);

})