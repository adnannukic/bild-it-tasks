/*
10. Napisati funkciju koja provjerava da li je password dovoljno jak. 
Da bi password bio jak mora zadovoljiti sljedeca pravila:
- Password mora imati najmanje 8 a najvise 20 karaktera
- Password mora imati barem jednom malo slovo, barem jedno veliko slovo i barem jedan broj
- Password ne smije imati vise od 2 uzastopna karaktera koji se ponavlja. 
Npr: password ne smije sadrzavati aaa.
*/

//Deklaracija funkcije za provjeru passworda i parametra:
function isPasswordGood(password) {

    //nizovi karaktera:
    const smallLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    //konverzija niza malih slova u niz velikih slova:
    let tempStr = smallLett.join('');
    tempStr = tempStr.toUpperCase();
    const bigLett = tempStr.split('');

    //uslovi:
    let isLengthFine = false;
    let isSmallIncluded = false;
    let isBigIncluded = false;
    let isNumIncluded = false;
    let noRepeatChar = true;

    //iteracija kroz string passworda i privjeravanje uslova:
    for (let i = 0; i < password.length; i++) {
        if (password.length >= 8 && password.length <= 20) {
            isLengthFine = true;
        }
        if (smallLett.includes(password[i])) {
            isSmallIncluded = true;
        }
        if (bigLett.includes(password[i])) {
            isBigIncluded = true;
        }
        if (num.includes(password[i])) {
            isNumIncluded = true;
        }
        if (password[i] == password[i + 1]) {
            noRepeatChar = false;
        }
    }
    
    //ako su uslovi ispunjeni f-ja vraca "true":
    if (isSmallIncluded && isBigIncluded && isLengthFine && isNumIncluded && noRepeatChar) {
        return true;
    }
    //u suprotnom vraca "false":
    else {
        return false;
    }
}

//ispis poziva funckije uz proslijedjeni argument:
console.log(isPasswordGood('Pasword1'));