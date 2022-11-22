/*
1. Kreirajte funkciju koja uzima niz fudbalskih klubova sa sljedecim properties: ime,
brojPobjeda, brojPoraza, brojNerjesenih, brojPostignutihGolova,
brojPrimljenihGolova i vraća naziv kluba sa najvećim brojem poena. Ako dvije ekipe
imaju isti broj bodova, vrati se tim sa najvećom gol razlikom.
Za pobjedu tim dobija 3 boda, za poraz dobija 0 bodova i za nerjesenu dobija 1 poen.
Testirati funkciju sa najmanje 5 klubova.
*/
let table = [];

function createClub(name, numOfWins, numOfLoses, numOfDraws, numOfScoredGoals, numOfConcededGoals) {
    return {
        name,
        numOfWins,
        numOfLoses,
        numOfDraws,
        numOfScoredGoals,
        numOfConcededGoals,
        numOfPoens: function () {
            return this.numOfWins * 3 + this.numOfDraws;
        },
        goalDifference: function () {
            return this.numOfScoredGoals - this.numOfConcededGoals;
        },
    };
}

function whoIsOnTop(table) {
    let firstOnTable = table[0];
    for (let i = 0; i < table.length; i++) {
        if (table[i].numOfPoens() > firstOnTable.numOfPoens()) firstOnTable = table[i];
        if (table[i].numOfPoens() == firstOnTable.numOfPoens()) {
            if(table[i].goalDifference() > firstOnTable.goalDifference()) firstOnTable = table[i];
            else continue;
        }
    }

    return firstOnTable.name;
}

table.push(createClub('FK Željezničar', 10, 4, 2, 23, 14));
table.push(createClub('FK Sarajevo', 9, 5, 2, 20, 12));
table.push(createClub('FK Čelik', 3, 5, 8, 13, 25));
table.push(createClub('FK Velež', 10, 4, 2, 25, 4));
table.push(createClub('FK Sloboda', 8, 8, 0, 13, 10));
console.log(whoIsOnTop(table));