var usuario = '{"Nome" : "Alan Turning","Idade" : "36","Email" : "alan.paidaintert@computador.com","Preferência":"Filmes de guerra","dataInicio":"2022","tipoAssinante":"Pluss","Valor":"R$:50,00", "username":"Pai da Internet"}'
console.log(usuario)
//
//
var usuarioJSON = JSON.parse(usuario)
console.log(usuarioJSON)
//
//
var infUsuario = document.querySelector("#username")
var nome = document.querySelector("#nome")
var idade = document.querySelector("#idade")
var email = document.querySelector("#email")
var preferencias = document.querySelector("#preferencias")
var dataInicio = document.querySelector("#data-inicio")
var tipoAssinante = document.querySelector("#tipo-de-assinante")
var valor = document.querySelector("#valor")
//
//
infUsuario.innerHTML= "Bem-Vindo, " + usuarioJSON.username + "!"
nome.innerHTML= "Nome: " + usuarioJSON.Nome
idade.innerHTML= "Idade: " + usuarioJSON.Idade
email.innerHTML= "Email: " + usuarioJSON.Email
preferencias.innerHTML= "Preferências: " + usuarioJSON.Preferência
dataInicio.innerHTML= "Data de Início: " + usuarioJSON.dataInicio
tipoAssinante.innerHTML= "Tipo de Assinante: " + usuarioJSON.tipoAssinante
valor.innerHTML= "Valor: " + usuarioJSON.Valor


