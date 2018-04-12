"use strict";
// const firstString = 'qwertyuiop[]';
// const secondString = 'asdfghjkl;\'';
// const thirdString = 'zxcvbnm,./';
// const firstStringLength = firstString.length;
// const secondStringLength = secondString.length;
// const thirdStringLength = thirdString.length;
// // console.log(firstString.charAt(0), firstString.charAt(firstStringLength-1));
// // console.log(secondString.charAt(0), secondString.charAt(secondStringLength-1));
// // console.log(thirdString.charAt(0), thirdString.charAt(thirdStringLength-1));
// let searchInFirstString = firstString.indexOf('[]');
// let searchInSecondString = secondString.indexOf('[]');
// let searchInThirdString = thirdString.indexOf('[]');
// console.log(`1. firstString ${firstString}, secondString ${secondString}, thirdString ${thirdString}
//  2. firstStringLength ${firstStringLength}, secondStringLength ${secondStringLength}, thirdStringLength ${thirdStringLength}
//  3. first and last letter in firstString ${firstString.charAt(0)}, ${firstString.charAt(firstStringLength-1)}
// first and last letter in secondString ${secondString.charAt(0)}, ${secondString.charAt(secondStringLength-1)}
// first and last letter in thirdString ${thirdString.charAt(0)}, ${thirdString.charAt(thirdStringLength-1)}
// 4. searchInFirstString ${searchInFirstString}, searchInSecondString ${searchInSecondString}, searchInThirdString ${searchInThirdString}`);

// доп задания
// 1
// let num = 3;
// alert(num);

// 2
// let a = 10;
// let b = 2;
// document.write(a+b);
// document.write(a-b);
// document.write(a*b);
// document.write(a/b);

// 3
// let c = 15;
// let d = 2;
// let result = c + d;
// document.write(result);

// 4
// let a = 10;
// let b = 2;
// let c = 5;
// document.write(a+b+c);

// 5
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// document.write(result);

// 6
// // let name = prompt('Enter your name');
// alert(`Your name ${name}`);

// 7
// let num = prompt('Your number');
// let result = num * num;
// alert(`square number of ${} is ${result}`);

// 8
// let secondInHour = 60 * 60;
// let secondInDay = secondInHour * 24;
// let secondInMonth = secondInDay * 31;
// console.log(`secondInHour ${secondInHour}}`);
// console.log(`secondInDay ${secondInDay}}`);
// console.log(`secondInMonth ${secondInMonth}}`);

// 9
// let hour = 10;
// let minute = 23;
// let second = 33;
// document.write(`${hour}:${minute}:${second}`);

// 10
// let num = 10;
// num *= num;
// document.write(num);

// 11
// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert (num);

// 12
// var num = 10;
// num = ++ num;
// num = ++ num;
// num = -- num;
// alert (num);

// 13
// // let str = 'Hello World';
// document.write(str);

// 14
// let str1 = 'Hello, ';
// let str2 = 'World!';
// document.write(str1+str2);

// 15
// let name = 'Den';
// let age = 30;
// document.write(`Привет, я ${name}! Мне ${age} лет!`);

// 16
// let str = 'abcde';
// document.write(str[0], str[2], str[4]);

// 17
// let num = '12345';
// console.log('сумма', +num[0]+(+num[1])+(+num[2])+(+num[3])+(+num[4]));
// let i = 0;
// let sum = 0;
// while (i < num.length){
//     sum += +num[i];
//     i++;
// }
// console.log('сумма через цикл',sum);

// console.log('разница', num[0]-num[1]-num[2]-num[3]-num[4]);
// console.log('произведение', num[0]*num[1]*num[2]*num[3]*num[4]);
// console.log('частное', num[0]/num[1]/num[2]/num[3]/num[4]);



// 18
// let str = 'js';
// let STR = str.toUpperCase();
// document.write(STR);

// 19
// let STR = 'JS';
// let str = STR.toLowerCase();
// document.write(str);

// 20
// let string = 'Я учу javascript!';
// console.log(string.length);

// 21
// let string = 'Я учу javascript!';
// let word = string.split(' ');
// console.log(`${word[1]} ${word[2]}`);

// 22
// let string = 'Я учу javascript!';
// console.log(string.indexOf('учу'));

// 23
// let string = 'Я учу javascript!';
// console.log(string.split(' '));

// 24
// let string = 'Я учу javascript!';
// console.log(string.split(''));

// 25
// let firstName;
// let lastName;
// let age;
// firstName = prompt('enter your first name');
// lastName = prompt('enter your last name');
// age = prompt('enter your age');
// document.write(`Меня зовут ${firstName} моя фамилия ${lastName} и мне ${age} лет.`);

// 26
// let string = 'Hello World!';
// console.log(string[0], string[4], string[5]);

// 27
// let str1 = 'Javascript';
// let str2 = 'that\'s';
// let str3 = 'cool';
// console.log(str1.concat(' ',str2,' ',str3,'!'));

// 28
// let string = 'Hello world, welcome to the universe.';
// let startStringUniverse1 = string.endsWith('universe');
// let startStringUniverse2 = string.endsWith('universe.');
// console.log(startStringUniverse1);
// console.log(startStringUniverse2);

// 29
// let string = 'Hello world, welcome to the universe.';
// let startStringUniverse1 = string.startsWith('universe.');
// let startStringUniverse2 = string.startsWith('Hello');
// console.log(startStringUniverse1);
// console.log(startStringUniverse2);

// 30
// let string = 'Я учу javascript!';
// console.log('javascript',string.includes('javascript'));
// console.log('CSS',string.includes('CSS'));
