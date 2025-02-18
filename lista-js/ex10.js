var mensagem = "mensagem";

function exibirMensagem(){
    let chamada = "chamada"
    console.log(mensagem);
    console.log(chamada)
}

exibirMensagem(); // Ambas as variáveis por dentro da função estão certas

console.log(mensagem); //O valor vai ser "mensagem"
console.log(chamada); //O valor vai dar errado por estar dentro de um bloco e ser let