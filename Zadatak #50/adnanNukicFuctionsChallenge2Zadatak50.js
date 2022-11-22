/* 2. Napisati funkciju koja prima neki broj te provjerava da li je isti prosti broj.
Napisati test program koji poziva ovu metodu i ispisuje sve proste brojeve u rasponu od 0 do 10.000. 
(VAŽNO: Zadatak nije ispisati prvih 10.000 prostih brojeva nego sve proste brojeve izmedju 0 i 10.000)
*/

function prostBroj() {
    let uneseniBroj = arguments[0]; // uzima argument i za njega ce provjeravati da li je prost broj, ukoliko jest vratit ce ga, ukoliko nije nece imati ispisa
    let jeProst = true; // BOOLEAN varijabla ukoliko je broj prost ili nije

    for (let i = 2; i < uneseniBroj; i++) {
        if (uneseniBroj % i == 0) {
            jeProst = false;
            break;
        } // uslov petlje koji provjerava da li je ili nije broj prost, ako nije ispunjen je uslov i boolean varijabla seta se na false 
    }
    if (jeProst) {
        return console.log(uneseniBroj + ' je prost broj!');
    } // ako je broj prost ispisat ce ga, ako nije nece imati ispisa
    // potencijalni ispis potvrde da nije prost dodaje se jednostavno u else block
}

for (let i = 0; i < 10000; i++) {
    prostBroj(i);
} // program koji za sve brojeve od 0 do 10000 provjerava da li su prosti, ako jesu ispisuje sve u tom intervalu.

