const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Donnez moi un nombre svp ?');
let maxAge = readlineSync.question('Donnez moi un autre nombre svp ?');
let currentAge = readlineSync.question('Quel est votre age ?');
if (currentAge>minAge && currentAge<maxAge ){
    console.log("Bravo vous êtes dans la bonne tranche d'âge ");
}
else if ( minAge>maxAge) {
    console.log("ERREUR Le premier nombre doit être inferieur au deuxieme.");
}
else {
    console.log("Vous n'avez pas le bon âge desole !")
}