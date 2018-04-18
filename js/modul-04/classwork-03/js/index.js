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

// function myIncludes(arr, a) {
//     for (let item of arr) {
//         if (item === (a)) {
//             return true
//         }
//     }
//     return false
// }
// console.log(myIncludes([1, 2, 3, 4, 5], 4));

// let array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array);
// console.log(...array);
// console.log(array.reduce(function (sum, num) {
//     return sum + num;
// }));


// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
// let num = prompt('введите число');
// function myReverse(num) {
//     return +num.split('').reverse().join('');
// }
// console.log(myReverse(num));


// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// let string = 'dog';
// function comboStr(string) {
//     let arr = string.split('');
//     let newArr = [];
//     for (let i = 0, word ='', max = arr.length; i < max; i++) {
//         for (let i = 0, word = '', max = arr.length; i < max; i++) {
//             word += arr[i];
//             newArr.push(word);
//         }
//         arr.shift();
//     }
//     return newArr.join(',');
//     }
// console.log(comboStr(string));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
// let string = 'webmaster';
// function alphabetical(string) {
//     console.log(string.split('').sort().join(''));
// }
// alphabetical(string);


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//     Example string : 'The quick brown fox'
// Expected Output : 5
// 1 вариант
// let string = 'The quick brown fox';
// const vowels = 'aeiou';
// function counterVowels(string) {
//     let arrVowels = vowels.split('');
//     let arrString = string.toLowerCase().split('');
//     let count = 0;
//     for (let letter of arrString) {
//         if (arrVowels.includes(letter)) {
//             count += 1;
//         }
//         return count;
//     }
// }
// console.log(`количество гласных в строке = ${counterVowels(string)}`);

// 2 вариант
// let string = 'The quick brown fox';
// const vowels = 'aeiou';
// function counterVowels(string, vowels) {
//     let count = 0;
//     for (let letter of string){
//         if(vowels.toLowerCase().indexOf(letter.toLowerCase()) !== -1){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(`количество гласных в строке = ${counterVowels(string, vowels)}`);


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// let num = +prompt('enter number');
// function primeNumber(num) {
//     if(num === 2){
//         return true;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//         return true;
//     }
// }
// console.log(primeNumber(num));

let num = +prompt('enter number');
function primeNumber(num) {
    let arr = [2];
    for (let i = 2; i < num; i++) {
        for (let j = i+1; j < num; j++) {
            if (!((j % i === 0) || (j % 3 === 0) || (j % 5 === 0) || (j % 7 === 0))) {
                arr.push(j);
            }
            // return arr;
        }
        return arr;
    }
    // return arr;
}

console.log(primeNumber(num));

// 157, 163, 167


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// let n = 3;
// function matrix(n) {
//     let array = [];
//     let arr = [1];
//     for (let i = 0; i < n; i++) {
//         array.push(arr)
//     }
//     return array;
// }
// console.log(matrix(3));


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
