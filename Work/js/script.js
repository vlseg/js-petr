window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        console.log(tab);
        console.log(info);
        console.log(tabContent);

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
});