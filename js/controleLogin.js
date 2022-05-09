document.querySelector("h1").innerHTML = "Login"
//atribuindo o acesso ao formLogin para a variavel formC
var formC = document.forms.formLogin

//Evento de clique do botão confirmar
document.querySelector("#btLogin").onclick=function() {
    if (formC.nomeLogin.value == ""){
        alert("Preencha o nome")
    } else if (formC.senhaLogin.value == "") {
        alert("Preencha a senha")
    } else {
        formC.submit();
    }
}
