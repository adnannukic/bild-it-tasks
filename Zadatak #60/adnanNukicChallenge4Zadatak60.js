/*
4. Napišite JavaScript rekurzivnu funkciju da dobijete prvih n Fibonačijevih brojeva. 
Napomena: Fibonačijev niz je niz brojeva: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Svaki naredni broj je zbir prethodna dva, i niz krece od 0.
*/
function fibonacciSeq(n) {

    //n je proslijedjeni broj koji govori koliko elemenata fibonacci niza zelimo u nasem ispisu:
    //ako je taj broj 2 vratit cemo niz [0, 1], jer su to prva dva broja fibonnaci niza:
    //u jednom trenutku rekurzijom program ce doci do toga da je n = 2, pa ce uzeti ovaj niz, gdje ce sa indexa 0 i 1 uzeti ove elemente i sabrati ih i pushati u niz arrFibFirstNNums:
    if (n == 2) {
        return [0, 1];
    }

    //u suprotnom dok n nije jednak 2, ovaj program ce u inicijalizaciji deklarisane varijable "arrFibFirstNNums" pozivati funkciju sa (n-1) argumentom, i sve ce to raditi dok ne dodje do 2:
    //kada program dodje do toga da je n = 2, varijabli "arrFibFirstNNums" dodijelit ce se niz [0, 1] iz if uslova, te ce se u taj niz push-ati zbir ova 2 broja (na osnovu linije 21 koda), funkcija ce vratiti niz sa 3 elementa [0, 1, 1] (linija 22 koda) te se vratiti na prethodni poziv:
    //sada se varijabli "arrFibFirstNNum" dodaje niz sa 3 elementa [0, 1, 1] te se pusha novi element koji je zbir elemenata 1 i 1 (linija 21 koda) pa ce funkcija vratiti niz sa 4 elementa [0, 1, 1, 2] (linija 22 koda) u prethodni poziv:
    //itd... ovaj proces se nastavlja do tacke u kojoj je popunjen niz zeljenim brojem "n" elemenata fibonacci niza:
    else {
        let arrFibFirstNNums = fibonacciSeq(n - 1);
        arrFibFirstNNums.push(arrFibFirstNNums[arrFibFirstNNums.length - 1] + arrFibFirstNNums[arrFibFirstNNums.length - 2]);
        return arrFibFirstNNums;
    }
}

//poziv funkcije i proslijedjen zeljeni broj elemenata fibonacci niza kao prvi argument (index nula):
console.log(fibonacciSeq(6))