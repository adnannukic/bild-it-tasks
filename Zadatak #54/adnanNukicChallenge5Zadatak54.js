/*
Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. 
Rekurzivna funkcija je funkcija koja poziva samu sebe.
*/
//Deklaracija f-je i parametra:
function recursiveFactoriel(num) {
    //ako je argument broj 0 vratit ce 1
    if (num == 0) {
        return 1;
    }
    // inace vraca na osnovu rekurzije faktorijel
    // 5 * 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1
    return num * recursiveFactoriel(num - 1);
}
// poziv f-je
recursiveFactoriel(5);
