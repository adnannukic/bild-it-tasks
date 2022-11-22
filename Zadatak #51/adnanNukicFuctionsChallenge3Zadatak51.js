/*
3.  Palindrome prime je prosti broj koji je također i palindrom. Na primjer, 131 je
palindrome prime, kao i brojevi 313 i 757. Napisati metodu koja ispisuje
prvih 100 palindrome prime brojeva, 10 brojeva po liniji.
*/
function palindromPrime() {
    let stringPalindromePrimeBrojeva = '';
    let nizPalindromePrimeBrojeva = [];
    let loopInkrement = 0;
    // iznad globalne varijable, niz u koji smjestamo palindrom prime brojeve i string koji ispisujemo u redove citajuci niz preko for petlje
    // u glavnoj funkciji nalaze se i dvije pomocne, jena koja provjerava da li je proslijedjeni argument prost broj, a druga da li je palindrom

    function isProst() {
        let uneseniBroj = arguments[0];
        let jeProst = true;
        for (let i = 2; i < uneseniBroj; i++) {
            if (uneseniBroj % i == 0) {
                jeProst = false;
                break;
            }
        }
        if (jeProst) {
            return uneseniBroj;
        }
    }

    function isPalindrom() {
        let brojPalindrom = arguments[0];
        let str = brojPalindrom.toString();
        let duzinaStringa = str.length;
        let jePalindrom = true;
        for (let i = 0; i < duzinaStringa / 2; i++) {
            if (str[i] !== str[duzinaStringa - 1 - i]) {
                jePalindrom = false;
                break;
            }
        }
        if (jePalindrom) {
            return brojPalindrom;
        }
    }
    // while petlja ide dok ne napunimo niz sa 100 palindrom prime brojeva, u njoj imamo loopinkrement koji ide u beskonacnost, odnosno dok petlja ne zavrsi iteracije, a u petlji se provjerava da li je broj u toj iteraciji palindrom i prost, ako jest pusha se u niz

    while (nizPalindromePrimeBrojeva.length < 100) {
        loopInkrement++;
        if (isProst(loopInkrement) && isPalindrom(loopInkrement) && isProst(loopInkrement) !== 1) {
            nizPalindromePrimeBrojeva.push(isPalindrom(loopInkrement));
        }
    }
    // Zadnja for petlja ima 100 iteracija, dodaje jedan po jedan element niza u string i nakon svakog 10 na osnovu if uslova prelazi u novi red ispisa, ovaj string glavna funkcija returna
    for (let i = 1; i <= 100; i++) {
        stringPalindromePrimeBrojeva += nizPalindromePrimeBrojeva[i - 1] + ' ';
        if (i % 10 == 0 && i !== 100 && i !== 0) {
            stringPalindromePrimeBrojeva += '\n';
        }
    }
    return console.log(stringPalindromePrimeBrojeva);

}
palindromPrime();