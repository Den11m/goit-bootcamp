"use strict";

// ***** 1 вариант *****
// let keys = document.querySelector('.keys');
// let audio = document.querySelectorAll('audio');
// let handleKey = function (event) {
// for (let item of keys.children){
//     if (+item.dataset.key === event.keyCode){
//         item.classList.add('playing');
//     }
// }
//     for (let item of audio){
//         if (+item.dataset.key === event.keyCode){
//             item.play();
//         }
//     }
// };
// let handleRemove = function () {
//     for (let item of keys.children) {
//             item.classList.remove('playing');
//             item.classList.remove('playing');
//     }
// };
// window.addEventListener('keydown', handleKey);
// window.addEventListener('transitionend', handleRemove);


// ***** 2 вариант *****

window.addEventListener('keydown', function (e) {
    let btn = document.querySelector(`[data-key='${e.keyCode}']`);
    if(!btn) {return}
    btn.classList.add('playing');
    let sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
    sound.currentTime = 0;
    sound.play();
});
window.addEventListener('transitionend', function (e) {
 let btn = document.querySelector(`[data-key='${e.target.dataset.key}']`);
    btn.classList.remove('playing');
});