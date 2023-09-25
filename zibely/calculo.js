let nota = document.querySelector("#CALCULO DE NOTAS ");
console.log(notas);

let tdNotaDoPrimeiroTrimestre = nota.querySelector(".info-Nota do primeiro trimestre");
let tdNotaDoSegundoTrimestre = nota.querySelector(".info-Nota do segundo trimestre");

let NotaDoPrimeiroTrimestre  = tdNotaDoPrimeiroTrimestre.textContent;
let tdNotaDoSegundoTrimestre  = tdNotaDoSegundoTrimestre.textContent;

let imc = NotaDoPrimeiroTrimestre / (NotaDoSegundoTrimestre*NotaDoSegundoTrimestre);

console.log(imc);

let tdImc = nota.querySelector(".info-imc");
tdImc.textContent = imc;