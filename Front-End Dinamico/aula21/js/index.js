const botaoAumentar = document.querySelector('#aumentar-botao');
const botaoDiminuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector('#contador');

const input = document.querySelector('#input');

botaoAumentar.addEventListener('click', (event) =>{
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  botaoAumentar.classList.add('btn');
  botaoDiminuir.classList.remove('btn');
});

botaoDiminuir.addEventListener('click', (event) =>{
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;

  botaoDiminuir.classList.add('btn');
  botaoAumentar.classList.remove('btn');
});

input.addEventListener('input', () => {
  console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorElemento.style.color = 'red';
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.border = '3px solid yellow';
contadorElemento.style.borderRadius = '15px';
contadorElemento.style.width = '75px';
contadorElemento.style.textAlign = 'center';


// Manipular classes

console.log(botaoDiminuir.classList);

// botaoAumentar.classList.add('btn');
// botaoAumentar.classList.remove('btn'); // remover a classe

const themeButton = document.querySelector('#theme');

let darkTheme;

// Definindo uma função que será executada  ao carregar o conteúdo da página/janela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme'); // O retorno do getItem vai ser sempre uma string

  darkTheme = isDarkThemeStorage === 'true';

  const body = document.querySelector('body')

  if(darkTheme){ 
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
};

themeButton.addEventListener('click', () => {
  darkTheme = !darkTheme;

  localStorage.setItem('isDarkTheme', darkTheme);

  const body = document.querySelector('body')

  if(darkTheme){ 
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
});

