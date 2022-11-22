/*
Napisati funkciju koja transponuje matricu. 
Dakle, prvo generisati matricu 3x3 i popuniti nasumicnim brojevima od 0 do 10 a zatim ju ispisati.
Sljedeci korak je trasponovanje matrice. Transponovati matricu znaci 
zamijeniti joj redove i kolone.
Primjer:
Ukoliko je matrica:
1 2 3
4 5 6
7 8 9
*/
const matrixRandomGen = matrix3X3();
//Deklaracija f.je koja pravi 3x3 matricu
function matrix3X3() {
    // deklaracija praznog niza
    const matrix = [];
    // petlja koja iterativno popunjava niz nizovima
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        //petlja koja popunjava random brojevima unutrasnje nizove
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
    //ispis tabele matrice
    console.table(matrix);
    //f-ja vraca matricu
    return matrix;
}
//deklaracija f-je koja radi transponovanje postojece random generisane matrice 3x3, parametar je ta prvobitna funkcija koja generise tu matricu
function transpMatrix3X3 () {
    let matrix = matrixRandomGen;
    let transpMatrix = [];
    for (let i = 0; i < 3; i++) {
        transpMatrix[i] = []; 
    }
    for (let i = 0; i < transpMatrix.length; i++) {
        for (let j = 0; j < transpMatrix.length; j++) {
            transpMatrix[i][j] = matrix[j][i]; 
        }
    }
    console.table(transpMatrix);
    return transpMatrix;
}
transpMatrix3X3();