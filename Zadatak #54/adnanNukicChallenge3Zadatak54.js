/*
Napisati funkciju koja racuna koliko kilometara neko auto moze preci na osnovu nivoa goriva u rezervaru. Funkcija prima 2 parametra, nivo goriva u rezervaru u litrima, i potrosnju auta tj koliko litara auto trosi na 100 km.
Primjer:
Ako je nivo rezervara 20 litara a auto trosi 10 litara na 100 km to znaci da ce auto moci preci 200 km sa gorivom u rezervaru.
*/
// deklaracija f-je:
function brKilometara(a, b) {
    //a - nivo goriva u rezervoaru (u l)
    //b - potrosnju auta na 100km (l/100km)
    // povrat f.je:
    return console.log((a * b) + 'km');
}
//poziv f-je:
brKilometara(20, 10);