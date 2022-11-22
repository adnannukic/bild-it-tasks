/*
Napisati program koji ispisuje 9 x 9 tablicu množenja. Program treba da ispiše tablicu u formatu prikazanom ispod. 

   1   2   3   4   5   6   7   8   9  
   2   x   x   x    
   3   x   x   x
   4   x   x   x
   5   x   x   x         …….
   6   x   x   x
   7   x   x   x
   8   x   x   x
   9   x   x   x
*/
// Prvi nacin, deklaracija funkcije:
function tablicaMnozenja() {
    // deklaracija praznog niza:
    const matrix = [];
    //iteracija petljama, prvom kreiranje 9 nizova unutar vec deklarisanog praznog niza:
    for (let i = 2; i <= 9; i++) {
        // u svakoj iteraciji dodavanje niza nizu:
        matrix[i] = [];
        //druga petlja popunjava unutrasnje nizove:
        for (let j = 2; j <= 9; j++) {
            // popunjavanje mnozenjem adekvatnih indexa
            matrix[i][j] = i * j;
        }
    }
    //funkcija vraca ispis tabele matrice:
    return console.table(matrix);
}
//poziv funkcije
tablicaMnozenja();
// Drugi nacin, deklaracija funkcije:
function tablicaMnozenja1() {
    //deklaracija i inicijalizacija praznog stringa:
    let str = '';
    //petlja iterativno pravi redove, na kraju svake iteracije prelazi u novi red:
    for (let i = 1; i <= 9; i++) {
        //druga petlja popunjava string u tim redovima:
        for (let j = 1; j <= 9; j++) {
            // ako je broj jednocifren dodati nulu ispred broja:
            if (i < 10 && j < 10 && i * j < 10) {
                str += '0' + (i * j) + ' ';
            // ako je vec dvocifren ispisati ga takvog u stringu:
            } else {
            str += (i * j) + ' ';
            }
        }
        //prelazak u novi red nakon ispisa trenutnog
        str += '\n';
    }
    // funkcija vraca ispis stringa:
    return console.log(str);
}
//poziv funkcije:
tablicaMnozenja1();