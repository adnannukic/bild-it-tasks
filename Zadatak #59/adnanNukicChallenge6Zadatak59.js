/*
6. Imamo dva niza. Elementi u arr1 su priredili zabavu i počeli da se
miješaju. Međutim, jedan od elemenata se izgubio! Vaš zadatak je vratiti
element koji je izgubljen.

Primjeri:

missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2

missing([true, true, false, false, true], [false, true, false, true]) ➞ true

Pretpostaviti da prvi niz uvijek sadrži 1 ili više elemenata.
Elementi se uvijek gube.
Niz također može imati duplikate.
*/

//deklaracija funckije koja trazi izgubljene elemente niza, i proslijedjenih nizova:
function missingElementsFromArr(arr1, arr2) {

    //deklaracija niza, i dodavanje prvog elementa unijetog niza prije izgubljenog elementa:
    const tempArr = [];
    tempArr.push(arr1[0]);

    //deklaracija i inicijalizacija brojaca:
    let counter = 0;

    //kreiranje praznih nizova, arrHowManyElementsInArr1 i arrHowManyElementsFromArr1InArr2 sadrze podatke element, broj ponavljanja elementa u proslijedjenom nizu,...
    //arrMissingElements niz u koji cemo dodati sve elemente koji su "izgubljeni" iz niza 1:
    const arrHowManyElementsFromArr1InArr2 = [];
    const arrHowManyElementsInArr1 = [];
    const arrMissingElements = [];

    //dodavanje svih elemenata u tempArr
    for (let i = 0; i < arr1.length; i++) {
        if (tempArr.includes(arr1[i])) {
            continue;
        }
        else {
            tempArr.push(arr1[i]);
        }
    }

    //brojanje koliko se odredjeni element iz tempArr pojavljuje u proslijedjenom nizu 2, arr2:
    //dodavanje u arrHowManyElementsFromArr1InArr2 svih elemenata iz tempArr i broja ponavljanja, respektivno dok ne popunimo za sve elemente:
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (tempArr[i] == arr2[j]) {
                counter++;
            }
        }
        arrHowManyElementsFromArr1InArr2.push(tempArr[i], counter);
        counter = 0;
    }

    //brojanje koliko se odredjeni element iz tempArr pojavljuje u proslijedjenom nizu 1, arr1:
    //dodavanje u arrHowManyElementsInArr1 svih elemenata iz tempArr i broja ponavljanja, respektivno dok ne popunimo za sve elemente:
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (tempArr[i] == arr1[j]) {
                counter++;
            }
        }
        arrHowManyElementsInArr1.push(tempArr[i], counter);
        counter = 0;
    }

    //iteriranje kroz brojeve elemenata i provjera da li se i za koliko razlikuju u proslijedjenom arr1 i arr2, te dodavanje elemenata kod kojih razlika postoji u arrMissingElements:
    for (let i = 1; i < arrHowManyElementsInArr1.length; i += 2) {
        let tempVar = 0;
        if (arrHowManyElementsInArr1[i] !== arrHowManyElementsFromArr1InArr2[i]) {
            tempVar = arrHowManyElementsInArr1[i] - arrHowManyElementsFromArr1InArr2[i];
            for (let j = 0; j < tempVar; j++) {
                arrMissingElements.push(arrHowManyElementsInArr1[i - 1]);
            }
        }
    }

    //funkcija vraca arrMissingElements sa elementima koji nedostaju u nizu 2, arr2:
    return arrMissingElements;
}

//ispis poziva funkcije i proslijedjeni nizovi:
console.log(missingElementsFromArr([true, true, false, false, true], [false, true, false, true]));