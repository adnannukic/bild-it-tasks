/*
2. Napisati program koji ce generisat niz duzine 10, 
i popuniti ga unikatnim nasumicnim brojevima od 0 do 10. 
Dakle ne smijemo imati 2 ista broja u nizu.
*/
//deklaracija funkcije koja ce generisati random broj od 0 do 10:
function genRandNumFrom0To10() {
    let randNum = Math.floor(Math.random() * 10);
    return randNum;
}

//deklaracija funkcije koja ce generisati niz od 10 elemenata random generisanih pozivom f-je koja random generise brojeve izmedju 0 i 10
function genArrWith10DiffElem() {
   
    //deklaracija niza u koji ce se smijestati random brojevi i koji ce ova funkcija vracati:
    const arr10Elem = [];

    //random generisanje prvog elementa niza pozivom funkcije:
    arr10Elem.push(genRandNumFrom0To10());

    //uslov petlje je da je duzina niza manja od 10, sve dok je manja generisat ce se radom brojevi tj. pozivat ce se f-ja koja to radi:
    for (let i = 1; arr10Elem.length < 10; i++) {

        //deklaracija i inicijalizacija tempNum varijable koja trenutno za iteraciju poprima neki random broj od 0 do 10:
        let tempNum = genRandNumFrom0To10();

        //ako se taj broj u ovoj iteraciji generisan sadrzi u nizu, preskoci if uslovom na iducu iteraciju:
        if (arr10Elem.includes(tempNum)) {
            continue;
        }

        //u suprotnom, else izjavom dodaj taj broj kao element nizu:
        else {
            arr10Elem.push(tempNum);
        }
    }

    //funkcija vraca niz od 10 random razlicitih brojeva - elemenata:
    return arr10Elem;
}

//ispis poziva funkcije, tj niza koji vraca:
console.log(genArrWith10DiffElem());