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
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

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
