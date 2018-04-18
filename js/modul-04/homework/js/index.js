"use strict";

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// let userLogin = prompt('Введите свой логин');
// function checkLoginValidity(login) {
//     return (login.length >= 4 && login.length < 16);
// }
// function checkIfLoginExists(login) {
//     for (let oldLogins of logins) {
//         if (login === oldLogins) {
//             return true;
//         }
//     }
// }
// function addLogin(login) {
//     if (!checkLoginValidity(login)) {
//         return alert('Ошибка! Логин должен быть от 4 до 16 символов');
//     } else {
//         if (!checkIfLoginExists(login)) {
//             logins.push(login);
//         } else {
//             alert('Такой логин уже используется!');
//         }
//     }
// }
// console.log(checkLoginValidity(userLogin));
// console.log(checkIfLoginExists(userLogin));
// console.log(addLogin(userLogin));
// console.log(logins);

const alphabet = "qwertyuiopasdfghjklzxcvbnm";

function addKeyboardLayout(alphabet) {
    let keyboard = [];
    let first = alphabet.substring(0,alphabet.indexOf('a'));
    let second = alphabet.substring(alphabet.indexOf('a'),alphabet.indexOf('z'));
    let third = alphabet.substring(alphabet.indexOf('z'));
    keyboard.push(first,second,third);
    return keyboard;
}
console.log(addKeyboardLayout(alphabet));

let row = +prompt('введите номер строки клавиатуры (1,2 или 3)')-1;
function getRandCharInRow(row){
    if (row < 0 || row > addKeyboardLayout(alphabet).length){
        alert('ошибка');
    }
 return addKeyboardLayout(alphabet)[row][Math.floor(Math.random()*addKeyboardLayout(alphabet)[row].length)];
}
alert(`случайная буква из этой строки => ${getRandCharInRow(row)}`);

function getRandCharInAlph(str){
return str.split('')[Math.floor(Math.random()*str.length)]
}
alert(`случайная буква из всего алфавита => ${getRandCharInAlph(alphabet)}`);
