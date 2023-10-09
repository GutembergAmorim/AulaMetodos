console.log('-----------Método Reduce------------------')

const array1 = [10, 5, 20, 8, 15, 100];
const letras = ['g', 'u', 't', 'e', 'm', 'b', 'e','r','g']

// const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) =>
    accumulator + currentValue)

const letrasTotal = letras.reduce((accumulator, current) => 
    accumulator + current)

console.log(letrasTotal.toUpperCase())

console.log(sumWithInitial);

console.log('--------------------------------------------------')

const numbers = [10, 5, 20, 8, 15];

// Função de redução para encontrar o maior número
const findMax = (acc, current) =>{
    if (current > acc){
        return current;
    }
    else {
        return acc;
    }
};

// Usando o método reduce para encontrar o maior número
const maxNumber = numbers.reduce(findMax);

console.log(`O maior número é: ${maxNumber}`);

console.log('--------------------------------------------------')

const numbers1 = [10, 5, 20, 8, 15];

const sum = numbers1.reduce((acc, current) => acc + current, 0);

// Calcule a média dividindo a soma pelo número de elementos
const average = sum / numbers1.length;

console.log(`A média dos números é: ${average}`);

console.log('------------Método Every------------------')

// O método Every testa se todos os elementos de um array atendem a uma condição
// Array de números
const numbers2 = [2, 4, 6, 8, 10];

// Função de verificação para números pares
// const isEven = (number) => number % 2 === 0;

// Use o método every() para verificar se todos os números são pares
const allNumbersAreEven = numbers2.every((number) => number %2 ===0);

if (allNumbersAreEven) {
  console.log('Todos os números são pares.');
} else {
  console.log('Pelo menos um número não é par.');
}


console.log('--------------------------------------------------')

const words = ['car', 'dog', 'sun', 'sky'];

// Função de verificação para comprimento igual a 3
const hasLengthThree = (word) => word.length === 3;

// Use o método every() para verificar se todos os elementos têm comprimento igual a 3
const allWordsHaveLengthThree = words.every(hasLengthThree);

if (allWordsHaveLengthThree) {
  console.log('Todos os elementos têm comprimento igual a 3.');
} else {
  console.log('Pelo menos um elemento não tem comprimento igual a 3.');
}


console.log('------------Método Splice------------------')

const numbers4 = [1, 2, 3, 4, 5];

// function addElements(arr, startIndex, elementsToAdd) {
//   // Use o método splice para adicionar os elementos a partir do índice startIndex
//   arr.splice(startIndex, 0, ...elementsToAdd);
//   return arr;
// }

numbers4.splice(2, 0, 5);
console.log(numbers4); 

console.log('--------------------------------------------------')

const numbers5 = [1, 2, 3, 4, 5, 6];

numbers5.splice(2, 3, 90)

console.log(numbers5)
