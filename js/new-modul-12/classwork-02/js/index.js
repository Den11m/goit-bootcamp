"use strict";
let textInput = document.querySelector('#text');
let textP = document.querySelector('.text');
// let word = /card/;
// let number = /1/g;

// let word = /card/ig;
// let string = 'credit card number: 1234-2521-2315 credit card number2: 1234-2521-5897 ';

// document.write(string);
// console.log(string.match(word));
// console.log(string.match(number).length);
// console.log(word.test(string));
let newWord = '';
function handleText (event) {
    newWord += event.key;
    const result = textP.textContent.replace(textInput.value, `<span class="red">${newWord}</span>`);
    textP.innerHTML = result;

        // if (event.keyCode === 13 ){
        //
        //     const result = textP.textContent.replace(textInput.value, `<span class="red">${textInput.value}</span>`);
        //       textP.innerHTML = result;
        // }
}

window.addEventListener('keyup', handleText);