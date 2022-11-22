/*
2. Napisati funkciju koja provjerava jednakost dva objekta. Dva objekta su jednaka
ukoliko su vrijednosti svih propertija oba objekta jednake.
*/
const obj1 = {id: 1, name: 'Faruk', age: 23, status: true,};
const obj2 = {id: 1, name: 'Faruk', age: 23, status: true,};

function equalityOfTwoObjects (obj1, obj2) {
    const keysOfObj1 = Object.keys(obj1);
    const keysOfObj2 = Object.keys(obj2);
    
    //console.log(keysOfObj1);
    //ako duzina objekata nije ista, tj duzina nizova u koje smo spremili propertye nije ista vratit ce false:
    if (keysOfObj1.length !== keysOfObj2.length) {
      return false;
    }
    //iteriramo kroz niz i za iste propertije provjeravamo da li su iste vrijednosti:
    for (let i = 0; i < keysOfObj1.length; i++) {
      if (obj1[keysOfObj1[i]] !== obj2[keysOfObj2[i]]) {
        return false;
      }
    }
    return true;
  }

console.log(equalityOfTwoObjects(obj1, obj2));