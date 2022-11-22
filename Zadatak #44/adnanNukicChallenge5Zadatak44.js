/*
Napisati program koji ce kreirati niz od 20 elemenata, 
popunjen nasumicnim brojevima od 1 do 100. Zatim, program kreira novi niz, 
koji ima sve elemente kao i prvi niz ali obrnut redoslijed. 
Ako je prvi niz [12, 24, 7], drugi niz ce biti [7, 24, 12].
*/
//Pseudo
// 1) Kreirati niz sa 20 randm brojeva kao i u prethodnim zadacima
// 2) Deklarisati novu varijablu niz, u koju cemo smjestiti zamjenjen redoslijed elemenata prvog niza
// 3) Kreirati petlju koja će uzimati elemente prvog niza krecuci se od zadnjeg indexa ka prvom i .push() metodom ubacivati te elemente u novi niz
// 4) Ispisati novi niz

let mojNiz = [];
let mojNizObrnutRedoslijed = [];
let min = 1;
let max = 100;
for (let i = 0; i < 20; i++) {
    mojNiz.push(Math.floor(min + Math.random() * (max - min)));
}
console.log('Niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100: ')
console.log(mojNiz);
for (let i = mojNiz.length - 1; i >= 0; i--) {
    mojNizObrnutRedoslijed.push(mojNiz[i]);
}
console.log('Naš niz sa obrnutim redoslijednom: ');
console.log(mojNizObrnutRedoslijed);