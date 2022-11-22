/*
9. Napisati program koji pronalazi elemente koji su zajednicki za 2 niza. 
Generisati 2 niza duzine 10 i popuniti nasumicnim brojevima od 10 do 100. 
Funkcija treba da prima ova dva niza, te da vrati novi 
niz popunjen brojevima koji su zajednicki za oba niza. 
Npr: Imamo nizove: [1, 2, 3, 4] i [0, 2, 4, 6], funkcija nam vraca ovaj niz: [ 2, 4 ].
*/

//deklaracija funkcije koja generise random broj od 10 do 100:
function genRandNumFrom10To100() {
    let randNum = Math.floor(10 + Math.random() * 90);
    return randNum;
}
//deklaracija funkcije koja generise niz od 10elemenata od 10 do 100:
function arr10RandGenNumFrom10To100() {

    //niz koji ce poprimiti 10 random brojeva:
    const arr = [];

    //generisemo 10 random brojeva u niz:
    for (let i = 0; arr.length < 10; i++) {
        arr.push(genRandNumFrom10To100());
    }
    return arr;
}

//deklaracija f-je koja kreira 2 random niza od 10 elemenata pozivom funkcije koja ih pravi i pronalazi iste brojeve u tim nizovima:
function isCommonInTwoArr() {

    //deklaracija 2 niza i inicijalizacija pozivom f-je koja ih kreira:
    const arr1 = arr10RandGenNumFrom10To100();
    const arr2 = arr10RandGenNumFrom10To100();

    //ispis ta 2 niza:
    console.log(arr1 + '\n' + arr2);

    //deklaracija niza u koji se smjeste isti elementi ukoliko ih ima:
    const commonNumInTwoArr = [];

    //iteriramo kroz nizove i provjeravamo ima li istih elemenata, ako ima dodajemo ih u niz predvidjen za te:
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                commonNumInTwoArr.push(arr2[j]);
            }
        }
    }

    //ako je niz nakon iteracija prazan, vracamo ispis da nema istih elemenata u ova 2 niza:
    if (commonNumInTwoArr.length == 0) {
        return 'Nema istih brojeva!'
    }

    //u suprotnom vracamo taj niz sa elementima:
    else {
        return commonNumInTwoArr;
    }
}

//ispis poziva funkcije:
console.log(isCommonInTwoArr());