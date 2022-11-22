/*
Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
Primjer:
Ako funkciji proslijedimo - 20 vratit ce nam 20.
*/
//Deklaracija f-je i parametra:
function absolute(num) {
    //pretvorba parametra num u string
    let tempStr = num.toString();
    // ako je nulti element stringa -
    if(tempStr[0] == '-') {
        //nas string ce izbaciti taj znak i kopirati ostatak stringa
        tempStr = tempStr.slice(1, tempStr.length);
        //deklaracija varijable i dodjela tj. pretvorba takvog stringa u broj, ovoj varijabli
        let absNum = Number(tempStr);
        // povrat f-je je taj broj
        return console.log(absNum);
       // ako nije nulti element - znaci da imamo pozitivan broj pa f.ja vraca proslijedjeni argument
    } else {
        return console.log(num);
    }
}
//poziv f-je
absolute(-40321312);