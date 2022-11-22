/*
Napisati funkciju koja validira broj telefona. 
Funkcija treba da prima string tj broj telefona, a vraca true ili 
false zavisno od toga da li je broj telefona ispravan. Broj telefona da bi bio 
ispravan mora biti u jednom od 2 sljedeca formata: 06x/xxx-xxx ili 060/xx-xx-xxx.
*/
// Deklaracija funkcije sa parametrom broja tel:
function validation(phoneNumb) {
    // isValid varijabla koju funkcija vraca true ili false
    let isValid = false;
    // niz brojeva:
    let arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // brojac brojeva prvog formata:
    let numCounterFirstForm = 0;
    // brojac brojeva drugog formata:
    let numCounterSecForm = 0;
    // iteracija kroz string petljom:
    for (let i = 0; i < phoneNumb.length; i++) {
        // ako su ispunjeni ovi uslovi preostaju brojevi koji nisu navedeni u uslov if-a da se broje brojacem za prvi format:
        if (arrNum.includes(phoneNumb[i]) && phoneNumb[3] == '/' && phoneNumb[7] == '-' && phoneNumb.length == 11 && phoneNumb[0] == 0 && phoneNumb[1] == 6) {
            numCounterFirstForm++;
        }
        // ako su ispunjeni ovi uslovi preostaju brojevi koji nisu navedeni u uslov if-a da se broje brojacem za drugi format:
        if (arrNum.includes(phoneNumb[i]) && phoneNumb[0] == 0 && phoneNumb[1] == 6 && phoneNumb[2] == 0 && phoneNumb[3] == '/' && phoneNumb[6] == '-' && phoneNumb[9] == '-' && phoneNumb.length == 13) {
            numCounterSecForm++;
        }
    }
    // ako je brojac izbrojao 9 ili 10 brojeva po uslovima, postavlja isValid na true
    if (numCounterFirstForm == 9 || numCounterSecForm == 10) {
        isValid = true;
    } 
    //ako nije izbrojao 0 ili 10 isValid postavlja na false
    else {
        isValid = false;
    }
    // funkcija vraca ispis vrijednosti isValid varijable, tj da li je broj true ili false formata
    return console.log(isValid);
}
// Poziv funkcije sa prosljeđenim string brojem odg formata:
validation('060/21-237-323');