/* 
10. Napisati program koji će neki prirodni broj A (A > 100000), 
te kreirati i ispisati broj B koji će se sastojati od cifara broja A u obrnutom redoslijedu 
u kojem je svaka parna cifra uklonjena. (npr. ako se unese 45362792 funkcija će vratiti 9735). 
Ispisati brojeve A i B i razliku tih brojeva.
*/
// Pseudo 
// 1) Deklarisati varijablu za broj
// 2) Pretvoriti taj broj u string
// 3) Iteratirati petljom kroz taj string od pozadi i spremiti u novu varijablu tipa string
// 4) Drugom petljom ispod prethodne, iteratirati kroz taj novi string obrnutog broja i u novu varijablu tipa string spremati sve brojeve koji su neparni
// 5) na kraju te petlje pretvoriti taj string u tip Number()
// 6) Ispisati brojeve po uslovu iz zadatka 

let broj1= 23241312;
let stringBroja = String(broj1);
let stringObrnutogBroja = ''; // string gdje se smjesti obrnut broj
let stringObrnutogBrojaBezParnihBrojeva = ''; // string gdje se smjesti obrnut broj bez parnih cifara
let obrnutBroj;

for (let i = stringBroja.length - 1; i >= 0; i--) {
    stringObrnutogBroja += stringBroja[i];
}
for (let j = 0; j < stringObrnutogBroja.length; j++) {
    if ((stringObrnutogBroja[j] % 2) !== 0) {
        stringObrnutogBrojaBezParnihBrojeva += stringObrnutogBroja[j];
    }
    obrnutBroj = stringObrnutogBrojaBezParnihBrojeva;
}
console.log(`Broj ${broj1}, u obrnutom redoslijedu i bez cifara parnog broja daje broj: ${obrnutBroj}. Razlika ovih brojeva je ${broj1 - obrnutBroj}.`);
