var entrada = require("readline-sync");
var numero = parseFloat(entrada.question("Digite um numero:"));
if (numero > 0) {
    console.log("este numero é positivo");
}
else if (numero < 0) {
    console.log("este numero é negativo");
}
else {
    console.log("0");
}
