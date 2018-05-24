"use strict";

// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
//     window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// const myBoll = document.querySelector('.boll');
// const randomXy = num => Math.floor(Math.random(num)*num);

// const handleMouseMove = function (event) {
//     myBoll.style.top = `${randomXy(window.innerHeight - event.target.clientHeight)}px`;
//     myBoll.style.left = `${randomXy(window.innerWidth - event.target.clientWidth)}px`;
// };
//
// myBoll.addEventListener('mouseenter', handleMouseMove);

// const myPlace = document.querySelector('.place');
// const myBoll = document.querySelector('.boll');
// const randomXy = num => Math.floor(Math.random(num)*num);
//
// const handleMouseMove = function (event) {
//     event.target.style.top = `${randomXy(window.innerHeight - event.target.clientHeight)}px`;
//     event.target.style.left = `${randomXy(window.innerWidth - event.target.clientWidth)}px`;
// };
// const handleMouseMove = function () {
//     this.style.top = `${randomXy(window.innerHeight - this.clientHeight)}px`;
//     this.style.left = `${randomXy(window.innerWidth - this.clientWidth)}px`;
// };

// Array.from(myPlace.children).forEach(boll => boll.addEventListener('mouseenter', handleMouseMove));

// ________________________________________________________________________________
// ***** Задачка 2 *****
// 1) Створити конструктор бургера
// 2) конструктор приймає в себе параметр розміру бургера (Великий, малий)
// 3) конструктор приймає в себе параметр однієї обовязкової начинки (Сир, салат, картопля)
// 4) конструктор має метод додавання добавок (майонез спеції), якщо вони різні. Одну і ту саму добавку не можна додати більше одного разу
// 5) конструктор має метод що показує список добавок
// 6) конструктор має метод що показує розмір бургера
// 7) конструктор має метод що додає начинку в бургер якщо її там ще немає
// 8) конструктор має метод що показує список начинок
// 9) конструктор має метод що показує ціну бургера
// 10) конструктор має метод що показує калорійність бургера
// 11) конструктор має метод що забирає начинку з бургера, можна забрати начинки до тих пір поки не залишиться одна. Бургер не може бути без начинки.
// 12) Створити в розмітці копки які відповідають за кожен метод і виводить на екран інформацію про бургер.
//     Вхідні данні:
//     Розмір
// 1) маленький бургер (100 грн, 100 калорій)
// 2) великий бургер (250 грн, 350 калорій)
// Начинки
// 1) Сир (+ 15 грн, + 50 калорій)
// 2) Салат (+ 10 грн, + 10 калорій)
// 3) Картопдя (+ 10 грн, + 50 калорій)
// 4) Огірки (+ 20 грн, + 30 калорій)
// 5) Хамон (+ 30 грн, + 50 калорій)
// Добавки
// 1) Майонез (+ 7 грн, + 50 калорій)
// 2) Кетчуп (+ 6 грн + 40 калорій)
// 3) Спеції (+ 5 грн,+ 0 калорій)
// 4) Гірчиця (+ 5 грн + 5 калорій)

let price = document.querySelector('.price');
let calories = document.querySelector('.calories');

const BurgerConstructor = function (size = 'small', filling ='cheese') {
    this.menu = {
        size: {
            small: {
                price: 100,
                calories: 100,
            },
            large: {
                price: 250,
                calories: 350,
            }
        },
        fillings: {
            cheese: {
                price: 15,
                calories: 50,
            },
            salad: {
                price: 10,
                calories: 10,
            },
            potato: {
                price: 10,
                calories: 50,
            },
            cucumber: {
                price: 20,
                calories: 30,
            },
            humbug: {
                price: 30,
                calories: 50,
            },
        },
        additives: {
            mayo: {
                price: 7,
                calories: 50,
            },
            ketchup: {
                price: 6,
                calories: 40,
            },
            spice: {
                price: 5,
                calories: 0,
            },
            mustard: {
                price: 5,
                calories: 5,
            },
        },

    };
    this.size = size;
    this.fillings = [filling];
    this.additives = [];
    this.price = this.menu.size[size].price + this.menu.fillings[filling].price;
    this.calories = this.menu.size[size].calories + this.menu.fillings[filling].calories;

    this.addFilling = function (filling) {
        if (this.menu.fillings[filling] && !this.fillings.includes(filling)) {
            this.fillings.push(filling);
            this.price += this.menu.fillings[filling].price;
            this.calories += this.menu.fillings[filling].calories;
        }
    };

    this.removeFilling = function (filling) {
        if (this.menu.fillings[filling] && this.fillings.includes(filling)){
            this.fillings = this.fillings.filter(item => item !== filling);
            this.price -= this.menu.fillings[filling].price;
            this.calories -= this.menu.fillings[filling].calories;
        }
        console.log(this.fillings);
    };

    this.addAdditive = function (additive) {
        if (this.menu.additives[additive] && !this.additives.includes(additive)) {
    this.additives.push(additive);
    this.price += this.menu.additives[additive].price;
    this.calories += this.menu.additives[additive].calories;
        }
    };

    this.removeAdditive = function (additive) {
        if (this.menu.additives[additive] && this.additives.includes(additive)){
            this.additives = this.additives.filter(item => item !== additive);
            this.price -= this.menu.additives[additive].price;
            this.calories -= this.menu.additives[additive].calories;
        }
        console.log(this.fillings);
    };

    this.showFillings = function () {
        alert(`вы выбрали следующие начинки ${this.fillings}`);
    };


    this.showAdditives = function () {
        alert(`вы выбрали следующие добавки ${this.additives}`);
    };

    this.showPrice = function () {
        alert(`цена вашего бургера ${this.price} UAH`);
    };

    this.showCalories = function () {
        alert(`каллорийность вашего бургера ${this.calories} kcal`);
    }
};

let menu = document.querySelector('.menu');

let handleClick = function (event) {
    if( event.currentTarget !== event.target && event.target.classList[0] !== 'options'){
        event.target.classList.toggle('active');
        event.stopImmediatePropagation();
    }

    if(event.target.parentNode.parentNode.classList[1] === 'fillings' && event.target.classList[0] === 'active'){
        burger.addFilling(event.target.textContent);
        burger.showFillings();
        event.stopImmediatePropagation();
    }else if (event.target.parentNode.parentNode.classList[1] === 'fillings' && event.target.classList[0] !== 'active'){
        burger.removeFilling(event.target.textContent);
        burger.showFillings();
        event.stopImmediatePropagation();
    }

    if(event.target.parentNode.parentNode.classList[1] === 'additives' && event.target.classList[0] === 'active'){
        burger.addAdditive(event.target.textContent);
        burger.showAdditives();
        event.stopImmediatePropagation();
    } else if (event.target.parentNode.parentNode.classList[1] === 'additives' && event.target.classList[0] !== 'active'){
        burger.removeAdditive(event.target.textContent);
        burger.showAdditives();
        event.stopImmediatePropagation();
    }



    console.log(event.target.parentNode.parentNode.classList[1],event.target.classList[0] , event.target.textContent);



    burger.showPrice();
    burger.showCalories();
};

menu.addEventListener('click', handleClick);


let burger = new BurgerConstructor();
// price.innerText = burger.showPrice();
// calories.textContent = burger.showCalories();

// burger.addAdditive('ketchup');
// burger.addAdditive('mustard');
// burger.addFilling('humbug');
// burger.removeFilling('humbug');
// burger.removeAdditive('ketchup');


// console.log(burger);
// burger.showAdditives();
// burger.showPrice();
// burger.showCalories();