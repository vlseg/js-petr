window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

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
        }
    }

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // let deadline = '2019-04-06T00:00:00.417Z',
    let deadline = '2019-04-06',
        thour = document.querySelector('.hours'),
        tminute = document.querySelector('.minutes'),
        tsecond = document.querySelector('.seconds');

    function getTimeRemaining() {
        let t =  Date.parse(deadline) - Date.parse(new Date()),
            second = Math.floor((t/1000) % 60),
            minute = Math.floor((t/1000/60) % 60),
            hour = Math.floor(t/1000/60/60);

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
            thour.textContent = (tt.hour < 10) ? "0" + tt.hour : tt.hour;
            tminute.textContent = (tt.minute < 10) ? "0" + tt.minute : tt.minute;
            tsecond.textContent = (tt.second < 10) ? "0" + tt.second : tt.second;
            if(tt.total <= 0) clearInterval(id)
            // if(tt.hour === 0 && tt.minute === 0 && tt.second === 0) clearInterval(id)
        }, 1000);
    }

    getTimeUpdate()
});