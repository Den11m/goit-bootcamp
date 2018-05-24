"use strict";

// function time(clock) {
//     document.querySelector('.time').innerText = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;
// }
//
// setInterval(() => time(new Date), 1000);

// class Account {
//     constructor(name, login, email, country, birthday, avatar, infoYourself){
//         this.name = name;
//         this.login = login;
//         this.email = email;
//         this.country = country;
//         this.birthday = birthday;
//         this.avatar = avatar;
//         this.infoYourself = infoYourself;
//     }
// }
//
// let allAccount;
// if (JSON.parse(localStorage.getItem('users')) === null){
//     allAccount =[];
// }else{
//     allAccount = JSON.parse(localStorage.getItem('users'))
// }
//
// let form = document.querySelector('form');
// let btn = document.querySelector('.btn');
// let name = document.querySelector('.name');
// let login = document.querySelector('.login');
// let email = document.querySelector('.email');
// let country = document.querySelector('.country');
// let birthday = document.querySelector('.birthday');
// let avatar = document.querySelector('.avatar');
// let infoYourself = document.querySelector('.infoYourself');
//
// let handleCreate = function (event) {
//     event.preventDefault();
//     let newAccount = new Account(name.value, login.value, email.value, country.value, birthday.value, avatar.value, infoYourself.value);
//     let result = allAccount.some(item => item.login === login.value || item.email === email.value);
//     if (!result){
//         allAccount.push(newAccount);
//         localStorage.setItem('users', JSON.stringify(allAccount));
//
//         return allAccount;
//     }
// };
//
// btn.addEventListener('click', handleCreate);
// createSelect(allAccount);
//
// function createOptions(allAccount) {
//     let option ='';
//     // let i = 1;
//     for (let item of allAccount){
//         option += `<option value="${item.login}">${item.login}</option>`;
//         // i += 1;
//     } return option;
// }
//
// function createSelect(allAccount) {
//     let div = document.querySelector('.app-ctrls');
//         let select = `
//     <select name="" class="app-ctrls__select">
//     ${createOptions(allAccount)}
//     </select>
//     <button class="app-ctrls__btn">Show Profile</button>
//     <button class="back-form__btn activ" value="">Back to form</button>
//     `;
//     div.insertAdjacentHTML('beforebegin', select);
// }
//
// let btnShowProfile = document.querySelector('.app-ctrls__btn');
// let select = document.querySelector('.app-ctrls__select');
// let btnForm = document.querySelector('.back-form__btn');
//
// let handleShow = function () {
//     btnForm.classList.remove('activ');
//     let infoCard = document.querySelector('.infocard');
//     infoCard.innerHTML = '';
//     let userInfo = allAccount.find(e => e.login === select.value);
//     form.classList.add('activ');
//     let card = createCard(userInfo);
//     infoCard.insertAdjacentHTML('beforeend', card);
// };
//
// btnShowProfile.addEventListener('click', handleShow);
//
// function createCard(userInfo) {
//     return `
// <div id='card' class="">
//     <img alt='user-image' id='userImage' src='${userInfo.avatar}'>
//     <h4 id='playerName'>${userInfo.login}</h4>
//     <div id='states'>
//         <ul id='info'>
//             <li>Name</li>
//             <li>Email</li>
//             <li>Country</li>
//             <li>Birthday</li>
//         </ul>
//         <ul id='values'>
//             <li>${userInfo.name}</li>
//             <li>${userInfo.email}</li>
//             <li>${userInfo.country}</li>
//             <li>${userInfo.birthday}</li>
//         </ul>
//     </div>
// </div>
//     `;
// }
//
// let handleBackForm = function () {
//     let infoCard = document.querySelector('.infocard');
//     infoCard.innerHTML = '';
//     form.classList.remove('activ');
//     btnForm.classList.add('activ');
// };
//
// btnForm.addEventListener('click', handleBackForm);

// let ShowTable = function (item) {
//     let bodyTable = document.querySelector('.table');
//     let reduceResult = item.reduce((acc, el, i) => acc + `
//     <tr>
//     <td>${i+1}</td>
//     <td>${el.ccy}</td>
//     <td>${el.buy}</td>
//     <td>${el.sale}</td>
//     </tr>
//     `,'');
//     let table =
//         `
// <table class="table">
//         <thead>
//         <tr>
//         <th scope="col">#</th>
//         <th scope="col">Валюта</th>
//         <th scope="col">Покупка</th>
//         <th scope="col">Продажа</th>
//             </tr>
//             </thead>
//             <tbody>
//            ${reduceResult}
//    </table>
//     `;
//     bodyTable.innerHTML = table;
// };
//
// let handleShowTableNal = function () {
//     fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//         .then(data => data.json())
//         .then(item => ShowTable(item))
//     ;
// };
//
// let handleShowTableBezNal = function () {
//     fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//         .then(data => data.json())
//         .then(item => ShowTable(item))
// };
//
// let btnNal = document.querySelector('.nal');
// let btnBezNal = document.querySelector('.beznal');
//
// btnNal.addEventListener('click', handleShowTableNal);
// btnBezNal.addEventListener('click', handleShowTableBezNal);

let word = 'car';
findPhoto(word);

let btn = document.querySelector('.btn-find');
let input = document.querySelector('.find');

function findPhoto(word) {
    // fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${word}&per_page=9&image_type=photo`)
    fetch(`https://pixabay.com/api/videos/?key=5018958-ed49ccd90878e6614abdf24a6&q=${word}&per_page=9&video_type=all`)
        .then(data => data.json())
        .then(item => createImg(item.hits))
    ;
}

// function createImg(arr) {
//     let div = document.querySelector('#container');
//     div.innerHTML = arr.reduce((acc, el, i) => acc +
//     `
//     <div class="img${i+1}">
//         <p>${el.tags}</p>
//         <img src=${el.largeImageURL}>
//     </div>
//     `
//     ,'');
// }

function createImg(arr) {
    let div = document.querySelector('#container');
    div.innerHTML = arr.reduce((acc, el, i) => acc +
        `
    <div class="img${i+1}">
        <p>${el.tags}</p>
        <video src=${el.videos.large.url} controls ></video>
    </div>
    `
        ,'');
}

let handleFindPhoto = function () {
    findPhoto(input.value);
};

btn.addEventListener('click', handleFindPhoto);