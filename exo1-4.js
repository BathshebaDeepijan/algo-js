const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your name please?');
console.log("Hello " + name);
let firstName = readlineSync.question('Can you give me your first name please?');
console.log("Hello " + name + firstName);
let city = readlineSync.question('Can you give me your city please?');
console.log("Hello " + name + firstName + "de" + city);