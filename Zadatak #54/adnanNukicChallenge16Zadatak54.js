/*
Imamo masinu koja sitni novac. Obzirom da odredjenu kolicinu novca mozemo podijeliti na vise nacina,
 nas program za ovu masinu bi trebao da ispise sve moguce opcije. 
 Koristiti novcanice konvertibilne marke s tim da se ne koristi manja novcanica od 5 KM.
Primjer: 20 KM bi se moglo usitniti na sljedece nacine:
2 x 10KM, 4 x 5KM, 1 x 10KM + 2 x 5KM.
Napisati funkciju koja prima jedan parametar, kolicinu novca, 
zatim funkcija ispisuje sve moguce opcije za tu kolicinu novca.
*/
//deklaracija funkcije i parametra
function moneyScatter(moneyValue) {
    // BAM ima novcanice 200KM,100KM,50KM,20KM,10KM i u ovom slucaju najmanje 5KM
    const currencyArr = [5, 10, 20, 50, 100, 200];
    const tempArr = [];
    let combinations = [];
    let tempStr = '';
    let tempStr1 = '';
    let tempArr1 = [];
    let counter5KM = 0;
    let counter10KM = 0;
    let counter20KM = 0;
    let counter50KM = 0;
    let counter100KM = 0;
    let counter200KM = 0;
    for (let i = 0; i < currencyArr.length; i++) {
        tempArr.push(moneyValue / currencyArr[i]);
    }
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] > 1 && tempArr[i] !== 1 && tempArr[i] % 1 == 0) {
            let tempStr = '';
            tempStr = tempArr[i] + ' x ' + currencyArr[i] + 'KM';
            combinations.push(tempStr);
        }
    }
    while (moneyValue > 0) {
        for (const moneyBill of currencyArr) {
            if (moneyValue >= moneyBill) {
                moneyValue -= moneyBill;
                tempStr = moneyBill + 'KM';
                tempArr1.push(tempStr);
            }
        }
    }
    for (let i = 0; i < tempArr1.length; i++) {
        if (tempArr1[i] == '5KM') {
            counter5KM++;
        } else if (tempArr1[i] == '10KM') {
            counter10KM++;
        } else if (tempArr1[i] == '20KM') {
            counter20KM++;
        } else if (tempArr1[i] == '50KM') {
            counter50KM++;
        } else if (tempArr1[i] == '100KM') {
            counter100KM++;
        } else {
            counter200KM++;
        }
    }
    if (counter5KM !== 0) {
        tempStr1 += counter5KM + ' x ' + '5KM + ';
    }
    if (counter10KM !== 0) {
        tempStr1 += counter10KM + ' x ' + '10KM + ';
    }
    if (counter20KM !== 0) {
        tempStr1 += counter20KM + ' x ' + '20KM + ';
    }
    if (counter50KM !== 0) {
        tempStr1 += counter50KM + ' x ' + '50KM + ';
    }
    if (counter100KM !== 0) {
        tempStr1 += counter100KM + ' x ' + '100KM + ';
    }
    if (counter200KM !== 0) {
        tempStr1 += counter200KM + ' x ' + '200KM + ';
    }
    tempStr1 = tempStr1.slice(0, tempStr1.length - 3);

    combinations.push(tempStr1);
    return console.log(combinations);
}
moneyScatter(50);
//zadatak ne rijesen u potpunosti
// nemogucnost shvatanja univerzalne metode za ispis svih mogucih opcija
// poprilicno manuelno radjeno :( 