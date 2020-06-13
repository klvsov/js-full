let money = +prompt('Your monthly budget', 0);
let time = +prompt('Enter date in format YYYY-MM-DD', 'YYYY-MM-DD');

let requiredCost1 = +prompt('Enter a required cost item this month');
let howMuch1 = +prompt('How much will it cost?');
let requiredCost2 = +prompt('Enter a required cost item this month');
let howMuch2 = +prompt('How much will it cost?');

let appData = {
    'budget': money,
    'timeData': time,
    'expenses': {
        requiredCost1: howMuch1,
        requiredCost2: howMuch2,
    },
    'optionalExpenses': '',
    'income': [],
    'savings': false
}

let result = money + howMuch1 + howMuch2;
alert(result / 30);