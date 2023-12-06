const entrada2 = require ("readline-sync");

let numero1 = parseFloat(entrada2.question("digite um numero:"));
let numero2 = parseFloat(entrada2.question("digite um numero:"));

if(numero1> numero2){
    console.log("maior:" , numero1)
}
else{
    console.log("maior:" , numero2)
}