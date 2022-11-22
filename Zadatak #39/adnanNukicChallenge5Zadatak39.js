let br1 = 3;
let br2 = 1;
let br3 = 2;

if (br1 < br2 && br1 < br3 && br2 < br3) {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br1}${br2}${br3}'`)
} else if (br1 < br2 && br1 < br3 && br3 < br2) {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br1}${br3}${br2}'`)
} else if (br2 < br1 && br2 < br3 && br1 < br3) {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br2}${br1}${br3}'`)
} else if (br2 < br1 && br2 < br3 && br3 < br1) {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br2}${br3}${br1}'`)
} else if (br3 < br1 && br3 < br2 && br1 < br2) {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br3}${br1}${br2}'`)
} else {
    console.log(`'Tri cijela broja: ${br1}, ${br2} i ${br3} u rastucem obliku izgledaju ovako: ${br3}${br2}${br1}'`)
} // ispis brijeva u uzlaznom redoslijedu