/*
3. Pandigitalni broj sadrži sve cifre (0-9) barem jednom. Napišite funkciju koja uzima
cijeli broj, vraća true ako je cijeli broj pandigitalan, a false u suprotnom.
PRIMJERI:
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false
isPandigital(112233445566778899) ➞ false
*/

function isPandigital(num) {
    num = num.toString();
    for (let i = 0; i <= 9; i++) {
        if (!num.includes(i.toString())) return false;
    }
    return true;
}
console.log(isPandigital(98140723568910));