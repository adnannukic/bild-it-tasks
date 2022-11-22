/*
3. Napisati funkciju koja ce generisati 2D niz. 2D niz treba da izgleda ovako:
[
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [1],
]
*/
//deklaracija funkcije i parametra broj redova
function arr2DTriangleShape(numOfRowsInArr) {

    //deklaracija niza u koji cemo smjestati kreirane nizove
    const arr = [];

    //popunjavanje niza nizovima do broja elemenata sa najvecim brojem trougla, ako imamo broj redova 5 onda je to 3 (5/2=2.5 zaokruzimo na sljedeci veci):
    for (let i = 0; i < Math.ceil(numOfRowsInArr / 2); i++) {
        arr[i] = [];
        for (let j = 0; j <= i; j++) {
            arr[i][j] = j + 1;
        }
    }

    //popunjavanje niza nizovima sa brojem elemenata sve manjim i manjim dok ne dođemo da krajnji niz nema 1 element, a pocinjemo od niza sa najvecim brojem elemenata, kreiranim prethodnom petljom:
    for (let i = Math.ceil(numOfRowsInArr / 2); i < numOfRowsInArr; i++) {
        arr[i] = [];
        for (let j = 0; j < numOfRowsInArr - i; j++) {
            arr[i][j] = j + 1;
        }
    }

    //funkcija vraca nas 2D niz
    return arr;
}

//ispis 2D niza sa proslijedjenim argumentom, zeljeni broj redova:
console.table(arr2DTriangleShape(5));