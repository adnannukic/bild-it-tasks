/*
Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
Primjer:
Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.
*/ 
// Deklaracija funkcije:
function sec() {
    // varijabla min uzima prvi argument
    let min = arguments[0];
    // sec = 60 * min
    let sec = min * 60;
    // povrat f-je je ispis
    return console.log(sec);
}
sec(1.5);