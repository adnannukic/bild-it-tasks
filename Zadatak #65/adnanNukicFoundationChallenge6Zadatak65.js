/*
6. Zamislite ovaj trougao:
    1
   2 3
  4 5 6
 7 8 9 10
...
Kreirajte funkciju koja uzima broj n i vraća zbir svih brojeva u n-tom redu.
PRIMJERI:
rowSum(1) ➞ 1
rowSum(2) ➞ 5
rowSum(4) ➞ 34
*/
function rowSum(num) {
    let lastNumInPenultimateRow = 0;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        for (let j = 1; j <= i; j++) {
            lastNumInPenultimateRow += 1;
        }
    }
    for (let i = 0; i < num; i++) {
        lastNumInPenultimateRow++;
        sum += lastNumInPenultimateRow;
    }

    return sum;
}

console.log(rowSum(4));