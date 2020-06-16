let money = +prompt('Your monthly budget', 0);
let time = +prompt('Enter date in format YYYY-MM-DD', 'YYYY-MM-DD');

let requiredCost1 = +prompt('Enter a required cost item this month');
let howMuch1 = +prompt('How much will it cost?');
let requiredCost2 = +prompt('Enter a required cost item this month');
let howMuch2 = +prompt('How much will it cost?');

let appData = {
    'budget': money,
    'timeData': time,
    'expenses': {},
    'optionalExpenses': '',
    'income': [],
    'savings': false
}

appData.requiredCost1 = howMuch1;
appData.requiredCost2 = howMuch2;

let result = money / 30 ;
alert(result);