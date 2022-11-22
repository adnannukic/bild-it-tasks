/*
Napisati funkciju koja prima neogranicen broj argumenata number tipa podataka te vraca najveci broj. Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
Primjer:
Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a funkcija vraca 12.
*/
// deklaracija funkcije sa parametrima
function max(a, b, ...rest) {
    // deklaracija niza sa parametrima a i b
    let niz = [a, b];
    // iteracija petljom kroz ostale parametre
    for (let i = 0; i < rest.length; i++) {
        // dodavanje ...rest elemenata u niz
        niz.push(rest[i]);
    }
    // sortiranje niza uzlazno
    // povrat f-je je element na zadnjem indexu
    return console.log(niz[niz.length - 1]);
}
// poziv f-je
max(2, 7, 4, 6, 9, 12, 5);