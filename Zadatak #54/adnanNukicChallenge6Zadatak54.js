/*
Napisati funkciju koja prima 2D niz, zatim ga konvertuje u 1D niz. 
Ovaj proces se zove: “flattening an array”, gdje se smanjuje broj dimenzija niza.
Primjer:
2D niz:
1 2 3
4 5 6
7 8 9
Funkcija nam vraca 1D niz: 1 2 3 4 5 6 7 8 9
*/
// Deklaracija f-je i parametra
function convert2Din1D(arr2D) {
    // deklaracija praznog niza koji ce biti 1D
    let arr1D = [];
    // iteriranje kroz proslijedjeni 2D niz
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            // u 1D niz pushamo elemente 2D niza ij indexa
            arr1D.push(arr2D[i][j]);
        }
    }
    // povrat f-je je 1D niz
    return console.log(arr1D);
}
// poziv f-je uz proslijedjene argumente:
convert2Din1D([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15, 16, 17]]);