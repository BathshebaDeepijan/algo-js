const readlineSync = require("readline-sync");

let favNumber = 1;
while ( favNumber != 42) {
favNumber = readlineSync.question('Donnez moi votre numero favori ?');
console.log("etes vous sur ?");
}
console.log("bravo !")