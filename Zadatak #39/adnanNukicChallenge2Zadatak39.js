let cioBroj = 125; //tip podatka "number", unos trocifren broj
let broj = cioBroj.toString(); // konverzija iz tipa "number" u "string"
let cifra1 = Number(broj[0]); // konverzija nultog elementa stringa u "number"
let cifra2 = Number(broj[1]); // konverzija prvog elementa stringa u "number"
let cifra3 = Number(broj[2]); // konverzija drugog elementa stringa u "number"
let zbir = cifra1 + cifra2 + cifra3; // zbir cifara trocifrenog broja

console.log(`'Zbir cifara broja ${cioBroj} je ${zbir}.'`); //ispis