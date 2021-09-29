const readlineSync = require("readline-sync");
let jour = readlineSync.question('donnez moi un nombre entre 1 et 7 ?');
switch(jour){
    case "1":
        console.log("Nous sommes lundi");
        break;
    case "2":
        console.log("Nous sommes mardi");
        break;
    case "3":
        console.log("Nous sommes mercredi");
        break;
    case "4":
        console.log("Nous sommes jeudi");
        break;
    case "5":
        console.log("Nous sommes vendredi");
        break;
    case "6":
        console.log("Nous sommes samedi");
        break;
    case "7":
        console.log("Nous sommes dimanche");
        break;
    default: 
        console.log("ce nombre n'est pas dans ceux propose");


}