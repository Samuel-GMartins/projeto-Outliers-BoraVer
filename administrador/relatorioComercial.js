valorpro1 = 1
valorpro2 = 2
valorpro3 = 1

preco1 = 25,00
preco2 = 45,50
preco3 = 65,00

alug1 = 12.50
alug2 = 15,90
alug3 = 11,00

somaAssinatura = preco1 + preco2 + preco3
somaAluguel = alug1 + alug2 + alug3

quantidaDeProdutos = valorpro1 + valorpro2 + valorpro3
somatotal = preco1 + preco2 + preco3


let assinatura1 = document.querySelector('#assinatura1').innerHTML = 'R$ ' + parseFloat(preco1).toFixed(2)
let assinatura2 = document.querySelector('#assinatura2').innerHTML = 'R$ ' + parseFloat(preco2).toFixed(2)
let assinatura3 = document.querySelector('#assinatura3').innerHTML = 'R$ ' + parseFloat(preco3).toFixed(2)
let totalAssinantes = document.querySelector('#totalAssinantes').innerHTML = 'R$ ' + parseFloat(somaAssinatura).toFixed(2)

let aluguel1 = document.querySelector('#aluguel1').innerHTML = 'R$ ' + parseFloat(alug1).toFixed(2)
let aluguel2 = document.querySelector('#aluguel2').innerHTML = 'R$ ' + parseFloat(alug2).toFixed(2)
let aluguel3 = document.querySelector('#aluguel3').innerHTML = 'R$ ' + parseFloat(alug3).toFixed(2)

let totalAluguel = document.querySelector('#totalAluguel').innerHTML = 'R$ ' + parseFloat(somaAluguel).toFixed(2)

let macroAluguel = document.querySelector('#macroAluguel').innerHTML = totalAluguel
let macroTotal = document.querySelector('#macroAssinantes').innerHTML = totalAssinantes

//Assinantes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//clientes Assinatura
let clienteAssi = ['Maria Joaquina','João Manuel','Valentina']
//Macro assinantes
let assinantes = document.querySelector('#assinantes').innerHTML = '<b>Assinantes:</b> ' + clienteAssi.length

//Aluguel>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//var quantidade de filmes alugados
let totalFilmes = [1+1+1]
//Macro aluguel
let filmesAlugados = document.querySelector('#filmesAlugados').innerHTML = '<b>Filmes alugados:</b> ' + parseFloat(totalFilmes)
//clientes Aluguel
let clienteAlu = ['Carla','Pedro','Marcos']
//Média de aluguel
let mediaFilmes = document.querySelector('#mediaFilmes').innerHTML = parseFloat(totalFilmes / clienteAlu.length)
