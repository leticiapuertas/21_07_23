const entrada3 = require("readline-sync");

let ano: number = parseInt(entrada3.question("digite o ano:"));

 if(ano % 4 !=0 && ano % 100 != 0 && ano % 400 != 0){
    console.log("não é bissexto")
 }

 else{
    console.log("nao é bissexto")
 }