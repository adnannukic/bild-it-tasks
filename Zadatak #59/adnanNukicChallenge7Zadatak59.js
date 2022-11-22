/*
7. Data su dva proizvoljna stringa, napišite funkciju koji pronalazi
najduži zajednički substring. Tj ukoliko imamo string: “Talk is cheap, show me
the code.” i “Me like to code, me happy.”, najveci substring u ovom slucaju je
“code”.
*/
//deklaracija funkcije koja pronalazi najveci substring, i dva parametra (string):
function largestCommonSubStr(str1, str2) {

    //arr2D je dvodimenzionalni niz koji kreiramo kako bi sproveli metodu za pronalazenje najveceg substringa:
    const arr2D = [];

    //pomocne varijable:
    const tempArr = [];
    let tempMaxNum;

    //pozicija - index zadnjeg karaktera najveceg zajednickog substringa u prvom proslijedjenom stringu (na osnovu metode nije bitno s kojim cemo stringom na kraju baratati):
    let position;

    //najveci zajednicki substring kojeg ce na kraju funkcija vratiti:
    let commonSubStr = '';

    //kreiranje 2D niza za sprovodjenje metode, niz je dimenzija za 1 vise od unijetog stringa, tj ako unijeti string ima 5 karaktera ovaj niz ce imati 6 nizova:
    for (let i = 0; i <= str1.length; i++) {
        arr2D[i] = [];
    }

    //vanjska petlja iterira kroz karaktere prvog proslijedjenog stringa, a unutrasnja kroz karaktere drugog proslijedjenog stringa:
    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {

            //ovaj if uslov ce popuniti prvi niz 2D niza nulama, i svaki prvi element (na nultom indexu) ostalih nizova:
            if (i == 0 || j == 0) {
                arr2D[i][j] = 0;
            }

            //ako se karakteri na indexima i-1 i j-1 proslijedjenih stringova poklapaju, primijenit ce se formula da na trenutnim indexima doda broj koji za jedan uvecan od prethodnih gdje su se karakteri poklapali:
            //dakle ako se karakteri serijski poklapaju, pravi se dijagonala u matrici pocevsi od gornjeg lijevog ugla s mjesta gdje se poklapaju
            // 'i - 1' i 'j - 1' iz razloga sto duzina 2D niza veca od proslijedjenih stringova za 1:
            else if (str1[i - 1] == str2[j - 1]) {
                arr2D[i][j] = 1 + arr2D[i - 1][j - 1];
            }

            //u suprotnom ako se ne poklapaju, elementu niza dodijeli 0:
            else {
                arr2D[i][j] = 0;
            }
        }
    }

    //iteriramo kroz nizove arr2D niza, i trazimo u kojem se nalazi max broj, koji reprezentira duzinu najveceg zajednickog substringa:
    //koriseci Math.max() metodu pronalazimo maksimalni broj u i-tom nizu, de ga dodajemo u tempArr (privremeni niz);
    for (let i = 0; i <= str1.length; i++) {
        tempArr.push(Math.max(...arr2D[i]));
    }

    //tempMaxNum je pomocna varijabla koja poprima vrijednost max broja, koji govori kolika je duzina najveceg zajednickog substringa:
    //position prestavlja index zadnjeg karaktera najveceg zajednickog substringa u prvom proslijedjenom stringu:
    tempMaxNum = Math.max(...tempArr);
    position = tempArr.indexOf(tempMaxNum) - 1;

    //polazimo od i = (index zadnjeg karaktera najveceg zajednockog substringa) - (duzina substringa) + 1 (jer indexacija krece od 0, a duzina je za 1 veca od krajnjeg karaktera); te se krecemo do indexa posljednjeg karaktera najveceg zajednickog substriga:
    //krecemo se po prvom proslijedjenom stringu:
    for (let i = position - tempMaxNum + 1; i <= position; i++) {

        //te karaktere substringa dodajemo u string varijablu 'commonSubStr' koju ce funkcija vratiti:
        commonSubStr += str1[i];
    }

    //funkcija vraca string varijablu, najveci zajednicki substring proslijedjena dva stringa:
    return commonSubStr;
}

//ispis poziva funkcije, i proslijedjena dva string argumenta:
console.log(largestCommonSubStr('Me like to code, me happy.', 'Talk is cheap, show me the code.'));