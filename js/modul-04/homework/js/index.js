"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let userLogin = prompt('Введите свой логин');

function checkLoginValidity(login) {
    return (login.length >= 4 && login.length < 16);
}
function checkIfLoginExists(login) {
    for (let oldLogins of logins) {
        if (login === oldLogins) {
            return true;
        }
    }
}
function addLogin(login) {
    if (!checkLoginValidity(login)) {
        return alert('Ошибка! Логин должен быть от 4 до 16 символов');
    } else {
        if (!checkIfLoginExists(login)) {
            logins.push(login);
        } else {
            alert('Такой логин уже используется!');
        }
    }
}

console.log(checkLoginValidity(userLogin));
console.log(checkIfLoginExists(userLogin));
console.log(addLogin(userLogin));
console.log(logins);