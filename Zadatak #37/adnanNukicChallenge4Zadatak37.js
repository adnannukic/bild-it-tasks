let tezina = 90; //tezina u kg
let visina = 1.87; //visina u m
let BMI = tezina / (visina * visina);

if (BMI < 18.5) {
    console.log(`'Za visinu od ${visina}m i težinu od ${tezina}kg vas BMI je ${BMI.toFixed(2)}. To spada u kategoriju: Pothranjenost'`);
} else if (18.5 <= BMI && BMI < 25) {
    console.log(`'Za visinu od ${visina}m i težinu od ${tezina}kg vas BMI je ${BMI.toFixed(2)}. To spada u kategoriju: Normalan BMI'`);
} else if (25 <= BMI && BMI < 30) {
    console.log(`'Za visinu od ${visina}m i težinu od ${tezina}kg vas BMI je ${BMI.toFixed(2)}. To spada u kategoriju: Gojaznost'`);
} else {
    console.log(`'Za visinu od ${visina}m i težinu od ${tezina}kg vas BMI je ${BMI.toFixed(2)}. To spada u kategoriju: Pretilost'`);
}