/*
8. Napisati funkciju koja nalazi zadnji index na kojem se nalazi odredjeni broj. 
Funkcija treba da prima niz koji pretrazuje i element koji trazi. 
Funkcija vraca zadnji index na kojem se broj nalazi. 
Npr: imamo niz: [2, 4, 5, 6, 7, 2 ,4] i trazimo broj 2. 
Funkcija ce nam vratiti 5 jer je 5 zadnji index na kojem se nalazi broj 2. 
Ukoliko broj koji trazimo ne postoji u nizu, funkcija vraca -1.
*/
//deklaracija funkcije i parametara:
function indexOfLastPositionOfGivenNum(inputArr, indexToBeFound) {

    //ako je broj kojem trazimo zadnji index sadrzan u proslijedjenom nizu trazit cemo ga:
    if (inputArr.includes(indexToBeFound)) {

        //iteriramo kroz niz od zada ka pocetku, ako nadjemo index na nekom nizu odmah se prekida funkcija i vraca index tog broja:
        for (let i = inputArr.length - 1; i >= 0; i--) {
            if (indexToBeFound == inputArr[i]) {
                return i;
            }
        }
    }

    //ako nije sadrzan vraca funkcija -1:
    else {
        return -1;
    }
}

//ispis poziva funkcije i proslijedjeni argumenti:
console.log(indexOfLastPositionOfGivenNum([2, 4, 5, 6, 7, 2 ,4], 2));