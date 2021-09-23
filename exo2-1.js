const readlineSync = require("readline-sync");

let age = readlineSync.question('How old are you ?');
let majeur = 17;

if (age > majeur ){
    console.log("You are an adult");
}
else {
    console.log("You are not yet an adult");
}