/* 4.  Napisati funkciju koja broji karaktere u nekom stringu te vraća korisniku isti kao i broj
suglasnika i samoglasnika u datom stringu. Primjer poziva funkcije: stringPodaci("Dobrodosli");
Primjer ispisa: String "Dobrodosli" se sastoji od 10 karaktera od cega su 4 samoglasnici i 6 suglasnici.
*/
let arrSuglasnika = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'Z'];
let arrSamoglasnika = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// U gornje dvije linije koda kreirane dvije globalne varijable niza u koje su storirane vrijednosti samoglasnika i suglasnika 
function stringPodaci() {
    let unijetiString = arguments[0]; // Uzimanje prvog argumenta - string
    let brojacSamoglasnika = 0;
    let brojacSuglasnika = 0;
    let brojacSpecijalnihKaraktera = 0;
    for (let i = 0; i < unijetiString.length; i++) {
        if (arrSamoglasnika.includes(unijetiString[i])) {
            brojacSamoglasnika++;
        } else if (arrSuglasnika.includes(unijetiString[i])) {
            brojacSuglasnika++;
        } else {
            brojacSpecijalnihKaraktera++;
        }
    } // Program provjere da li se element trenutnog iteracionog indexa sadrzi u nekom od nizova, da li je u suglasnicima, samoglasnicima i specijalnim karakterima, ako jeste neki od tih, inkrementuje se adekvatan brojac
    return console.log(`String "${unijetiString}" se sastoji od ${brojacSamoglasnika + brojacSpecijalnihKaraktera + brojacSuglasnika} karaktera od cega su ${brojacSamoglasnika} samoglasnici i ${brojacSuglasnika} suglasnici."`);
}
stringPodaci('$Dobrodosli'); //Proslijedimo adekvatan string tip argument, a za return imamo ispis o karakterima po zadatku