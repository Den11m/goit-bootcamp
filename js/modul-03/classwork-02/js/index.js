"use strict";

// let array = [];
// let teamNumber = +prompt('Кол-во команд');
// let memberAmount = +prompt('Кол-во человек в команде');
//
// for (let i = 0; i < teamNumber; i++){
//     let arr = [];
//     for(let k = 1; k <= memberAmount; k++){
//         arr.push(k+i*memberAmount);
//     }
//     array.push(arr);
// }
// console.log(array);

// let clients = ['Mango','Ajax','Poly'];
//     for(let i of clients) {
//         console.log(i);
//     };


// Задача на ввод пароля

// const password = 'qwerty123';
// let userEnterPassword = (prompt('Ваш пароль')).toLowerCase();
// let maxTry = 2;
// if (userEnterPassword === password) {
//     alert('You are welcome!')
// } else {
//     for (let i = 0; maxTry > 0; maxTry--) {
//         // maxTry -= 1;
//         alert(`Неверный пароль, у вас осталось ${maxTry} попыток`);
//         userEnterPassword = (prompt('Ваш пароль')).toLowerCase();
//         if (userEnterPassword === password) {
//             alert('Добро пожаловать!');
//             break;
//         }
//         else if (userEnterPassword === null) break;
//
//         else if (maxTry === 1){
//             alert('У вас закончились попытки, аккаунт заблокирован!');
//         }
//     }
// }


// let string = prompt('введите текст, а я покажу тебе самое длинное слово в строке');
// let longestWord;
// let arrNum = [];
// let arr = [];
//
// let maxLetter;
// for (let word of string.split(' ')) {
//     arrNum.push(word.length);
//     arr.push(word);
// }
// maxLetter = ((arrNum.sort()).reverse()[0]);
// for (let i = 0; i < string.length; i++){
//     if (maxLetter === arr[i].length) {
//         document.write(arr[i]);
//         break
//     }
// }


// let arr = [];
// let number;
// let sum = 0;
// for (let i = 1; i < Infinity; i++){
//     number = +prompt('введите число');
//     if(!number)break;
//     arr.push(number);
//     sum += number;
// }
// alert(`сумма всех значений в массиве ${sum}`);


// const numbers = [12, 15, 25, 37, 41];
// let minNum = numbers[0];
// let maxNum = numbers[numbers.length-1];
// let index;
// alert('Игра угадай число!');
// let userNumber = +prompt(`Введите цифру между ${minNum} и ${maxNum}`);
// if (!userNumber) {
//     alert('ОШИБКА! было введено не число, будьте внимательны')
// }
//  else {
//     for( let i of numbers){
//         if (i===userNumber) {
//             alert('Поздравляем, Вы угадали!');
//             index = (i===userNumber);
//             break}
//     }
//     if (index !== true){alert('Сожалеем, Вы не угадали!');}
// }


// for (let i = 0, userNumber; i < Infinity; i++) {
//     userNumber = prompt('введите число больше 100');
//     if (+userNumber > 100 || userNumber === null) break
// }



// 1) Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'
// let a = 10;
// ( a === 10 ) ? alert('Верно'): alert('Неверно');

// 2) В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
// let minNum = +prompt('введите число от 0 до 59');
// if(minNum <= 15){
//     alert('число попадает в 1-ю четверть')
// }
// else if (minNum <= 30){
//     alert('число попадает во 2-ю четверть')
// }
// else if (minNum <= 45){
//     alert('число попадает в 3-ю четверть')
// }
// else if (minNum <= 59){
//     alert('число попадает в 4-ю четверть')
// }

// 3) Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 1;
// ( a === 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a === 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a === 0 ) ? alert('Верно'): alert('Неверно');

// 4) Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 1;
// ( a > 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a > 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a > 0 ) ? alert('Верно'): alert('Неверно');


// 5) Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 1;
// ( a < 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a < 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a < 0 ) ? alert('Верно'): alert('Неверно');

// 6) Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 1;
// ( a >= 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a >= 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a >= 0 ) ? alert('Верно'): alert('Неверно');


// 7) Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 1;
// ( a <= 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a <= 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a <= 0 ) ? alert('Верно'): alert('Неверно');

// 8). Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. Показать решение.
// let a = 1;
// ( a !== 0 ) ? alert('Верно'): alert('Неверно');
// a = 0;
// ( a !== 0 ) ? alert('Верно'): alert('Неверно');
// a = -3;
// ( a !== 0 ) ? alert('Верно'): alert('Неверно');

// 9) Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a = 'test';
// ( a === 'test' ) ? alert('Верно'): alert('Неверно');
// a = 'тетс';
// ( a === 'test' ) ? alert('Верно'): alert('Неверно');
// a = 3;
// ( a === 'test' ) ? alert('Верно'): alert('Неверно');


