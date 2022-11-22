/*
1. Vrati najmanji broj koraka koji je potreban da se string u potpunosti pretvori u velika 
ili u potpunosti u mala slova, ovisno o tome koji od njih zahtijeva najmanji broj koraka. 
Korak se sastoji od promjene jednog karaktera iz malih u velika slova, ili obrnuto.Primjeri:
stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert("aba") ➞ 0

stepsToConvert("abaCCC") ➞ 3
*/

//Deklaracija funkcije i parametra, proslijedjenog stringa:
function stepsToConvert(inpStr) {

    //Brojac karaktera velikog slova u stringu, moze se odraditi i po malim slovima:
    let upperCaseCounter = 0;

    //Iteriranje kroz proslijedjeni string i brojanje velikih slova:
    for (let i = 0; i < inpStr.length; i++) {

        if (inpStr[i] == inpStr[i].toUpperCase()) {
            upperCaseCounter++;
        }
    }

    //Ako je broj velikih slova veci ili jednak broju malih slova funkcija vraca broj malih slova koji se moraju konvertovati, sto predstavlja broj koraka:
    if (upperCaseCounter >= (inpStr.length - upperCaseCounter)) {
        return inpStr.length - upperCaseCounter;
    }
    //U suprotnom vraca broj velikih slova, tj broj koraka:
    else {
        return upperCaseCounter;
    }
}

//Ispis poziva funkcije uz proslijedjen argument:
console.log(stepsToConvert('asdas'));