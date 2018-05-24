"use strict";

/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/

class Account {
    constructor(login = 'Default', email = '...@', friendsCount = 0){
        this.login = login;
        this.email = email;
        this.friendsCount = friendsCount;
    }
    getAccountInfo(){
        return `login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`
    }
}

const allAccount = [];

let btn = document.querySelector('.btn');
let login = document.querySelector('.login');
let email = document.querySelector('.email');
let friendsCount = document.querySelector('.friendsCount');
let accountInfo = document.querySelector('.accountInfo');
let addFriend = document.querySelector('.addFriend');


let handleCreate = function (event) {
    event.preventDefault();
    let newAccount = new Account(login.value, email.value, friendsCount.value);
    accountInfo.value = newAccount.getAccountInfo();
    let result = allAccount.some(item => item.login === login.value || item.email === email.value);
    if (!result){
        return allAccount.push(newAccount);}
};

let handleAddFriend = function () {
    ++friendsCount.value
};

btn.addEventListener('click', handleCreate);
addFriend.addEventListener('click', handleAddFriend);
