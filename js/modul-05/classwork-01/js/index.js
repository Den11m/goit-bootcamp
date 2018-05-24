"use strict";

// const hotel = {
//     name: 'Lybid',
//     stars: 1,
// };
// console.table(hotel);
//
// let keys = Object.keys(hotel);
// let values = Object.values(hotel);
// let entries = Object.entries(hotel);
// console.log(keys);
// console.log(values);
// console.log(entries);
//
//
// const clone = Object.assign({},hotel);
// console.log(clone);
//
//
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// console.log(...arr);
//
//
// const a = {x:1, y:2};
// const b = {x:0, z:3};
// const c = {
//     ...a,
//     ...b,
// };
// console.log(c);
//
// const {name = 'hotel', stars = 3, status = "empty"} = hotel;
//
// console.log(name, stars, status);

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
//
// for (let key in user) {
//     if (user.hasOwnProperty(key)) {
//         console.log(`${key} : ${user[key]}`);
//     }
// }
// let exemplObj = {};
//
// console.log(exemplObj);


// let isObjectEmpty = obj => Object.keys(obj).length === 0;
// console.log(
//     isObjectEmpty({})
// );
// console.log(
//     isObjectEmpty({a:1})
// );


// let countOwnProps = obj => Object.keys(obj).length;
// console.log(countOwnProps({x: 1, y: 2, z: 3}));

// let salaries ={
//     a: 600,
//     b: 150,
//     c: 250,
// };
// let countTotalSalary = salaries => Object.keys(salaries).length !== 0 ?  Object.values(salaries).reduce((sum,item)=>sum+item) : 0;
// console.log(countTotalSalary(salaries));

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
// function getAllPropValues(prop) {
//     let arr=[];
//     for(let obj of users){
//         if ( prop in obj){
//         arr.push(obj[prop]);
//         }
//     }
//     return arr;
// }
//
// const getAllPropValues = prop => prop in users[0] ? users.map( obj => obj[prop]): [];
//
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('mood'));
// console.log(getAllPropValues('active'));


// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];

// (1 задачка)
// let newGuests = guests.map(obj => obj['isActive']=== true ? obj['isActive'] = false : obj['isActive'] = true);

// (2 задачка)
// const setGuestState = (guests, period) => guests.map(obj => obj['inactiveDays'] > period ? obj['isActive'] = false: obj['isActive'] = true);
// console.log(setGuestState(guests,20));
// console.log(guests);

// ___________________________________________________________________________________________

            // Домашка на выходные!!!!!

// (1 задачка)
// const guests = [
//     {name: 'Mango', age: 20, isActive: true},
//     {name: 'Poly', age: 18, isActive: false},
//     {name: 'Ajax', age: 30, isActive: true},
//     {name: 'Chelsey', age: 45, isActive: false}
//     ];
// console.log(guests.filter(obj => obj['isActive'] === true));

// const getActiveGuests = (guests) => guests.filter(obj => obj['isActive'] === true);
// const getActiveGuests = (guests) => guests.filter(obj => obj['isActive'] === true).map(el => el['name']);

// console.log( getActiveGuests(guests) );
//
// const getGuestsOlderThan = (guests, age) => guests.filter(obj => obj['age'] > age);
// console.log('>25 лет', getGuestsOlderThan(guests, 25) );
// console.log('>35 лет', getGuestsOlderThan(guests, 35) );
// console.log('>55 лет', getGuestsOlderThan(guests, 55) );


// (2 задачка)
// const guests = [
//     {id: 1, name: 'Mango', age: 20},
//     {id: 2, name: 'Poly', age: 18},
//     {id: 3, name: 'Ajax', age: 30},
//     {id: 4, name: 'Chelsey', age: 45}
// ];
// console.log(guests.find(obj => obj['id'] === 3));
//
// const getGuestById = (guests, id) => guests.find(obj => obj['id'] === id );
// console.log( getGuestById(guests, 3) );
// console.log( getGuestById(guests, 1) );
// console.log( getGuestById(guests, 5) );

// (3 задачка)
// const order = { bread: 10, apples: 25, chicken: 60, milk: 15, cheese: 40 };
// console.log(Object.values(order).reduce((sum, num) => sum + num));

// (4 задачка)
// const products = { bread: 10, milk: 15, apples: 20, cheese: 30, chicken: 40, };
// const orderA = { bread: 2, apples: 4, chicken: 1, };
// const orderB = { bread: 1, milk: 2, cheese: 3 };
// const getTotalPrice = (products, order) => {
//     let sum = 0;
//     for (let item in order){
//         sum += order[item]*products[item];
//     }
//     return sum;
// };
// console.log( getTotalPrice(products, orderA) );
// console.log( getTotalPrice(products, orderB) );

// (5 задачка)
// const guestsA = [
//     {name: 'Mango', isActive: true},
//     {name: 'Poly', isActive: false},
//     {name: 'Ajax', isActive: true},
// ];
// const guestsB = [
//     {name: 'Mango', isActive: true},
//     {name: 'Poly', isActive: true},
//     {name: 'Ajax', isActive: true},
// ];
// const allGuestsActive = guests => guests.every((obj)=> obj['isActive' ]=== true);
// console.log( allGuestsActive(guestsA) );
// console.log( allGuestsActive(guestsB) );