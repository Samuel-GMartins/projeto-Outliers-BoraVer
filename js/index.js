let user = localStorage.emailUser
let bemVindo = document.querySelector('#bemVindo')
let entrar = document.querySelector('#entrar')
let cadastrar = document.querySelector('#cadastro')
let sair = document.querySelector('#sair')

 //Devolve a string do 0 até 0 @, independete da quantidade de caracteres
function msgUser() {
    let nomeUser = user.substring(0, user.indexOf('@'))
    bemVindo.innerHTML = '<span id="entrarSair">Olá, <b>' + nomeUser + '</span></b>'
    entrar.style.display = "none"
    cadastrar.style.display = "none"
}

function resetUser() {
    sair.style.display = "none"
}

sair.onclick = function () {
    localStorage.removeItem('emailUser')
    location.href = '/'
}

localStorage.emailUser ? msgUser() : resetUser()
