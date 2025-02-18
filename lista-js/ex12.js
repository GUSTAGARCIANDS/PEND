let idade = 25;

if(true){
    let idade = 30;
    console.log("Dentro do bloco:", idade); // A idade será 30 por let = 30 estar na função
}

console.log("Fora do bloco:", idade);// A idade será 25 por o let = 25 estar fora da função

///////////////////////////////////////////////////////////////////////////////////////////

let idade = 25;

if(true){
    var idade = 30;
    console.log("Dentro do bloco:", idade); // A idade será 30 por var = 30
}

console.log("Fora do bloco:", idade);// A idade será 30 por var ser global e valer 30