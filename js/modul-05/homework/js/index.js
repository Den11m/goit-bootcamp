"use strict";

// const alphabet = "qwertyuiopasdfghjklzxcvbnm";
// function addKeyboardLayout(alphabet) {
//     let keyboard = [];
//     let first = alphabet.substring(0,alphabet.indexOf('a'));
//     let second = alphabet.substring(alphabet.indexOf('a'),alphabet.indexOf('z'));
//     let third = alphabet.substring(alphabet.indexOf('z'));
//     keyboard.push(first,second,third);
//     return keyboard;
// }
// console.log(addKeyboardLayout(alphabet));
// let row = +prompt('введите номер строки клавиатуры (1,2 или 3)')-1;
// function getRandCharInRow(row){
//     if (row < 0 || row > addKeyboardLayout(alphabet).length){
//         alert('ошибка');
//     }
//  return addKeyboardLayout(alphabet)[row][Math.floor(Math.random()*addKeyboardLayout(alphabet)[row].length)];
// }
// alert(`случайная буква из этой строки => ${getRandCharInRow(row)}`);
// function getRandCharInAlph(str){
// return str.split('')[Math.floor(Math.random()*str.length)]
// }
// alert(`случайная буква из всего алфавита => ${getRandCharInAlph(alphabet)}`);

const keyboard = {
    layouts: {
        en: {
            topRow: ['qwertyuiop'],
            middleRow: ['asdfghjkl'],
            bottomRow: ['zxcvbnm']
        },
        ru: {
            topRow: ['йцукенгшщзхъ'],
            middleRow: ['фывапролджэ'],
            bottomRow: ['ячсмитьбю']
        },
        ua: {
            topRow: ['йцукенгшщзхї'],
            middleRow: ['фівапролджє'],
            bottomRow: ['ячсмитьбю']
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let userLangs = prompt('какой язык использовать на тренажере(en-0, ru-1, ua-2)');

for (let i = 0; i = Infinity; i++) {
    if (userLangs < 0 || userLangs > 2 || userLangs === 'null') {
        alert('был выбран не доступный язык');
        userLangs = prompt('какой язык использовать на тренажере(en-0, ru-1, ua-2)');
    } else break;
}

// switch (userLangs) {
//     case 0: keyboard.currentLang = 'en';
//         break;
//     case 1:
//         keyboard.currentLang = 'ru';
//         break;
//     case 2:
//         keyboard.currentLang = 'ua';
//         break;
// }

if (userLangs === 0){keyboard.currentLang = 'en'}
else if (userLangs === 1){keyboard.currentLang = 'ru'}
else if (userLangs === 2){keyboard.currentLang = 'ua'}

console.log(keyboard.currentLang);