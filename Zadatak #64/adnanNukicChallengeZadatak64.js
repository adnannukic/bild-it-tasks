//1. Funkcija koja kreira Bank objekat:
function createBank(name, location) {
    return {
        ID: undefined,
        name,
        location,
        accounts: [],
        transactions: [],

        addAccountBank: function (account) {
            this.accounts.push(account);

            return account;
        },
        deleteAccount: function () {

        },
        deposit: function () {

        },
        withdraw: function () {

        },
        checkBalance: function () {

        },
    };
}

//2. Funkcija koja kreira Person objekat:
function createPerson(firstName, lastName) {
    return {
        ID: undefined,
        firstName,
        lastName,
        JMBG: undefined,
        accountStatus: false,
    };

}

//3. Funkcija koja kreira Account objekat:
function createAccount(owner, bank) {
    return {
        ID: undefined,
        owner,
        bank,
        balance: undefined,
        deposit: function (moneyToDeposit, transaction) {

        },
        withdraw: function (moneyToWithdraw, transaction) {

        },
    };
}

//4. Funkcija koja kreira Transaction objekat:
function createTransaction(type, account, person, amount) {
    return {
        ID: undefined,
        type,
        account,
        person,
        amount,
    };
}

//5. Simulacija baze podataka:
const bazaPodataka = {
    banks: [],
    people: [],
    accounts: [],
    transactions: [],

    simpleBankIdGen: 1,
    simplePersonIdGen: 1,
    simpleAccountIdGen: 1,
    simpleTransactionIdGen: 1,

    genJMBG: function () {
        function checkLeapYear(year) {
            //three conditions to find out the leap year
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                return true;
            } else {
                return false;
            }
        }
        function genUnicateFiveDigNum() {
            let fiveDigRandNum = Math.floor(Math.random() * 100000);
            switch (fiveDigRandNum.toString().length) {
                case 1:
                    fiveDigRandNum = '0000' + fiveDigRandNum;
                    break;
                case 2:
                    fiveDigRandNum = '000' + fiveDigRandNum;
                    break;
                case 3:
                    fiveDigRandNum = '00' + fiveDigRandNum;
                    break;
                case 4:
                    fiveDigRandNum = '0' + fiveDigRandNum;
                    break;
                default:
                    fiveDigRandNum = fiveDigRandNum.toString();
                    break;
            }
        }

        let tempArr = [0];
        let tempStr = '';
        tempArr[1] = Math.floor(1 + Math.random() * 12);
        let currentYear = new Date().getFullYear();
        let year = Math.floor(1930 + Math.random() * (currentYear - 1930));
        switch (tempArr[1]) {
            case 1:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 2:
                if (checkLeapYear(year)) {
                    tempArr[0] = Math.floor(1 + Math.random() * 29);
                    if (tempArr[0] < 10) {
                        tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                    }
                    else tempStr += tempArr[0] + '0' + tempArr[1];
                    break;
                }
                else {
                    tempArr[0] = Math.floor(1 + Math.random() * 28);
                    if (tempArr[0] < 10) {
                        tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                    }
                    else tempStr += tempArr[0] + '0' + tempArr[1];
                    break;
                }
            case 3:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 4:
                tempArr[0] = Math.floor(1 + Math.random() * 30);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 5:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 6:
                tempArr[0] = Math.floor(1 + Math.random() * 30);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 7:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 8:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 9:
                tempArr[0] = Math.floor(1 + Math.random() * 30);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + '0' + tempArr[1];
                }
                else tempStr += tempArr[0] + '0' + tempArr[1];
                break;
            case 10:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + tempArr[1];
                }
                else tempStr += '' + tempArr[0] + tempArr[1];
                break;
            case 11:
                tempArr[0] = Math.floor(1 + Math.random() * 30);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + tempArr[1];
                }
                else tempStr += '' + tempArr[0] + tempArr[1];
                break;
            case 12:
                tempArr[0] = Math.floor(1 + Math.random() * 31);
                if (tempArr[0] < 10) {
                    tempStr += '0' + tempArr[0] + tempArr[1];
                }
                else tempStr += '' + tempArr[0] + tempArr[1];
                break;
        }
        tempStr += year + genUnicateFiveDigNum();

        return Number(tempStr);
    },

    addBank: function (bank) {
        bank.ID = this.simpleBankIdGen;
        this.simpleBankIdGen += 1;
        this.banks.push(bank);

        return bank;
    },
    addPerson: function (person) {
        person.ID = this.simplePersonIdGen;
        this.simplePersonIdGen += 1;
        person.JMBG = this.genJMBG();
        this.people.push(person);

        return person;
    },
    addAccountDataBase: function (account) {
        account.ID = this.simpleAccountIdGen;
        this.simpleAccountIdGen += 1;
        this.accounts.push(account);

        return account;
    },
    addTransaction: function (transaction) {
        transaction.ID = this.simpleTransactionIdGen;
        this.simpleTransactionIdGen += 1;
        this.transactions.push(transaction);

        return transaction;
    },
};

