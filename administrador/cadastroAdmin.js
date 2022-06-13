var formC=document.forms.formCadastro
let verSenha = document.querySelector('#verSenha')
let verConfSenha = document.querySelector('#verConfirmeSenha')

//Evento de clique no botão confirmar
document.querySelector("#btCadastro").onclick=function(){
    if(formC.nomeCadastro.value == ""){
        alert("Preencha o nome!")
    }else if(formC.emailCadastro.value == ""){
        alert("Preencha o e-mail!")
    }else if(formC.senha.value == ""){
            alert("Preencha a senha!")
    }else if(formC.senhaC.value == ""){
                alert("Confirme a senha!")
    }else if(formC.senhaC.value !== formC.senha.value){
                alert("A senha não confere!")
    }else{
        formC.submit()
        
        //Salvando dados em localStorage
        localStorage.emailUser=formC.emailCadastro.value 
        localStorage.nomeUser=formC.nomeCadastro.value
        localStorage.telefoneUser=formC.telefoneCadastro.value
        localStorage.senhaUser=formC.senha.value
        localStorage.qualAdm=formC.adms.value
    }
}

 // Evento de clique olhinho
 verSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type' , 'password')
    }
})

 // Evento de clique olhinho confirme senha.
verConfSenha.addEventListener('click', ()=>{
    let inputConfirmeSenha = document.querySelector('#senhaC')

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type', 'text')
    } else {
        inputConfirmeSenha.setAttribute('type' , 'password')
    }
})
