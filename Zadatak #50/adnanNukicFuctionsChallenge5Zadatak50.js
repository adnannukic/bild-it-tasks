/* 
5. Napisati funkciju koja pronalazi broj pronavljanja određenog karaktera u stringu.
Primjer poziva funckije: brojacKaraktera("Dobrodosli", "o")
Primjer ispisa: Karakter o se ponavlja 3 puta u stringu "Dobrodosli".
*/
function stringPodaci() {
    let unijetiString = arguments[0]; // prvi argument funkcije je string
    let karakterKojemIspitujemoPonavljanje = arguments[1]; // karakter kojem ispitujemo ponavljanje unosimo kao drugi argument u poziv funkcije
    let brojac = 0; // brojac koliko puta se adekvatni karakter u stringu ponavlja
    for (let i = 0; i < unijetiString.length; i++) {
        if (unijetiString[i] == karakterKojemIspitujemoPonavljanje) {
            brojac++;
        } // ako je karakter kojem brojimo ponavljanje u stringu jednak elementu na indexu iteracije, inkrementiramo brojac
    }
    return console.log(`Karakter ${karakterKojemIspitujemoPonavljanje} se ponavlja ${brojac} puta u stringu "${unijetiString}".`);
} // za povrat imamo ispis po zadatku.
stringPodaci("Dobrodosli", "o");