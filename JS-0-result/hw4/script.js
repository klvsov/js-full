let money, time;

let appData = {
    budget: '',
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseOptExpenses: function() {
        for (let i = 0; i < 2; i++) {

            let requiredCost = prompt('Enter a required cost item this month');
            let howMuch = +prompt('How much will it cost?');
        
            if ( typeof(requiredCost) === 'string' && typeof(requiredCost) != null && typeof(howMuch) != null && requiredCost != '' && howMuch != '' && requiredCost.length < 50) {
                appData.expenses[requiredCost] = howMuch;
            } else{
                alert('Please valid value!');
                i--;
            }
        }
    
        for (let i = 0; i < 3; i++) {
    
            let howMuch = +prompt('How much will it cost?');
        
            if (typeof(howMuch) != null && howMuch != '') {
                appData.optionalExpenses[i+1] = howMuch;
            } else{
                alert('Please valid value!');
                i--;
            }
        }
    },
    detectedLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert('Minimum');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert('Middle');
        } else if (appData.moneyPerDay > 100) {
            alert('Top');
        } else {
            alert('Error');
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('How much will it saving?');
            let percent = +prompt("How much will it saving's percent?");
    
            appData.monthIncome = save/100/12*percent;
            alert(appData.monthIncome + " every month");
        }
    },
    chooseIncome: function() {
        let items = prompt('Additional income (please enter with ,', '');
        if (typeof(items) == 'string' && items != '' && items != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt("It's end?"));
            appData.income.sort();
        }
        appData.income.forEach(function (item, i){
            alert('Способи додаткового заробітку: ' + i + ': ' + item);
        })
    }
};

let detectDayBudget = function() {
    time = prompt('Enter date in format YYYY-MM-DD', 'YYYY-MM-DD');
    do{
        appData.budget = +prompt('Your monthly budget', 0);
    } while (isNaN(appData.budget) || appData.budget == '' || appData.budget == null);

    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Money Per Day = ' + appData.moneyPerDay);
};

detectDayBudget();

for (let key in appData){
    console.log('Our program has a data: ' + key + appData[key]);
}