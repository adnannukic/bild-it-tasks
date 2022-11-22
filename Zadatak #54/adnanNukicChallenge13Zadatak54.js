/*
Napisati program koji za proizvoljni string ispisuje:
a. broj (procenat) samoglasnika
b. broj (procenat) suglasnika
c. broj (procenat) ostalih karaktera
Koristiti funkcije u rjesavanju ovog zadatka.
*/
//Deklaracija funkcije i parametra koji je string:
function statsOfAString(inputString) {
    //Deklaracija i inicijalizacija brojaca i nizova sa suglasnicima i samoglasnicima
    let counterSamoglasnik = 0;
    let counterSuglasnik = 0;
    let counterOstaliKarakteri = 0;
    const allKarakteri = inputString.length;
    const arrSamoglasnici = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arrSuglasnici = ['b', 'B', 'c', 'C', 'č', 'Č', 'ć', 'Ć', 'd', 'D', 'đ', 'Đ', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'r', 'R', 's', 'S', 'š', 'Š', 't', 'T', 'v', 'V', 'z', 'Z', 'ž', 'Ž'];
    // deklaracija funkcije koja trazi samoglasnike
    function samoglasnici() {
        for (let i = 0; i < inputString.length; i++) {
            if (arrSamoglasnici.includes(inputString[i])) {
                counterSamoglasnik++;
            }
        }
        // f-ja vraca procenat samoglasnika u stringu
        return (counterSamoglasnik / allKarakteri) * 100;
    }
    // deklaracija funkcije koja trazi suglasnike u stringu
    function suglasnici() {
        for (let i = 0; i < inputString.length; i++) {
            if (arrSuglasnici.includes(inputString[i])) {
                counterSuglasnik++;
            }
        }
        // f-ja vraca procenat suglasnika u stringu
        return (counterSuglasnik / allKarakteri) * 100;
    }
    // deklaracija funkcije koja broji ostale karaktere
    function ostalihKarakteri() {
        counterOstaliKarakteri = inputString.length - counterSamoglasnik - counterSuglasnik;
        // f-ja vraca broj ostalih karaktera
        return (counterOstaliKarakteri / allKarakteri) * 100;
    }
    //funckija vraca ispis zeljen po zadatku:
    return console.log(`Procenat samoglasnika je ${samoglasnici()}% \nProcenat suglasnika je ${suglasnici()}% \nProcenat ostalih karaktera je ${ostalihKarakteri()}%`);
}
// poziv funkcije sa proslijeđenim stringom: 
statsOfAString('Ovo je testni string!!!!!&$%$#');