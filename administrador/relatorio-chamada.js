
let ch = JSON.stringify(localStorage.getItem('chamado-58948'))

let chArray = ch.split(',')
    console.log(chArray)



var nome = document.querySelector('#nome').innerHTML = chArray[0]
var email = document.querySelector('#email').innerHTML = chArray[1]
var teelfone = document.querySelector('#telefone').innerHTML = chArray[2]
var assunto = document.querySelector('#assunto').innerHTML = chArray[3]

