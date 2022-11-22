/*
3. Kreirajte funkciju koja vraća površinu presjeka dva pravougaonika. Funkcija će dobiti
dva pravougaonika, svaki sa koordinatama dva svoja suprotna ugla.
*/

function overlappingRectangles(coordinate1, coordinate2) {
    //find min od pozicija cordinate1[1].x i cordinate2[1].x i max coridnate1/2[0].x;
    let minX = Math.min(coordinate1[1].x, coordinate2[1].x);
    let maxX = Math.max(coordinate1[0].x, coordinate2[0].x);
    let x = Math.abs(minX - maxX);
    let minY = Math.min(coordinate1[1].y, coordinate2[1].y);
    let maxY = Math.max(coordinate1[0].y, coordinate2[0].y);
    let y = Math.abs(minY - maxY);
    return x * y;
}

console.log(overlappingRectangles([{ x: 2, y: -9 }, { x: 13, y: -4 }], [{ x: 5, y: -11 }, { x: 7, y: -2 }]));