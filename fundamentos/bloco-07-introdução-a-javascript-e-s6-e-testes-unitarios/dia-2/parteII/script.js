const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// 01. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const nightShift = (obj, key, value) => (obj[key] = value);
nightShift(lesson2, "turno", "noite");
console.log(lesson2);

// 02. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listOfKeys = (obj) => Object.keys(obj);
listOfKeys(lesson1);
console.log(listOfKeys(lesson1));

// 03. Crie uma função para mostrar o tamanho de um objeto.

const objLength = (obj) => Object.keys(obj).length;
objLength(lesson3);
console.log(objLength(lesson3));

// 04. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listOfValues = (obj) => Object.values(obj);
listOfValues(lesson2);
console.log(listOfValues(lesson2));

// 05. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 06. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudents = (allLessons) => {
  const students = Object.keys(allLessons);
  let count = 0;
  for (index in students) {
    count += allLessons[students[index]].numeroEstudantes;
  }
  return count;
};
allStudents(allLessons);
console.log(allStudents(allLessons));

// 07. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson3, 2));

// 08. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exercício verificado no gabarito da Trybe.

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  console.log(arr);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
console.log(verifyPair(lesson2, "professor", "Carlos"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false
