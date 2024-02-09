const input = document.getElementById('phone');

const getStringWithNumbersOnly = (str) =>
  [...str].filter((v) => Number.isInteger(+v) && v !== ' ').join('');

function formatter(text){
    const num = getStringWithNumbersOnly(text); 
    return num.length > 3 ? '+('+num.substring(0,3)+')-'+num.substring(3):num;
}

input.addEventListener('input',()=>(input.value = formatter(input.value)))