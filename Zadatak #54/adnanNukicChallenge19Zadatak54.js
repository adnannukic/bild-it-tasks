/*
Napisati funkciju koja provjerava da li string sadrzi brojeve i slova naizmjenicno. 
Funkcija prima string a vraca true ili false zavisno toga da li su brojevi i slova naizmjenicni. 
Npr. za string: “a1b2c3d4” vraca true, 
a za string “a12b3c4d” vraca false jer imamo dva broja(1i2) jedan pored drugog.
*/
// Deklaracija funkcije i parametra:
function alternatelyRepeat(inputString) {
    // deklarisani nizvo sa elementima slova i brojeva
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'b', 'B', 'c', 'C', 'č', 'Č', 'ć', 'Ć', 'd', 'D', 'đ', 'Đ', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'r', 'R', 's', 'S', 'š', 'Š', 't', 'T', 'v', 'V', 'z', 'Z', 'ž', 'Ž'];
    // varijabla koja prati da li je string ponavljajucih karaktera slovoBrojSlovoBroj... ili brojSlovoBrojSlovo...
    let isChar = true;
    // ovaj if ispituje da li string krece sa slovom
    if (letters.includes(inputString[0])) {
        //petlja iterira na svaki 2 index, krecuci od 0, dakle 0,2,4,6...
        for (let i = 0; i < inputString.length; i += 2) {
            // ako je na nekom od indeksa karakter koji je slovo(sadrzan u nizu letters)
            // postavi varijablu isChar na true
            if (letters.includes(inputString[i])) {
                isChar = true;
            }
            // ako nije karakter na tom indexu slovo, postavi isChar na false i izadji iz petlje
            else {
                isChar = false;
                break;
            }
        }
        //ispisati isChar i vratiti njegovu vrijednost
        console.log(isChar);
        return isChar;
    }
    // a ako string pocinje sa brojem:
    else if (num.includes(inputString[0])) {
        //petlja iterira na svaki 2 index, krecuci od 0, dakle 0,2,4,6...
        for (let i = 0; i < inputString.length; i += 2) {
            // ako je karakter na tom indeksu broj postavlja na isChar true
            if (num.includes(inputString[i])) {
                isChar = true;
            }
            // a ako nije broj postavlja isChar na false i izlazi iz petlje
            else {
                isChar = false;
                break;
            }
        }
        //ispis isChar i f-ka vraca isChar
        console.log(isChar);
        return isChar;
    }
}
alternatelyRepeat('a3a2a3j4k2l3a');