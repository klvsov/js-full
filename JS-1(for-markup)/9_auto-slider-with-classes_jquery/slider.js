window.addEventListener('DOMContentLoaded', () => {
    
    let sliderBottomPrev = document.querySelector('.slider-2 .prev'),
        sliderBottomNext = document.querySelector('.slider-2 .next'),
        sliderBottomSlides = document.querySelectorAll('.slider-2 .slide');
        

    let sliderTop = new Slider($('.slider-1 .slide'), $('.slider-1 .prev'), $('.slider-1 .next'), false);
    let sliderBottom = new Slider($('.slider-2 .slide'), $('.slider-2 .prev'), $('.slider-2 .next'), true);


    function Slider(slides, prev, next, autoPlay){
        this.slides = slides;
        let i = 0;
        let slider = this;
        this.prevSlide = function() {
            slides.eq(i).removeClass('active');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides.eq(i).addClass('active');  
        }

        this.nextSlide = function() {
            slides.eq(i).removeClass('active');
            i++;
            if(i >= slides.length) {
                i = 0;
            }
            slides.eq(i).addClass('active');
        }
        this.prev = prev;
        this.next = next;
        prev.on('click', this.prevSlide);
        next.on('click', this.nextSlide);
        this.autoPlay = autoPlay;
        if(autoPlay){
            setInterval(slider.nextSlide, 3000);
        }
    }
});