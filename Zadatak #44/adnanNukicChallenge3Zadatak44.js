// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100. Ispisati ovaj pocetni niz u konzolu. 
// Zatim izmjestiti elemente u nizu, te ponovo ispisati niz u konzolu. Za mijesanje niza, min broj iteracija jednak je duzini niza.

//Pseudo
// 1) Kreirati niz sa 20 random elemenata kao i u prethodom zadatku
// 2) Nakon toga kreirati petlju koja će vrsiti mijesanje brojeva tog niza i spremati u taj niz
// 3) Ipisati taj taj niz

let mojNiz = [];
let min = 1;
let max = 100;
for (let i = 0; i < 20; i++) {
    mojNiz.push(Math.floor(min + Math.random() * (max - min)));
}
console.log('Nasumicno generirani niz od 20 elemenata, brojeva izmedju 1 i 100: ')
console.log(mojNiz);

for (let i = 0; i < mojNiz.length; i++) {
    const j = Math.floor(Math.random() * i); // index "j"
    [mojNiz[i], mojNiz[j]] = [mojNiz[j], mojNiz[i]];    // Istovremeno mijenja mjesta elementima indexa 'i' i 'j'
}
console.log('Izmijesani prethodno nasumicno generirani niz od 20 elemenata, brojeva izmedju 1 i 100:  ')
console.log(mojNiz);