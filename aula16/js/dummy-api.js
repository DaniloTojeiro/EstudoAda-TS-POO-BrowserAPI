async function getUsers() {
 const resposta = await fetch('https://dummyapi.io/data/v1/user?created=1', {
  headers: {
    'app-id' : '6615525bbab91914bb3882de',
  },
 });

 const users = await resposta.json();

 console.log(users.data);
}

getUsers();

async function getUser (){

}

async function createUser(){
  const userData = {
    firstName : "Danilo",
    lastName : "Tojeiro",
    email : "outro.user@tessfdste.com",
  };

   try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
    method: 'POST',
    headers: {
      "app-id" : "6615525bbab91914bb3882de",
      "Content-Type": "application/json",
   },
    body: JSON.stringify(userData),
  });
} catch(erro){
  console.log('Deu erro ao tentar criar um novo usuário:', erro);
}
}
// createUser();