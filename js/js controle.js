console.log(document.forms.formContato)
var formC=document.forms.formContato
document.querySelector("#btContato").onclick=function(){
    
if(formC.nomeContato.value == "") {
    alert("Preencha o nome !")
}else if (formC.sobrenomeContato.value == ""){
    alert("Preencha o sobrenome !")
}else if (formC.emailContato.value == ""){
    alert("Preencha o email!")
}else if (formC.telefoneContato.value == ""){
    alert("Preencha o telefone!")
}else if (formC.senhaContato.value == ""){
    alert("Preencha a senha!")
}else if(formC.confirmacaoSenhaContato.value != formC.senhaContato.value ){
    alert ("Senhas diferentes")
}else{
    formC.submit()
}
}
