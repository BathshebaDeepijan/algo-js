const readlineSync = require("readline-sync");
let number1 = readlineSync.question('Can you give me a number please?');
let number2 = readlineSync.question('Can you give me a second number please?');
let resultat = number1 / number2;
console.log(resultat);
