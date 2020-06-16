let money = +prompt('Your monthly budget', 0);
let time = prompt('Enter date in format YYYY-MM-DD', 'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};

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

// let i = 0;
// while (i < 2) {
//     let requiredCost = prompt('Enter a required cost item this month');
//     let howMuch = +prompt('How much will it cost?');

//     if ( typeof(requiredCost) === 'string' && typeof(requiredCost) != null && typeof(howMuch) != null && requiredCost != '' && howMuch != '' && requiredCost.length < 50) {
//         appData.expenses[requiredCost] = howMuch;
//     } else{
//         alert('Please valid value!');
//         i--;
//     }
//     i++;
// }

// do {
//     let requiredCost = prompt('Enter a required cost item this month');
//     let howMuch = +prompt('How much will it cost?');

//     if ( typeof(requiredCost) === 'string' && typeof(requiredCost) != null && typeof(howMuch) != null && requiredCost != '' && howMuch != '' && requiredCost.length < 50) {
//         appData.expenses[requiredCost] = howMuch;
//     } else{
//         alert('Please valid value!');
//         i--;
//     }

// } while (i < 2);

appData.moneyPerDay = appData.budget / 30 ;
alert('Money Per Day = ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    alert('Minimum');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Middle');
} else if (appData.moneyPerDay > 100) {
    alert('Top');
} else {
    alert('Error');
}