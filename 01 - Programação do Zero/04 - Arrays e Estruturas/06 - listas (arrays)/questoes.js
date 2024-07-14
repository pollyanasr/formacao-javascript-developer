//1) Crie um programa que dado um número imprima a sua tabuada.
console.log("1) Crie um programa que dado um número imprima a sua tabuada.");
let numero = 5;

for (let i = 1; i < 11; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
console.log();
//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
console.log(
  "2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado."
);
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 == 0) {
    console.log(lista[i]);
  }
}
console.log();
//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
console.log(
  "3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra 'V'."
);
let nomes = ["Pollyana", "Vilma", "Vitoria", "Vitor"];

for (let i = 0; i < nomes.length; i++) {
  let nome = nomes[i].charAt(0);
  if (nome === "V") {
    console.log(nomes[i]);
  }
}

console.log();
//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

console.log(
  "4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50"
);
for (let i = 10; i < 51; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log()
//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 7).   Ex de lista = [2, 7, 3, 8, 10, 4]

console.log("5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 7).")

let listaMedias = [2, 7, 3, 8, 10, 4];

for (let i = 0; i<listaMedias.length; i++){
    if(listaMedias[i] < 7){
        console.log(listaMedias[i])
    }
}

console.log()
//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
console.log("6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.")

let aux = -99999;

for (let i = 0; i<listaMedias.length; i++){
    if(listaMedias[i] > aux){
       aux = listaMedias[i];
    }
}

console.log(aux);