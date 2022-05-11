// Escopos var let const
let cliente = '{"nome": "Allan Turing", "imagem": "fotoCliente.jpeg", "idade":"23","email":"allantop10@gmail.com", "preferencia": "Ficção Científica", "dataInicio": " 28/03/2022", "tipoAssinante":"Premium", "valor": 250.75}'

let clienteJson = JSON.parse(cliente)

console.log(cliente.nome)
console.log(clienteJson.nome)

let imagem = document.querySelector("#imagem")
let conteudo = document.querySelector("#conteudo")
let titulo = document.querySelector("#titulo")
let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let email = document.querySelector("#email")
let preferencia = document.querySelector("#preferencia")
let dataInicio = document.querySelector("#dataInicio")
let tipoAssinante = document.querySelector("#tipoAssinante")
let valor = document.querySelector("#valor")

titulo.innerHTML = "Bem Vindo " + clienteJson.nome
imagem.innerHTML = '<img style="border-radius:50%" src="imagens/'  + clienteJson.imagem + '"width="300"/>'
nome.innerHTML = "<b>Nome:</b> " + clienteJson.nome
idade.innerHTML = "<b>Idade: </b>" + clienteJson.idade
email.innerHTML = "<b>E-mail:</b> " + clienteJson.email
preferencia.innerHTML = "<b>Possui Preferências: </b>" + clienteJson.preferencia
dataInicio.innerHTML = "<b>Data De Início: </b>" + clienteJson.dataInicio
tipoAssinante.innerHTML = "<b>Tipo De Assinatura: </b>" + clienteJson.tipoAssinante
valor.innerHTML = "<b>Valor: R$ </b>" + clienteJson.valor