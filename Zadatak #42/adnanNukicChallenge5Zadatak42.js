// Pseudo

// Deklarisati varijablu broj koja će se kretati od 1 do 10

// U while petlji koristiti switch izjavu

let brojOd1Do10 = 1;

while (brojOd1Do10 <= 10) {
    switch (brojOd1Do10) {
        case 1:
            console.log(`${1} - Jedan`);
            break;
        case 2:
            console.log(`${2} - Dva`);
            break;
        case 3:
            console.log(`${3} - Tri`);
            break;
        case 4:
            console.log(`${4} - Cetiri`);
            break;
        case 5:
            console.log(`${5} - Pet`);
            break;
        case 6:
            console.log(`${6} - Sest`);
            break;
        case 7:
            console.log(`${7} - Sedam`);
            break;
        case 8:
            console.log(`${8} - Osam`);
            break;
        case 9:
            console.log(`${9} - Devet`);
            break;
        case 10:
            console.log(`${10} - Deset`);
            break;
    }
    brojOd1Do10++;
}
/* ili (bez deklaracije varijable prije petlje)
for (i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log(`${1} - Jedan`);
            break;
        case 2:
            console.log(`${2} - Dva`);
            break;
        case 3:
            console.log(`${3} - Tri`);
            break;
        case 4:
            console.log(`${4} - Cetiri`);
            break;
        case 5:
            console.log(`${5} - Pet`);
            break;
        case 6:
            console.log(`${6} - Sest`);
            break;
        case 7:
            console.log(`${7} - Sedam`);
            break;
        case 8:
            console.log(`${8} - Osam`);
            break;
        case 9:
            console.log(`${9} - Devet`);
            break;
        case 10:
            console.log(`${10} - Deset`);
            break;
    }
}
*/