/*
2. Julije Cezar je zastitio svoje povjerljive informacije enkripcijom.
Enkripcija ili sifriranje je proces u kriptografiji kojim se vrsi izmjena podataka 
tako da se poruka, odnosno informacije, ucine necitljivim za osobe koje ne posjeduju 
određeno znanje (kljuc). Cezarova enkripcija pomice svako slovo za odredjeni broj slova. 
Ako vas pomak odvede preko kraja abecede, samo se vratite na pocetak abecede. 
U slučaju rotacije za 3, w, x, y i z bi se mapirali u z, a, b i c. 
Kreirajte funkciju koja uzima string s (tekst koji treba sifrirati) 
i cijeli broj n (faktor rotacije). Funkcija bi trebala vratiti sifrirani string.

Primjeri: 
caesarCipher("middle-Out", 2) ➞ "okffng-Qwv" 
// m -> o 
// i -> k 
// d -> f 
// d -> f 
// l -> n 
// e -> g 
// - - 
// O -> Q 
// u -> w 
// t -> v

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) 
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj" 
caesarCipher("A friend in need is a friend indeed", 20) ➞ 
"U zlcyhx ch hyyx cm u zlcyhx chxyyx" 
Koristiti engleski abeceda. 
Engleska abeceda se sastoji od 26 slova: 
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.

*/

function cesarChipher(strToBeEncripted, rotationFactor) {
    //niz alfabeta
    const englAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //string koji je sifrovan i koji vracamo
    let encriptedStr = '';
    //iteriramo kroz string
    for (let i = 0; i < strToBeEncripted.length; i++) {
        //pravimo varijablu koja prima trenitni index u alfabetu i dodaje na njega faktor rotacije
        let tempIndex = englAlphabet.indexOf(strToBeEncripted[i]) + rotationFactor;
        //ako je taj index veci od duzine niza alfabeta, postavljamo taj index na adekvatnu vrijednost, da poprimi novi karakter s pocetka niza
        if (tempIndex > englAlphabet.length - 1) {
            tempIndex = tempIndex - englAlphabet.length;
        }
        //ako karakter iz stringa nije slovo alfabeta dodajemo ga na trenutnu poziciju u novi string
        if (true != englAlphabet.includes(strToBeEncripted[i])) {
            encriptedStr += strToBeEncripted[i];
        }
        //ako je to malo slovo a sadrzan je u alfabetu pretvaramo to slovo iz niza u malo i dodajemo ga u novi string
        else if (strToBeEncripted[i] == strToBeEncripted[i].toLowerCase()) {
            encriptedStr += englAlphabet[tempIndex].toLowerCase();
        }
        //ako je veliko slovo dodajemo ga sa adekvatnog indexa u nizu:
        else {
            encriptedStr += englAlphabet[tempIndex];
        }
    }
    return encriptedStr;
}

console.log(cesarChipher("middle-Out", 2));