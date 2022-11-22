// Pseudo

// 1) Deklarisati brojac kovanice - glava - 1

// 2) Deklarisati brojac kovanice - pismo - 0

// 3) Deklarisati varijablu koja simulira bacanje kovanice milion puta

// 4) Deklarisati varijablu koja će poprimati vrijednosti ili nula ili jedan unutar petlje

// 5) Postaviti uslove kako bi brojači brojali kada je glava, a kada pismo

// 6) Ispisati koliko puta je glava koliko pismo

let i = 0; // brojac za glavu
let k = 0; // brojac za pismo
let bacanjeKovanice = 0;

while (bacanjeKovanice < 1000000) {
    let glavaIliPismo = Math.round(Math.random()); // 1 glava / 0 pismo
    if (glavaIliPismo == 1) {
        i++;
    } else {
        k++;
    }
    bacanjeKovanice++;
}
console.log(`Nakon milion bacanja kovanice, kovanica je ${i}x pala na glavu, a ${k}x na pusmo.`);