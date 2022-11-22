/*
1. Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
string koji predstavlja orginalni string sa izuzetkom prosljedjenog karaktera.
Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o"); Primjer ispisa programa: Dbrdsli
*/
function ukloniKarakterStringa() {
    let stringUneseni = arguments[0];
    let karakterZaUklanjanjeIzStringa = arguments[1];
    let stringBezZeljenogKaraktera = '';
    for (let i = 0; i < stringUneseni.length; i++) {
        if (stringUneseni[i] !== karakterZaUklanjanjeIzStringa) {
            stringBezZeljenogKaraktera += stringUneseni[i];
        }
    }
    return console.log(stringBezZeljenogKaraktera);
} // program funkcije svaki karakter koji nije unijeti argument, odnosno onaj karakter koji uklanjamo, dodaje redoslijedom u novi string i vraca ispis za rezultat
ukloniKarakterStringa('Dobrodosli', 'o');