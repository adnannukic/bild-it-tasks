/*
4.Napisati program koji generise specijalan niz duzine 10 i popunjava nasumicnim brojevima. 
Kod ovog niza brojevi na parnim indexima moraju biti parni, 
a na neparnim indexima brojevi moraju biti neparni. 
*/

//deklaracija funkcije koja ce generisati random broj od 0 do 1000:
function genRandNumFrom0To1000() {
    let randNum = Math.floor(Math.random() * 1000);
    return randNum;
}

//deklaracija funkcije koja ce generisati 5 parnih random brojeva od 0 do 1000 u niz koji ce vratiti:
function gen5RandomEvenNumFrom0To1000() {
    const arr5EvenElem = [];
    for (let i = 0; arr5EvenElem.length < 5; i++) {
        let tempNum = genRandNumFrom0To1000();
        if(tempNum % 2 == 0) {
            arr5EvenElem.push(tempNum);
        }
    }
    return arr5EvenElem;
}

//deklaracija funkcije koja ce generisati 5 neparnih random brojeva od 0 do 1000 u niz koji ce vratiti:
function gen5RandomNotEvenNumFrom0To1000() {
    const arr5NotEvenElem = [];
    for (let i = 0; arr5NotEvenElem.length < 5; i++) {
        let tempNum = genRandNumFrom0To1000();
        if(tempNum % 2 !== 0) {
            arr5NotEvenElem.push(tempNum);
        }
    }
    return arr5NotEvenElem;
}

//deklaracija funkcije koja pozivima funkcija random nizova puni niz od 10 elemenata parne brojeve na parne indekse a neparne na neparne:
function genArrWith10DElemEvenOnEvenIndicesNotEvenOnOthers() {

    //deklaracija nizova parnih i neparnih brojeva i inicijalizacija pozivom na funkcije koje ih generisu:
    const arr5Even = gen5RandomEvenNumFrom0To1000();
    const arr5NotEven = gen5RandomNotEvenNumFrom0To1000();

    //deklaracija niza koji ce sadrzavati 10 random brojeva sa tim zahtjevom:
    const arr10Elem = [];

    //iteracija kroz nizove parnih i neparnih brojeva, tj dodavanje parnih na parne indekse, a neparnih na neparne
    for (let i = 0; i < 5; i++) {
        arr10Elem.push(arr5Even[i], arr5NotEven[i]);
    }

    //f-ja vraca niz od 10 elemenata po zadatku: 
    return arr10Elem;
}

//ispis poziva funckije:
console.log(genArrWith10DElemEvenOnEvenIndicesNotEvenOnOthers());