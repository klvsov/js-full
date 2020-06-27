$(function(){
        let jqBoxes = $('.box'),
        sumContainer = document.querySelector('.all'),
        sum = 0;

    jqBoxes.on('click', function(event){
        this.classList.toggle('onselect');
        $(this).fadeOut(500, function(){
            $(this).fadeIn(500);
        });
    }).on('mouseover', function(){
        this.classList.add('onfocus');
    }).on('mouseout', function(){
        this.classList.remove('onfocus');
    }).on('click', function(){
        let a = parseInt(this.getAttribute('data-price'));
        if(this.classList.contains('onselect')) {
            sum += a;
        } else {
            sum -= a; 
        }
        sumContainer.textContent = sum;
    });
});