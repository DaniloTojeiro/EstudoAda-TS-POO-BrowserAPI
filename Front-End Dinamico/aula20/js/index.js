// Selecionar elementos HTML da nossa página utilizando o document

// 1. Pelo nome da tag
const todosP = document.getElementsByTagName('p');

console.log(todosP[0]);

// 2. Pelo nome da classe
const todosClassesParagrafo = document.getElementsByClassName('paragrafo');

console.log(todosClassesParagrafo);

// 3. Pelo name da tag
const emailInput = document.getElementsByName('email');

console.log(emailInput);

// 4. Pelo Id
const jsLogoImg = document.getElementById('js-logo');

console.log(jsLogoImg);

// 5. Query Selector
const imagem = document.querySelector('body > img#js-logo');

console.log(imagem);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

console.clear();

// Acessando/alterando o conteúdo HTML das tags
const primeiroParagrafo = document.querySelector('p.paragrafo');

console.log(primeiroParagrafo);

console.log('TextContent:', primeiroParagrafo.textContent); // ignora tags, pegando só o conteúdo
console.log('innerHTML:', primeiroParagrafo.innerHTML); // considera as tags que estamos pegando

primeiroParagrafo.innerHTML = '<strong>Outra coisa!</strong>';

console.clear();

emailInput[0].value = 'danilotojeiro@live.com';

// Criando elementos na página HTML
const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li');

const novaTagLi = document.createElement('li'); // criando uma tag li vazia
novaTagLi.textContent = 'Segundo item'; // adicionando um texto dentro da tag li

console.log(novaTagLi);

// listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]); 

// Remover

listaUl.removeChild(listaLis[0]);