let user= localStorage.emailUser
let bemVindo=document.querySelector("#bemVindo")
let entrar=document.querySelector("#entrar")
let sair=document.querySelector("#sair")

//saudação ao usuário
function msgUser(){
    let nomeUser=localStorage.nomeUser
    bemVindo.innerHTML='Olá, <b>' + nomeUser + '</b>!'
    entrar.style.display="none"
}

function resetUser(){
    sair.style.display="none"
}
sair.onclick=function(){
    localStorage.removeItem("emailUser")
    location.href='index.html'
}
localStorage.emailUser ? msgUser() : resetUser()

//resgata informações do localStorage
let nome=document.querySelector("#nome")
let telefone=document.querySelector("#telefone")
let email=document.querySelector("#email")
        nome.innerHTML='<li>Nome do usuário: <b>' + localStorage.nomeUser + '</b></li>'
        telefone.innerHTML='<li>Telefone: <b>' + localStorage.telefoneUser + '</b></li>'
        email.innerHTML='<li>Email: <b>' + localStorage.emailUser + '</b></li>'

//informações de usuário -> não interativo
var usuario = '{"Idade":"36","Preferência":"Suspense, Guerra, Ciência","dataInicio":"12/04/2022","tipoAssinante":"Plus","Valor":"R$:50,00"}'
var usuarioJSON = JSON.parse(usuario)
var idade = document.querySelector("#idade")
var preferencias = document.querySelector("#preferencias")
var dataInicio = document.querySelector("#data-inicio")
var tipoAssinante = document.querySelector("#tipo-de-assinante")
var valor = document.querySelector("#valor")
    idade.innerHTML= "<li>Idade: <b>" + usuarioJSON.Idade + '</b></li>'
    preferencias.innerHTML= "<li>Preferências: <b>" + usuarioJSON.Preferência +'</b></li>'
    dataInicio.innerHTML= "<li>Data de Início: <b>" + usuarioJSON.dataInicio + '</b></li>'
    tipoAssinante.innerHTML= "<li>Tipo de Assinante: <b>" + usuarioJSON.tipoAssinante + '</b></li>'
    valor.innerHTML= "<li>Valor: <b>" + usuarioJSON.Valor + '</b></li>'