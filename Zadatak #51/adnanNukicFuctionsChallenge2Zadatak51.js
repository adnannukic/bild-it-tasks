/*
2. Twin prime brojevi su par prostih brojeva koji se razlikuju za 2. Na
primjer, brojevi 3 i 5 su twin primes, brojevi 5 i 7 i 11 i 13 su
također twin primes. Napisati funkciju koja ispisuje sve twin prime
brojeve manje od 10.000, 10 parova po liniji. (Ne prvi 10.000 twin prime
brojeva, sve twin prime brojeve u rasponu od 0 do 10.000)
*/
// glavna funkcija trazi twin prime brojeve u rasponu od 0 i 10000
function twinPrimeNumbersIntervalFrom0To10000() {
    let tempNiz = [];
    let nizProstihBrojeva = [];
    let stringTwinProstihBrojeva = '';
    // globalne varijable koje se korste za smjestanje brojeva u niz i na kraju iz niza u string za ispis
    // funkcija isProst() vraca argument broj ako je prost
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
    // Prva for petlja ove funkcije u temp niz dodaje sve proste brojeve od 0 do 10000, malo da isprobamo skuplju operaciju unshift
    for (let i = 10000; i > 0; i--) {
        if (isProst(i) && isProst(i) !== 1) {
            tempNiz.unshift(isProst(i));
        }
    }
    // Druga petlja ove funkcije po uslovu zadatka ispituje da li su susjedni brojevi twin i ako jesu dodaje ih u novi niz
    for (let i = 0; i < tempNiz.length; i++) {
        if (tempNiz[i + 1] - tempNiz[i] == 2) {
            nizProstihBrojeva.push(tempNiz[i], tempNiz[i + 1]);
        }
    }
    // Treca petlja ove funkcije ima onoliko iteracija koliko elemenata nas niz sa twin brojevima, iterirajuci dodaje twin brojeve u string i nakon 10 twin kombinacije prelazi u novi red ispisa stringa
    for (let i = 1; i < nizProstihBrojeva.length; i++) {
        stringTwinProstihBrojeva += nizProstihBrojeva[i - 1] + ' i ' + nizProstihBrojeva[i] + ' | ';
        if (i % 10 == 0) {
            stringTwinProstihBrojeva += '\n';
        }
    }

    return console.log(stringTwinProstihBrojeva);
}
twinPrimeNumbersIntervalFrom0To10000();
