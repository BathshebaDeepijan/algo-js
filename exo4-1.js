const readlineSync = require("readline-sync");
// la fonction calcSurface calcule l'aire d'un triangle en multipliant la longueur et la largeur de celui ci
function calcSurface(longueur, largeur) {
    return longueur*largeur;
}
let longueur = 0;
let largeur= 0;
longueur = readlineSync.question('donnez moi la longueur de votre rectangle ?');
largeur = readlineSync.question('donnez moi la largeur de votre rectangle ?');
console.log(calcSurface(longueur, largeur));