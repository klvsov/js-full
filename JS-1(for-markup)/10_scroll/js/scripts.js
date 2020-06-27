$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        let selector = $(this).attr('href'); /* #about - строка */
        let h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
        
        
    });

    function scrollStart() {
        if(window.pageYOffset > 250) {
            $('.top').fadeIn(500)
        } else {
            $('.top').fadeOut(500);
        }
    }

    scrollStart();
    

    $('.top').on('click', function(event) {
        event.preventDefault();
        let selector = $(this).attr('href');
        let h = $(selector); 
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
    });

    $(window).scroll(scrollStart);

});
