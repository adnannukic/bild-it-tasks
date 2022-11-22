/*
3.  Napisati funkciju koja generiše te ispisuje 100 nasumičnih brojeva, 10 brojeva
po liniji. Ispis programa treba da izgleda kao 10x10 matrica nasumičnih brojeva.
*/
function ispis100NasumicnihBrojeva() {
    let stingBrojeva = '';
    for (let i = 1; i <= 100; i++) {
        stingBrojeva += (Math.floor(Math.random() * 10) + ' ');
        if (i % 10 == 0 && i !== 100) {
            stingBrojeva += '\n';
        }
    } // program petlje dodavanja random brojeva koerzijom u string i na poziciju "i" djeljivu sa 10 i razlicitu od 100, svakih novih 10 brojeva prelazak u novi red "if izjava".    // stingBrojeva = Number(stingBrojeva); -- nemoguce izvrsiti konverziju nazad u number zbog \n karaktera
    return console.log(stingBrojeva); // ispis takvog stringa
}
ispis100NasumicnihBrojeva() // poziv funkcije za ispis stringa 10x10 nasumicno generisanih brojeva.


/* Pokusaj drugog nacina za ispis tipa podatka Number
function ispis100NasumicnihBrojevaDrugiNacin() {
    let prviRed, drugiRed, treciRed, cetvrtiRed, petiRed, sestiRed, sedmiRed, osmiRed, devetiRed, desetiRed = '';
    for (let i = 0; i < 10; i++) {
        prviRed += (Math.floor(Math.random() * 10) + ' ');
        drugiRed += (Math.floor(Math.random() * 10) + ' ');
        treciRed += (Math.floor(Math.random() * 10) + ' ');
        cetvrtiRed += (Math.floor(Math.random() * 10) + ' ');
        petiRed += (Math.floor(Math.random() * 10) + ' ');
        sestiRed += (Math.floor(Math.random() * 10) + ' ');
        sedmiRed += (Math.floor(Math.random() * 10) + ' ');
        osmiRed += (Math.floor(Math.random() * 10) + ' ');
        devetiRed += (Math.floor(Math.random() * 10) + ' ');
        desetiRed += (Math.floor(Math.random() * 10) + ' ');
    }
    console.log(prviRed, '\n', drugiRed);
}
ispis100NasumicnihBrojevaDrugiNacin()
// problem pravi ili ' ' ili \n
*/
/* Pokusaj drugog nacina za ispis tipa podatka Number
function ispis100NasumicnihBrojeva() {
    let str = '';
    let num;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            str += (Math.floor(Math.random() * 10));
        }
        num = Number(str);
        console.log(num);
    }
}
ispis100NasumicnihBrojeva();
*/