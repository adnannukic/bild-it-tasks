/*
Napisati funkciju koja dijeli niz u manje dijelove. 
Funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz.
Primjer:
Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); 
funkcija ce vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].
*/
//Deklaracija funkcije i dva parametra koja f-ja prima:
function devideArr(arr, numToBeDevided) {
    // broj elemenata u zasebnim nizovima:
    let numOfElements = Math.ceil(arr.length / numToBeDevided);
    // niz u koji smjestamo dijelove podijeljenog proslijedjenog niza:
    let newArr = [];
    // brojac petlje:
    let i = 0;
    // gornja granica .slice() metode:
    let edge = 0;
    // petljom iteriramo kroz niz
    while (i < arr.length) {
        // edge je gornja granica indeksa i povecavat ce se u iteracijama za broj elemenata
        edge += numOfElements;
        //iterativno u niz dodajemo slice() nizove iz orginalnog proslijeđenog niza kao elemente, pravimo 2D niz
        newArr.push(arr.slice(i, edge));
        // povecamo brojac za broj elemenata, "kljuc je da je 'i' za broj elemenata manji od 'edge'"
        i += numOfElements;
    }
    //funkcija vraca ispis novog niza, za povrat niza izbrisemo console.log()
    return console.log(newArr);
}
// Poziv funkcije i proslijeđeni argumenti:
devideArr([1, 2, 3, 4, 5, 6, 7], 3);