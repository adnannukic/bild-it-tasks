/*
6. Napisati funkciju koja kao parametar prima rečenicu (od najviše 200 karaktera) i iz nje uklanja 
svaku riječ koja počinje velikim slovom. Pored toga, funkcija treba da prebroji ukupan broj riječi 
u rečenici prije izmjene. Koristiti sljedeću funkciju: ukloniRijeci(string);. 
Npr. ako je data rečenica: "Stari most u Mostaru spaja obale rijeke Neretve." 
funkcija je treba pretvoriti u: "most u spaja obale rijeke". Funkcija ispisuje broj 
riječi u polaznoj rečenici (prije odsijecanja ostalih riječi).
Radi jednostavnosti rješenja, pretpostavite da je riječ bilo koji niz znakova razdvojen znakom razmak.
*/

//Deklaracija funkcije i parametra:
function ukloniRijeci(str) {

    //ako je duzina stringa manja od 200 ili jednaka odradi brojanje i odsijecanje:
    if (str.length <= 200) {

        //tempStr unijeti string triman i svi visestruki razmaci pretvoreni u jednostruki:
        let tempStr = str.trim().replace(/\s+/g, ' ');

        //strin rijecim odvojene znakom razmaka dodajemo kao elemente u arr, i ukoliko neka rijec pocinje velikim slovom uklanjamo je iz niza:
        let arr = tempStr.split(" ");
        console.log(`Unijeti string ima ${arr.length} rijeci.`);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == arr[i][0].toUpperCase()) {
                arr.splice(i, 1);
            }
        }

        //preostale elemente, tj rijeci sa malim slovima vracamo u string, oblik recenice:
        tempStr = arr.join(' ');

        //f-ja vraca takav string, sa odsjecenim rijecima koje pocinju velikim slovom:
        return tempStr;
    }

    //u suprotnom za unijeti string preko 200 karaktera nece raditi program, daje sljedeci ispis:
    else {
        return `Unijeli ste string od preko 200 karaktera. Limit je 200!`;
    }
}

//ispis poziva f-je i proslijedjen string:
console.log(ukloniRijeci('Stari most u Mostaru spaja obale rijeke Neretve.'));