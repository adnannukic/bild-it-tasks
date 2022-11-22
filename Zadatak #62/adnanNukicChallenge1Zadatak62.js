/*
Kreirati Matematika objekat, koji je vrlo slican Math koji smo vec
koristili. U ovom zadatu NE SMIJETE koristiti Math, vec morate pisati
svoju logiku. Matematika objekt treba da ima sljedece funkcionalnosti:

    zaokruziNaManji(broj) - zaokruzuje decimalni broj na manji cijeli broj
    zaokruziNaVeci(broj) - zaokruzuje decimalni broj na veci cijeli broj
    stepenuj(broj, stepen) - stepenuje broj na odredjeni stepen
    zaokruziNaNajblizu(broj) - zaokruzuje decimalni broj na najblizi cijeli broj
    apsolutnaVrijednost(broj) - vraca apsolutnu vrijednost broja
    veciBroj(a, b) - vraca veci broj od 2 proslijedjena
    manjiBroj(a, b) - vraca manji broj od 2 proslijedjena
    PI - cuva konstantu PI
*/

const math = {
    floor: function (num) {
        if (num > 0) {
            let tempStr = num.toString();
            let str = '';
            for (let i = 0; i < tempStr.length; i++) {
                if (tempStr[i] == '.') {
                    break;
                }
                str += tempStr[i];
            }
            return Number(str);
        }
        else if (num == 0) {
            return 0;
        }
        else {
            let tempStr = num.toString();
            let str = '';
            for (let i = 0; i < tempStr.length; i++) {
                if (tempStr[i] == '.') {
                    break;
                }
                str += tempStr[i];
            }
            return Number(str) - 1;
        }
    },
    ceil: function (num) {
        if (num > 0) {
            let tempStr = num.toString();
            let str = '';
            for (let i = 0; i < tempStr.length; i++) {
                if (tempStr[i] == '.') {
                    break;
                }
                str += tempStr[i];
            }
            return Number(str) + 1;
        }
        else if (num == 0) {
            return 0;
        }
        else {
            let tempStr = num.toString();
            let str = '';
            for (let i = 0; i < tempStr.length; i++) {
                if (tempStr[i] == '.') {
                    break;
                }
                str += tempStr[i];
            }
            return Number(str);
        }
    },
    exp: function (num, exp) {
        if (exp > 0 && exp % 1 == 0 && num > 0) {
            let tempNum = num;
            for (let i = 0; i < exp - 1; i++) {
                num *= tempNum;
            }
            return num;

        }
        else if (exp > 0 && exp % 1 == 0 && num < 0) {
            let tempNum = num;
            for (let i = 0; i < exp - 1; i++) {
                num *= tempNum;
            }
            return -num;
        }
        else if (exp == 0 && num > 0) {
            return 1;
        }
        else if (exp == 0 && num < 0) {
            return -1;
        }
        else if (exp < 0 && exp % 1 == 0 && num > 0) {
            return 1 / math.exp(num, -exp);
        }
        else if (exp < 0 && exp % 1 == 0 && num < 0) {
            return 1 / math.exp(num, -exp);

        }
        //pokusaj racunanja ako exp nije cio pozitivan broj, fakticki dolazi do rekurzije svojstva
        /*else if (exp > 0 && exp % 1 !== 0) {
            let tempNum = num;
            let e = 2.71;
            let theRest = 0;
            let log = 0;
            let counter = 0;
            let counterSecDig = 0;
            let counterThrDig = 0;
            while (tempNum / 10 > 1) {
                tempNum /= 10;
                counter++;
            }
            let base = num / math.exp(10, counter);
            let temp = math.exp(base, 10);  
            let newTemp = temp;
            while (temp / 10 > 1) {
                temp /= 10;
                counterSecDig++;
            }
            let newTemp1 = newTemp / math.exp(10, counterSecDig);
            counterSecDig = counterSecDig / 10;
            let newTemp2 = math.exp(newTemp1, 10);
            while (newTemp2 / 10 > 1) {
                newTemp2 /= 10;
                counterThrDig++;
            }
            counterThrDig = counterThrDig / 100;
            log = counter + counterSecDig + counterThrDig;
            tempNum = num;
            theRest = exp - math.floor(exp);
            exp = math.floor(exp);
            for (let i = 0; i < exp - 1; i++) {
                num *= tempNum;
            }
            let expOfE = theRest * log;
            let calcOfE = math.exp(e, expOfE);
            return num * calcOfE;
        }
        */
    },
    round: function (num) {
        if (num > 0) {
            let str = num.toString();
            let indexOfNumAfterTheDot = str.indexOf('.') + 1;
            if (str[indexOfNumAfterTheDot] >= '5') {
                return math.ceil(num);
            }
            else {
                return math.floor(num);
            }
        }
        else if (num == 0) {
            return 0;
        }
        else {
            let str = num.toString();
            let indexOfNumAfterTheDot = str.indexOf('.') + 1;
            const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            if (str[indexOfNumAfterTheDot] > '5') {
                return math.floor(num);
            }
            else if (str[indexOfNumAfterTheDot] == '5' && nums.includes(str[indexOfNumAfterTheDot + 1])) {
                return math.floor(num);
            }
            else if (str[indexOfNumAfterTheDot] <= '5') {
                return math.ceil(num);
            }
        }
    },
    abs: function (num) {
        if (num < 0) {
            let str = num.toString();
            str = str.slice(1, str.length);
            return Number(str);
        }
        else return num;
    },
    max: function (num1, num2) {
        if (num1 > num2) return num1;
        else return num2;
    },
    min: function (num1, num2) {
        if (num1 > num2) return num2;
        else return num1;
    },
    pi: 3.141592653589793238462643383279502884197169399375105820974944592307816406286,
};

console.log(math.round(-2.55));