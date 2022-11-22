let iznosRacuna = 53; // unos računa bez napojnice
let procenatNapojnice = 15; // procenat napojnice
let napojnica = Number((procenatNapojnice / 100 * iznosRacuna).toFixed(2)); // varijablu pretvaramo u tip podatka "Number" jer toFixed() vraća tip podatka "string", a računamo kolika je to napojnica
let racun = iznosRacuna + napojnica; // ukupan račun

console.log(`'Za racun od ${iznosRacuna}KM i napojnicu od ${procenatNapojnice}%, iznos napojnice je ${napojnica}KM a ukupan iznos racuna je ${racun}KM.'`); //ispis