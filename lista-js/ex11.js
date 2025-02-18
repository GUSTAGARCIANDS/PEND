var nome = "Ana";

function mostrarNome(){
    var nome = "Carlos";
    console.log(nome);// O valor será Carlos pela variável nome ser passiva de mudança
}

mostrarNome();
console.log(nome); //O valor se manterá Carlos por dentro da função ser var

////////////////////////////////////////////////////////////////////////////////////

function mostrarNome(){
    let nome = "Carlos";
    console.log(nome);// O valor será Carlos pela variável nome ser passiva de mudança
}

mostrarNome();
console.log(nome); //O valor será Ana, pois Carlos é let e está dentro da função