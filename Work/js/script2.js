'use strict';
let age = document.getElementById('age');
console.log(age);

function showUser(surname, name) {
    console.log(age);
    alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}

age.addEventListener('click', function () {
    showUser('Иван', 'Петров');
});
