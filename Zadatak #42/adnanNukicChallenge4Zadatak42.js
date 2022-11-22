// Pseudo

// 1) deklarisemo varijablu tipa podatka string u kojoj trebamo brojati koliko karaktera "a" ima

// 2) deklarisemo varijablu brojaca

// 3) deklarišemo karakter varijablu koju tražimo

// 4) radimo iteraciju preko svakog karaktera u stringu

// 5) ako u nekoj iteraciji naiđemo na karakter koji tražimo, a to je "a" inkrementiramo brojac

// 6) ispisujemo brojač

let nasString = `Java is to JavaScript what car is to Carpet.`;

let i = 0; //Zato sto prvi karakter stringa ima index 0

let karakter = 'a';

for (let sviKarakteri of nasString) {
    if (karakter == sviKarakteri) {
        i++;
    }
}
console.log(`U našem stringu '${nasString}' ima ${i} karatera 'a'.`);