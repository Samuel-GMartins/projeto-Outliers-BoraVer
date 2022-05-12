console.log('Js Index')

let user = localStorage.emailUser
let bemVindo = document.querySelector('#bemVindo')
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')


//console.log(user.indexOf('@')) // Devolve a quantidade de caracteres que antecede o pedido
//console.log(user.substring(0,user.indexOf('@'))) // Devolve a string do 0 até 0 @, independete da qtd de Caracteres

function msgUser(){
    let nomeUser = user.substring(0,user.indexOf('@'))
    bemVindo.innerHTML='Olá, <b>' + nomeUser + '</b>'
    entrar.style.display="none"
}

function resetUser(){
    sair.style.display="none"
}

sair.onclick=function(){
    localStorage.removeItem('emailUser')
    location.href='index.html'
}

// localStorage.emailUser ? bemVindo.innerHTML = 'Olá, ' + user : null //
localStorage.emailUser ? msgUser() : resetUser()