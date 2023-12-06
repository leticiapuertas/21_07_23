var entrada4 = require("readline-sync");
var v = parseFloat(entrada4.question("digite um numero:"));
if (v > 80) {
    var multa = (v - 80) * 7;
    console.log("voce foi multado em R$ ${multa}");
}
