window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        infobtn = document.querySelectorAll('.description-btn'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    infobtn[0].addEventListener('click', function () {modwind()});

    hideTabContent(1);

    info.addEventListener('click', function (e) {
        let target = e.target;
        // if(target && target.classList.contains('info-header-tab')){
        if(target && target.matches('div.info-header-tab')){
            for (let i=0;i<tab.length;i++){
                if(tab[i] === target){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    function hideTabContent(a) {
        for (let i=a;i<tabContent.length;i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            infobtn[i].addEventListener('click', function () {modwind()})
        }
    }

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // let deadline = '2019-04-06T00:00:00.417Z', // Счетчик
    let deadline = '2019-04-10',
        thour = document.querySelector('.hours'),
        tminute = document.querySelector('.minutes'),
        tsecond = document.querySelector('.seconds');

    function getTimeRemaining() {
        let t =  Date.parse(deadline) - Date.parse(new Date()),
            second = Math.floor((t/1000) % 60),
            minute = Math.floor((t/1000/60) % 60),
            hour = Math.floor(t/1000/60/60);
        if(t <= 0) t = 0;

        return {
            'total' : t,
            'second' : second,
            'minute' : minute,
            'hour' : hour
        }
    }

    function getTimeUpdate() {
        let id = setInterval(function () {
            let tt = getTimeRemaining();
            if(tt.total !== 0) {
                thour.textContent = (tt.hour < 10) ? "0" + tt.hour : tt.hour;
                tminute.textContent = (tt.minute < 10) ? "0" + tt.minute : tt.minute;
                tsecond.textContent = (tt.second < 10) ? "0" + tt.second : tt.second;
                if (tt.total <= 0) clearInterval(id)
            }
        }, 1000);
    }

    getTimeUpdate();

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function modwind() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', function () {
        modwind();
        this.classList.add('more-splash');
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
        let element = document.querySelector('.status');
        element.parentNode.removeChild(element);
    });

    // Form

    let message = {
        loaded: '<br>Идет загрузка...',
        success: '<br>Спасибо! Скоро мы с вами свяжемся!',
        failure: '<br>Что-то пошло не так...'
    };

    // console.log(input)

    let form1 = document.querySelector('.main-form'),
        form2 = document.getElementById('form');

    form1.addEventListener('click', function (event) {
        if (event.target.localName === 'button') sendForm(form1)
    });

    form2.addEventListener('click', function () {
        if (event.target.localName === 'button') sendForm(form2)
    });

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(formItem) {
        let form = formItem,
            input = form.getElementsByTagName('input');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost/vuebackend/server.php');
            let formData = new FormData (form);

        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');   // запрос в формате formData

        // запрос в формате JSON
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            let obj = {};
            formData.forEach(function (value, key) {
               obj[key] = value;
            });
            formData = JSON.stringify(obj);
        //----------------------
            request.send(formData);
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loaded;
                    } else if (request.readyState === 4 && request.status === 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
            });

            for(let i=0;i<input.length;i++) {
                input[i].value = '';
            }
        })
    }


});