let startCount = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),    
    dayBudgetValue = document.querySelector('.daybudget-value'),    
    levelValue = document.querySelector('.level-value'),    
    expensesValue = document.querySelector('.expenses-value'),    
    incomeValue = document.querySelector('.income-value'),    
    monthSavingsValue = document.querySelector('.monthsavings-value'),    
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    checkSavings = document.querySelector('#savings');


    expensesItemBtn.setAttribute('disabled', 'disabled');
    optionalExpensesBtn.setAttribute('disabled', 'disabled');
    countBudgetBtn.setAttribute('disabled', 'disabled');


let money, time;

let appData = {
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};



startCount.addEventListener('click', function(){
    expensesItemBtn.removeAttribute('disabled');
    optionalExpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');

    do{
        appData.time = prompt('Введіть дату в форматі YYYY-MM-DD', 'YYYY-MM-DD');
    } while (!appData.time.match(/\d\d\d\d-\d\d-\d\d/));

    
    do{
        appData.budget = +prompt('Ваш бюджет на місяць', 0);
    } while (isNaN(appData.budget) || appData.budget == '' || appData.budget == null);

    budgetValue.textContent = appData.budget;
    yearValue.value = new Date(Date.parse(appData.time)).getFullYear();
    monthValue.value = new Date(Date.parse(appData.time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(appData.time)).getDate();
});


expensesItemBtn.addEventListener('click', function() {
    let sumExpenses = 0;

    for (let i = 0; i < expensesItems.length; i++) {

        let requiredCost = expensesItems[i].value;
        let howMuch = expensesItems[++i].value;
    
        if ( typeof(requiredCost) === 'string' && typeof(requiredCost) != null && typeof(howMuch) != null && requiredCost != '' && howMuch != '' && requiredCost.length < 50) {
            appData.expenses[requiredCost] = howMuch;
            sumExpenses += +howMuch;
        } else{
            alert('Please valid value!');
            i--;
        }

        expensesValue.textContent = sumExpenses;
        appData.allExpenses = sumExpenses;
    }

});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
    
        let howMuch = optionalExpensesItem[i].value;
    
        if (typeof(howMuch) != null && howMuch != '') {
            appData.optionalExpenses[i] = howMuch;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget) {
        if (appData.allExpenses) {
            appData.moneyPerDay = ((appData.budget - appData.allExpenses) / 30).toFixed(1);
        } else{
            appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        }
        
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Мінімальний рівень';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Середній рівень';
        } else if (appData.moneyPerDay > 100) {
            levelValue.textContent = "Високий рівень";
        } else {
            levelValue.textContent = 'Помилка';
        }
    } else{
        dayBudgetValue.textContent = "Помилка. Введіть бюджет";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    if (typeof(items) == 'string' && items != '' && items != null) {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener('click', function() {
    appData.savings = !appData.savings;
    console.log(appData.savings);
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            persent = +choosePercent.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            persent = +choosePercent.value;
        appData.monthIncome = sum/100/12*persent;
        appData.yearIncome = sum/100*persent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
