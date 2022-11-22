/*
1. Jake je osoba od navike. On uvijek ima dorucak u 7:00 ujutro, rucak u 12:00 sati 
i vecera u 19:00 sati. Kreirajte funkciju koja uzima trenutno vrijeme kao string 
i racuna vrijeme do Jakeovog sljedeceg obroka. Predstavite ovo kao niz 
od dva elementa koji predstavljaju sate i minute.

Primjeri: 
timeToEat("14:00") ➞ [5, 0] 
// 5 sati do sljedeceg obroka, vecera

timeToEat("5:50") ➞ [1, 10] 
// 1 sat i 10 minuta do sljedeceg obroka, dorucak
*/

function timeToEat(timeStr) {
    //trimamo potencijalno slucajno unesen string sa praznim mjestima
    timeStr = timeStr.trim().replace(/\s+/g, '');
    //podijelimo sate i minute unijetog stringa u niz
    const timeArr = timeStr.split(':');
    //niz sati kad Jake jede
    const arrWhenJakeEat = [7, 12, 19];
    //brojac minuta
    let minCounter = 0;
    //brojac sati
    let hourCounter = 0;
    //niz u koji cemo smjestiti vrijeme do narednog obroka
    const arrTimeToEat = [];

    //iteriramo kroz niz vremena i pretvaramo u Number stringove
    for (let i = 0; i < timeArr.length; i++) {
        timeArr[i] = Number(timeArr[i]);
    }
    //minute brojimo od unesene do 60
    for (let i = timeArr[1]; i < 60; i++) {
        minCounter++;
    }
    //ako izbrojimo 60min, unijeli smo 0 minuta i setujemo brojac na 0
    if (minCounter == 60) {
        minCounter = 0;
    }
    // u suprotnom inkrementiramo broj sati u nizu
    else {
        timeArr[0]++;
    }
    //dok god broj sati nije jednak broju sati kada Jake jede inkrementiramo sate i brojac sati
    while (true !== arrWhenJakeEat.includes(timeArr[0])) {
        timeArr[0]++;
        hourCounter++;
    }
    //u novi niz unesemo broj sati koji je brojac izbrojao i broj minuta
    arrTimeToEat.push(hourCounter, minCounter);
    return arrTimeToEat;
}

console.log(timeToEat('7:00'));