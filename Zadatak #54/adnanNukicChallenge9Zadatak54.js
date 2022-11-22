/*
Napsati funkciju koja provjerava da li postoji neki element u nizu. Funkcija prima dva parametra, 
niz koji pretrazujemo i element koji trazimo. Funkcija radi za sve tipove podataka.
Primjer: recimo da se funkcija zove find, poziv bi izgledao ovako: find([2, 7, 5, 3, 8, 1], 5), 
funckija ce vratiti boolean true jer broj 5 se nalazi u nizu. NE koristiti includes() funkciju.
*/
// deklaracija f-je i parametara
function includes(arr, element) {
    //iteracija kroz proslijedjeni argument tj niz
    for (let i = 0; i < arr.length; i++) {
        // ako se element nalazi u nizu vrati true
        if (arr[i] == element) {
            return true
        } 
        // ako ne, onda false
        else {
            return false
        }
    }
}
//ispis poziva f-je
console.log(includes([1, 2, true, 4, '2qwe'], true));