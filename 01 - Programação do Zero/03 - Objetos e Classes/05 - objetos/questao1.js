/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

função dentro de objeto = metodo*/

class Carro {
  marca;
  cor;
  gastoMedioPorKM;

  constructor(marca, cor, gastoMedioPorKM) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKM = gastoMedioPorKM;
  }

  gasto(kmRodado, precoCombustivel) {
    return kmRodado * this.gastoMedioPorKM * precoCombustivel;
  }
}

let carro = new Carro("Ford", "Branco", 1 / 12);

console.log(carro.gasto(70, 5).toFixed(2));
console.log(carro);
