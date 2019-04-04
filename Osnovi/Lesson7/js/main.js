let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthVatue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function () {
    money = +prompt('Ваш бюджет на месяц? (грн)', '4000');
    time = prompt("Введите дату в формате YYYY-MM-DD",'2018-03-31');

    while(isNaN(money) || money === "" || money === null) {
        money = +prompt('Ваш бюджет на месяц? (грн)', '');
    }
    appData.budget = money;
    appData.time = time;
    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthVatue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;

});

countBtn.addEventListener('click', function () {
   if(appData.budget !== undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 &&appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        alert('Сначала укажите бюджет на месяц');
    }
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
            b = expensesItem[++i].value;
        if ((typeof(a)) === 'string' &&
            (typeof(a)) != null &&
            (typeof(b)) != null &&
            a !== '' && b !== '' &&
            a.length < 50
        ) {
            sum += +b;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for(let i=0;i<optionalExpensesItem.length;i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] +  ' ';
    }
});

incomeItem.addEventListener('input', function () {
    incomeValue.textContent = incomeItem.value;
});

checkSavings.addEventListener('click', function () {
   if(appData.savings === true){
       appData.savingse = false;
   } else {
       appData.savings = true;
   }
});

sumValue.addEventListener('change', function () {
    if(percentValue.value !== '' && appData.savings === true){
        let save = sumValue.value,
            percent = percentValue.value;
        appData.monthIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('change', function () {
    if(sumValue.value !== '' && appData.savings === true){
        let save = sumValue.value,
            percent = percentValue.value;
        appData.monthIncome = save/100/12*percent;
        appData.yearIncome = save/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false,
};
