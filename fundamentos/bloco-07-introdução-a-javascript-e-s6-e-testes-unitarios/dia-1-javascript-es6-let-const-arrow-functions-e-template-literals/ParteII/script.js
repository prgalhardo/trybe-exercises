// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorialNumber = (num) =>
  // Criar uma condição em que se o número for menor ou igual a 0 ele irá verificar se é negativo ou 0, caso seja maior que 0 ele irá retornar o fatorial. No primeiro caso ele só fará duas verificalçoes SE o número for <= 0.
  num <= 0
    ? num === 0
      ? 1 // Se o número (num) for 0 irá retornar o 1.
      : `Não existe fatorial de ${num} negativo.` // Se o número (num) for menor que 0 irá retornar essa mensagem.
    : num * factorialNumber(num - 1); // Se o número (num) for maior que 0 retornará o fatorial.
console.log(factorialNumber(5));
