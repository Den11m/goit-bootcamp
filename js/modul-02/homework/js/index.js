"use strict";

// let numResort = +prompt('enter number from 1 to 3 (1-taba; 2-sharm; 3-hurgada)');
// if (numResort === 1){
//     alert('You chose a resort Taba');
// }
// else if (numResort === 2){
//     alert('You chose a resort Sharm');
// }
// else if (numResort === 3){
//     alert('You chose a resort Hurgada');
// }
// else {
//     alert('ERROR resort under this number is not');
// }
// -----------------------------------------------------------------------------------
let taba = 6;
let sharm = 15;
let hurgada = 25;
let confirmResort;

let quantity = +prompt('Enter number of participants');
if (quantity < 0 || (quantity ^ 0) !== quantity) {
    alert('ERROR');
}
else if (quantity <= taba) {
    confirmResort = confirm('Есть место в группе Taba. Вы согласны быть в этой группе?');
    if (confirmResort) {
        alert('Спасибо место зарезервировано.');
        taba = taba - quantity;
        console.log('остаток свободных мест в Taba', taba);
    }
    else if (!(confirmResort)) {
        confirmResort = confirm('Есть место в группе Sharm. Вы согласны быть в этой группе?');
        if (confirmResort) {
            alert('Спасибо место зарезервировано.');
            sharm = sharm - quantity;
            console.log('остаток свободных мест в Sharm', sharm);
        }
        else if (!(confirmResort)) {
            confirmResort = confirm('Есть место в группе Hurgada. Вы согласны быть в этой группе?');
            if (confirmResort) {
                alert('Спасибо место зарезервировано.');
                hurgada = hurgada - quantity;
                console.log('остаток свободных мест в Hurgada', hurgada);
            }
            else {
                alert('Ты достал! Сиди дома!');
            }
        }
    }
}

else if (quantity > taba && quantity <= sharm) {
    confirmResort = confirm('Есть место в группе Sharm. Вы согласны быть в этой группе?');
    if (confirmResort) {
        alert('Спасибо место зарезервировано.');
        sharm = sharm - quantity;
        console.log('остаток свободных мест в Sharm', sharm);
    }
    else if (!(confirmResort)) {
        confirmResort = confirm('Есть место в группе Hurgada. Вы согласны быть в этой группе?');
        if (confirmResort) {
            alert('Спасибо место зарезервировано.');
            hurgada = hurgada - quantity;
            console.log('остаток свободных мест в Hurgada', hurgada);
        }
        else {
            alert('У нас больше вариантов нет! Сиди дома!');
        }
    }
}

else if (quantity > sharm && quantity <= hurgada) {
    confirmResort = confirm('Есть место в группе Hurgada. Вы согласны быть в этой группе?');
    if (confirmResort) {
        alert('Спасибо место зарезервировано.');
        hurgada = hurgada - quantity;
        console.log('остаток свободных мест в Hurgada', hurgada);
    }
    else {
        alert('Это был твой единственный шанс! Теперь сиди дома!');
    }
}

else if (quantity > hurgada) {
    alert('У нас нет курортов для таких больших групп');
}