// TIPAGEM

let numero = 20; // Inferência de tipo

const pi = 3.1415; // o tipo é o próprio valor(3.1415) por ser const

let nome = 'Danilo'; 

let correta = true;

let resultado = numero * pi;

// const nomeDoUsuario = prompt('Qual o seu nome? ')

// console.log(nomeDoUsuario?.toUpperCase()); // ?= se ele não for undefined ou nulo ele faz o toUpperCase

// number[] (esse é o mais comumu) or Array<number>
const numeros = [1, 2, 3, 4, 5];

// const misto: (number | string)[] = ['Danilo', 31, 1.85];  UNION TYPES, não é uma boa prática nas linguagens tipadas any[] para qualquer tipo
// o TS serve para definir os tipos das coisas, por isso não é utilizado o any em TS

const idades: number[] = [];

idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ['Danilo', 31]; // tuples

// Object Types

// interface: modelagem de um objeto
// tipo customizado
// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string; // interrogação faz o atributo ser opcional
//   altura: number;
// }


// type: é mais genérico, não necessariamente um objeto, sempre que cria um type o nome começa com letra maíuscula
type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
}

type MyString = string;

const pessoa: Person = {
  nome: 'Danilo',
  idade: 31,
  altura: 1.85, 
}

pessoa.profissao = 'Desenvolvedor'; // atribuindo

console.log(pessoa);

// type aliases 
type Criterio = 'greater' | 'lower'; 

// um parametro opcional não pode seguir um parametro obrigatorio
function chooseNumber(n1: number, n2: number, criterio?: Criterio): number {
  switch(criterio){
    case 'greater':
      return n1 > n2 ? n1 : n2
    case 'lower':
      return n1 < n2 ? n1 : n2
    default:
      const numAleatorio = Math.random();
      
      if(numAleatorio >= 0.5) return n1;
      return n2;

  }
}

const numEscolhido = chooseNumber(10, 20, 'lower');

console.log('numeroEscolhido: ', numEscolhido);

function somar(num1: number, num2: number): void{

}

// Utily Types: A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes 

// 1. Parcial

type PersonPartial = Partial<Person>; // Todos os parâmetros são opcionais

// 2. Required

type PersonRequired = Required<Person>; // Todos os parâmetros são obrigatórios

// 3. Pick

type PersonPicked = Pick<Person, 'nome' | 'idade'>; // Pega somente os atributos selecionados

// 4. Omit

type PersonOmit = Omit<Person, 'profissao'>; // Omite o atributo selecionado

// 5. Exclude 

type CriterioExclude = Exclude<Criterio, 'greater'>; // Excluiu um dos tipos que estavam no Union Type

// 6. Record

type Pessoas = Record<string, Person>; // Record cria um objeto onde a chave é uma string e o valor é uma pessoa

const pessoas: Pessoas = {
  'qualquer_string': {
    nome: 'Fulano',
    idade: 20,
    altura: 1.80,
  },
  '123.456.789-00': {
    nome: 'Fulana',
    idade: 19,
    altura: 1.78,
  }
}