/*
4. Napišite funkciju koji prima broj kao argument i ubacuje crtice (-)
između svaka dva parna broja. Na primjer, ako je proslijedjeni broj 225468
ispis bi trebao biti 2-254-6-8.
*/

//deklaracija f-je i parametra:
function addDashBetweenEvenNumbers(enteredNum) {

    //tempStr varijabla u koju se smjesta string unijetog broja:
    let tempStr = enteredNum.toString();
    //strOfDashesBetweenEvenNumbers je varijabla u koju ide krajnji ispis za povrat f-je, sa crticama izmedju parnih brojeva:
    let strOfDashesBetweenEvenNumbers = '';

    //iteriramo kroz temp string i dodajemo karaktere u krajnji string s tim uz provjeru uslova ako postoje 2 uzastopna parna broja dodajemo '-' izmedju njih:
    for (let i = 0; i < tempStr.length; i++) {
        strOfDashesBetweenEvenNumbers += tempStr[i];
        if (tempStr[i] % 2 == 0 && tempStr[i + 1] % 2 == 0) {
            strOfDashesBetweenEvenNumbers += '-'
        }
    }
    //f-ja vraca string sa crticama:
    return strOfDashesBetweenEvenNumbers;
}

//ispis poziva f-je uz proslijedjeni argument:
console.log(addDashBetweenEvenNumbers(225468));