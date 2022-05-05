// Caso coloque a chamanda dentro do <head>
// use window.onload(){ ... Seu codigo todo aqui...}
// window.onload=function(){

//     // codigo aqui
// }


console.log('Hello World!')
document.querySelector("h1").innerHTML+=" >>" // Seleciona o h1 e troca o html para   "Teste"

// Acesso a um elemento de Formulário
console.log(document.forms.formContato)

// Atribuindo o acesso ao formContato para a variavel formC
var formC = document.forms.formContato

// Evento de click no botao confirmar
document.querySelector("#btContato").onclick=function(){
    // alert("ok")
    // /input de nome / valor desse campo
    if (formC.nameContato.value == ""){
        alert("Preencha o nome !")
    }
    else if (formC.emailContato.value == ""){
        alert("E-mail Obrigatório !")
    }
    else if (formC.comentarioContato.value == ""){
        alert("Ainda não aprendi a linguagem do silêncio, Desculpe! :( ")
    }
    else {
        formC.submit();
    }

    // alert(formC.nameContato.value)
    // alert(formC.emailContato.value)
    // alert(formC.comentarioContato.value)

}