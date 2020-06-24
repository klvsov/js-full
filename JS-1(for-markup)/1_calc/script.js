window.addEventListener('DOMContentLoaded', () => {
    let num1 = document.querySelector('input[name=num1]'),
        num2 = document.querySelector('input[name=num2]'),
        plus = document.querySelector('input.addition'),
        minus = document.querySelector('input.subtraction'),
        mult = document.querySelector('input.multiplication'),
        div = document.querySelector('input.division'),
        res = document.querySelector('.res');

    
        plus.addEventListener('click', () => {
            let answer = +num1.value + +num2.value;
            res.textContent = answer;
        });

        minus.addEventListener('click', () => {
            let answer = +num1.value - +num2.value;
            res.textContent = answer;
        });

        mult.addEventListener('click', () => {
            let answer = +num1.value * +num2.value;
            res.textContent = answer;
        });

        div.addEventListener('click', () => {
            let answer = +num1.value / +num2.value;
            res.textContent = answer;
        });
});