// 10) Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
// let a = '1';
// ( a == '1') ? alert('Верно'): alert('Неверно');
// a = 1;
// ( a === '1' || a === 1 ) ? alert('Верно'): alert('Неверно');
// a = 3;
// ( a === '1' || a === 1 ) ? alert('Верно'): alert('Неверно');

// 11) Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной
// let test = true;
// (test === true) ? alert('Верно') : alert('Неверно');
// if (test) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// 12) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2
// let a = +prompt('введите число > 0 и < 5');
// (a > 0 && a < 5) ? alert('Верно') : alert('Неверно');

// 13) Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = +prompt('введите число 0 и 2 я увеличу его на 7 иначе поделю на 10');
// (a === 0 || a === 2) ? alert(a + " + 7 = " + (a += 7)) : alert(a + " / 10 = " + (a /= 10));

// 14) Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
// if (( a <= 1 ) && ( b >= 3)) {
//     alert(a + " + " + b + " = "+ (a + b));
// } else {
//     alert(a + " - " + b + " = "+ (a - b));
// }

// 15)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'
// let a = +prompt('введите число a (>2 и <11)');
// let b = +prompt('введите число b (>=6 и <14)');
// if (( a > 2 && a < 11) || ( b >= 6 && b < 14)) {
//     alert("верно");
// } else {
//     alert("неверно");
// }

// 16) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = +prompt('введите чило от 1 до 4');
// let result;
//
// switch (num){
//     case 1:
//         result = 'зима';
//         alert(result);
//         break;
//     case 2:
//         result = 'весна';
//         alert(result);
//         break;
//     case 3:
//         result = 'лето';
//         alert(result);
//         break;
//     case 4:
//         result = 'весна';
//         alert(result);
//         break;
// }



//     17) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = +prompt('введите число от 1 до 31');
// if(day !== 0 && day <= 10){
//     alert('это 1-я декада')
// }
// else if (day <= 21){
//     alert('это 2-я декада')
// }
// else if (day <= 31){
//     alert('это 3-я декада')
// }


//     18 )  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)
// let month = +prompt('введите число от 1 до 12');
// if(month === 12 || month <= 2){
//     alert('это зима')
// }
// else if (month <= 5){
//     alert('это весна')
// }
// else if (month <= 8){
//     alert('это лето')
// }
// else if (month <= 11){
//     alert('это осень')
// }

//     19) Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let string = "abcde";
// (string[0] === 'a') ? alert('да') : alert('нет');

//     20) Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let string = '12345';
// document.write(string[0]);
// (string[0] == 1 || string[0] == 2 || string[0] == 3) ? alert('да') : alert('нет');

//     21) Дана строка из 3-х цифр.'567' Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий
// let string = '567';
// let sum = +string[0]+(+string[1])+(+string[2]);
// alert(sum);

//     22) Дана строка из 6-ти цифр.'123456' Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let string = '123456';
// let sum1 = +string[0]+(+string[1])+(+string[2]);
// let sum2 = +string[3]+(+string[4])+(+string[5]);
// document.write(sum1, ' and ' ,sum2);
// (sum1 === sum2)? alert('yes'):alert('no');

//     23) Пользователь вводит 2 числа. Найти и вывести максимальное из данных двух чисел. Учтите вариант равенства чисел.
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
//
// if (a>b) {
//     alert('max ' + a);
// } else if (a<b) {
//     alert('max ' + b);
// }else {
//     alert(a +' = ' + b);
// }

//     24) Введите 2 числа , проверьте какое из них большее. Умножайте большее на 2, а к меньшему добавляйте большее.  Выведите информацию на экран.
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
//
// if (a>b) {
//     b = b + a;
//     a = a * 2;
//     alert('a = ' + a + " " + 'b = ' + b);
// } else if (a<b) {
//     a = b + a;
//     b = b * 2;
//     alert('a = ' + a + " " + 'b = ' + b);
// }else {
//     alert(a +' = ' + b);
// }

//     25) Введите 2 числа проверьте какое из чисел ближе к 10. Проверьте на парах чисел (8,13), (6,8), (8,12), (-1, 3), (-1, -2).
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
// let newA;
// let newB;
// if (a < 10) {
//     newA = 10 - a;
// } else if (a > 10) {
//     newA = a - 10;
// }
// if (b < 10) {
//     newB = 10 - b;
// } else if (b > 10) {
//     newB = b - 10;
// }
// if (newA < newB){
//     alert(`${a} ближе к 10 чем ${b}`);
// }else if (newA === newB){
//     alert(`числа ${a} и ${b} находятся на равном расстоянии от числа 10`);
// }else {
//     alert(`${b} ближе к 10 чем ${a}`);
// }

