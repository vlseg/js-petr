let btn_start = document.getElementById('start');
console.log(btn_start);

let res_div= [];
for (let value_div of document.querySelector('.result-table').children) {
    if(value_div.className.slice(-5) === 'value') res_div.push(value_div);
}
console.log(res_div);

let res_input = document.querySelectorAll('.expenses-item');
console.log(res_input);

for (let value of document.getElementsByTagName('button')) {
    switch (value.className) {
        case 'expenses-item-btn': var btn_utv1 = value; break;
        case 'optionalexpenses-btn': var btn_utv2 = value; break;
        case 'count-budget-btn': var btn_count = value; break;
    }
}
console.log(btn_utv1);
console.log(btn_utv2);
console.log(btn_count);

let res_field = document.querySelectorAll('.optionalexpenses-item');
console.log(res_field);

let res_stvd = document.querySelector('.choose-income');
console.log(res_stvd);

let res_chb = document.querySelector('.checksavings');
console.log(res_chb);

let res_sum = document.querySelector('.choose-sum');
console.log(res_sum);

let res_percent = document.querySelector('.choose-percent');
console.log(res_percent);

let res_year = document.querySelector('.year-value');
console.log(res_year);

let res_month = document.querySelector('.month-value');
console.log(res_month);

let res_day = document.querySelector('.day-value');
console.log(res_day);
