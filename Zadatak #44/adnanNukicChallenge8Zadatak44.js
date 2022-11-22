/*
8. Napisati program koji uklanja sve samoglasnike iz stringa 
‘Make it work, make it right, make it fast.’. 
Nakon sto program ukloni sve samoglasnike ispisati string u konzolu.
*/
// Pseudo
// 1) Deklarisati varijablu za string po zadatku kao u jednu sa praznim stringom
// 2) Iterirati kroz dati string i provjeravati uslov, ukoliko element na indexu stringa nije samoglasnik dodavati ga u prethodno deklarisani prazan string
// 3) Ispisati taj string koji vise nije prazan

let mojString = 'Make it work, make it right, make it fast.';
let mojNoviString = '';
for (i = 0; i < mojString.length; i++) {
 if (mojString[i] !== 'a' && mojString[i] !== 'e' && mojString[i] !== 'i' && mojString[i] !== 'o' && mojString[i] !== 'u') {
    mojNoviString += mojString[i];
 }
}
console.log(mojNoviString);