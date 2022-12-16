// Tasks Day 1: https://github.com/coding-bootcamps-eu/introduction-to-programming-in-js/blob/main/tasks/day-1.md

// console.log("Hello World");

let myName = "Anja Wurlitzer";
console.log(myName);

let greeting = "Hallo ";
console.log(greeting + myName);

const netPrice = 25;
const tax = 19;
let grossPrice;
grossPrice = (netPrice * tax) / 100;
console.log(grossPrice);
grossPrice = grossPrice + netPrice;
console.log(grossPrice);

//Spot the errors:

// console.log("Hallo"; <- Klammer zu!

// const a = 1;
// a = 2; <- Konstante hat bereits Wert 1 und kann keinen anderen annehmen.

// const 1 = "a"; <- Variable darf nicht mit Zahl oder Unterstrich beginnen.

// const let = undefined; <- let ist reserved Keyword und kann kein Variablenname sein.

// return;
// console.log("..."); -> return bezieht sich auf Funktionen.

// console.log("That doesn"t work"); -> keine quotation marks in der Mitte des string Werts.

//Tasks Day 2:https://github.com/coding-bootcamps-eu/introduction-to-programming-in-js/blob/main/tasks/day-2.md

function calcGrossPrice(net, tax) {
  return net * (1 + tax);
}

const result1 = calcGrossPrice(20, 0.19);
console.log(result1);

const result2 = calcGrossPrice(40, 0.16);
console.log(result2);

function addPositive(a, b) {
  if (a >= 0 && b >= 0) {
    return a + b;
  } else if (a < 0 && b >= 0) {
    return -a + b;
  } else if (a >= 0 && b < 0) {
    return a - b;
  } else {
    return -a - b;
  }
}

//oder so:
function addPositive1(a, b) {
  return Math.abs(a) + Math.abs(b);
}
function addPositive2(a, b) {
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  return a + b;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
console.log(addPositive1(2, 3));
console.log(addPositive1(3, -5));
console.log(addPositive1(-1, -8));
console.log(addPositive2(2, 3));
console.log(addPositive2(3, -5));
console.log(addPositive2(-1, -8));

function fooBar(words) {
  if (words === "foo") {
    return "bar";
  } else if (words === "bar") {
    return "foo";
  } else {
    return "foobar";
  }
}

console.log(fooBar("foo"));
console.log(fooBar("bar"));
console.log(fooBar("xxx"));
console.log(fooBar("aa"));

//Function count the sheeps
const sheeps = [true, false, true, false, true, true, false, 3, 18, true, true];
let countSheeps = 0;

for (let i = 0; i < sheeps.length; i = i + 1) {
  if (sheeps[i] === true) {
    countSheeps = countSheeps + 1;
  }
}
console.log(countSheeps);

//Tasks day 3 https://github.com/coding-bootcamps-eu/introduction-to-programming-in-js/tree/main/tasks/day3

//counts spaces in string
function countSpaces(text) {
  if (typeof text === "string") {
    let x = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        x++;
      }
    }
    return x;
  }
}

console.log(countSpaces("db jz "));

//string contains Umlauts?
function hasUmlauts(word) {
  if (typeof word === "string") {
    let x = 0;
    for (let i = 0; i < word.length; i++) {
      if (
        word[i] === "ä" ||
        word[i] === "ö" ||
        word[i] === "ü" ||
        word[i] === "Ü" ||
        word[i] === "Ä" ||
        word[i] === "Ö" ||
        word[i] === "ß"
      ) {
        x++;
      }
    }
    if (x > 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(hasUmlauts("DDGFH"));

// or:
function hasUmlauts(word) {
  if (typeof word === "string") {
    const ä = "ä";
    const Ä = "Ä";
    const ü = "ü";
    const Ü = "Ü";
    const ö = "ö";
    const Ö = "Ö";
    const ß = "ß";

    if (
      word.includes(ä) ||
      word.includes(Ä) ||
      word.includes(ü) ||
      word.includes(Ü) ||
      word.includes(ö) ||
      word.includes(Ö) ||
      word.includes(ß)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(hasUmlauts("sö"));

//is string in uppercase?
function isUpperCase(word) {
  if (typeof word === "string") {
    const WORD = word.toLocaleUpperCase(); /*turns word into Uppercase*/
    if (word === WORD) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isUpperCase("HRJK"));

//how long is the string?
function stringLength(word) {
  if (typeof word === "string") {
    return word.length;
  }
}
console.log(stringLength("asrdtfhg"));
