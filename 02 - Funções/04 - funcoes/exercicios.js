//Função escrevaMeuNome
function escrevaMeuNome (nome){
    console.log("Seu nome é " + nome);
}

//Função verificaIdade
function maiorIdade (idade){
    if(idade>=18){
        console.log("Maior de idade");
    }else {
        console.log("Não é maior de idade");
    }
}


(function (){
    escrevaMeuNome("Pollyana");
    maiorIdade(7);
})();