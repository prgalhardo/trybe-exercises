/* Utilize estruturas de repetição via JavaScript para gerar os <option>.*/
/*Fazer um array que contenha todos os estados do Brasil.*/
const allStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
let selectState = document.querySelector("#state");

function selectStates() {
  for (let i = 0; i < allStates.length; i += 1) {
    let choseState = document.createElement("option");
    let states = allStates[i];
    choseState.innerText = states;
    selectState.appendChild(choseState);
  }
}
selectStates();

/* Verificar o formato da data dd/mm/aaaa .
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.

Chamar o input que irá conter a data.*/

function createDate() {
  let getDate = document.querySelector("#date").value;
  /* Criar uma variável que irá conter o input da data, com o valor que o usuário irá inserir e usar o split para trabalharmos com cada índice do array (dia, mês e ano).*/
  let date = getDate.split("/");

  /* Fazer uma função de validação para cada índice do array colocando as condições pedidas.*/
  function validateDay() {
    if (date[0] <= 0 || date[0] > 31) {
      alert("Data inválida!");
    } else {
      return true;
    }
  }

  function validateMonth() {
    if (date[1] <= 0 || date[1] > 12) {
      alert("Data inválida!");
    } else {
      return true;
    }
  }

  function validateYear() {
    if (date[2] < 0 || date[2] > 2021) {
      alert("Data inválida!");
    } else {
      return true;
    }
  }

  date.join("/");
  if (validateDay() && validateMonth() && validateYear()) {
    return true;
  }
  return false;
}

/*Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.*/
function validateItems() {
  // Fazer uma variável que vai salvar todas as classes dos inputs do formulário.
  let validateArray = document.querySelectorAll(".validate-input");
  // Percorrer todos esses inputs e caso não esteja dentro dos requisitos exibir uma mensagem de erro.
  for (let i = 0; i < validateArray.length; i += 1) {
    console.log(validateArray[i].type === "radio");
    if (validateArray[i].value.length === 0) {
      alert("Preencha o formulário!");
    }
    /*if (validateArray[i].type === "radio" && !validateArray[i].checked && !checked) {
      checked = true;
      alert("Preencha o logradouro!");
    }*/
  }
}

/* Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit.*/

/* Chame o botão submit.*/
let button = document.getElementById("submit");

button.addEventListener("click", (event) => {
  event.preventDefault();
  createDate();
  validateItems();
});
