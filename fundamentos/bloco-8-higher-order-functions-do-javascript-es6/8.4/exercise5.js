// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
const letters = names.reduce((acc, curr) => acc + curr.split('').reduce((acumulator, currLetter) => {
  return currLetter === 'a' || currLetter === 'A' ? acumulator + 1 : acumulator
 }, 0), 0);
return letters;
};
console.log(containsA());