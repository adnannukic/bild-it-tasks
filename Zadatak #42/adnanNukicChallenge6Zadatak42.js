// Pseudo

// 1) Deklarisati varijable  i inicijalizirati potrebne, suma, min, max, slucajni broj, i brojace

// 2) petljom sabirati nasumicne brojeve i brojati parne i neparne u iteracijama.

// 3) ispisati

let suma = 0;
let min = 10;
let max = 100;
let i = 0; // brojac parnih brojeva
let k = 0; // brojac neparnih brojeva

while (suma < 1000) {
    let nasumicniBroj = Math.floor(min + Math.random() * (max - min));
    suma += nasumicniBroj;
    if (nasumicniBroj % 2 == 0) {
        i++;
    }
    else {
        k++;
    }
} 
console.log(`Ukupna suma je ${suma}, a broj parnih i neparnih brojeva u iteracijama je: ${i} i ${k}, respektivno.`);