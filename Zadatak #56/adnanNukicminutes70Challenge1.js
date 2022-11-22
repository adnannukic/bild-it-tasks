/*
1. Napisati funkciju koja konvertuje bilo koji string u camelCase. 
Recimo da imamo proizvoljni string  “Talk is cheap. Show me the code.”, 
nasa funkcija ce ga konvertovati da izgleda ovako: talkIsCheapShowMeTheCode.
*/
//Deklaracija funkcije i parametra:
function toCamelCase(inputString) {

    //konverzija svih slovnih karaktera unijetog stringa u mala slova:
    let toLowerCaseAndSingleSpace = inputString.toLowerCase().replace(/\s+/g, ' ');

    //temp string:
    let tempStr = '';

    //varijabla u koju ce se spremiti krajnji ispis u camelCase formatu, i nju funkcija vraca:
    let camelCaseStr = '';
    
    //if uslov uklanja prazan prostor ukoliko je on na nultom indeksu:
    if (toLowerCaseAndSingleSpace[0] == ' ') {
        toLowerCaseAndSingleSpace = toLowerCaseAndSingleSpace.slice(1, toLowerCaseAndSingleSpace.length);
    }

    //iteracija kroz unijeti string:
    for (let i = 0; i < toLowerCaseAndSingleSpace.length; i++) {

        //if uslov uklanja tacke unutar unijetog stringa i sprema novi string jednu recenicu u tempStr varijablu:
        if (toLowerCaseAndSingleSpace[i] !== '.') {
            tempStr += toLowerCaseAndSingleSpace[i];
        }
    }
    
    //kreiranje varijable za smjestanje karaktera stringa u niz, splitaju se rijeci, dakle sve ono sto je odvojeno ' ' bit ce jedan element niza:
    const tempArr = tempStr.split(" ");

    //iteriramo kroz elemente (rijeci) niza, postavljamo svaku rijec osim prve (petlja pocinje od 1) da pocinje sa velikim slovom
    for (let i = 1; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1);
    }

    //join-amo tj. spojimo elemente niza u string:
    camelCaseStr = tempArr.join("");

    //funkcija vraca
    return camelCaseStr;
}

//ispis poziva funkcije sa proslijedjenim argumentom:
console.log(toCamelCase(' Talk  is cheap.  Show me the  code.'));