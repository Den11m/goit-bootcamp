"use strict";

const menu = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price: 250,
            calories: 350,
        },
    },
    fillings: {
        cheese: {
            name: 'cheese',
            price: 15,
            calories: 50,
        },
        salad: {
            name: 'salad',
            price: 10,
            calories: 10,
        },
        potato: {
            name: 'potato',
            price: 10,
            calories: 50,
        },
        cucumber: {
            name: 'cucumber',
            price: 20,
            calories: 30,
        },
        hamon: {
            name: 'hamon',
            price: 30,
            calories: 50,
        },
    },
    additives: {
        mayo: {
            name: 'mayo',
            price: 7,
            calories: 50,
        },
        ketchup: {
            name: 'ketchup',
            price: 6,
            calories: 40,
        },
        spice: {
            name: 'spice',
            price: 5,
            calories: 0,
        },
        mustard: {
            name: 'mustard',
            price: 5,
            calories: 5,
        },
    }
};

const SMALL = menu.size.small,
    LARGE = menu.size.large,
    CHEESE = menu.fillings.cheese,
    SALAD = menu.fillings.salad,
    POTATO = menu.fillings.potato,
    CUCUMBER = menu.fillings.cucumber,
    HAMON = menu.fillings.hamon,
    MAYO = menu.additives.mayo,
    KETCHUP = menu.additives.ketchup,
    SPICE = menu.additives.spice,
    MUSTARD = menu.additives.mustard;

function BurgerConstructor(size, filling) {
    this.size = size;
    this.fillings = [filling];
    this.additives = [];
    this.price = size.price + filling.price;
    this.calories = size.calories + filling.calories;


}

BurgerConstructor.prototype.addAdditives = function (additive) {
    if (this.additives.includes(additive)) {
        alert(`You already choose this additive ${additive.name}`);
    } else {
        this.additives.push(additive);
        this.price += additive.price;
        this.calories += additive.calories;
    }
};
BurgerConstructor.prototype.showAdditives = function () {
    return this.additives.map(item => item.name);
};
BurgerConstructor.prototype.showFillings = function () {
    return this.fillings.map(item => item.name);
};
BurgerConstructor.prototype.showSize = function () {
    return this.size.name;
};
BurgerConstructor.prototype.showPrice = function () {
    return `${this.price} UAH`;
};
BurgerConstructor.prototype.showCalories = function () {
    return `${this.calories} kCal`;
};
BurgerConstructor.prototype.showInfo = function () {
    alert(`U are welcome! your ordered ${this.size.name} burger, the price is ${this.price} UAH your calories is ${this.calories} kCal`);
};

BurgerConstructor.prototype.removeAdditives = function (additive) {
    if (this.additives.includes(additive)) {
        this.additives = this.additives.filter(item => item !==additive ? item : null);
        this.price -= additive.price;
        this.calories -= additive.calories;
        return this.additives;
    }
};

BurgerConstructor.prototype.addFillings = function (filling) {
    if (this.fillings.includes(filling)) {
        alert(`You already choose this additive ${filling.name}`);
    } else {
        this.fillings.push(filling);
        this.price += filling.price;
        this.calories += filling.calories;
    }
};

BurgerConstructor.prototype.removeFillings = function (filling) {
    if (this.fillings.length === 1) {
        alert('you can\'t delete last filling');
    }
        this.price -= filling.price;
        this.calories -= filling.calories;
    return this.fillings = this.fillings.filter(el => el !== filling ? el : null);
};

// let burger = new BurgerConstructor(LARGE, CUCUMBER);
// burger.addAdditives(MAYO);
// burger.addFillings(SALAD);
// burger.addAdditives(KETCHUP);
// burger.removeAdditives(MAYO);
//
// console.log(burger.showAdditives());
// console.log(burger.showFillings());
// console.log(burger.showSize());
// console.log(burger.showPrice());
// console.log(burger.showCalories());
// console.log(burger.showInfo());
// console.log(burger);


class Human {
    constructor (name= 'Default', age = 0){
        this.name = name;
        this.age = age;
    };

    static test (){
        alert('privat function');
    }

    eat(){
        console.log('I can eat');
    };

    walk(){
        console.log('I can walk');
    };

    sleep(){
        console.log('I can sleep');
    };
};

// let man = new Human('Max', 18);
// console.log(man);

Human.test();

