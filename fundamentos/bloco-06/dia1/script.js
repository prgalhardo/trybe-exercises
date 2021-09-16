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
