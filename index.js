let money, time;
function start() {
    money = +prompt('Ваш бюджет на месяц? (грн)', '');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money === "" || money === null) {
        money = +prompt('Ваш бюджет на месяц? (грн)', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: true
};

function chooseExpenses() {
    for(let i=0;i<2;i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', 'Кв.плата'),
            b = prompt("Во сколько обойдется?", 1000);
        if((typeof(a)) === 'string' &&
            (typeof(a)) != null &&
            (typeof(b)) != null &&
            a !== '' && b !== '' &&
            a.length < 50
        ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {

        }
    }
}

function chooseOptExpenses() {
    for(let i=0;i<3;i++) {
        let a = prompt('Введите статью необязательных расходов', 'Ресторан'),
            b = +prompt("Во сколько обойдется?", 400);
        if((typeof(a)) === 'string' &&
            (typeof(a)) != null &&
            (typeof(b)) != null &&
            a !== '' && b !== '' &&
            a.length < 50
        ) {
            console.log('done');
            appData.optionalExpenses[a] = b;
        } else {
        }
    }
}

function detectDayBudget() {
    chooseExpenses();
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        alert('Средний уровень достатка');
    } else if(appData.moneyPerDay >  2000){
        alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка');
    }
}

function checkSavings() {
    if(appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = prompt('Под какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита - ${appData.monthIncome}`);
    }
}
checkSavings();