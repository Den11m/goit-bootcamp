"use strict";

const alphabet = "qwertyuiop[]asdfghjkl;\'zxcvbnm,.\/";
// console.log('const alphabet \=',alphabet);

let keyboard = [];
let first = alphabet.substring(0,alphabet.indexOf('a'));
let second = alphabet.substring(alphabet.indexOf('a'),alphabet.indexOf('z'));
let third = alphabet.substring(alphabet.indexOf('z'));
// console.log('let first \=',first);
// console.log('let second \=',second);
// console.log('let third \=',third);
keyboard.push(first,second,third);
// console.log('let keyboard \=',keyboard);

let hello = keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8];
console.log(hello);

let javascript = keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4];
console.log(javascript);

let trainer = keyboard[0][first.indexOf('t')]+keyboard[0][first.indexOf('r')]+keyboard[1][second.indexOf('a')]+keyboard[0][first.indexOf('i')]+keyboard[2][third.indexOf('n')]+keyboard[0][first.indexOf('e')]+keyboard[0][first.indexOf('r')];
console.log(trainer);
