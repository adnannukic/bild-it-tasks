/*
3. Napišite funkciju koja uzima tri dimenzije cigle: visinu (a),
širinu (b) i dubinu (c) i vraća true ako ova cigla može stati u rupu sa širinom
(w) i visinom (h). 

Primjeri: doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1,2, 1, 1, 1) ➞ true
doesBrickFit(1,2, 2, 1, 1) ➞ false

Možete okrenuti ciglu kako god zelite prema rupi.
Pretpostavljamo da cigla odgovara ako su njene veličine jednake veličini rupe
(tj. veličina cigle bi trebala biti manja ili jednaka veličini rupe, ne
striktno manja).
Ne možete staviti ciglu na koso.
*/

//deklaracija f-je i parametara, koja ispituje da li cigla proslijedjenih dimenzija moze stati u rupu proslijedjenih dimenzija:
function whetherTheBrickFit(height, width, depth, holeWidth, holeHight) {

    //provjera uslova, ako su ispunjeni f-ja vraca true, ako nisu vraca false:
    if ((height <= holeHight && width <= holeWidth) || (height <= holeWidth && width <= holeHight)) {
        return true;
    }
    else if ((height <= holeHight && depth <= holeWidth) || (height <= holeWidth && depth <= holeHight)) {
        return true;
    }
    else if ((width <= holeHight && depth <= holeWidth) || (width <= holeWidth && depth <= holeHight)) {
        return true;
    }
    else {
        return false;
    }
}

//ispis poziva f-je sa proslijedjenim argumentima:
console.log(whetherTheBrickFit(53,33,2,11,23));
