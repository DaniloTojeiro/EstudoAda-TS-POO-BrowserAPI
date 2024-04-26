"use strict";
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
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ['Danilo', 31]; // tuples
const pessoa = {
    nome: 'Danilo',
    idade: 31,
    altura: 1.85,
};
pessoa.profissao = 'Desenvolvedor'; // atribuindo
console.log(pessoa);
// um parametro opicional não pode seguir um parametro obrigatorio
function chooseNumber(n1, n2, criterio) {
    switch (criterio) {
        case 'greater':
            return n1 > n2 ? n1 : n2;
        case 'lower':
            return n1 < n2 ? n1 : n2;
        default:
            const numAleatorio = Math.random();
            if (numAleatorio >= 0.5)
                return n1;
            return n2;
    }
}
const numEscolhido = chooseNumber(10, 20, 'lower');
console.log('numeroEscolhido: ', numEscolhido);
function somar(num1, num2) {
}
