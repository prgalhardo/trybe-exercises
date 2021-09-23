let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1) {
   // console.log(numbers[index]);
};

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index]
}
// console.log(result);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
}

let media = sum / numbers.length

// console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    // console.log("Valor maior que 20.");
} else {
    // console.log("Valor menor que 20.");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let highNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
        highNumber = numbers[index];
    }
}
// console.log(highNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        resultado += 1;
    }
}

if (resultado === 0) {
    // console.log("Nenhum valor ímpar encontrado");
} else {
    // console.log(resultado);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let lowerNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lowerNumber) {
        lowerNumber = numbers[index];
    }
}
// console.log(lowerNumber);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

newNumbers = [];

for (let index = 1; index <= 25; index += 1) {
    newNumbers.push(index);
}
// console.log(newNumbers);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2


for (let index = 0; index < newNumbers.length; index += 1) {
    // console.log(newNumbers[index] / 2);
}