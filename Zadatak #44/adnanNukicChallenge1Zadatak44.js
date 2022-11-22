// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. 
// Zatim ispisati niz u konzolu

let mojNiz = [];
let min = 1;
let max = 100;
for (let i = 0; i < 20; i++) {
    mojNiz.push(Math.floor(min + Math.random() * (max - min)));
}
console.log(mojNiz);