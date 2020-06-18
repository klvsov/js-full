window.addEventListener('DOMContentLoaded', function() {
    let more = document.querySelector('.more'),
        divMore = document.querySelector('.description'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    more.addEventListener('click', function(event) {
        if(event.target && event.target.classList.contains('more')) {
            openWindow();
        }
    });

    divMore.addEventListener('click', function(event) {
        if(event.target && event.target.classList.contains('description-btn')) {
            openWindow();
        }
    })

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''
    });

    function openWindow(){
        overlay.style.display = 'block';
        event.target.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
})