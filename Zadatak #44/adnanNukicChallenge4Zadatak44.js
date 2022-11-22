/*
Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. 
Spil ukupno ima 52 karte, ‘A’, ‘1’, ’2’, ’3’, ’4’, ’5’, ’6’, ’7’, ’8’, ’9’, ’10’, ’J’, ’Q’, ’K’ 
u cetiri znaka ‘List’,’Srce’, ‘Kocka’ i ‘Mak’. Ispisati podjeljene karte.
*/
// Pseudo
// 1) Kreirati varijable za znakove i vrijednosti karata
// 2) Kreirati niz u koji cemo smjestiti random podijeljene karte, njih 6
// 3) Kreirati petlju sa 6 iteracija koja ce random uzimati karte iz spila
// 4) Te random karte u svakij iteraciji pomocu .push() metode u niz ubacivati te vrijednosti
// 5) Izvan petlje ispisati niz

let znakKarte = ['♦', '♥', '♠', '♣'];
let vrijednostiKarte = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let podjelaSestKarata = [];

for (let i = 0; i < 6; i++) {
    let randomZnak = znakKarte[Math.floor(Math.random() * znakKarte.length)];
    let randomVrijednost = vrijednostiKarte[Math.floor(Math.random() * vrijednostiKarte.length)];
    podjelaSestKarata.push(randomZnak + randomVrijednost);
}
console.log('Podijeljeno vam je sljedecih 6 karti: ' + podjelaSestKarata);