/*
3. Napisati program koji ce simulirati unos n slučajnih vrijednosti u opsegu od 0 do 1000. 
Za n uzeti proizvoljan broj. Izračunati statističke podatke u kojem procentu 
se od n generisanih slučajnih vrijednosti pojavljuje prost broj.
Npr. Ako je generisano 10 brojeva (n = 10): 5,7,4,13,17,20,25,23,30,45, u ovom uzorku
 od 10 brojeva postoji 5 prostih brojeva pa je procenat prostih brojeva u ovom slučaju 50%.
Napomena: Po želji kreirati dodatne funkcije da se olakša rješavanje zadatka.
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

//Deklaracija funkcije koja ce praviti niz od broja elemenata koji zelimo, koji proslijedimo kao prvi (nulti index) argument:
function randNums(numOfRandNums) {

    //RandNums niz u koji smjestimo zeljeni broj elemenata brojeva generisanih nasumicno od 0 do 1000:
    const randNums = [];
    //Brojac prostih brojeva u nasem nizu:
    let counterOfPrimeNums = 0;

    //Popunjavanje niza slucajnim brojevima od 0 do 1000, imat ce onoliko elemenata koliko mi u pozivu funkcije na argumentu nultog indeksa zahtjevamo:
    for (let i = 0; i < numOfRandNums; i++) {
        randNums.push(Math.floor(1 + Math.random() * 999));
    }

    //Iteriranje kroz nas niz i provjera koliko ima prostih brojeva:
    for (let i = 0; i < randNums.length; i++) {
        if (isPrime(randNums[i])) counterOfPrimeNums++;
    }
    
    //ispis koliko je generisano brojeva, koji su to, koji su prosti medju njima i koliki je procenat prostih:
    console.log(`Za generisanih ${numOfRandNums} brojeva: ${randNums}, od kojih je ${counterOfPrimeNums} prostih brojeva, pa je procenat prostih brojeva: ${(counterOfPrimeNums / numOfRandNums) * 100}%.`);

    //funkcija vraca koliki je postotak prostih brojeva medju generisanim:
    return counterOfPrimeNums / numOfRandNums * 100;
}

//poziv funkcije i proslijedjen argument zeljenog broja generisanih brojeva od 0 do 1000:
randNums(10);