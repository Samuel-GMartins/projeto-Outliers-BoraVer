var formL = document.forms.formLogin

//Evento de clique do botão confirmar
document.querySelector("#btLogin").onclick = function () {
    if (formL.email.value == "") {
        alert("Preencha o e-mail!")
    } else if (formL.senha.value == "") {
        alert("Preencha o senha!")
    } else {
        formL.submit();
        localStorage.emailUser = formL.email.value
    }
}