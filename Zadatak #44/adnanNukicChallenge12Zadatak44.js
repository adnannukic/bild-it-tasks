/*
12. Napisati
program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od
1 do 20. Zatim sabira sve brojeve koje se nalaze na indexima cija suma
je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.
*/
// Pseudo 
// 1) Deklarisati i inicijalizirati min,max,niz,matricu i sumu
// 2) Kreirati matricu kao u proslom zadatku
// 3) Napraviti novu petlju koja će provjeravati uslov neparnosti indexa i iterativno sabirati brojeve na tim pozicijama
// 4) Ispisati matricu i sumu.

min = 1;
max = 20;
let niz = [];
let matrica = niz;
let suma = 0;

for (i = 0; i < 4; i++) {
    niz[i] = [];
    for (j = 0; j < 4; j++) {
        niz[i][j] = Math.floor(Math.random() * (max - min));
    }
}
for (i = 0; i < matrica.length; i++) {
    for (j = 0; j < matrica.length; j++) {
        if ((i + j) % 2 !== 0) {
            suma += matrica[i][j];
        }
    }
}
console.table(matrica);
console.log(`Suma brojeva na zbiru indexa koji daje neparan broj je ${suma}.`);