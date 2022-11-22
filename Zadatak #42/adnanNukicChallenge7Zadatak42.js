// Pseudo   

// 1) Kreirati petlju sa brojacem od 1 do 100

// 2) Konstruisati if...else if...else statmente sa ispisom za određene slucajeve

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('FizzBuzz');
    } else if ((i % 3) == 0) {
        console.log('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
