//funkcija koja vraca ime nekog od kandidata na birou:
function personName(num) {
    let tempArr = arrPerson[num].split(' ');
    return tempArr[0];
}

//funkcija koja vraca prezime nekog od kandidata na birou:
function personLastName(num) {
    let tempArr = arrPerson[num].split(' ');
    return tempArr[1];
}

//funkcija koja pravi ID za kompanije (redoslijedom kako pushamo kompanije u niz companies)
function createCompanyId() {
    return companies.length + 1;
}

//funkcija koja pravi ID za osobe (redoslijedom kako pushamo osobe u niz peoples)
function createPersonId() {
    return people.length + 1;
}


//1. Funkcija koja pravi objekte kompanija //6. Zaposljavanje osoba uz proslijedjen string procenta koji ce se zaposliti
function createCompany(idNum, nameStr, locationStr, numOfEmployees, employeesArr, hireThisPercentageOfPeople, fireSalaryBorder) {
    const company = {
        id: idNum,
        name: nameStr,
        location: locationStr,
        numberOfEmployees: numOfEmployees,
        employees: employeesArr,
        hirePerson() {

            let randPerson = Math.floor(Math.random() * people.length);
            people[randPerson].isEmployee = true;
            people[randPerson].salary = salary();
            people[randPerson].companyId = this.id;

            this.employees.push(people[randPerson]);
            this.numberOfEmployees++;
            people.splice(randPerson, 1);

        },
        howManyPeopleToHire() {
            hireThisPercentageOfPeople = hireThisPercentageOfPeople.slice(0, hireThisPercentageOfPeople.length - 1);
            hireThisPercentageOfPeople = Number(hireThisPercentageOfPeople);
            let percentageToNumbers = (hireThisPercentageOfPeople / 100) * people.length;
            for (let i = 0; i < percentageToNumbers; i++) {
                this.hirePerson();
            }
        },
        fireEmployee() {
            for (let i = 0; i < this.employees.length; i++) {
                if (this.employees[i].salary < fireSalaryBorder) {
                    this.employees[i].isEmployee = false;
                    this.employees[i].salary = 0;
                    this.employees[i].companyId = 0;
                    people.push(this.employees[i]);
                    this.employees.splice(i, 1);
                    this.numberOfEmployees--;
                }
            }
        },
    };
    return company;
}


//2. Funkcija koja pravi objekte osoba:
function createPerson(idNum, firstNameStr, lastNameStr, isEmployeeBol, salaryNum, companyIdNum) {
    const person = {
        id: idNum,
        firstName: firstNameStr,
        lastName: lastNameStr,
        isEmployee: isEmployeeBol,
        salary: salaryNum,
        companyId: companyIdNum,
    }
    return person;
};


//3. Nizovi sa objektima kompanija i osoba - globalno: 
const companies = [];
const people = [];


//4. Kreiranje kompanija sa vrijednostima koje želimo:
companies.push(createCompany(createCompanyId(), 'Lego', 'Deutschland', 0, [], '40%', 1500));
companies.push(createCompany(createCompanyId(), 'ABS', 'Deutschland', 0, [], '33%', 1500));
companies.push(createCompany(createCompanyId(), 'Schneider', 'France', 0, [], '50%', 1500));


//5. Importovanje u niz podataka ime i prezime osoba:
let fs = require('fs');
let text = fs.readFileSync("./employees.txt");
text = fs.readFileSync("./employees.txt").toString("utf-8");
let arrPerson = text.split("\r\n");


//kreiranje objekata osoba:
for (let i = 0; i < arrPerson.length; i++) {
    people.push(createPerson(createPersonId(), personName(i), personLastName(i), false, 0, 0));
}


//6. Pozivanje funkcije unutar objekta kompanija koja ce zaposljavati ljude, pozivati funkciju hire onoliki broj puta koliko procenata od nezaposlenih uzimamo, tempArr kreiran u 5.:
companies[0].howManyPeopleToHire();
companies[1].howManyPeopleToHire();
companies[2].howManyPeopleToHire();
/*console.log(companies[0].employees);
console.log(companies[1].employees);
console.log(companies[2].employees);
console.log(companies[0].numberOfEmployees);
console.log(companies[1].numberOfEmployees);
console.log(companies[2].numberOfEmployees);*/


//7. Funkcija koja pravi plate za radnike:
function salary() {
    return Math.floor(1000 + (Math.random().toFixed(1)) * 2000);
}


//8. Funkcija koja ce racunati procenat nezaposlenih osoba u people nizu objekata osoba:
function percentageOfUnemployedPersons() {
    let numberOfPeoples = 0;
    for (let i = 0; i < companies.length; i++) {
        numberOfPeoples += companies[i].numberOfEmployees;
    }
    let percentage = (people.length / (people.length + numberOfPeoples)) * 100;
    return percentage.toFixed(2) + '%';
}
//Prikazivanje procenta broja nezaposlenih:
//console.table(people);
//console.log(percentageOfUnemployedPersons());


/*9. Otpustanje onih koji imaju platu manju od 1500*/
companies[0].fireEmployee();
companies[1].fireEmployee();
companies[2].fireEmployee();
//console.log(people.length);


//10. Ponovni prikazivanje procenta nezaposlenih:
//console.log(percentageOfUnemployedPersons());

//11. Identifikacija kompanije sa najmanjom prosjecnom platom i zaposljavanje 50 osoba u nju
function theLowestAverageSalary() {
    let tempArr = [];
    for (let i = 0; i < companies.length; i++) {
        let lowestAverageSalary = 0;
        for (let j = 0; j < companies[i].employees.length; j++) {
            lowestAverageSalary += companies[i].employees[j].salary;
        }
        tempArr.push((lowestAverageSalary / companies[i].employees.length));
    }
    let index = tempArr.indexOf(Math.min(...tempArr));
    //console.log(tempArr);
    return index;
}

//console.log(theLowestAverageSalary());

function hireToCompanyWithLowestAverageSalary(num) {
    let index = theLowestAverageSalary();
    for (let i = 0; i < num; i++) {
        companies[index].hirePerson();
    }
    return companies[index].numberOfEmployees;
}

hireToCompanyWithLowestAverageSalary(50);

function averageCompanySalary() {
    for (let i = 0; i < companies.length; i++) {
        let averageSalary = 0;
        for (let j = 0; j < companies[i].employees.length; j++) {
            averageSalary += companies[i].employees[j].salary;
        }
        averageSalary = (averageSalary / companies[i].employees.length).toFixed(2);
        console.log(averageSalary);
    }
}

//Ispisivanje svih kompanija, broja zaposlenih i prosjecnih plata:
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i].numberOfEmployees);
}
console.log(people.length);

averageCompanySalary();