/*
Napisati program koji ispisuje Floydov trokut. 
Program treba da radi za bilo koji broj redova.
Primjer:
Floydov trokut sastavljen od 5 redova izgleda ovako:
1
2    3
4    5    6
7    8    9    10
11    12    13    14    15
*/
// Deklaracija funkcije i parametra za broj redova
function rowFloyd(numOfRows) {
    //Deklaracija praznog stringa:
    let str = '';
    // deklaracija i inicijalizacija pocetnog broja Floydovog paterna
    let prevNum = 1;
    //Petlja koja kreira redove:
    for (let i = 0; i < numOfRows; i++) {
        //Petlja koja ispisuje brojeve (u zavisnosti koji je red toliko ispisuje i elemenata):
        for (let j = 0; j <= i; j++) {
            // u string trenutnog reda indexa 'i' dodajemo brojeve, pocev od 1 kreirajuci Floydov patern:
            str += prevNum + '  ';
            // inkrementiramo broj svaki put nakon zavrsetka iteracije:
            prevNum++;
        }
        // prelazak u novi red na kraju svake iteracije:
        str += '\n';
    }
    // funkcija vraca ispis stringa:
    return console.log(str);
}
//poziv funkcije i uz argument broja redova:
rowFloyd(5);