// FETCH API


// then/catch

// fetch('http://viacep.com.br/ws/01001000/json/').then((response) => {  
//   response.json().then((data) => console.log(data));
// }).catch((erro) => {
//   console.log(erro);
// });

// async/await

async function obterDadosDoCep(){
  try {
  const response = await fetch('http://viacep.com.br/ws/01001000/json/')
  const data = await response.json()

  console.log(data);
}catch(erro){
  console.log('Deu errado!', erro);
} finally{
  console.log('Terminou a requisição.');
}
}

obterDadosDoCep();