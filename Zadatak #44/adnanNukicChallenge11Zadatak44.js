/*
11. Napisati program koji kreira matricu 4X4, i 
popunjava ju nasumicnim brojevima od 1 do 20.
*/
// Pseudo
// 1) Deklarisati i inicijalizirati min i max vrijednosti
// 2) Deklarisati prazan niz od koga cemo praviti matricu
// 3) Deklarisati i inicijalizirati niz pod nazivom matrica kojem cemo dati vrijednost prethodnog niza
// 4) Konstruisati petlje koje će kreirati nizove, ugljezdene petelje
// 5) Ispisati matricu

min = 1;
max = 20;
let niz = [];
let matrica = niz;

for (i = 0; i < 4; i++) {
    niz[i] = [];
    for (j = 0; j < 4; j++) {
        niz[i][j] = Math.floor(Math.random() * (max - min));
    }
}
console.table(matrica);