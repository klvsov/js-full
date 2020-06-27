window.addEventListener('DOMContentLoaded', function(e){
    let userName = document.querySelector('input[type=text]'),
        userPhone = document.querySelector('input[type=tel]'),
        form = document.querySelector('form');
        

    form.addEventListener('submit', function(event){
        let errors = false;
        event.preventDefault();
        if(userName.value.length < 2 || !(userName.value >= 'a' && userName.value <='Я')) {
            userName.classList.add('error');
            errors = true;
        } else{
            userName.classList.remove('error');
            errors = false;
        }
        if(!(userPhone.value.length >= 6 && userPhone.value.length <= 999999999999)) {
            userPhone.classList.add('error');
            errors = true;
        } else{
            userPhone.classList.remove('error');
            errors = false;
        }
        if(!errors) {
            form.submit();
        }
    
    })
    
});

