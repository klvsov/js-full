window.addEventListener('DOMContentLoaded', function(){
    let boxes = document.querySelectorAll('.box'),
        jqBoxes = new nanoJQuery(boxes),
        sumContainer = document.querySelector('.all'),
        sum = 0;

    jqBoxes.on('click', function(){
        this.classList.toggle('onselect');
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

    // jqBoxes.on('click', function(){
    //     this.classList.toggle('onselect');
    // });

    // jqBoxes.on('mouseover', function(){
    //     this.classList.add('onfocus');
    // });

    // jqBoxes.on('mouseout', function(){
    //     this.classList.remove('onfocus');
    // });

    // jqBoxes.on('click', function(){
    //     let a = parseInt(this.getAttribute('data-price'));
    //     if(this.classList.contains('onselect')) {
    //         sum += a;
    //     } else {
    //         sum -= a; 
    //     }
    //     sumContainer.textContent = sum;
    // });

    // jqBoxes.add('class-1').add('class-2').add('class-3');

});