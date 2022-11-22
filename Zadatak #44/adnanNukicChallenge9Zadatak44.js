/* 
9. Napisati program koji simulira bacanje 3 kockice 
(jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6). 
Simulirati konstantno bacanje sve tri kockice dok se u dva uzastopna bacanja ne desi 
da se dobiju isti brojevi na sve tri kockice 
(npr. u šestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice). 
Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.
*/
// Pseudo
// Deklarisat ivarijable za 3 kockice
// Deklarisati varijablu za uslov koja ce biti true
// Deklarisati i inicijalizi
// Otvoriti iteracije sa while petljom, uslov petlje ce biti istinita varijabla "uslov"
// odmah inkrementirati brojac
// randomizirati bacanje kockica
// postaviti uslov da li su kockice pale na iste brojeve
// u tom uslovu otvoriti novu petlju koja ce bacati kockice ako baci na iste kao i u proslom bacanju van ove petlje, postaviti uslov = false, cime automatski izlazimo iz obje petlje, ako nije ispunjen uslov break iz petlje
// Ispisati broj bacanja, brojac + 1

let kockica1;
let kockica2;
let kockica3;
let uslov = true;
let i = 0; // brojac, dodati u ispisu i + 1, br 1 simulira ono drugo bacanje na iste brojeve 
while (uslov) {
    i++;
    kockica1 = Math.floor(1 + Math.random() * 6);
    kockica2 = Math.floor(1 + Math.random() * 6);
    kockica3 = Math.floor(1 + Math.random() * 6);
    if (kockica1 == kockica2 && kockica2 == kockica3) {
        while (uslov) {
            kockica1 = Math.floor(1 + Math.random() * 6);
            kockica2 = Math.floor(1 + Math.random() * 6);
            kockica3 = Math.floor(1 + Math.random() * 6);
            if (kockica1 == kockica2 && kockica2 == kockica3) {
                uslov = false;
            }
            else {
                break;
            }
        }
    }
}
console.log(`Broj bacanja kockica do ispunjenja uslova je ${i + 1}`);