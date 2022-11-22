/*
5. Napisati funkciju koja prima kao argument godinu te vraća da li je ta godina prestupna ili ne.
Primjer poziva funkcije: isPrestupnaGodina(2000);
Primjer ispisa programa: Godina 2000 je prestupna godina. 
*/
function isPrestunaGodina() {
    let godina = arguments[0];
    if (((godina % 100) != 0) && ((godina % 4) == 0) || ((godina % 400) == 0)) {
        return console.log(`Godina ${godina} je prestupna godina.`);   
    } else {
        return console.log(`Godina ${godina} nije prestupna godina.`);
    }
}
isPrestunaGodina(2001);