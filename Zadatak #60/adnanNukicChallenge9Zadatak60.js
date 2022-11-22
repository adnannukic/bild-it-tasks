/*
9. Uzeti dva proizvoljna prirodna broja A i B (A>100000, B>50000). 
Napisati program koji će kreirati i ispisati broj C koji će se sastojati od cifara broja A u 
obrnutom redoslijedu ali bez cifara koje se pojavljuju u broju B. 
Obavezno koristiti bar jednu funkciju. Ispsati razliku brojeva A i C.
*/

//Deklaracija funkcije i parametara:
function createNumFromFirstNumDigitsInReverseOrderWithoutSecNumDigits(firstNum, secNum) {

    //ako su brojevi proslijedjeni veci od navedenih u uslovu, program ce raditi:
    if (firstNum > 100000 && secNum > 50000) {

        //pretvorba unijetih brojeva u stringove:
        let firstNumStr = firstNum.toString();
        let secNumStr = secNum.toString();

        //deklaracija treceg broja i inicijalizacija kao stringa:
        let thirdNum = '';

        //iteriramo od pozadi cifre stringa prvog proslijedjenog broja i ukoliko cifra nije sadrzana u stringu drugog proslijedjenog broja dodajemo je u string treceg broja:
        for (let i = firstNumStr.length - 1; i >= 0; i--) {
            if (secNumStr.includes(firstNumStr[i])) continue;
            else thirdNum += firstNumStr[i];
        }

        //pretvorba treceg broja u tip podatka number:
        thirdNum = Number(thirdNum);

        //funkcija vraca razliku prvog i treceg broja:
        return firstNum - thirdNum;
    }
    else console.log('Prvi broj mora biti veci od 100000 a drugi od 50000.');
}

//ispis poziva funkcije i proslijedjeni argumenti:
console.log(createNumFromFirstNumDigitsInReverseOrderWithoutSecNumDigits(102005, 58885));