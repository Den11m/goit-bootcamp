"use strict";
const firstString = 'qwertyuiop[]';
const secondString = 'asdfghjkl;\'';
const thirdString = 'zxcvbnm,./';
const firstStringLength = firstString.length;
const secondStringLength = secondString.length;
const thirdStringLength = thirdString.length;
// console.log(firstString.charAt(0), firstString.charAt(firstStringLength-1));
// console.log(secondString.charAt(0), secondString.charAt(secondStringLength-1));
// console.log(thirdString.charAt(0), thirdString.charAt(thirdStringLength-1));
let searchInFirstString = firstString.indexOf('[]');
let searchInSecondString = secondString.indexOf('[]');
let searchInThirdString = thirdString.indexOf('[]');
console.log(`1. firstString ${firstString}, secondString ${secondString}, thirdString ${thirdString}
 2. firstStringLength ${firstStringLength}, secondStringLength ${secondStringLength}, thirdStringLength ${thirdStringLength}
 3. first and last letter in firstString ${firstString.charAt(0)}, ${firstString.charAt(firstStringLength-1)}
first and last letter in secondString ${secondString.charAt(0)}, ${secondString.charAt(secondStringLength-1)}
first and last letter in thirdString ${thirdString.charAt(0)}, ${thirdString.charAt(thirdStringLength-1)}
4. searchInFirstString ${searchInFirstString}, searchInSecondString ${searchInSecondString}, searchInThirdString ${searchInThirdString}`);