//Testiranje app//
//1. Kreiranje 3 Bank objekta:
const NLB = bazaPodataka.addBank(createBank('NLB', 'Tuzla')); // 'return bank' u funkciji createBank objekta baze podataka omogucava da se u svakom trenutku pristupi banci koja se kreira i da se ta kreirana banka vrati
const MF = bazaPodataka.addBank(createBank('MF', 'Živinice'));
const ADDIKO = bazaPodataka.addBank(createBank('ADDIKO', 'Lukavac'));

//2. Kreiranje 100 Person objekata:
function importPeople(numOfPersonsToBeImported) {
    let fs = require('fs');
    let text = fs.readFileSync("./employees.txt");
    text = fs.readFileSync("./employees.txt").toString("utf-8");
    let arrPerson = text.split("\r\n");

    for (let i = 0; i < numOfPersonsToBeImported; i++) {
        let nameAndLastName = arrPerson[i].split(' ');
        bazaPodataka.addPerson(createPerson(nameAndLastName[0], nameAndLastName[1]));
    }
}
importPeople(100);
//console.log(bazaPodataka.people);

//3. Kreiranje 100 Account objekata, 's tim da ih mozete rasporediti po Bank-ama kako god zelite'.
function createingAccounts(numOfAccountsToBeCreated, bank, bankVariable) {
    for (let i = 0; i < bazaPodataka.banks.length; i++) {
        if (bank == bazaPodataka.banks[i].name) {
            bank = bazaPodataka.banks[i].ID;
        }
    }
    let i = 0;
    while (i < numOfAccountsToBeCreated) {
        if (bazaPodataka.people[i].accountStatus === false) {
            let temp = bazaPodataka.addAccountDataBase(createAccount(bazaPodataka.people[i].ID, bank));
            bankVariable.addAccountBank(temp); //ovaj addAccount je 
            bazaPodataka.people[i].accountStatus = true;
        }
        else {
            numOfAccountsToBeCreated++;
        }
        i++;
    }
}

createingAccounts(33, 'NLB', NLB);
createingAccounts(33, 'MF', MF);
createingAccounts(34, 'ADDIKO', ADDIKO);


//4. Izvrsiti najmanje po 10 transakcija nad svakim Account-om. S tim da morate iskoristiti sve 3 tipa transakcije.
function makeTransaction(bank, numOfTransaction) {
    for (let account = 1; account <= bank.accounts.length; account++) {
        for (let j = 0; j < numOfTransaction; j++) {
            let randMoney = Math.floor(1 + Math.random() * 999)
            let randTrans = Math.floor(1 + Math.random() * 3);
            if (randTrans == 1) {
                bazaPodataka.addTransaction(createTransaction('WITHDRAW', account, bank.accounts[account].owner, randMoney));
            }
            else if (randTrans == 2) {
                bazaPodataka.addTransaction(createTransaction('DEPOSIT', account, bank.accounts[account].owner, randMoney));
            }
            else {
                bazaPodataka.addTransaction(createTransaction('BALANCE_CHECK', account, bank.accounts[account].owner, randMoney));
            }
        }
    }
}

makeTransaction(NLB, 10);
makeTransaction(MF, 10);
makeTransaction(MF, 10);

//console.log(bazaPodataka.transactions)
//nisam stigao zavrsiti 4korak i 5korak do deadline-a