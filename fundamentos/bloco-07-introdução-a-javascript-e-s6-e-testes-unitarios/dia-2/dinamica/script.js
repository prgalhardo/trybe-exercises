// Dado um array retorne um novo array somente com os números pares.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
function getEvenNumbers(num) {
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] % 2 === 0) {
      newArray.push(arrayOfNumbers[i]);
    }
  }
  return newArray;
}
console.log(getEvenNumbers(arrayOfNumbers));

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

function buildCitiesArray() {
  const citiesAndStates = [
    {
      city: "Belo Horizonte",
      state: "Minas Gerais",
    },
    {
      city: "Salvador",
      state: "Bahia",
    },
    {
      city: "Porto Alegre",
      state: "Rio Grande do Sul",
    },
    {
      city: "Manaus",
      state: "Amazonas",
    },
  ];
  let newCitiesAndStates = [];
  for (let i = 0; i < citiesAndStates.length; i += 1) {
   newCitiesAndStates.push(`${citiesAndStates[i].city} - ${citiesAndStates[i].state}`);
    }
    console.log(newCitiesAndStates);
  }
  buildCitiesArray();



// Fomos convidados para desenvolver o sistema da Pokedex e pra isso precisamos criar algumas features.
// Feature 1 - Quando apontamos a câmera da Pokedex para um Pokemon precisamos guardar as informações do nosso monstrinho na memória da  Pokedex.
// As informações são:
// Nome - String,
// Level - um inteiro entre 1 e 50,
// Ataque - um inteiro entre 1 e 345,
// Defesa - um inteiro entre 1 e 400
// Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto
// Feature 2 - A pokedex vem equipada com um botão para exibir os pokemons que estão salvos na memória da pokedex.
// Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato:
// "Nome - Level - Ataque - Defesa"

const arrayPoke = [];
function Game (nome, level, ataque, defesa) {
  const pokemon = {};
  pokemon.nome = nome;
  pokemon.level = level;
  pokemon.ataque = ataque;
  pokemon.defesa = defesa;

  arrayPoke.push(pokemon);
}
Game('Pikachu', 40, 300, 40)
Game('Pikachu', 40, 300, 40)
console.log(arrayPoke);