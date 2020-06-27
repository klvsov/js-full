$(function() {
    $('.question').on('click', function() {
        let answer = $(this).next();
        $('.answer:visible').not(answer).slideUp();
        answer.slideToggle(700);
    });
})