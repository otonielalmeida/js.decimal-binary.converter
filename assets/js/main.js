const form = document.querySelector('#form');
const result = document.querySelector('#result');
const input = document.querySelector('#num');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNum = e.target.querySelector('#num');
    
    const num = Number(inputNum.value);
    result.innerHTML = num.toString(2);
    clearInput();
})
function clearInput(){
    input.value = '';
    input.focus();
}
const form2 = document.querySelector('#form2');
const result2 = document.querySelector('#result2');
const input2 = document.querySelector('#num2');
form2.addEventListener('submit', function(e){
    e.preventDefault();
    const inputnum2 = e.target.querySelector('#num2');

    const num2 = Number(inputnum2.value);
    result2.innerHTML = parseInt(num2, 2);

    clearInput2();
})

function clearInput2(){
    input2.value = '';
    input2.focus();
}



