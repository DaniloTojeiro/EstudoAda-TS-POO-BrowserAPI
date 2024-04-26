"use strict";
// Aula 19 - POO
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    // métodos: ação(funções)
    dormir() {
        console.log('Dormindo....ZZzz');
    }
    // acessor: getter
    get cpf() {
        return this._cpf;
    }
    // acessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            // Lançando um erro 
            throw new Error('CPF lenght is incorrect!');
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log('Ensinando....');
    }
}
// Criando/instanciando uma pessoa(indivíduo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Danilo', 31, 1.85, '123.456.789-00');
const pessoa2 = new Pessoa('Fulano', 35, 2.00, '123.456.789-01');
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa2);
pessoa2.dormir();
pessoa1.cpf = '123.456.789-03';
console.log(pessoa1.cpf);
// Objeto da classe professor
const professor = new Professor('Professor', 35, 1.69, '123.456.789-10', '0001');
console.log(professor);
// Polimorfismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); //true
console.log(professor instanceof Professor); //true
