
console.log(document.querySelector("h1"))

document.querySelector("h1").innerHTML+=""

console.log(document.forms.formCadastro)
var formC=document.forms.formCadastro
//Evento de clique no botão confirmar
document.querySelector("#btCadastro").onclick=function(){
    //alert('ok')
    if(formC.nomeCadastro.value == ""){
        alert("Preencha o nome!")
    }else if(formC.emailCadastro.value == ""){
        alert("Preencha o e-mail!")
    }else if(formC.telefoneCadastro.value == ""){
        alert("Preencha o telefone!")
    }else if(formC.senha.value == ""){
            alert("Preencha a senha!")
    }else if(formC.senhaC.value == ""){
                alert("Confirme a senha!")
            }else if(formC.senhaC.value !== formC.senha.value){
                alert("A senha não confere!")
    }else{
        formC.submit()
        localStorage.emailUser=formC.emailCadastro.value 
        localStorage.nomeUser=formC.nomeCadastro.value
        localStorage.telefoneUser=formC.telefoneCadastro.value
        localStorage.senhaUser=formC.senha.value
       // localStorage.confsenhaUser=formC.telefoneCadastro.value

    }

  //  alert(document.forms.formContato.nomeContato.value)
    //alert(document.forms.formContato.emailContato.value)
    //alert(document.forms.formContato.comentario.value)
}
