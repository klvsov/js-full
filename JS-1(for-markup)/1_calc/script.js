window.addEventListener('DOMContentLoaded', () => {
    let num1 = document.querySelector('input[name=num1]'),
        num2 = document.querySelector('input[name=num2]'),
        buttons = document.querySelector('.buttons'),
        res = document.querySelector('.res'),
        answer = 0;

    buttons.addEventListener('click', function(event){
        if(event.target.tagName == "INPUT"){
            calc(event.target.getAttribute('data-operation'));
            res.textContent = answer;
        }
    });
    
 
    function calc(op) {
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);

        switch(op){
            case '+':
                answer = n1 + n2;
                break;
            case '-':
                answer = n1 - n2;
                break;
            case '*':
                answer = n1 * n2;
                break;
            case '/':
                answer = n1 / n2;
                break;
        }
    }
        
});