window.addEventListener('DOMContentLoaded', function() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        totalValue = document.querySelector('#total'),
        personsAll = 0,
        daysAll = 0,
        total = 0;

    totalValue.textContent = 0;
    persons.addEventListener('change', function() {
        personsAll = +this.value;
        total = (daysAll + personsAll) * 4000;

        if(days.value == '') {
            totalValue.textContent = 0;
        } else if(persons.value == '' || days.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    days.addEventListener('change', function() {
        daysAll = +this.value;
        total = (daysAll + personsAll) * 4000;

        if(persons.value == '') {
            totalValue.textContent = 0;
        } else if(persons.value == '' || days.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('change', function() {
        if(persons.value == '' || days.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });

});