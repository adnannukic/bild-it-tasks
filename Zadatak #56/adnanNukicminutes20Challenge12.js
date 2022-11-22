/*
12. Napisati funkciju koja sortira niz. NE koristiti .sort(). 
Generisati niz duzine 10, popunjen nasumicnim brojevima od 10 do 100, 
zatim sortirati niz od najmanjeg do najveceg elementa i ispisati u konzolu.
*/

//deklaracija funkcije koja generise random broj od 10 do 100:
function genRandNumFrom10To100() {
    let randNum = Math.floor(10 + Math.random() * 90);
    return randNum;
}
//deklaracija funkcije koja generise niz od 10elemenata od 10 do 100:
function sortArrOf10RandNum() {

    //niz koji ce poprimiti 10 random brojeva:
    let arr = [];

    //deklaracija uslova za petlju:
    let condition = true;

    //generisemo 10 random brojeva u niz:
    for (let i = 0; arr.length < 10; i++) {
        arr.push(genRandNumFrom10To100());
    }
    //ispis tog niza:
    console.log(arr);

    //dok je uslov true izvrsavat ce se tijelo petlje
    while (condition) {

        //postavljamo uslov na false, jer se u if-u nalazi postavljanje na true ukoliko imamo mogucnost za shifanje elemenata
        //ako su izvrserne iteracije i nema vise mogucnosti za sortiranje uslov ce ostati na false jer se nece nikad uci u blok if unutar petlje dole i ova while petlja ce se prekinuti
        condition = false;

        //iteriramo kroz niz:
        for (let i = 1; i < arr.length; i++) {

            //ako dva susjedna elementa na indexima pocevsi od 0 i 1, su takva da je ondj na 0 veci od onog na 1, potrebno je zamijeniti mjesta elementima
            //to se provjerava iterativno kroz niz, svaka 2 susjedna provjerimo i vidimo da li su takvi
            if (arr[i - 1] > arr[i]) {

                //deklaracija temp varijavble koja poprima vrijednost elementa na indexu manjem od trenutnog po iteraciji 'i'
                let tempNum = arr[i - 1];
                // element na tom indexu manjem od trenutnog ce zauzeti mjesto onog sa indexa 'i' ukoliko je on veci od tog na i, uslov iz if izjave:
                arr[i - 1] = arr[i];
                //a onaj na 'i' indexu ce poprimiti taj prethodni sa 'i-1' indexa iz tempNum varijable
                arr[i] = tempNum;
                //uslov se postavlja na kraju na true da bi se ponovo iterativno prolazilo kroz niz
            }
        }
    }

    //f-ja vraca sortiran niz
    return arr;
}

//ispis poziva f-je
console.log(sortArrOf10RandNum());