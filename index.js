let money = +prompt('Ваш бюджет на месяц? (грн)', 4000);
let time = prompt("Введите дату в формате YYYY-MM-DD",'2019-03-03');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

for(let i=0;i<2;i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Кв.плата'),
        b = prompt("Во сколько обойдется? (грн)", 1000);
    if((typeof(a)) === 'string' &&
        (typeof(a)) != null &&
        (typeof(b)) != null &&
        a != '' && b != '' &&
        a.length < 50
    ) {
        console.log('done')
        appData.expenses[a] = b;
    } else {

    }
}
appData.moneyPerDay = Math.round(appData.budget/30)

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`)

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка')
} else if(appData.moneyPerDay >  2000){
    console.log('Высокий уровень достатка')
} else {
    console.log('Произошла ошибка')
}

