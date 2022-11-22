const myList = [];

const numberArray = [2, 4, 6, 8];

const stringArray = ['eat', 'work', 'sleep'];

const newData = ['work', 'exercise', 1, true];

console.log(`[${myList}], [${numberArray}], [${stringArray}] i [${newData}]`);

//možemo smjestiti druge nizove unutar niza kao i objekte

const newData1 = [
    { 'task1': 'exercize' },
    [1, 2, 3],
    function hello() { console.log('hello') }
];
console.log(newData);

// mozemo pristupiti elementima niza

const myArray = ['h', 'e', 'l', 'l', 'o'];

// prvi element i drugi element:

console.log(myArray[0]); //"h"
console.log(myArray[1]); //"e"

// mozemo dodati element u niz (.push() - na kraj niza, ili .unshift() - na pocetak niza)

let dailyActivities = ['eat', 'sleep'];

dailyActivities.push('exercise');
dailyActivities.unshift('work');

console.log(dailyActivities);

// mozemo promijeniti elemente u nizu

let dailyActivities1 = ['eat', 'sleep'];

dailyActivities1[1] = 'exercise';
dailyActivities1[3] = 'work'; // ako niz ima 2 elementa indexa 0 i 1, ako na ovaj nacin dodamo element na poziciju indexa 3, na index 2 umetnt ce se element tipa "undefined".

console.log(dailyActivities1, `Tip podatka na indexu 2 u ovom slucaju je: ${typeof (dailyActivities1[2])}`);

// mozemo i brisati elemente u nizu (.pop() - brise zadnji, ili .shift() - brise prvi)

let dailyActivities2 = ['eat', 'work', 'sleep', 'exercise'];

console.log(dailyActivities2.pop());
console.log(dailyActivities2.shift());

// mozemo vidjeti duzinu niza

const arrayLenght = ['eat', 'meat', 'sleep', 'beef'];

console.log(arrayLenght.length);

// metode za nizove u JavaScriptu

// concat() - spaja 2 ili vise nizova i vraca rezultat

let niz1 = [1, 2, 3];
let niz2 = [4, 5, 6];
let spojeniNizovi = niz1.concat(niz2);
console.log(spojeniNizovi);

// indexOf() - trazi element niza i vraca njegov index
console.log(spojeniNizovi.indexOf(3));

// find() - vraca prvu vrijednost elementa niza koja prolazi test
// findIndex() - craca prvi index  elementa niza koji prolazi test
// forEach() - poziva funkciju za svaki element
// includes() - provjerava da li niz ima specifican element
// sort() - sortira elemente alfabetski i u uzlaznom redu
// slice() - selektira dio niza i vraca novi niz

let sliced = spojeniNizovi.slice(1);
console.log(sliced);

//splice() - brise ili mijenja postojeci element i/ili dodaje novi

// izmjene kopiranog niza mijenjaju i orginalni niz npr.:

let mojNiz = ['h', 'e', 'l', 'l', 'o'];
let kopijaMojNiz = mojNiz;
kopijaMojNiz.push('World');
console.log(`orginal --> ${mojNiz} i kopija -->${kopijaMojNiz}`);
console.log(kopijaMojNiz[5]); //hmm "array indexing???"