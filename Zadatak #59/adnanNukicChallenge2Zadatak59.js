/*
2. Kreirajte funkciju koja određuje da li je broj Oddish ili Evenish.
Broj je Oddish ako je zbir svih njegovih cifara neparan, a broj je Oddish ako
je zbir svih njegovih cifara paran. Ako je broj Oddish, vratite
"Oddish". U suprotnom, vratite "Evenish". Na primjer,
oddishOrEvenish(121) bi trebao vratiti "Evenish", budući da je 1 + 2
+ 1 = 4. oddishOrEvenish(41) bi trebao vratiti "Oddish", budući da je
4 + 1 = 5.
*/
//deklaracija funkcije i parametra koja provjerava da li je proslijedjeni broj ODDISH ili EVENISH:
function isOddishOrEvenish(enterTheNum) {

    //delaracija stringa, i pretvorva unijetog broja u string kao inicijalizacija:
    const numToStr = enterTheNum.toString();

    //suma brojeva broja:
    let sum = 0;

    //iteriramo kroz karaktere stringa unijetog broja, pretvaramo ih u brojeve i dodajemo u string:
    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }

    //ako je suma parna, broj je Evenish, funkcija to vraca kao ispis:
    if (sum % 2 == 0) {
        return 'Evenish';
    }
    //ako nije suma parna, broj je Oddish, funkcija to vraca kao ispis:
    else {
        return 'Oddish';
    }
}

//ispis poziva funkcije uz proslijedjeni argument:
console.log(isOddishOrEvenish(121));