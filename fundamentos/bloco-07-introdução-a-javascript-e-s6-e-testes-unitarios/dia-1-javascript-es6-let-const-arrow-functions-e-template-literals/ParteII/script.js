// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorialNumber = (num) =>
  // Criar uma condição em que se o número for menor ou igual a 0 ele irá verificar se é negativo ou 0, caso seja maior que 0 ele irá retornar o fatorial. No primeiro caso ele só fará duas verificalçoes SE o número for <= 0.
  num <= 0
    ? num === 0
      ? 1 // Se o número (num) for 0 irá retornar o 1.
      : `Não existe fatorial de ${num} negativo.` // Se o número (num) for menor que 0 irá retornar essa mensagem.
    : num * factorialNumber(num - 1); // Se o número (num) for maior que 0 retornará o fatorial.
console.log(factorialNumber(5));

// Faça de modo recursivo.

const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);
console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const arrayPhrase = phrase.split(" "); // Dividir a frase em um array com as palavras dela.
  arrayPhrase.sort((a, b) => a.length - b.length); // Colocar o array de palavras em ordem crescente, chamando uma nova função anônima com os parâmetros a e b.
  phrase = arrayPhrase[arrayPhrase.length - 1]; // Atribui a última palavra, que contém mais caracteres, ao parâmetro phrase.
  return phrase;
};
console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const fullName = (nomeCompleto, nome, string) => {
  nomeCompleto = {
  nome: 'Priscila',
  };

}
console.log(fullName(nomeCompleto, nome, string));