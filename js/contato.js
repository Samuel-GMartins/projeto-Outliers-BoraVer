var formc = document.forms.formContato
var idRandon = parseInt(Math.random() * 90000) + 10000

document.querySelector("#btContato").onclick = function () {
    if (formc.nomecontato.value == "") {

        alert("Preencha o nome!")
    
        } else if (formc.emailcontato.value == "") {
        alert("Preencha o E-mail!")

    }
    
    else if (formc.telcontato.value == "") {
        alert("Digite um telefone!")

    } else if (formc.assuntocontato.value == "") {
        alert("Digite o Assunto do Comentário!")
        
    } else if (formc.mensagemcontato.value == "") {
        alert("Escreva Um Comentário")

    } else if (formc.chamado.checked) {

        let arrPeoples = [formc.nomecontato.value,formc.emailcontato.value,formc.telcontato.value,formc.assuntocontato.value]
        localStorage.setItem('chamado-' + idRandon,arrPeoples)
        
        formc.submit();
    } else {
        formc.submit();
    }
}         

