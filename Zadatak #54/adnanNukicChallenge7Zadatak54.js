/*
Napisati funkciju koja se simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj, znak operacije i drugi broj.
Primjer:
Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) a rezultat bi bio 7. Funkcija treba da radi za: +, -, * i /.
*/
//Deklaracija f-je i parametara
function calc(num1, oper, num2) {
    // uslovi ako su operatori -,+,/,* odradi te operacije sa brojevima num1 i num2 i vrati ispis
    if (oper == '-') {
        return console.log(`Razlika brojeva ${num1} i ${num2} je: ${num1 - num2}`);
    } else if (oper == '+') {
        return console.log(`Zbir brojeva ${num1} i ${num2} je: ${num1 + num2}`);
    } else if (oper == '/') {
        return console.log(`Kolicnik brojeva ${num1} i ${num2} je: ${num1 / num2}`);
    } else if (oper == '*') {
        return console.log(`Proizvod brojeva ${num1} i ${num2} je: ${num1 * num2}`);
    }
}
calc(5, '*', 6);