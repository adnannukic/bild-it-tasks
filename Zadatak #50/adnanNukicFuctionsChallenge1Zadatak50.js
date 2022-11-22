/* 
1. Napisati funkciju koja prima tri broja kao parametre te ispisuje ta ista tri broja u rastućem redosljedu.
Primjer poziva funkcije: ispisiSortiraneBrojeve(17, 3, 42);
Primjer ispisa: Sortirani brojevi: 3, 17, 42. 
*/
function ispisiSortiraneBrojeve() {
    let maksimalniBroj = arguments[2]; // uzima za max broj u ovom slucaju sa argumenta 3
    for (let i = arguments.length - 2; i >= 0; i--) {
        if (arguments[i] > maksimalniBroj) {
            maksimalniBroj = arguments[i];
        } // ako je argument na i poziciji (neki od argumenata u 1 ili 2) veci od onog argumenta 3, postavlja max broj neki sa pozicije tog i argumenta
    }
    let minimalniBroj = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minimalniBroj) {
            minimalniBroj = arguments[i];
        } // analogan slucaj kao i u prethodnoj situaciji, samo sada za minimalni broj
    }
    let srednjiBroj;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== minimalniBroj && arguments[i] !== maksimalniBroj) {
            srednjiBroj = arguments[i];
        } // broj koji nije jedan od prethodna 2 postavlja na srednji broj
    }
    return console.log(`Sortirani brojevi: ${minimalniBroj}, ${srednjiBroj}, ${maksimalniBroj}.`);
    // funkcija vraca ispis kao po tekstu zadatka, tri broja u uzlaznom redu.
}
ispisiSortiraneBrojeve(17, 3, 42);
