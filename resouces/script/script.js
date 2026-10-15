// let encontrar = ("encontrar");
// console.log (encontrar);


let users = ["Pedro","Ana","joana","Davi Messias","Cristiano"];

let searchUser = prompt ("Digite o nome do usuario que deseja buscar");

// Lembrando que, meu usuário adm não pode mandar em branco a busca.Chamos isso de tratativa de erros.

if(searchUser === ""){

    }
    else{
  // Retornar  o usuário que for encontrado 


 let user = users.filter(user =>
 user.toLowerCase().includes(searchUser.toLowerCase().trim())
);
 // Devemos tratar também caso a busca não retorne nenhum resultado 

    if(user.length === 0){
 // usuário não encontrado
 console.log("user not found");
 users.push("seacNuser")
 console.log(users)

}
    else{
console.log("Usuario encontrado: ".concat(user));
 //buscar indice de usuário
 let index = user.indexOf(user);
 console.log(index)
 // alterar o elemento
//users[index] = "novo valor";
//console.log(index,3)
//console.log(users)

users[index] = "novo valor";
console.log(users)



// Atualizar o vaor 

//users.forEach(element =>{
//read
};
}