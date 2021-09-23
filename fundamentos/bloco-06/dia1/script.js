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
let validateArray = document.querySelectorAll(".validate-input");
let forms = document.querySelector(".forms");

/* Utilize estruturas de repetição via JavaScript para gerar os <option>.*/
function selectStates() {
  for (let i = 0; i < allStates.length; i += 1) {
    let choseState = document.createElement("option");
    let states = allStates[i];
    choseState.innerText = states;
    selectState.appendChild(choseState);
  }
}
selectStates();

// Chamar o input que irá conter a data.

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

function validateItems() {
  // Percorrer todos inputs e caso não esteja dentro dos requisitos exibir uma mensagem de erro.
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

/* Chame o botão submit.*/
let button = document.getElementById("submit");
// Adicione o evento click nele e interrompa o fluxo do formulário chamando as funções de validações.
button.addEventListener("click", (event) => {
  event.preventDefault();
  createDate();
  validateItems();
});

// Chamar o botão que apaga tudo.
let eraseButton = document.querySelector(".clear-inputs");
// Adicionar o evento de click nele e fazer uma estrutura de repetição que passe por todos os inputs.
eraseButton.addEventListener("click", function () {
  for (let i = 0; i <= validateArray; i += 1) {
    forms.removeChild(validateArray[i]);
  }
});
