// Napisati program koji ce kreirati niz od 20 elemenata,popunjen nasumicnim brojevima od 1 do 100
// Zatim, sabirati sve elemente koji se nalaze na parnom indexu, i ipisati sumu u konzolu

// Pseudo
// 1) Deklarisati prazan niz
// 2) Deklarisati i inicijalizirati min i max brojeve
// 3) Deklarisati varijablu suma
// 3) Napraviti petlju za popunjavanje niza nasumicnim brojevima
// 4) if izjava da li je index na tekucem elementu paran 
// 5) Ipis

let mojNiz = [];
let suma = 0;
for (let i = 0; i < 20; i++) {
    let min = 1;
    let max = 100;
    mojNiz.push(Math.floor(min + Math.random() * (max - min)));
    if ((i % 2) == 0) {
        suma += mojNiz[i];
    }
}
console.log(suma);
console.log(mojNiz);
