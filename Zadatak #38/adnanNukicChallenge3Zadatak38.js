let cijenaRobe = 105;
let popustProcentualni = 5;
let cijenaPopusta = cijenaRobe * (popustProcentualni / 100);
let cijenaRobeSaPopustom = cijenaRobe - cijenaPopusta;

console.log(`'Za robu sa cijenom od ${cijenaRobe}KM i popustom od ${popustProcentualni}%, iznos popusta je ${cijenaPopusta.toFixed(2)}KM a cijena robe sa popustom iznosi ${cijenaRobeSaPopustom.toFixed(2)}KM'`);