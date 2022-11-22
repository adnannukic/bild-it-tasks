/*
3. Kreirajte funkciju za rotaciju dvodimenzionalne matrice od N * N, 
popunjenom nasumicnim elementima. Rotacija se vrsi odredjen broj puta, 
s tim ako je broj pozitivan, rotacija je u smjeru kazaljke na satu, 
a ako nije, onda je rotacija u suprotnom smjeru.

Primjeri: 
rotateTransform([ 
[2, 4], 
[0, 0] 
], 1);

Result:[ 
[0, 2], 
[0, 4] 
]

rotateTransform([ 
[2, 4], 
[0, 0] 
], -1);

Result:[ 
[4, 0], 
[2, 0] 
]
*/

function rotateTransform(arr2D, numOfRotation) {
    //za slucaj u smjeru kazaljke na satu:
    if (numOfRotation > 0) {
        //broj rotacija:
        for (let i = 0; i < numOfRotation; i++) {
            //row-pocetni red, column-pocetna kolona, lastRow-posljednji red, lastColum-posljednja kolona
            //current i previousElement pomocne varijable, temp, koje poprimaju vrijednosti u iteracijama trenutnog i prethodnog elementa:
            let row = 0;
            let column = 0;
            let currentElement = 0;
            let previousElement = 0;
            let lastRow = arr2D.length;
            let lastColumn = arr2D[0].length;

            //dok imamo redova i kolona u kojima ce se vrsiti modifikacija-rotacija petlja ce raditi:
            while (row < lastRow && column < lastColumn) {
                if (row == lastRow - 1 || column == lastColumn - 1) {
                    break; //jer ce se row i column inkremenirati do indexa npr. 2 kod matrice 3x3, kada dodje do 2 zelimo da na njemu zavrsi, marica ce biti rotirana
                }
                previousElement = arr2D[row + 1][column]; //sacuva se zadnja vrijednost u krugu rotacije, to je vrijednost u drugom redu matrice koja se rotira i prve kolone

                //potrebno je da iteriramo kroz prvi red matrice (ili prvi red submatrice, zavisno koliku matricu rotiramo)

                for (let i = column; i < lastColumn; i++) {
                    currentElement = arr2D[row][i];
                    arr2D[row][i] = previousElement;
                    previousElement = currentElement;
                }
                //prelazak u iduci red, odnosno novu submatricu:
                row++;

                //sada smo modifikovali elemente prvog reda, ukljucujuci i zadnji element tog reda koji je prvi element zadnje kolone
                //potrebno je sada modifikovati elemente zadnje kolone trenutne matrice (submatrice)
                for (let i = row; i < lastRow; i++) {
                    currentElement = arr2D[i][lastColumn - 1];
                    arr2D[i][lastColumn - 1] = previousElement;
                    previousElement = currentElement;
                }
                //prelazak na prethodnu kolonu, odnosno novu submatricu:
                lastColumn--;

                //postavljamo uslov da li imamo preostalih elemenata za modifikovanje, dakle triggerat ce se iduca petlja ako je ispunjen uslov:
                if (row < lastRow) {
                    for (let i = lastColumn - 1; i >= column; i--) {
                        currentElement = arr2D[lastRow - 1][i];
                        arr2D[lastRow - 1][i] = previousElement;
                        previousElement = currentElement;
                    }
                }
                //dekrementacija redova
                lastRow--;

                if (column < lastColumn) {
                    for (let i = lastRow - 1; i >= row; i--) {
                        currentElement = arr2D[i][column];
                        arr2D[i][column] = previousElement;
                        previousElement = currentElement;
                    }
                }
                //inkrementacija
                column++;
            }
        }
        return arr2D;
    }
    //analogno rjesenje je i za smjer suprotan smjeru kazaljke na satu, istom logikom ali suprotnim smjerom i pravilima, za unesen negativan broj rotacije:
    if (numOfRotation < 0) {
        for (let i = 0; i > numOfRotation; i--) {
            let row = 0;
            let column = 0;
            let currentElement = 0;
            let previousElement = 0;
            let lastRow = arr2D.length;
            let lastColumn = arr2D[0].length;

            while (row < lastRow && column < lastColumn) {
                if (row == lastRow - 1 || column == lastColumn - 1) {
                    break; 
                }
                previousElement = arr2D[row][column + 1];

                for (let i = row; i < lastRow; i++) {
                    currentElement = arr2D[i][column];
                    arr2D[i][column] = previousElement;
                    previousElement = currentElement;
                }
                column++;

                for (let i = column; i < lastColumn; i++) {
                    currentElement = arr2D[lastRow - 1][i];
                    arr2D[lastRow - 1][i] = previousElement;
                    previousElement = currentElement;
                }
                lastRow--;

                if (row < lastRow) {
                    for (let i = lastRow - 1; i >= row; i--) {
                        currentElement = arr2D[i][lastColumn - 1];
                        arr2D[i][lastColumn - 1] = previousElement;
                        previousElement = currentElement;
                    }
                }
                lastColumn--;

                if (column < lastColumn) {
                    for (let i = lastColumn - 1; i >= column; i--) {
                        currentElement = arr2D[row][i];
                        arr2D[row][i] = previousElement;
                        previousElement = currentElement;
                    }
                }
                row++;
            }
        }
        return arr2D;
    }

}
console.log(rotateTransform([[2, 4, 4], [0, 0, 0], [2, 3, 5]], -1));