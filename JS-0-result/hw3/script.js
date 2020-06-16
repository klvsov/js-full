let money, time;

let appData = {
    budget: '',
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function detectDayBudget(){
    time = prompt('Enter date in format YYYY-MM-DD', 'YYYY-MM-DD');
    do{
        appData.budget = +prompt('Your monthly budget', 0);
    } while (isNaN(appData.budget) || appData.budget == '' || appData.budget == null);
}

detectDayBudget();

function chooseOptExpenses(){
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
}

chooseOptExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert('Money Per Day = ' + appData.moneyPerDay);

function detectedLevel(){
    if (appData.moneyPerDay < 100) {
        alert('Minimum');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert('Middle');
    } else if (appData.moneyPerDay > 100) {
        alert('Top');
    } else {
        alert('Error');
    }
}

detectedLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('How much will it saving?');
        let percent = +prompt("How much will it saving's percent?");

        appData.monthIncome = save/100/12*percent;
        alert(appData.monthIncome + " every month");
    }
}

checkSavings();