$(() => {

    let sliderTop = new Slider($('.slider-1 .slide'), $('.slider-1 .prev'), $('.slider-1 .next'), false);
    let sliderBottom = new Slider($('.slider-2 .slide'), $('.slider-2 .prev'), $('.slider-2 .next'), false);


    function Slider(slides, prev, next, autoPlay){
        this.slides = slides;
        let i = 0;
        let slider = this;
        this.prevSlide = function() {
            slides.eq(i).css({'z-index':'1001', 'left':'auto'}).animate({'right': '100%'}, 1000)
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides.eq(i).animate({
                'right': '0',
                'left': '0',
                'z-index': '1000'
            }, 0);
        }

        this.nextSlide = function() {
            slides.eq(i).css({'z-index': '1001', 'right': 'auto'}).animate({'left': '100%'}, 1000);
            i++;
            if(i >= slides.length) {
                i = 0;
            }
            slides.eq(i).animate({
                'right': '0',
                'left': '0',
                'z-index': '1000'
            }, 0);
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