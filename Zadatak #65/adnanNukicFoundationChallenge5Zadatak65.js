/*
5. Kreirajte funkciju koja broji koliko se usamljenih jedinica(1) pojavljuje u datom broju.
Usamljena znači da se broj 1 ne pojavljuje dvaput ili više zaredom.
PRIMJERI:
countLoneOnes(101) ➞ 2
countLoneOnes(1191) ➞ 1
countLoneOnes(1111) ➞ 0
Kreirajte funkciju koja vraća broj na osnovu broja tužnih i nasmijanih lica.
Sretna lica :) i (: vrijede 1.
Tužna lica :( i ): vrijede -1.
PRIMJERI:
happinessNumber(":):(") ➞ -1
happinessNumber("(:)") ➞ 2
happinessNumber("::::") ➞ 0
*/

function countLoneOnes(num) {
    let counter = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] == '1' && num[i - 1] !== '1' && num[i + 1] !== '1') counter++;
    }

    return counter;
}
console.log(countLoneOnes(101));

function happinessNumber(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ':' && str[i - 1] == ')') counter--;
        if (str[i] == ':' && str[i + 1] == '(') counter--;
        if (str[i] == ':' && str[i - 1] == '(') counter++;
        if (str[i] == ':' && str[i + 1] == ')') counter++;
    }

    return counter;
}

console.log(happinessNumber(":):("));