/*
2. Napisati program koji generiše jednodimenzionalni niz od 50 jednocifrenih brojeva. 
Nakon što je niz generisan, ispisati broj ponavljanja svakog broja u nizu.

    Primjer niza: 1, 1, 2, 5, 2, 3, 1 …….. 3

    Broj 1 se ponavlja: 3 puta
    Broj 2 se ponavlja: 2 puta
    Broj 3 se ponavlja: 2 puta
    Broj 5 se ponavlja: 1 puta
*/

//Deklaracija funkcije koja kreira niz od 50 jednocifrenih elemenata i ispisuje koliko se koji pojavljuje u nizu:
function gen50ElemArrAndCountChar() {

    //arr50Elem niz u koji se sprema 50 random jednocifrenih brojeva, tempArr pomocni niz:
    const arr50Elem = [];
    const tempArr = [];
    const howManyCharArr = [];

    //Kreiranje niza od 50 jednocifrenih brojeva:
    for (let i = 0; arr50Elem.length < 50; i++) arr50Elem.push(Math.floor(Math.random() * 10));

    //Ispis niza od 50 jednocifrenih brojeva:
    console.log(arr50Elem);

    //Dodavanje elemeta sa nultog indexa niza 50 elemenata u privremeni pomocni niz:
    tempArr.push(arr50Elem[0]);

    //Iteriranje kroz niz od 50 jednocifrenih brojeva i dodavanje svakog broja koji se pojavljuje u tom nizu u tempArr:
    for (let i = 1; i < arr50Elem.length; i++) {

        if (tempArr.includes(arr50Elem[i])) continue;
        else tempArr.push(arr50Elem[i]);
    }

    //sortiranje brojeva u uzlaznom redoslijedu u tempArr:
    tempArr.sort((a, b) => a - b);

    //U niz howManyCharArr ubacujemo karakter pa broj njegovog ponavljanja i sve tako za sve karaktere:
    for (let i = 0; i < tempArr.length; i++) {
        let tempCounter = 0;
        for (let j = 0; j < arr50Elem.length; j++) {
            if (tempArr[i] == arr50Elem[j]) tempCounter++;
        }
        howManyCharArr.push(tempArr[i], tempCounter);
    }

    //kreiranje funkcije koja ce na poziv ispisivati koliko se koji broj puta pojavljuje u kreiranom nizu od 50 elemenata:
    function printHowManyTimesCharAppears() {
        for (let i = 0; i < howManyCharArr.length; i += 2) {
            console.log(`Broj ${howManyCharArr[i]} se ponavlja: ${howManyCharArr[i + 1]} puta.`);
        }
    }

    //funkcija vraca poziv funkcije za ispis:
    return printHowManyTimesCharAppears();
}

//poziv funkcije:
gen50ElemArrAndCountChar();


