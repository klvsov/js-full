$(function(){
        let jqBoxes = $('.box'),
        sumContainer = document.querySelector('.all'),
        sum = 0;

    jqBoxes.on('click', function(event){
        this.classList.toggle('onselect');
        calcPrice();
        // $(this).fadeOut(500, function(){
        //     $(this).fadeIn(500);
        // });
    }).on('mouseover', function(){
        this.classList.add('onfocus');
    }).on('mouseout', function(){
        this.classList.remove('onfocus');
    });

    function calcPrice() {
        let price = 0;
        for (let i = 0; i < jqBoxes.length; i++){
            if (jqBoxes[i].classList.contains('onselect')) {
                price += parseInt(jqBoxes[i].getAttribute('data-price'));
            }
        }
        sumContainer.textContent = price;
    }
});