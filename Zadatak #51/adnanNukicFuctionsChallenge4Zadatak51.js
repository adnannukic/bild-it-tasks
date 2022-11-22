/*
4. Napisati funkciju koja vraća ukupan broj riječi u rečenici.
Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi. 
*/
function ukupanBrojRijeciURecenici() {
    let recenica = arguments[0];
    let korigovanaRecenica = recenica.replace(/\s+/g, ' ').trim(); // korekcija unijete recenice po pitanju visestrukog ' '
    let brojac = 0;
    for (let i = 0; i < korigovanaRecenica.length; i++) {
        if (korigovanaRecenica[i] == ' ') {
            brojac++;
        } // prethodno korigovanom unosu po pitanju praznih mjesta brojimo single blank spaces ' ' 
    }
    return console.log(`Unijeta recenica se sastoji od ${brojac + 1} rijeci.`); // broj rijeci u ovoj metodi je veci za jedan od praznih mjesta zato brojac + 1
}
ukupanBrojRijeciURecenici('Ja   mrzim proste brojeve  u   svim njihovim oblicima');

// .replace(/\s+/g, ' ').trim(); dodato zbog korekcije same unijete recenice
// Kako split metoda kopira dio stringa mozemo je iskoristiti za ovaj primjer, tako da imamo drugi nacin:

function brojRijeci() {
    let recenica = arguments[0];
    let korigovanaRecenica = recenica.replace(/\s+/g, ' ').trim(); // \s+ prosiruje selekciju single blank space na multiple, g-iteracija kroz cijeli string, .replace(/\s+/g, ' ') znaci da iteriramo kroz cijeli string i zamijenimo sve multiple blnak spaces sa single, dok .trim() uklanja ' ' sa kraja stringa
    let brojac = 0;
    let stringUKojiSmjestimoPraznaMjesta;
    stringUKojiSmjestimoPraznaMjesta = korigovanaRecenica.split(' ');
    for (let i = 0; i < stringUKojiSmjestimoPraznaMjesta.length; i++) {
        brojac++;
    }
    return console.log(`Unijeta recenica se sastoji od ${brojac} rijeci.`); // nema brojac + 1 jer je length stringa praznih mjesta za jedan veci od broja praznih mjesta
}
brojRijeci(`  Ja mrzim proste   brojeve u svim   njihovim oblicima`);