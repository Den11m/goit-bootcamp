"use strict";

// function myFunct(arr) {
//     let k = arr.length;
//     for (let i = 0; i < arr.length; i++ ){
//         if (arr[i] < arr[i] && arr[i] > Math.min(...arr) && arr[i] !== Math.min(...arr)){
//             console.log(k);
//             console.log(arr[i]);
//             k -= i;
//         }
//     }
    // console.log(Math.max(...arr));
    // console.log(Math.min(...arr));
// }
// console.log(myFunct(array));


// function factorial (num) {
//     if (num === 0){return 1}
//     return num * factorial(num-1)
// }
// console.log(factorial(5));


// function sum (num) {
//     if (num === 0){return 0}
//     return num + sum(num-1)
// }
// console.log(sum(5));


// let arr = [0,2,4];
// const addOne = arr.map(function (element) {
//     return element * 2;
// });
// console.log(arr);
// console.log(addOne);


// let arr = ["Яблоко", "Апельсин", "Груша"];
// let user = prompt('введите фрукт');
// arr.forEach(function(item, i, arr) {
//     let array = [];
//     if (item === user){
//     array.push(i,'-',item,'-','(',arr,')');
//         return alert (array);
//     }
// });
// console.log(arr);

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр
// function getDigitsSum(digit){
//     let str = ('' + digit);
//     let arr = str.split('');
//     // console.log(arr);
//     let sumEl = arr.reduce(function (sum,el) {
//         return (+sum) + (+el);
//     });
//     return sumEl;
// }
// console.log(getDigitsSum(111));

// Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// let arr = [];
// for (let year = 1; year < 2018; year++) {
//     if (getDigitsSum(year) === 13){
//         arr.push(year);
//     }
// }
// console.log(arr);

//
// let arr = [5,6,7,8,9];
// let newArr = arr.map(el => el*el);
// console.log(newArr);
// let newArr2 = newArr.filter(el => el > 40);
// console.log(newArr2);
// let newArr2Sort = newArr2.sort((a,b) => b - a).reduce((sum,item)=>sum+item);
// console.log(newArr2Sort);


// let arr = [5,6,7,8,-9,10];
// let newArr;
// if (arr.every(el => el>0)) {
//     newArr = arr.filter(el => el % 2 === 0);
// } else {newArr = arr.filter(el => el % 2 !== 0);}
// console.log(newArr);


