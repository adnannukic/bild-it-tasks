/*
Napisati funkciju koja provjerava da li cijeli broj ima tacno 3 djelioca, 
i vraca true ukoliko broj ima tacno 3 djelioca a false u suprotnom. 
Npr broj 4 ima tacno 3 djelioca: 1, 2 i 4. 
Zatim ispisati prvih 20 brojeva koji imaju tacno 3 djelioca.
*/
// Delaracija funkcije i parametra:
function isNumDivisible3Times(intiger) {
    // brojac koji ce brojati koliko puta je djeljiv broj
    let counter = 0;
    // petlja koja provjerava da li je trenutni broj 'intiger' djeljiv sa svim brojevima od 1 do tog broja
    for (let i = 1; i <= intiger; i++) {
        // uslov koji to provjerava, ako je ostatak 0 sa nekim brojem od 1 do tog broja, inkrementiraj brojac
        if (intiger % i == 0) {
            counter++;
        }
    }
    // ako je brojac == 3, znaci da je broj djeljiv samo 3 puta tj ima 3 djelioca
    // u tom slucaju funkcija vraca true
    if (counter == 3) {
        console.log(intiger);
        return true;
    }
    // za sve ostale slucaje funkcija vraca false
    else {
        return false;
    }
}
//Deklaracija funkcije koja ce pozvati prethodnu i ispisati prvih 20 takvih brojeva
function first20Divisible3Times() {
    //uslov
    let condition = true;
    //brojac do 20
    let countTo20 = 0;
    //petlja koja iterira sve dok je uslov true
    for (let i = 0; condition; i++) {
        // poziv funckije i uslov ako je on za trenutni index 'i' true inkrementiraj brojac do 20
        if (isNumDivisible3Times(i) == true) {
            countTo20++;
        }
        // kada brojac dodje do 20, postavi uslov na false
        if (countTo20 == 20) {
            condition = false;
        }
    }
}
// Poziv funkcije za ispis
first20Divisible3Times();
