function testeEscopo(){
    var a = 10;
    if(true){
        let b = 20;
        console.log(a); // Valor será 10 por var ser um valor global
        console.log(b); // valor será 20 por estar na função 
    }
    console.log(a); // Valor será 10 por var ser global
    console.log(b);// Valor será indefinido por o b estar 
    // dentro de um bloco e a variável ser let, sendo local
}
testeEscopo();