"use strict";

// function calc () {
//     console.log('inside text')
// }
// calc();

// function add(a,b) {
//     return a + b;
// }
// console.log(add(50, 100));

// function showText(name = 'Den', days = 30) {
//     return `${name} has trial version ${days}`
// }
// console.log(showText());
// console.log(showText('Timy', 50));
// console.log(showText('Timy'));


// проверка на палиндром
// let text = prompt('введите текст');
//
// function palindrom(string) {
//    let oldStr = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//    let newStr = oldStr.split('').reverse().join('');
//     console.log(oldStr);
//     console.log(newStr);
//    return oldStr === newStr;
// }
// document.write(palindrom(text));

// document.write(3**0);


// сумма переданных аргументов
// function arg() {
//     // arguments;
//     let arr = Array.from(arguments);
//     console.log(arr);
//     let sum = 0;
//     for (let item of arr){
//         sum += item;
//     }
//     return sum;
// }
// console.log(arg(1,2,3,4,5,6,7,8,9,10));


// IIFE
// ;(function () {
//     let x = 10;
//     let y = 20;
//
//     console.log(x);
//     console.log(y);
// })();


// Написать функцию, getPx(str)
// Функция getPx должна получать строку вида '10px',
//     проверять была ли передана строка, если да,
//     возвращать только числовую составляющую, к примеру 10.
// Если была передана не строка, функция возвращает null.
// let info =prompt('введите данные');
// function getPx(str) {
//     if ((typeof str !== 'string')) {
//         return 'null'
//     }
//         return parseFloat(str);
// }
// console.log(getPx(info));


// Создайте фукнцию findLongestWord(str),
//     которая получает аргументом произвольную строку и
// возвращает самое длинное слово в этой строке.
//     Важное условие - в строке могут быть только пробелы
// и символы букв и цифр!
// function findLongestWord(str) {
//     if ((typeof str !== 'string')) {
//         return 'null'
//     }
//     let arr = str.split(' ');
//     let longestWord;
//     let length = 0;
//     for (let word of arr) {
//         if (word.length > length) {
//             longestWord = word;
//             length = word.length;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('May the force be with you'));


// Создайте функцию titleCase(str), которая
// получает строку и возвращает предоставленную строку
// с первой буквой каждого слова, заглавными.
//     Остальные буквы слова должны быть не заглавными.
// function titleCase(str) {
//     if ((typeof str !== 'string')) {
//         return 'null'
//     }
//     let arr = str.toLowerCase().split(' ');
//     let newArr =[];
//     for (let word of arr){
//     let custo = word.replace(word[0], word[0].toUpperCase());
//         newArr.push(custo);
//     }
//     return newArr.join(' ');
// }
// console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));


// Есть массив уникальных чисел uniqNumbers.
//     Написать функцию, addUniqNumbers(...),
//     которая получает произвольное кол-во чисел как аргументы,
//     и добавляет в массив uniqNumbers только уникальные,
//     а повторяющиеся игнорирует.

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers () {
//     let arr = Array.from(arguments);
//     for (let newNum of arr) {
//         if (!uniqNumbers.includes(newNum)){
//             uniqNumbers.push(newNum);
//         }
//     }
// }
// addUniqNumbers(1, 2, 3);
// console.log(uniqNumbers);
// addUniqNumbers(12, 2, 3, 19);
// console.log(uniqNumbers);
// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqNumbers);


// Создайте функцию removeFromArray(arr),
//     которая получает 1 параметр, исходный массив arr.
//
//     При вызове функции, первым аргументов всегда будет массив чисел,
//     за которым следуют один или несколько аргументов, тоже чисел.
//
//     Удалите все элементы из исходного массива,
//     которые имеют такое же значение, что и аргументы.
// */
//
// // Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]

// function removeFromArray(arr) {
//     let newArr = Array.from(arguments);
//     newArr.shift();
//     for (let num of newArr) {
//         if (arr.includes(num)) {
//         arr.splice((arr.indexOf(num)),1);
//         }
//     }
//     return arr;
// }
//
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// );

