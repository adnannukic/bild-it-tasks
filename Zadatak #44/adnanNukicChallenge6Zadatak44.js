/*
6. Napisati program koji racuna faktorijel nekog broja n. 
N broj uzeti proizvoljno, izracunati faktorijel zatim ispisati rezultat. 
Faktorijel broje se racuna na sljedeci nacin: faktorijel = n * (n-1)* (n-2)... * 1.
*/
// Pseudo 
// 1) Deklaracija i inicijalizacija broja kojem zelimo raditi faktorijel
// 2) Deklarisati varijablu u koju cemo smjestiti rezultat faktorijela i dodijeliti joj vrijednost varijable kojoj radimo faktorijel
// 3) Konstruisati petlju koja ce racunati faktorijel
// 4) Ispisati rezultat

let n = 10; // broj kojem radimo faktorijal
let rezultat = n; // varijabla u koju smjestamo rezultat
// u svakoj narednoj iteraciji i se smanji za 1, a iteracije traju sve dok je i>=1
for (let i = n - 1; i >= 1; i--) { 
    rezultat = rezultat * i;
}
console.log(`Faktorijel broja ${n} je: ${rezultat}.`);