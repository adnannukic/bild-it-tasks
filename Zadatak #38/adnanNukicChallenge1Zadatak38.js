let rRadius = 10;
let visinaH = 15;
let pi = 3.14;
let povrsina = 2 * rRadius * rRadius * pi + visinaH * 2 * rRadius * pi;
let zapremina = rRadius * rRadius * pi * visinaH;

console.log(`'Za cilindar radiusa ${rRadius} i visine ${visinaH} povrsina iznosi ${povrsina.toFixed(3)} a zapremina ${zapremina.toFixed(3)}.'`);