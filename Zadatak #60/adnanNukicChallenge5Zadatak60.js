/*
5. Napisati program koji izračunava prosjek svih savršenih brojeva iz zadatog intervala. 
Uzeti proizvoljan interval. Za neki broj se kaže da je savršen ukoliko je jednak sumi svih 
svojih djelilaca (ne uključujući njega samog). Na primjer, 28 je savršen broj: njegovi 
djelioci su 1, 2, 4, 7 i 14, a 1 + 2 + 4 + 7 + 14 = 28. Jedini savršeni brojevi u opsegu 
od 1 do 100 su brojevi 6 i 28.
*/
//Deklaracija funkcije i parametara, proslijedjen pocetni broj i krajnji intervala:
function perfectNumb(intervalStart, intervalEnd) {
    
    //niz u koji ubacujemo sve savrsene brojeve i prosjek koji ce na kraju funkcija vratiti:
    const perfectNumsFromInterval = [];
    let average = 0;
    
    //iteriranje od pocetnog do krajnjeg broja intervala:
    for (let i = intervalStart; i <= intervalEnd; i++) {

        //temoSum privremena pomocna varijabla koja se na pocetku svake iteracije seta na 0:
        let tempSum = 0;

        //iteriranje od 1 do polovine trenutnog broja "i" i sabiranje svih brojeva sa kojim je broj "i" djeljiv u tempSum:
        for (let j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                tempSum += j;
            }
        }

        //ako je tempSum razlicit od nule (da bi izbjegli slucaj da broj nema brojeva sa kojim je djeliv do svoje polovine) i ako je tempSum jednaka samom broju "i", broj "i" je savrsen:
        //savrsen broj "i" dodajemo u niz "perfectNumsFromInterval":
        if (tempSum !== 0 && tempSum == i) {
            perfectNumsFromInterval.push(i);
        }
    }

    //iteriramo kroz niz savrsenih brojeva i sabiramo ih:
    for (let i = 0; i < perfectNumsFromInterval.length; i++) {
        average += perfectNumsFromInterval[i];
    }
    //nakon toga dijelimo sumu sa brojem elemenata u nizu i dobijamo prosjek, koji funkcija i vraca:
    average = average / perfectNumsFromInterval.length;
    return average;
}

//ispis poziva funkcije uz proslijedjeni interval:
console.log(perfectNumb(1, 1000));