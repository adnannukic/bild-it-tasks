/*
Napisati program koji pretvara neki string u Morsov kod(Morse code)
*/
//Program se moze jednostavnije i ljepse uraditi pomocu objekata, ali kad budemo presli i njih uzivo sa njima cu odraditi
// Deklaracija funkcije i parametra:
function toMorse(inputString) {
    // nizovi sa abecedom i brojevima i morsovim kodom, index morsovog koda odgovara indexu adekvatnog slova
    const lettAndNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const morse = ['.- ', '-... ', '-.-. ', '-.. ', '. ', '..-. ', '--. ', '.... ', '.. ', '.--- ', '-.- ', '.-.. ', '-- ', '-. ', '---- ', '.--. ', '--.- ', '.-. ', '... ', '- ', '..- ', '...- ', '.-- ', '-..- ', '-.-- ', '--.. ', '.---- ', '..--- ', '...-- ', '...- ', '..... ', '-.... ', '--... ', '---.. ', '----. ', '----- '];
    //varijabla koja prima vrijednost indexa na kom se slovo ili broj nalazi u nizu:
    let indexNum = 0;
    // string koji je uneseni string ali sa malim slovima:
    let tempStr = inputString.toLowerCase();
    // string u koji cemo unositi morse kod:
    let morseStr = '';
    // petljom iteriramo kroz uneseni string malih slova, tempStr
    for (let i = 0; i < tempStr.length; i++) {
        //ako karakter stringa postoji u nizu slova i brojeva
        if(lettAndNum.includes(tempStr[i])) {
            //dodaj indexNum varijabli vrijednost indexa gdje se taj karakter nalazi u nizu slova i brojeva "lettAndNum"
            indexNum = lettAndNum.indexOf(tempStr[i]);
            //nakon toga iterativno dodaji elemente iz niza morse s tim indexom u morseStr
            morseStr += morse[indexNum];
        }
    }
    //ispisati morseStr i f-ja vraca morseStr
    console.log(morseStr);
    return morseStr;
}
//Poziv funkcije
toMorse('ASdsad321As');