/*
Imamo robota koji hoda po 2D koordinatnoj mreži sa osama x i y. 
Počinje na (0, 0) tj x = 0 i y = 0 i okrenut je prema sjeveru. 
Nakon svakog kretanja, robot se rotira za 90 stepeni u smjeru kazaljke na satu. 
S obzirom na količinu koju je robot pomjerio svaki put, morate izračunati konačnu poziciju robota. 
Ilustracije radi, ako se robotu daju pokreti 20, 30, 10, 40 
onda će se kretati: 20 koraka sjeverno, sada na (0, 20) 30 koraka istočno, 
sada na (30, 20) 10 koraka južno. sada u (30, 10) 40 koraka zapadno, sada na (-10, 10) 
...i završit će na koordinatama (-10, 10).
*/
// deklaracija funkcije 
function robotPosition() {
    // x i y koordinate
    let x = 0;
    let y = 0;
    // brojaci pokreta po smjerovima i brojaci indexa:s
    let counterNorth = 0;
    let counterIndexNorth = 0;
    let counterEast = 0;
    let counterIndexEast = 1;
    let counterSouth = 0;
    let counterIndexSouth = 2;
    let counterWest = 0;
    let counterIndexWest = 3;
    // imamo petlju sa 4 iteracije, odnosno 4 smjera kretanja
    // simulacija kretanja robota:
    for (let i = 0; i < arguments.length; i++) {
        if (counterIndexNorth <= i) {
            counterNorth += arguments[i];
            counterIndexNorth += 4;
        }
        if (counterIndexEast <= i) {
            counterEast += arguments[i];
            counterIndexEast += 4; 
        }
        if (counterIndexSouth <= i) {
            counterSouth += arguments[i];
            counterIndexSouth += 4;
        }
        if (counterIndexWest <= i) {
            counterWest += arguments[i];
            counterIndexWest += 4;
        }
    }
    // f-ja vraca ispis koordinata nakon kretanja
    return console.log(`Koordinate (x, y) nakon kretanja robota su: (${x = counterEast - counterWest}, ${y = counterNorth - counterSouth})`);
}
robotPosition(20, 30, 10, 40);