//     26) В первом подъезде номера квартир от 1 до 20, во втором от 21 до 64,  в третьем от 65 до 80. Пользователь вводит номер квартиры, необходимо указать в каком она подъезде.
// let a = +prompt('введите номер свое квартиры');
// if (a > 0 && a <= 20 ) {
//     alert('вы живете в 1-м подъезде');
// }else if (a <= 64 ) {
//     alert('вы живете во 2-м подъезде');
// }else if (a <= 80 ) {
//     alert('вы живете в 3-м подъезде');
// } else {
//     alert('вы ошиблись домом!');
// }

    // 27) Два поля ввода: Логин и пароль. Есть 3 пользователя:admin ->  333ssss-> 666gibs ->0000Если введен правильный логин и пароль вывести “Добро пожаловать”, в противном случае – вывести “ошибка”.
// let login = prompt('login');
// let password = prompt('password');
// let arr = [];
// let conferm;
// const user1 = {
//     login: "admin",
//     password: '333'
// };
// const user2 = {
//     login: "ssss",
//     password: '666'
// };
// const user3 = {
//     login: "gibs",
//     password: '0000'
// };
// arr.push(user1,user2,user3);
// for (let i = 0; i <3; i++) {
// if (login === arr[i].login && password === arr[i].password){
//     conferm = true;
//     break;
// }else {
//     conferm = false;
// }
// }
// if (conferm) {
//     alert('Добро пожаловать!');
// } else {
//     alert('ошибка!');
// }

//     28) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
//
// let c = a % b;
// alert(`остаток от деления ${a} на ${b} = ${c}`);

//     29) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// let a = +prompt('введите число a');
// let b = +prompt('введите число b');
// let c = a % b;
// if (c === 0){
//     alert('Делится');
// } else {
//     alert(`Делится с остатком! остаток от деления = ${c}`);
// }

//     30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// вариант-1
// let st = Math.pow(2, 10);
// console.log(st);
// вариант-2
// let st = 2;
// for (let i = 1; i < 10; i++) {
//     st *= 2;
// }
// console.log(st);

//     31) Найдите квадратный корень из 245.
// document.write(Math.sqrt(245));

//     32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// document.write(Math.round(Math.sqrt(379)));
// document.write(Math.sqrt(379).toFixed(1));
// document.write(Math.sqrt(379).toFixed(2));

//     33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// document.write(Math.ceil(Math.sqrt(587)));
// document.write(Math.floor(Math.sqrt(587)));

    // 34)  Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// вариант-1
// document.write(Math.min(4,-2,5,19,-130,0,10));
// document.write(Math.max(4,-2,5,19,-130,0,10));
// вариант-2
// const numbers = [4, -2, 5, 19, -130, 0, 10];
// document.write(Math.max(...numbers));
// document.write(Math.min(...numbers));

//     35) Выведите на экран случайное целое число от 1 до 100.
// document.write(Math.round(Math.random()*100));

//     36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
// let number= prompt('введите число от 1 до 3 включительно');
// alert(`вы ввели число ${number}`);

//     37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// let number= +prompt('введите число 1');
// if (number === 1) {
//     alert(`Вы ввели число ${number}`);
// } else {
//     alert(`Вы ввели число не равное 1 `);
// }

//     38 ) Написать код который найдет последнюю букву любой строки.
// let string = prompt('введите любой текст');
// let lastLetter = string[string.length-1];
// alert(`последняя буква в вашем тексте это - ${lastLetter}`);

//     39) Посчитать счет в гольфе par - среденее количество ударов для одной лунки par = 6 stroke =4 par = 5 stroke =8
//     Ввести значения  par и stroke
//     Удары =
//         1      =>	"Hole-in-one!"
//     <= par - 2 =>	"Eagle"
//     par - 1    =>	"Birdie"
//     par        =>	"Par"
//     par + 1    =>	"Bogey"
//     par + 2    =>	"Double Bogey"
//     >= par + 3 =>	"Go Home!"



//     40) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// let numbers = +prompt('введите число');
// if (numbers % 2 === 0) {
//     alert('четное');
// } else {
//     alert('не четное');
// }

//     41) Найдите случайную букву в строке
// let string = prompt('введите любой текст');
// let randomLetter = string[Math.round((Math.random()*string.length))];
// alert(`случайную букву в строке - ${randomLetter}`);

//     42) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// let count = [10, 5.5, 5.1, 8.4, 7.7];
// let summ = count.reduce(function (sum, current) {
//     return sum + current;
// },0);
// console.log(Math.round(summ));
// console.log(summ);

//     43) Составте строку из 5-ти случайных букв алфавита
// let alfabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.\/';
// let randomWord = '';
// for (let i = 0; i < 5; i++){
//     let randomLetter = alfabet[Math.round((Math.random()*alfabet.length))];
//     randomWord += randomLetter;
// }
// console.log(randomWord);

//     45) Перевірити введену інфу число, чи воно є ціле і додатнє.
// let number = +prompt('введите целое положительное число');
// if (number > 0 && ((number ^ 0) === number)) {
//     alert('правильно');
// } else {
//     alert('не правильно');
// }


