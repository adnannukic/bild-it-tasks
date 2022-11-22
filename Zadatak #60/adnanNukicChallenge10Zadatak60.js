/*
10. Napisati program koji će generisati niz od 20 elemenata popunjen trocifrenim brojevima. 
Zatim napraviti funkciju koja će u nizu pronaći sve brojeve kojima je prva cifra 
(početna cifra sa lijeve strane) parna i ukloniti ih iz niza. 
Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi 
već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. NOTE: Ne koristiti splice().
*/

//deklaracija funkcije koja pravi niz od 20 trocifrenih brojeva:
function arr20ElemThreeDig() {
    const arr = [];
    for (let i = 0; arr.length < 20; i++) {
        arr.push(Math.floor(100 + Math.random() * 900));
    }
    return arr;
}

//deklaracija funkcije koja uklanja elemente cija prva cifra pocinje sa parnim brojem:
function removeIfFirstIsDigEven() {
    arr = arr20ElemThreeDig();
    console.log(arr);
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempStr = arr[i].toString();
        if (tempStr[0] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//ispis poziva funkcije:
console.log(removeIfFirstIsDigEven());