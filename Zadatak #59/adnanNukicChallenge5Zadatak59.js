/*
5. Napišite funkciju koja pronalazi najcesci element niza tj element
kojeg ima najvise u nizu.

Primer niza:
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Ispis: a (5 puta)
*/

//deklaracija funkcije i parametra, funkcija prima niz i provjerava kojeg karaktera ima najvise u nozu:
function mostCommonCharInArr(arr) {

    //deklaracija pomocnog niza, kog punimo prvo prvim elementom unijetog niza i posle ostalim, da vidimo koji se sve karakteri pojavljuju:
    const tempArr = [];
    tempArr.push(arr[0]);

    //brojac koliko kog elementa ima u nizu:
    let counter = 0; 

    //niz u koji smjestamo karakter i koliko puta se pojavljuje u nizu:
    let howManyTimesCharacter = [];

    //pomocne varijable, tempVar koja ce poprimiti vrijednost najveceg broja, tj najveci broj pojavljivanja nekog karaktera u nizu:
    let tempVar = 0;
    //tempChar varijabla koja poprima vrijednost karaktera koji se najvise puta pojavljuje u nizu:
    let tempChar;

    //iteriramo kroz elemente unijetog niza i ukoliko nisu sadrzani u tempArr dodajemo ih u taj niz:
    for (let i = 1; i < arr.length; i++) {
        if (tempArr.includes(arr[i])) {
            continue;
        }
        else {
            tempArr.push(arr[i]);
        }
    }

    //iteriramo kroz tempArr niz, i za svaki element iteriramo kroz unijeti niz i kada god naidjemo na taj element u unijetom nizu, inkrementiramo brojac, na kraju u novi niz "howManyTimesCharacter" dodajemo karakter i broj koliko puta se pojavljuje:
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == tempArr[i]) {
                counter++;
            }
        }
        howManyTimesCharacter.push(tempArr[i], counter);
        //podesimo brojac na nulu da bi mogli brojati za sljedeci karater tempArr-a:
        counter = 0;
    }

    //tempVar dajemo vrijednost sa inexa 1 jer se tamo nalazi prvi broj brojaca karaktera, i inkrementiramo brojac petlje za 2 svaku iteraciju, jer se brojevi brojaca karaktera nalaze na svakom neparnom indexu:
    tempVar = howManyTimesCharacter[1];
    for (let i = 3; i < howManyTimesCharacter.length; i += 2) {

        //provjeramo da li je trenutni broj veci od prethodnih:
        if (howManyTimesCharacter[i] > tempVar) {

            //ako jeste u ovom tijelu ce se tempVar dodati taj broj brojaca karaktera, a tempChar karakter koji odgovara tom brojacu:
            tempVar = howManyTimesCharacter[i];
            tempChar = howManyTimesCharacter[i - 1];
        }
    }

    //na kraju f-ja vraca ispis karaktera koji se najvise puta pojavljuje u unijetom nizu i broja koliko se puta taj karakter pojavljuje:
    //ukoliko postoji vise karaktera sa istim najvecim brojem ponavljanja, f-ja vraca prvi na koji naidje:
    return `${tempChar} (${tempVar} puta)`;
}

//ispis poziva funkcije uz proslijedjeni niz:
console.log(mostCommonCharInArr([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));