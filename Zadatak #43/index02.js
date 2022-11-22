// .isArray() - vraca true ako je argument niz

// kreiranje niza na tri nacina:

const voce1 = ['jabuke', 'tresnje', 'visnje'];
const voce2 = new Array('jabuke', 'tresnje', 'visnje');
const voce3 = 'jabuke, tresnje, visnje'.split(', ');
console.log(voce1, voce2, voce3);

// kreiranje stringa od niza

const voceString = voce1.join(', ');
console.log(voceString);

// index zadnjeg elementa je uvijek za jedan index manji (nameArray.lenght - 1)

// provjera da li niz sadrzi odgovarajuci element

voce1.includes('jabuke');
voce1.includes('kruske');

console.log(voce1.indexOf('jabuke') !== -1);
console.log(voce1.indexOf('kruske') !== -1);

// izmjena vise elemenata niza

const start = -2;
const deleteCount = 2;
const removedItems = voce1.splice(start, deleteCount, 'Mango', 'Sljive');
console.log(voce1);
console.log(removedItems);