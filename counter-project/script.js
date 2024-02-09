const number = document.getElementById("number");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const steps = document.getElementById('steps');


incrementBtn.addEventListener('click',() => {
    const stepsVal = parseInt(steps.value);
    const countVal = parseInt(number.innerText);
    if(stepsVal > 1) {
        number.innerText = countVal+stepsVal;
    }
    else {
    number.innerText = countVal+1
    }
})

decrementBtn.addEventListener('click',() => {
    const countVal = parseInt(number.innerText);
    const stepsVal = parseInt(steps.value);

    if(countVal === 0)
     return;

     if(stepsVal > 1) {
        number.innerText = countVal-stepsVal;
    } else{
    number.innerText = countVal-1
    }
    console.log('clicked');
})

