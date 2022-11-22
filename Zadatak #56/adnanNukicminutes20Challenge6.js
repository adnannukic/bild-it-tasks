/*
6. Napisati program koji razdvaja parne i neparne elemente u nizu. 
Program prvo generise niz od 10 elemenata popunjen nasumicnim brojevima od 1 do 20. 
Zatim, program treba da prebaci sve parne brojeve na lijevu stranu, a sve 
neparne brojeve na desnu stranu tako da postoji jasna granica izmedju parnih i neparnih brojeva.
Npr:
Imamo niz: [1, 7, 4, 8, 3, 6, 12], kada se razdvoje parni 
i neparni brojevi niz izgleda ovako: [4, 8, 6, 12, 1, 7, 3]
*/

//deklaracija funkcije koja generise random broj od 1 do 20:
function genRandNumFrom1To20() {
    let randNum = Math.floor(1 + Math.random() * 19);
    return randNum;
}

//deklaracija funkcije koja generise niz od 10elemenata od 1 do 20 koji su poslozeni parni pa neparni:
function arr10ElemRandGenNumFrom1To20() {

    //niz koji ce poprimiti 10 random brojeva, ispisati se i nad njime se izvrsiti manipulacija da se posloze vrijednosti:
    let arr = [];

    //pomocni nizovi:
    const tempEvenArr = [];
    const tempNotEvenArr = [];

    //generisemo 10 random brojeva u niz:
    for (let i = 0; arr.length < 10; i++) {
        arr.push(genRandNumFrom1To20());
    }

    //ispisemo takav niz da bi mogli ispratiti sta se desava:
    console.log('Nasumicno generisani niz kome treba pomjeriti elemente je: ' + arr);

    //sve parne brojeve dodamo u privremeni niz parnih brojeva, a neparne u privremeni niz neparnih brojeva:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            tempEvenArr.push(arr[i]);
        }
        else {
            tempNotEvenArr.push(arr[i]);
        }
    }

    //glavni niz postavimo da bude jednak privremenom parnih brojeva, i zatim mu iterativno push-amo ostale neparne elemente:
    arr = tempEvenArr;
    for (let i = 0; i < tempNotEvenArr.length; i++) {
        arr.push(tempNotEvenArr[i]);
    }

    //povrat funkcije je poslozen niz:
    return arr;
}

//ispis poziva funkcije:
console.log(arr10ElemRandGenNumFrom1To20());