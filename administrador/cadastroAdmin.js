console.log(document.querySelector("h1"))

document.querySelector("h1").innerHTML+=""

console.log(document.forms.formCadastro)
var formC=document.forms.formCadastro
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
     }else if(formC.adms.value == ""){
            alert("Você é Adm ou Adm Master?")
    }else{
        formC.submit()
        localStorage.emailUser=formC.emailCadastro.value 
        localStorage.nomeUser=formC.nomeCadastro.value
        localStorage.telefoneUser=formC.telefoneCadastro.value
        localStorage.senhaUser=formC.senha.value
        localStorage.qualAdm=formC.adms.value

    }

}