// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 10;
const b = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplacao = a * b;
let divisao = a / b;
let modulo = a % b;

//console.log(adicao);
//console.log(subtracao);
//console.log(multiplacao);
//console.log(divisao);
//console.log(modulo);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 10;
const num2 = 20;

if (num1 > num2) {
//    console.log(num1);
} else {
//  console.log(num2);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num3 = 100;
const num4 = 250;
const num5 = 50;

if (num3 > num4 && num3 > num5) {
    //console.log(num3);
} else if (num4 > num3 && num4 > num5) {
    //console.log(num4);
} else {
    //console.log(num5);
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 50
const angulo2 = 50
const angulo3 = 80

if (angulo1 + angulo2 + angulo3 === 180) {
   // console.log(true);
} else {
   // console.log(false);
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const exercise4 = 10

if (exercise4 > 0) {
    // console.log("positive");
} else if (exercise4 < 0) {
    // console.log("negative")
} else {
    // console.log("0")
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = "Rainha";

switch (chessPiece.toLowerCase()) {
    case "rei":
       // console.log("Anda uma casa para qualquer direção");
        break;
    case "rainha":
      //  console.log("Anda quantas casas necessárias na horizontal, vertical e diagonal.");
        break;
    case "bispo":
       // console.log("Anda em casas na diagonal");
        break;
    case "cavalo":
       // console.log("Anda em L e pode pular sobre as peças.");
        break;
    case "torre":
       // console.log("Anda na horizontal e vertical.");
        break;
    case "peão":
      //  console.log("Anda apenas uma casa para frente, na primeira jogada podem ser duas");
        break;
    default:
       // console.log("Peça inválida");
        break;
}; 

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let note = "86";

    if (note < 0 || note > 100) {
    // console.log("Nota incorreta!")
}   else if (note >=90) {
    //  console.log("A");
}   else if (note >= 80) {
    //  console.log("B");
}   else if (note >= 70) {
    //  console.log("C");
}   else if (note >= 60) {
    //  console.log("D");
}   else if (note >= 50) {
    //  console.log("E");
}   else {
    //  console.log("F");
};

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if.

const f = 5;
const g = 10;
const h = 20;

if (f % 2 || g % 2 || h % 2 === 0) {
    // console.log(true);
} else {
    // console.log(false);
};

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if.

const i = 45;
const j = 2;
const k = 60;

if (i % 2 || j % 2 || k % 2 !== 0) {
   // console.log(true);
} else {
   // console.log(false);
};
