const entrada4 = require("readline-sync");

let v: number = parseFloat(entrada4.question("digite um numero:"))

if( v > 80){
    let multa: number = (v - 80) * 7
    console.log("voce foi multado em R$ ${multa}")
}