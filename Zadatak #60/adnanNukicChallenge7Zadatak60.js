/*
7. Kreirati program koji će pronaći i ispisati sve brojeve od X do Y 
(uključujući granične vrijednosti) koji su deljivi svim svojim ciframa. 
Na primjer, broj 36 je djeljiv sa brojevima 3 i 6. (36/6=6 i 36/3=12). 
Brojeve X i Y uzeti proizvoljno a moraju biti u opsegu od 10 do 6000.
*/

//Deklaracija funkcije koja ce raditi ispis brojeva djeljivih sa svojim ciframa u svakom odabranom intervalu od 10 do 6000:
function numIsDivisibleByAllItsDigits(minBorder, maxBorder) {

    //Niz u koji ce se smjestiti svi brojevi od proizvoljnog intervala unutar intervala 10-6000:
    const arr = [];

    if (minBorder >= 10 && maxBorder <= 6000) {

        //Krecemo od donje granice proslijedjenog broja, i idemo do gornje granice ukljucujuci obje:
        for (let i = minBorder; i <= maxBorder; i++) {
            //brojac koji se na pocetku svake iteracije seta na 0:
            let counter = 0;
            //pretvorba trenutnog broja "i" u string:
            let tempStr = i.toString();
            //iteriranje kroz taj string i provjera da li je djeljiv sa svojim ciframa, ako jest inkrementiramo brojac:
            for (let j = 0; j < tempStr.length; j++) {
                if (i % tempStr[j] == 0) counter++;
            }
            
            //ako je brojac jednak broju cifara trenutnog broja "i", broj "i" je djeljiv svojim ciframa i dodajemo ga u niz "arr":
            if (counter == tempStr.length) arr.push(i);
        }
        
        //funkcija vraca niz:
        return arr;
    }
    else console.log('Interval mora biti izmedju 10 i 6000.');
}

//ispis poziva funkcije uz proslijedjen interval:
console.log(numIsDivisibleByAllItsDigits(10, 6000));