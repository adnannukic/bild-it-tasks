// Pseudo

// 1) deklarisati string kojem zelimo brojati karaktere

// 2) deklarisati varijablu generalnog brojaca

// 3) deklarisati varijablu brojaca praznog mjesta - one spacebetween words

// 4) radimo iteraciju preko svakog karaktera u stringu

// 5) inkrementiramo brojac unutar for of petlje

// 6) ukoliko u toku iteracija naidjemo na karakter praznog mjesto, inkrementirati brojac za prazno mjesto

// 7) ispisati brojeve karaktera ukupno i bez praznog mjesta

let nasString = 'Before software can be reusable it first has to be usable.';

let i = 0; // generalni brojac

let k = 0; // brojac praznog mjesta

for (let sviKarakteri of nasString) {

    i++;

    if (' ' === sviKarakteri) {
        k++;
    }
}
console.log(`Broj karaktera u stringu računajući i prazna mjesta (one space between words) je ${i}, dok je bez praznih mjesta ${i - k}.`);
