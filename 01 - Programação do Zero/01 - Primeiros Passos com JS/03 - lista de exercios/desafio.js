
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
let n1 = 5;
let n2 = 10;
let n3 = 9;

let media = (n1+n2+n3)/3;


if(media < 5){
    console.log("aluno reprovado!");
}else if (media < 7) {
    console.log("aluno em recuperação!");
}else {
    console.log('aluno aprovado!!!');
}

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

let peso = 64.0;
let altura = 1.58;

let IMC = peso / (altura * altura);

if (IMC < 18.5){
    console.log("Abaixo do peso")
}else if (IMC < 25){
    console.log("Peso normal")
}else if (IMC < 30){
    console.log("Acima do peso")
}else if (IMC < 40){
    console.log("Obeso")
}else if (IMC < 40){
    console.log("Obsesidade Grave")
}


/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - 1 - À vista Débito, recebe 10% de desconto;
    - 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - 3 - Em duas vezes, preço normal de etiqueta sem juros;
    - 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


let valor = 10.0;
let formaPagamento = 1;

if (formaPagamento === 1){
    console.log("Valor do produto = R$" + valor*0.9)
}else if(formaPagamento === 2){
    console.log("Valor do produto = R$" + valor*0.85)
}else if(formaPagamento === 3){
    console.log("Valor do produto = R$" + valor)
}else if(formaPagamento === 3){
    console.log("Valor do produto = R$" + valor*1.1)
}