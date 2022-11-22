/*
Napisati program koji ispisuje ispod prikazani pattern. 
Program treba da pita korisnika od koliko redova se trokut sastoji. 
1  2  3  4  5
    2  3  4  5
        3  4  5
            4  5
                5
*/
// Deklaracija funkcije i parametra broja redova:
function pattern(numOfRows) {
  // Deklaracija praznog stringa:
  let strOfRandNum = '';
  // Prva for petlja, broj iteracija jednak broju redova, na kraju svake iteracije prelazi se u novi red
  for (let i = 0; i < numOfRows; i++) {
    // Druga petlja ce praviti prazan prostor (prvu iteraciju preskace jer '0 !< 0' tj. 'j !< i')
    // svaki naredni red ce imati za jednu iteraciju vise, tj dodavat ce prazan prostor
    for (let j = 0; j < i; j++) {
      // stringu se dodaju dva prazna mjesta jer se dole u kreiranju brojeva već dodaje jedan prazan prostor koji pravi razliku
      strOfRandNum += '  ';
    }
    // Treca petlja pravi brojeve i prostor izmedju njih 
    // Svaki novi red glavne petlje ce imati za jedan element manje
    // krecemo od 'i + 1' i ispisujemo sve do zadnjeg 'numOfRows + 1'
    for (let k = i + 1; k < numOfRows + 1; k++) {
      // stringu se dodjeljuje random broj u svakoj iteraciji i prazno mjesto posle njega:
      strOfRandNum += k + ' ';
    }
    // Prelazak u novi red na kraju svake iteracije:
    strOfRandNum += '\n';
  }
  // Funkcija vraca string ispis kao po tekstu zadatka:
  return console.log(strOfRandNum);
}
// Poziv funkcije sa proslijeđenim argumentom, koji je deklarisan kao numOfRows 
pattern(5);