"use strict";

// let total = document.querySelector('.total');
// let price = document.querySelector('#price');
// let range = document.querySelector('#quantity');
// let form = document.querySelector('.form');
// let amount = document.querySelector('.amount');
// function multi (price,range) {
//     amount.innerText = range.value;
//     total.textContent = `${(price.value * range.value).toFixed(2)} грн`;
// }
// form.addEventListener('input', function () {
//     multi(price, range);
// });
// window.addEventListener('DOMContentLoaded', multi(price, range));

// *** калькулятор ***

// let input = document.querySelector('input');
//
// function CalcConstructor() {}
//
// CalcConstructor.prototype.getValue = function () {
//     this.a = +prompt('enter a number');
//     this.b = +prompt('enter b number');
//     if (isNaN(this.a) || isNaN(this.b)) {
//         alert('ERROR number incorrect')
//     }
// };
// CalcConstructor.prototype.sum = function () {
//     input.setAttribute('placeholder', `${this.a} + ${this.b} = ${this.a + this.b}`)};
// CalcConstructor.prototype.minus = function () {
//     input.setAttribute('placeholder', `${this.a} - ${this.b} = ${this.a - this.b}`)};
// CalcConstructor.prototype.mult = function () {
//     input.setAttribute('placeholder', `${this.a} * ${this.b} = ${this.a * this.b}`)};
// CalcConstructor.prototype.divide = function () {
//     input.setAttribute('placeholder', `${this.a} / ${this.b} = ${this.a / this.b}`)};
// CalcConstructor.prototype.pow = function () {
//     input.setAttribute('placeholder', `${this.a} ^ ${this.b} = ${this.a ** this.b}`)};
//
// let calculator = new CalcConstructor();
// console.log(calculator);
// document.querySelector('.get-Value').addEventListener('click', calculator.getValue.bind(calculator));
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
// document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
// document.querySelector('.divide').addEventListener('click', calculator.divide.bind(calculator));
// document.querySelector('.pow').addEventListener('click', calculator.pow.bind(calculator));


// function CalcConstructor() {}
//
// CalcConstructor.prototype.getValue = function () {
//     this.a = +prompt('enter a number');
//     this.b = +prompt('enter b number');
//     if (isNaN(this.a) || isNaN(this.b)) {
//         return alert('number incorrect');
//     }
//     console.log(this.a, this.b);
//     console.log(this);
//     let a = document.querySelector('#a');
//     a.textContent = `your first number ${this.a}`;
//     let b = document.querySelector('#b');
//     b.textContent = `your second number ${this.b}`
// };
//
// CalcConstructor.prototype.sum = function () {
//     let sum = document.querySelector('#sum');
//     sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//     console.log(this.a, this.b);
// };
//
// CalcConstructor.prototype.minus = function () {
//     let minus = document.querySelector('#minus');
//     minus.textContent = this.a - this.b;
// };
// CalcConstructor.prototype.mult = function() {
//     let mult = document.querySelector('#mult');
//     mult.textContent = this.a * this.b;
// };
// CalcConstructor.prototype.divide = function() {
//     let divide = document.querySelector('#divide');
//     divide.textContent = this.a / this.b;
// };
// CalcConstructor.prototype.pow = function() {
//     let pow = document.querySelector('#pow');
//     pow.textContent = Math.pow(this.a, this.b)
// };
//
// let calculator = new CalcConstructor();
//
// let start = document.querySelector('.get-Value');
//
// start.addEventListener('click', calculator.getValue.bind(calculator));
//
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// console.log(calculator);
//
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
//
// document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
//
// document.querySelector('.divide').addEventListener('click', calculator.divide.bind(calculator));
//
// document.querySelector('.pow').addEventListener('click', calculator.pow.bind(calculator));

let input = document.querySelector('input');

class CalcConstructor{
    constructor (){}
    getValue () {
        this.a = +prompt('enter a number');
        this.b = +prompt('enter b number');
        if (isNaN(this.a) || isNaN(this.b)) {
            alert('ERROR number incorrect')
        }
    };
    sum (){
        input.setAttribute('placeholder', `${this.a} + ${this.b} = ${this.a + this.b}`)};
    minus(){
        input.setAttribute('placeholder', `${this.a} - ${this.b} = ${this.a - this.b}`)};
    mult(){
        input.setAttribute('placeholder', `${this.a} * ${this.b} = ${this.a * this.b}`)};
    static divide(){
        input.setAttribute('placeholder', `${this.a} / ${this.b} = ${this.a / this.b}`)};
    static pow(){
        input.setAttribute('placeholder', `${this.a} ^ ${this.b} = ${this.a ** this.b}`)};
}
let calculator = new CalcConstructor();
document.querySelector('.get-Value').addEventListener('click', calculator.getValue.bind(calculator));
document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
document.querySelector('.divide').addEventListener('click', CalcConstructor.divide.bind(calculator));
document.querySelector('.pow').addEventListener('click', CalcConstructor.pow.bind(calculator));