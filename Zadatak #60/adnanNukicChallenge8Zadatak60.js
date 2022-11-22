/*
8. Svaki paran broj se može prikazati kao suma dva prosta broja (tkz. Goldbachovo pravilo). 
Napisati program koji ce prikazati sve parne brojeve u intervalu od n1 do n2 kao sumu 
dva prosta broja. n1 i n2 uzeti proizvoljno s tim da n2 mora biti veci od n1.
*/

//Deklaracija funkcije koja ispituje da li je proslijedjeni broj prost i deklaracija parametra, prost broj je djeljiv sa 1 i sa samim sobom: 
function isPrime(inpNum) {

    //Boolean vrijednost koja ce nam govoriti da li je broj prost ili nije:
    let isPrimeNum = true;

    //Iteriramo brojeve od 2 do unijetog(proslijedjenog) broja, ukoliko je proslijedjeni broj djeljiv sa nekim brojem od 2 do samog sebe, proslijedjeni broj nije prost onda se varijabli dodijeli false vrijednost i izlazi se iz petlje:
    for (let i = 2; i < inpNum; i++) {
        if (inpNum % i == 0) {
            isPrimeNum = false;
            break;
        }
    }

    //Funkcija vraca podatak (true ili false) u zavisnosti da li je proslijedjeni broj prost:
    if (isPrimeNum) {
        return true;
    }
    else {
        return false;
    }
}

//deklaracija funkcije i parametara (interval):
function goldbachRule(n1, n2) {
    //n2 mora biti vece od n1 da bi program radio:
    if (n2 > n1) {

        //dodavanje svih parnih brojeva unutar intervala u niz "arrEvenNumsFromN1ToN2":
        const arrEvenNumsFromN1ToN2 = [];
        for (let i = n1; i <= n2; i++) {
            if (i % 2 == 0) {
                arrEvenNumsFromN1ToN2.push(i);
            }
        }

        //iteracije kroz niz parnih brojeva i dodavanje privremeno u niz "tempArr" proste brojeve od 2 do trenutnog parnog broja niza "arrEvenNumsFromN1ToN2" indeksa "i":
        for (let i = 0; i < arrEvenNumsFromN1ToN2.length; i++) {
            let tempArr = [];
            for (let j = 0; j < arrEvenNumsFromN1ToN2[i]; j++) {
                if (isPrime(j) && j != 0 && j != 1) {
                    tempArr.push(j);
                }
            }

            //nakon toga iteriramo kroz "tempArr" i trazimo koja to razlika parnog broja indeksa "i" i prostog broja iz niza "tempArr" daje prost broj, kada nadjemo mijenjamo element niza "arrEvenNumsFromN1ToN2" indeksa "i" sa ispisom zbira ta dva broja i izlazimo iz tijela petlje sa break:
            for (let k = 0; k < tempArr.length; k++) {
                let temp = arrEvenNumsFromN1ToN2[i] - tempArr[k];
                if (isPrime(temp)) {
                    arrEvenNumsFromN1ToN2[i] = `${tempArr[k]} + ${temp}`;
                    break;
                }
            }
        }

        //funkcija vraca korigovani niz parnih brojeva prestavljen kao suma dva prosta broja:
        return arrEvenNumsFromN1ToN2;
    }
    else console.log(n2 + ' mora biti vece od ' + n1);
}

//ispis poziva funkcije i proslijedjen interval:
console.log(goldbachRule(15, 200));
