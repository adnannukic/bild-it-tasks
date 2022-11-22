/*
3. Uzeti 3 objekata iz stvarnog svijeta, i kreirati JavaScript objekte po
njima. Mogu biti sta god vi zelite. Ponovo, imate potpunu slobodu kako
da uradite ovaj zadatak.
*/

//objekat 1:
const specialAgent = {
    name: 'Dale',
    lastName: 'Cooper',
    age: 35,
    marriageStatus: 'Not married',
    yearsOnService: 8,
    department: 'Homicide',
    registeredWeapons: ['colt 45', 'registered weapons'],
    registerAWeapon(str) {
        this.registeredWeapons.push(str);
    },
    solvedCases: 15,
    unSolvedCases: 0,
    solvedCase() {
        this.solvedCases++;
    },
    unSolvedCase() {
        this.unSolvedCases++;
    },
    arrestedCriminals: 15,
    newCriminalsArrested() {
        this.arrestedCriminals++;
    }
};
console.log(specialAgent.arrestedCriminals);

//objekat 2:
const warehouse = {
    isOpen: true,
    gate() {
        if (this.isOpen == true) return this.isOpen = false;
        else return this.isOpen = true;
    },
    light: true,
    lightSwitch() {
        if (this.light == true) return this.light = false;
        else return this.light = true;
    },
    numberOfForkliftsInWerhouse: 2,
    percentageOfOccupiedSpace: 50,
    addingAPalletWForklift() {
        if (this.percentageOfOccupiedSpace == 100) return this.percentageOfOccupiedSpace = 100;
        this.percentageOfOccupiedSpace += 2;
    },
    removeingAPalletWForklift() {
        if (this.percentageOfOccupiedSpace == 0) return this.percentageOfOccupiedSpace = 0;
        this.percentageOfOccupiedSpace -= 2;
    },
};
warehouse.lightSwitch();
warehouse.lightSwitch();
console.log(warehouse.light);

//objekat 3:
const conveyorSilo = {
    motorState: true,
    motorOnOff() {
        if (this.motorState == true) return this.motorState = false;
        if (this.siloSensorState == false) return this.motorState = true;
    },
    motorSpeed: 500,
    setMotorSpeed(speed) {
        if (speed > 250 && speed < 500) return this.motorSpeed = speed;
    },
    siloSensorState: false,
    siloSensor() {
        if(this.siloSensorState == false) {
            this.motorState = false;
            return this.siloSensorState = true;
        }
        else return this.siloSensorState = false;
    },
    siloGateState: false,
    siloGate() {
        if (this.motorState == false && this.siloSensorState == true) return this.siloGateState = true;
        else return siloGateState = false;
    },
    boxSensorState: false,
    //num: 1 - full, 0 - not full
    boxSensor(num) {
        if (num == 1) {
            this.boxSensorState == true;
        }
        if (this.boxSensorState == true) {
            this.siloGateState = false;
            this.boxSensorState = false;
            this.motorState = true;
            this.siloSensorState = false;
        }
    }
};