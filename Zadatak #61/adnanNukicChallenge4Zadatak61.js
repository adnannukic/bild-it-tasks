/*
4. Neko je pokusao cenzurirati moje stringove zamjenom svakog samoglasnika sa zvjezdicon (*) 
npr. l*k* th*s(like this). Srećom, uspio sam pronaći samoglasnike koji su uklonjeni. 
Uzimajuci u obzir cenzurirani string i string cenzuriranih samoglasnika, 
vratite originalni necenzurirani string.

Primjeri: 
uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?" 
uncensor("abcd", "") ➞ "abcd" 
uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

NOTE: 
- Proslijedjeni samoglasnici su uvijek u ispravnom redoslijedu - Broj proslijedjenih 
samoglasnika uvijek odgovara broju zvjezdica(*) u cenzurisanom stringu
*/
function uncensor(censoredStr, vowels) {
    //brojac samoglasnika
    let vowelCounter = 0;
    //izbrojimo '*' karaktere u stringu i postavimo uslov if, ako je taj broj jednak broju samoglasnika odradimo program
    for (let i =0; i < censoredStr.length; i++) {
        if (censoredStr[i] == '*') {
            vowelCounter++;
        }
    }
    if(vowelCounter == vowels.length) {
        //brojac samoglasnika
        vowelCounter = 0;
        //string koji cemo vratiti
        let uncensoredStr = '';
        //iteriramo kroz proslijedjeni string, ukoliko je '*' unosimo u novi string adekvatan samoglasnik i inkrementiramo brojac, ostale karaktere unosimo u novi string
        for (let i = 0; i < censoredStr.length; i++) {
            if (censoredStr[i] == '*') {
                uncensoredStr += vowels[vowelCounter];
                vowelCounter++;
            }
            else {
                uncensoredStr += censoredStr[i];
            }
        }
        return uncensoredStr;
    }
    else return 'Unijeli ste vise samoglasnika nego sto treba';
}

console.log(uncensor("*PP*RC*S*", "UEAE"));