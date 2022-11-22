/*
1.     Prvog dana škole, direktor srednje škole Locker odlučuje da izvede eksperiment. Škola ima
tačno 1.000 učenika i 1.000 ormarića poredanih duž glavnog hodnika škole. Svi
ormarici su na pocetku otvoreni.

a.     Direktor traži od prvog učenika da prođe glavnim hodnikom škole i zatvori sve ormariće.
b.     Direktor zatim traži od drugog učenika da prođe glavnim hodnikom i otvori svaki drugi ormarić.
c.     Direktor zatim traži od trećeg učenika da prođe glavnim hodnikom i ili otvori svaki treći
ormarić ako je zatvoren, ili ga zatvori ako je otvoren.
d.     Četvrti učenik će zatim ponoviti isti postupak za svaki četvrti ormarić.

I tako dalje, sve dok posljednji od 1.000 učenika ne ponovi ovaj proces za svaki 1.000-ti
ormarić, dakle, u stvari, samo otvaranje 1.000-og ormarića ako je zatvoren, ili
zatvaranje ako je već otvoren. Na kraju ovog eksperimenta direktor odlučuje da
izbroji broj ormarića koji su zatvoreni. Koji je to broj?
*/

//deklaracija f-je za kreiranje niza broja ormarica određenog broja koji su otvoreni (true vrijednost elementa), na osnovu proslijeđenog argumenta
function createArrNumOfLocers(numOfLockers) {
    const arrOfLockers = [];
    for (let i = 0; i < numOfLockers; i++) {
        arrOfLockers.push(true);
    }
    //f-ja vraca takav niz:
    return arrOfLockers;
}

//deklaracija f-je koja ce raditi eksperiment otvaranja/zatvaranja ormara:
function openOrCloseSchoolLockerExperiment(numOfStudents, numOfLockers) {
    
    //niz ciji elementi prestavljaju ormare, inicijalizira se pozivom f.je koja ga kreira uz proslijedjen argument:
    const arrOfLockers = createArrNumOfLocers(numOfLockers);

    //brojac zatvorenih ormara:
    let counterNumOfClosedCounters = 0;

    //svaki ucenik pocevsi od 1 do 1000 ce otvarati/zatvarati ormare na pozicijama koje se dodaju za njegov broj (npr. br 4 ucenik ce otvarati/zatvarati svaki cetvrti oramr od svoje pozicije do kraja):
    for (let i = 1; i <= numOfStudents; i++) {
        for (let j = i - 1; j < numOfLockers; j += i) {
            if (arrOfLockers[j] == true) {
                arrOfLockers[j] = false;
            }
            else {
                arrOfLockers[j] = true;
            }
        }
    }

    //provjere kroz ormare koji su zatvoreni:
    for (let i = 0; i < arrOfLockers.length; i++) {
        if (arrOfLockers[i] == false) {
            counterNumOfClosedCounters++;
        }
    }

    //funkcija vraca brojac zatvorenih ormara:
    return counterNumOfClosedCounters;
}

//poziv f-je i proslijedjeni argumenti:
console.log(openOrCloseSchoolLockerExperiment(1000,1000));