let random =0;
let min=1; 
let max=10;
// la fonction rand10() renvois un nmbre aléatoire entre 0 et 10 
function rand10(random){
  return random = Math.floor(Math.random() * (max - min) + min);
}  
console.log(rand10(random));

