var entrada2 = require("readline-sync");
var numero1 = parseFloat(entrada2.question("digite um numero:"));
var numero2 = parseFloat(entrada2.question("digite um numero:"));
if (numero1 > numero2) {
    console.log("maior:", numero1);
}
else {
    console.log("maior:", numero2);
}
