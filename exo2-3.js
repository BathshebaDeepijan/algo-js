let i = 1;
let compteur = 0;
while (i <= 100)

{

i = i + 1;
compteur = compteur + 1;
console.log('execs:' + compteur);

let reste = i % 2;
if (reste === 0)
{ console.log(i);
}
}


for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}