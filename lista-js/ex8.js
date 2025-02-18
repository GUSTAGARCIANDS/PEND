// Var é pra valores globais na programação, ou seja, que vão fazer parte de toda programação.
// Let é pra valores locais, ou seja, vão fazer parte de determinadas áreas da sua programação
// Const é pra valores constantes que não vão ter alterações

var idade = 10;

{
    let = nome = "gutas";
}

const gol = 1;

const gol = 2; // Mostra que o valor está errado por ser constante

console.log(nome); // O valor será indefinido por estar dentro de um bloco e ser let

console.log(idade); // O valor será 10
