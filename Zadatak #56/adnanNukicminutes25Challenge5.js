/*
5. Napisati program koji za proizvoljnu rijec provjerava da li je rijec isogram(izogram). 
Rijec je isogram ukoliko sve svako slovo nalazi samo jednom u rijeci. 
Npr: rijec “lovac” je isogram jer nema slova koja se ponavljanju, ali rijec “baklava” nije.
*/
//deklaracija funkcije i parametra:
function isIsogramOrNot(inputString) {

    //deklaracija i inicijalizacija stringa koji prima proslijedjeni string argument sva velika slova pretvara u mala, trima space sa krajeva i brise sva space mjesta:
    let enteredString = inputString.toLowerCase().trim().replace(/\s+/g, '');

    //brojac ponavljanja slova:
    let counter = 0;

    //iteracija kroz string, ako se pronadje ponavljanje slova inkrementira se brojac i izlazi se iz tijela petlje:
    for (let i = 0; i < enteredString.length; i++) {
        for (let j = 0; j < enteredString.length; j++) {
            if (enteredString[i] == enteredString [j] && i !== j) {
                counter++;
                break;
            }
       }
    }

    //ako je brojac veci od 0 imamo ponavljanje i funkcija vraca false:
    if (counter > 0) {
        return false;
    }

    //a ako je brojac 0, djeluje blok else i funkcija varaca true:
    else {
        return true;
    }
}

//ispis poziva funkcije:
console.log(isIsogramOrNot('Lovac'));