// Pseudo 

// 1) Kreirati brojac za prestupne godine 

// 2) Deklarisati i inicijalizirati varijablu pocetne godine unutar petlje

// 3) Uslov da je godina prestupna je da je djeljiva sa 4 ili 400, ali ne i sa 100

let k = 0; // brojac prestupnih godina

for (let godina = 101; godina <= 2022; godina++) {
    if (((godina % 100) != 0) && ((godina % 4) == 0) || ((godina % 400) == 0)) {
        k++;
        console.log(`Godina ${godina} je prestupna.`);
    }
}
console.log(`U vremenskom periodu od 101 do 2022 godine imali smo ${k} prestupnih godina.`);