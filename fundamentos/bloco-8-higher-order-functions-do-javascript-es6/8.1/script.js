// // Vamos praticar com os seguintes exercícios:
// // 1 - Crie uma função que retorne a string 'Acordando!!' ;
// const wakeUp = () => {
//   return "Acordando!!";
// };

// // 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// const breakfast = () => {
//   return "Bora tomar café!!";
// };

// // 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// const sleep = () => {
//   return "Partiu dormir!";
// };

// // 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
// const doingThings = (callback) => {
//   console.log(callback());
// };

// // Ao chamar a função doingThings:
// doingThings(wakeUp);
// doingThings(breakfast);
// doingThings(sleep);

// // 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com 

// const employeesGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return {fullName, email: `${email}@trybe.com`};
// }; // Nessa função como pede o retorno do nome completo com o e-mail da pessoa (sendo ele o nome completo), foi usado o toLowercase, split e join no parâmetro fullName.

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };
// console.log(newEmployees(employeesGenerator));

// // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (numeroSorteado) => {
    numeroSorteado = Math.floor((Math.random() *5) +1);
    return numeroSorteado;
  };
const compareNumbers = (meuNumero, callback) => {
  const numero = callback();
  console.log(numero)
  if (meuNumero === numero) {
    return('Parabéns você ganhou');
  }
    return('Tente novamente');
};
// console.log(sorteio());
console.log(compareNumbers(4, sorteio));



