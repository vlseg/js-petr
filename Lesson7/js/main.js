let btn_start = document.getElementById('start');
let res_div= [];
for (let value_div of document.querySelector('.result-table').children) {
    if(value_div.className.slice(-5) === 'value') res_div.push(value_div);
}

let res_input = document.querySelectorAll('.expenses-item');
for (let value of document.getElementsByTagName('button')) {
    switch (value.className) {
        case 'expenses-item-btn': var btn_utv1 = value; break;
        case 'optionalexpenses-btn': var btn_utv2 = value; break;
        case 'count-budget-btn': var btn_count = value; break;
    }
}

let res_field = document.querySelectorAll('.optionalexpenses-item'),
    res_stvd = document.querySelector('.choose-income'),
    res_chb = document.querySelector('.checksavings'),
    res_sum = document.querySelector('.choose-sum'),
    res_percent = document.querySelector('.choose-percent'),
    res_year = document.querySelector('.year-value'),
    res_month = document.querySelector('.month-value'),
    res_day = document.querySelector('.day-value');

// console.log(btn_start);
// console.log(res_div);
// console.log(res_input);
// console.log(btn_utv1);
// console.log(btn_utv2);
// console.log(btn_count);
// console.log(res_field);
// console.log(res_stvd);
// console.log(res_chb);
// console.log(res_sum);
// console.log(res_percent);
// console.log(res_year);
// console.log(res_month);
// console.log(res_day);
