"use strict";
let students = ['katya', 'mick', 'vasiliy', 'danya', 'alex', 'iryna', 'elena', 'drake', 'rotman', 'sasha', 'pvg', 'volodymyr'];
let team1 = [];
let team2 = [];
let team3 = [];
let result = [];
let maxQuantity = 4;
for (let i = 0, max = students.length; i < max; i++) {
    let iRandom = Math.floor(Math.random() * students.length);
    if (team1.length < maxQuantity) {
        team1.push((students.splice(iRandom, 1)).join(','));
        result[0] = team1;
    } else if (team2.length < maxQuantity) {
        team2.push((students.splice(iRandom, 1)).join(','));
        result[1] = team2;
    } else {
        team3.push((students.splice(iRandom, 1)).join(','));
        result[2] = team3;
    }
}
console.log('team1',team1);
console.log('team2',team2);
console.log('team3',team3);
console.log('allTeams',result);



