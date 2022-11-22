/*
4. Kreirajte funkciju za provjeru da li je dati cijeli broj faktorijel cijelog broja ili ne.
Vrijednost koju funkcija vraca je boolean.
PRIMJERI:
isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!
isFactorial(27) ➞ false
isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4!
*/

function isFactorial(num) {
    let tempProduct = 1;
    let isFactorialOfSomeNum = false;
    if (num !== 0) {
        for (let i = 1; i <= num; i++) {
            tempProduct = tempProduct * i;
            if (tempProduct == num) isFactorialOfSomeNum = true;
            else if (tempProduct > num) break;
        }
        return isFactorialOfSomeNum;
    }
    else return isFactorialOfSomeNum;
}
console.log(isFactorial(2));