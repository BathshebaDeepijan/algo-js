const readlineSync = require("readline-sync")

let n = readlineSync.question('How many random numbers ? : ')

let random =0;
let min=1; 
let max=10;
// la fonction rand10() renvois un nmbre aléatoire entre 0 et 10 
function rand10(random){
  return random = Math.floor(Math.random() * (max - min));
}  

function multirand(n){
  let randTable=[]
  for (let i = 0; i < n; i++) {
  randTable.push(rand10())
}
return randTable;
}
console.log(multirand(n))