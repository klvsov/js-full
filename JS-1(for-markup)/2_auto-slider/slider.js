window.addEventListener('DOMContentLoaded', () => {
    let prev = document.querySelector('.prev'),
        next= document.querySelector('.next'),
        slides = document.querySelectorAll('.slide'),
        autoplay = document.querySelector('input[name=autoplay]'),
        i = 0;

    next.addEventListener('click', autoSlider);

    prev.addEventListener('click', () => {
        slides[i].classList.remove('active');
        i--;
        if(i < 0) {
            i = slides.length - 1;
        }
        slides[i].classList.add('active');
    });
    let timerSlider;
    function autoSlider() {
        slides[i].classList.remove('active');
        i++;
        if(i >= slides.length) {
            if(i == slides.length) {
                clearInterval(timerSlider); 
                alert('The end'); 
            }
            i = 0;
        }
        slides[i].classList.add('active');
    }
    
    autoplay.addEventListener('click', function() {
        if(this.checked) {
            timerSlider = setInterval(autoSlider, 2500);
        } else{
            clearInterval(timerSlider);
        }
    });
});