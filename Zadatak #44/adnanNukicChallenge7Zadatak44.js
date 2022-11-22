/*
7. Napisati program koji će generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata.
(Fibbonacijev niz je niz brojeva koji počinje brojevima 0 i 1, a svaki sljedeći broj 
 nizu dobija se zbrajanjem prethodna dva: F(0) = 0, F(1) = 1,F(n) = F(n-1) + F(n-2)). 
Zatim napraviti funkciju koja će u nizu pronaći sve brojeve koji završavanju parnom cifrom 
i ukloniti ih iz niza. Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni 
elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. 
Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.
*/

// Pseudo
// 1) Deklarisati prazan niz, zatim smjestiti 20 elemenata fibonacijevog niza u taj niz
// 2) Deklarisati i inicijalizirati pocetna 2 broja fibonacijevog niza
// 3) Deklarisati i inicijalizirati sumu potrebnu u petlji za formulaciju fib. niza
// 4) Kreirati petlju sa 20 iteracija koja ce kreirati fibonacijev niz 
// 5) Kreirati petlju koja ce iterirati kroz taj niz i splice()-ti parne brojeve.
// 6) Ispisati niz bez parnih brojeva

let fibbonacijevNiz = [];
let n1 = 0; // pocetni broj fibonacijevog niza
let n2 = 1; // drugi broj fibonacijevog niza
let suma = 0;
// Kreiranje fibonacijevog niza:
for (let i = 0; i < 20; i++) {
    fibbonacijevNiz.push(n1);
    suma = n1 + n2;
    n1 = n2;
    n2 = suma;
}
// Iteracija kroz kreirani niz i eliminacija parnih brojeva:
for (let j = 0; j < 20; j++) {
    if (fibbonacijevNiz[j] % 2 == 0) {
        fibbonacijevNiz.splice(j, 1);
    }
}

console.log('Fibonacije niz od 20 elemenata je: ');
console.log(fibbonacijevNiz);