function jelProst(number) {
	let prost = true;
	if (number === 1) {
		return false;
	}
	else if (number > 1) {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				prost = false;
				break;
			}
		}
		if (prost) {
			return true;
		} else {
			return false;
		}
	}

	else {
		return false;
	}
}
jelProst(11);

function praviNizProstih(max) {
BAZA_PODATAKA = {
    BANKS: [],
    PEOPLE: [],
    addBank: function (bank) {
        this.BANKS.push(bank);
        return bank;
    },
    addPerson: function (person) {
        return this.PEOPLE.push(person);
    },
    makeBankID: function () {
        return this.BANKS.length + 1;
    },
    makePersonID: function () {
        return this.PEOPLE.length + 1;
    },
    
    makeJMBG: function () {
        let dan = Math.floor(1 + (Math.random() * 30)).toString();
        if (dan.length == 1) {
            dan = dan.split("");
            dan.unshift("0");
            dan = dan.join("");
        };
        let mjesec = Math.floor(1 + (Math.random() * 11)).toString();
        if (mjesec.length == 1) {
            mjesec = mjesec.split("");
            mjesec.unshift("0");
            mjesec = mjesec.join("");
        };
        let godina = Math.floor(940 + (Math.random() * 60)).toString();
        let rest = Math.floor(100000 + (Math.random() * (999999 - 100000))).toString();
        return dan + mjesec + godina + rest;
    }
}

function makeAccountID(bank) {
    return bank.accounts.length + 1;
}

function createBank(ID, name, location) {
    return {
        ID,
        name,
        location,
        accounts: [],
        transactions: [],

        addAccount: function (ID, owner, bank) {
            owner.hasAccount = true;
            return this.accounts.push(createAccount(ID, owner, bank));
        },
        deleteAccount: function () {
        },
        deposit: function (transaction) {
            return this.transactions.push(transaction);
        },
        withdraw: function (transaction) {
            return this.transactions.push(transaction);

        },
        checkBalance: function (transaction) {
            return this.transactions.push(transaction);

        },
    }
}

function createPerson(ID, firstName, secondName, JMBG) {
    return {
        ID,
        firstName,
        secondName,
        JMBG,
        hasAccount: false,

    }
}
function createAccount(ID, owner, bank,) {

    return {
        ID,
        owner,
        bank,
        balance: 0,
        deposit: function (moneyToDeposit, transaction) {
            this.transactions.push(transaction);
            bank.transactions.push(transaction);
            return this.balance += moneyToDeposit;
        },
        withdraw: function (moneyToWithdraw, transaction) {
            this.transactions.push(transaction);
            bank.transactions.push(transaction);
            return this.balance -= moneyToWithdraw;
        },
        checkBalance: function (transaction) {
            this.transactions.push(transaction);
            bank.transactions.push(transaction);
            return this.balance;
        },
        transactions: [],


    }
}
//Funkcija za zadatak , pravi random transakcije
function makeTransactions(bank, NumberofTransactions) {
    for (let j = 1; j <= bank.accounts.length; j++) {

        for (let i = 0; i < NumberofTransactions; i++) {
            let random = Math.floor(1 + Math.random() * 3);
            let randomMoney = Math.floor(100 + Math.random() * 3000);
            if (random == 1) {
                createTransaction("DEPOSIT", bank, j, randomMoney)
            }
            else if (random == 2) {
                createTransaction("WITHDRAW", bank, j, randomMoney)
            }
            else if (random == 3) {
                createTransaction("CHECK_BALANCE", bank, j)
            }
        }
    }
}

//Funkcija za transakciju na specificiranu osobu
function createTransaction(type, bank, accountID, amount) {
    function makeTransactionID(bank) {
        return bank.transactions.length + 1;
    }
    transaction = {
        ID: makeTransactionID(bank),
        type,
        bank,
        account: bank.accounts[accountID - 1],
        // person: bank.accounts[accountID-1].owner.firstName,
        amount,
    }
    if (transaction.type == "DEPOSIT") return transaction.account.deposit(amount, transaction);
    if (transaction.type == "WITHDRAW") return transaction.account.withdraw(amount, transaction);
    if (transaction.type == "CHECK_BALANCE") return transaction.account.checkBalance(transaction);
}
//Pravi accounte , unosi se broj accountova koje želimo napraviti i banka u kojoj pravimo
function makeAccounts(numberOfAccounts, bank) {
    for (let i = 0; i < numberOfAccounts; i++) {
        if (BAZA_PODATAKA.PEOPLE[i].hasAccount == false) {
            bank.addAccount(makeAccountID(bank), BAZA_PODATAKA.PEOPLE[i], bank)
        } else numberOfAccounts++;
    }
}
function setupPeople() {
    let fs = require("fs");
    let text = fs.readFileSync("./employees.txt");
    text = fs.readFileSync("./employees.txt").toString("utf-8");
    let arrayPeople = text.split("\r\n");
    let tempPeople;
    //console.log(arrayPeople.length)
    for (let i = 0; i < 100; i++) {
        tempPeople = arrayPeople[i].split(" ");
        //console.log(tempPeople);
        BAZA_PODATAKA.addPerson(createPerson(BAZA_PODATAKA.makePersonID(), tempPeople[0], tempPeople[1], BAZA_PODATAKA.makeJMBG()));

    }
}
let UniCredit = BAZA_PODATAKA.addBank(createBank(BAZA_PODATAKA.makeBankID(), "UniCredit", "Živinice"));
let NLB = BAZA_PODATAKA.addBank(createBank(BAZA_PODATAKA.makeBankID(), "NLB", "Tuzla"));
let Raiffeisen = BAZA_PODATAKA.addBank(createBank(BAZA_PODATAKA.makeBankID(), "Raiffeisen", "Lukavac"));
setupPeople();
makeAccounts(30, NLB);
makeAccounts(30, UniCredit);
makeAccounts(40, Raiffeisen);
makeTransactions(NLB, 10);
makeTransactions(UniCredit, 10);
makeTransactions(Raiffeisen, 10);
//Funkcija za ispisivanje odreðenog accounta sa svim transakcijama koje su izvršene nad tim accountom.
function checkAccount(bank, idOfAccount) {
    console.log("This account belongs to " + bank.accounts[idOfAccount - 1].owner.firstName + " " +
        bank.accounts[idOfAccount - 1].owner.secondName + ", with ID:" + bank.accounts[idOfAccount - 1].ID + ". The balance is : " + bank.accounts[idOfAccount - 1].balance + "$. \n Transactions: ")
    for (let i = 0; i < bank.accounts[idOfAccount - 1].transactions.length; i++) {
        if (bank.accounts[idOfAccount - 1].transactions[i].type == "CHECK_BALANCE") {
            console.log((i + 1) + ". " + bank.accounts[idOfAccount - 1].transactions[i].type)
        }
        else {
            console.log((i + 1) + ". " + bank.accounts[idOfAccount - 1].transactions[i].type + "  " + bank.accounts[idOfAccount - 1].transactions[i].amount + "$")
        }
    }
}
checkAccount(Raiffeisen, 34);
createTransaction("DEPOSIT", Raiffeisen, 34, 10000);

checkAccount(Raiffeisen, 34);
