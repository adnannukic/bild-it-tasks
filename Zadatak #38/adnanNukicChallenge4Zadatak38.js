let minute = 656546453;
let godine = Math.trunc(minute / (365 * 24 * 60));
let dani = ((minute % (365 * 24 * 60)) / 1440).toFixed(0);

console.log(`'${minute} minuta je otprilike ${godine} godine i ${dani} dana.'`)