/*
1. Kreirajte funkciju koja uzima niz objekata (namirnica) i izračunava ukupnu cijenu i
vraća je kao broj. Objekat ima ime proizvoda, količinu i cijenu.
PRIMJERI:
getTotalPrice([
{ product: "Milk", quantity: 2, price: 1.50 }
]) ➞ 3
getTotalPrice([
{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4
*/

function getTotalPrice(groceries) {
    let priceOfAll = 0;
    for (let i = 0; i < groceries.length; i++) {
        priceOfAll += groceries[i].quantity * groceries[i].price
    }

    return priceOfAll;
}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
    ]));