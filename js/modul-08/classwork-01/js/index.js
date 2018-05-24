"use strict";


// const myBoll = document.querySelector('#boll');
// const handleMouseMove = function (event) {
//     myBoll.style.top = `${event.clientY - 50}px`;
//     myBoll.style.left = `${event.clientX - 50}px`;
// };
// // document.body.addEventListener('click', handleMouseMove);
// document.body.addEventListener('mousemove', handleMouseMove);

// ____________________________________________________________________________
// ***** Допзадание 1 *****
/*
  Ознакомьтесь в вкладкой HTML и CSS.
  Напишите скрипт который:
    - При клике по изображению, меняет значение атрибута alt на 'Image has been clicked on!'
    - При клике по изображению, выводит alert со значением атрибута src
    - При клике на ссылку с надписью Google, в консоль выводится значение атрибута href.
    - Каждый клик по ссылке должен поочередно добавлять и удалять класс link-active
    - При этом не должен происходить переход по ссылке!

    - При фокусе текстового поля, в консоль должна выводится строка "Input is in focus!"
    - При наборе текста в текстовое поле, текущее его значение должно отображаться в
      абзаце с классом js-input-value
*/
//
let img = document.querySelector('.js-img');

function handleImg() {
    img.alt = 'Image has been clicked on!';
    alert(`${img.src}`);
}

img.addEventListener('click', handleImg);

let a = document.querySelector('.js-link');

function handleA(ev) {
    console.log(`${a.href}`);
    ev.preventDefault();
    a.classList.toggle('link-active');
}

a.addEventListener('click', handleA);

let input = document.querySelector('.js-input');

function handleInput() {
    console.log('Input is in focus!')
}

input.addEventListener('focus', handleInput);

let p = document.querySelector('.js-input-value');

function handleChange() {
    p.innerText = input.value;
}

input.addEventListener('input', handleChange);

// _____________________________________________________________________________
// ***** Допзадание 2 *****
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal"
    и классом js-open-modal, модальное окно с классом modal,
    должно появляться, тобишь необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop),
    модальное окно должно закрываться.


  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна и самого прозрачного фона. Плагин должен реализовавать два метода show и hide, либо один toggle.

    При клике на кнопку показа модального окна должен вызываться
    метод show или toggle. Соответственно при для закрытия
    окна hide либо toggle.
*/

let btnOpen = document.querySelector('.js-open-modal');
let divModal = document.querySelector('.js-modal-backdrop');
let btnClose = document.querySelector('.js-close-modal');

const handleOpenModal = function () {
    divModal.classList.toggle('modal-hidden');
};
btnOpen.addEventListener('click', handleOpenModal);

const handleCloseModal = function () {
    divModal.classList.toggle('modal-hidden');
};
btnClose.addEventListener('click', handleCloseModal);

const handleCloseModal_2 = function (event) {
    if (event.target === divModal) {
        divModal.classList.toggle('modal-hidden');
    }
};
divModal.addEventListener('click', handleCloseModal_2);

// _____________________________________________________________________________
// ***** Допзадание 3 *****
/*
  Ознакомьтесь с HTML и CSS.

  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.

  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.

  При клике по ссылкам не должна перезагружаться страница!
*/
let menu = document.querySelector('.menu');
let item = document.querySelector('.menu-item');
const handleMenu = function (event) {
    for (let item of menu.children) {
        item.firstElementChild.classList.remove('menu-link-active');
    }
    event.target.classList.toggle('menu-link-active');
};
menu.addEventListener('click', handleMenu);
 
