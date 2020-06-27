window.addEventListener('DOMContentLoaded', () => {
    
    let sliderTopPrev = document.querySelector('.slider-1 .prev'),
        sliderTopNext = document.querySelector('.slider-1 .next'),
        sliderTopSlides = document.querySelectorAll('.slider-1 .slide'),
        sliderBottomPrev = document.querySelector('.slider-2 .prev'),
        sliderBottomNext = document.querySelector('.slider-2 .next'),
        sliderBottomSlides = document.querySelectorAll('.slider-2 .slide');
        

    let sliderTop = new Slider(sliderTopSlides, sliderTopPrev, sliderTopNext, true);
    let sliderBottom = new Slider(sliderBottomSlides, sliderBottomPrev, sliderBottomNext, false);


    function Slider(slides, prev, next, autoPlay){
        this.slides = slides;
        let i = 0;
        let slider = this;
        this.prevSlide = function() {
            slider.slides[i].classList.remove('active');
            i--;
            if(i < 0) {
                i = slider.slides.length - 1;
            }
            slider.slides[i].classList.add('active');  
        }

        this.nextSlide = function() {
            slider.slides[i].classList.remove('active');
            i++;
            if(i >= slider.slides.length) {
                i = 0;
            }
            slider.slides[i].classList.add('active');
        }
        this.prev = prev;
        this.next = next;
        prev.addEventListener('click', this.prevSlide);
        next.addEventListener('click', this.nextSlide);
        this.autoPlay = autoPlay;
        if(autoPlay){
            setInterval(slider.nextSlide, 3000);
        }
    }
});