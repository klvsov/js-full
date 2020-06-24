window.addEventListener('DOMContentLoaded', () => {
    let num1 = document.querySelector('input[name=num1]'),
        num2 = document.querySelector('input[name=num2]'),
        btn = document.querySelector('input[type=button]'),
        res = document.querySelector('.res');

    btn.addEventListener('click', sumNumbers);
    num1.addEventListener('input', unblock);
    num2.addEventListener('input', unblock);

    function sumNumbers() {
        let sum = parseInt(num1.value) + parseInt(num2.value);
        res.innerHTML = sum;
        btn.setAttribute('disabled', 'disabled');
    }

    function unblock() {
        btn.removeAttribute('disabled');
    }
})