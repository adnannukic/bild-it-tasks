/*
8. Kreirajte funkciju koja prima dva stringa kao dva parametra i vraća
boolean koji pokazuje da li je prvi string anagram drugog stringa ili nije.

Primjeri:
isAnagram(“silent”, “listen”) ➞ true
isAnagram(“socks”, “pants”) ➞ false
*/
//deklaracija funkcije i dva string parametra:
function isAnagram(str1, str2) {

    //brojac istih karaktera u dva stringa:
    let counter = 0;

    //ako su dimenzije oba stringa iste ulazimo u kalkulacije, ako nisu djeluje else blok vezan za ovaj if, i funkcija vraca false:
    if (str1.length == str2.length) {

        //prolazimo kroz string i postavljamo uslov ako je karakter na trenutnom indexu stringa 1 sadrzan u stringu 2 inkrementiramo brojac:
        for (let i = 0; i < str1.length; i++) {
            if (str2.includes(str1[i])) {
                counter++;
            }
        }

        //ako je brojac jednak duzini proslijedjenog stringa, znaci da su svi karakteri stringa 1 sadrzani u stringu 2 i obratno, tj da je string stringu anagram:
        if(counter == str1.length) {
            return true;
        }
        //ako nije jednak, znaci da ima razlicitih karaktera i funkcija vraca false:
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

//ispis poziva f.je uz proslijedjene argumente (stringove):
console.log(isAnagram('socks', 'pants'));