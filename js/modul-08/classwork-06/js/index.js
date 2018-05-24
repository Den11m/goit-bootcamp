"use strict";

// 1) Зверстати структуру HTML header+nav>ul>li*6^^.content
// 2 ) в .content буде наповнення сайту
// 3) nav буде липким меню
// 4) Коли хедер ховається за межі екрану меню стає липким і фіксується на верху браузера
// 5) Коли меню прикріпляється до верху зявляється логотип (LOST) біля пункту меню HOME
// 6) Коли меню кріпиться до верху .content збільшується на 5%.
// Корисні команди
// offsetTop
// window.scrollY

let nav = document.querySelector('.nav');

let max = nav.offsetTop;

let handleFix = function () {
    if (window.scrollY > max){
        nav.classList.add('fixed-nav');
        document.body.
    } else if(window.scrollY < max){
        nav.classList.remove('fixed-nav');
    }
};
window.addEventListener('scroll', handleFix);