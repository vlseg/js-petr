let menu = document.querySelectorAll('.menu-item');

let val;
menu.forEach(function (value, idx) {
    switch (idx) {
        case 0: val = 'Первый пункт'; break;
        case 1: val = 'Второй пункт'; break;
        case 2: val = 'Третий пункт'; break;
        case 3: val = 'Четвертый пункт'; break;
    }
    menu[idx].innerText = val;
});

let menu5 = document.getElementsByClassName('menu')[0],
    li = document.createElement('LI');

li.innerHTML = `<li class="menu-item">Пятый пункт</li>`;
menu5.appendChild(li);

document.body.style.background = 'url(/js-petr/Lesson6/img/apple_true.jpg) center no-repeat';

let advertising = document.querySelector('.adv');
advertising.style.display = 'none';
let title = document.getElementById('title');
title.innerText = 'Мы продаем только\n подлинную технику Apple';

let attitude = prompt('Как Вы относитесь к технике apple?', 'Мне ОЧЕНЬ нравится!!!');
document.getElementById('prompt').innerHTML = `Пользователь: ${attitude}`;
document.getElementById('prompt').style.textAlign = 'left';
document.getElementById('prompt').style.fontSize = '20px';