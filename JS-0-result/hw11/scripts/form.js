window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let message = {
        loading: 'Загрузка данных...',
        success: 'Данные загружены. Скоро мы свяжемся с вами!',
        failure: 'Возникла ошибка!'
    };
    let form1 = document.querySelector('.main-form'),
        input = form1.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form1.addEventListener('submit', function(event){
        event.preventDefault();
        form1.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'aplication/json; charset=utf-8');
        let formData = new FormData(form1);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

});