console.log("Agora essa bagaceira vai")

//id produto = produto1
//id telas = tela1 (input)
//id quatidade = qtd1 
//id preço = pre1 
//id excluir = ex1

// //valores filmes
var preco1 = 12.90
var preco2 = 9.90
var preco3 = 9.90


//imprimir em tela valores
var totalPreco = preco1+preco2+preco3


//nome de funções e calculos produto

let valorTela1 = 0 
    if(localStorage.getItem('subtotalTelas1')!=null){
        valorTela1 = parseFloat(localStorage.getItem('subtotalTelas1'))
    }

let valorTela2 = 0 
    if(localStorage.getItem('subtotalTelas2')!=null){
        valorTela2 = parseFloat(localStorage.getItem('subtotalTelas2'))
    }

let valorTela3 = 0 
    if(localStorage.getItem('subtotalTelas3')!=null){
        valorTela3 = parseFloat(localStorage.getItem('subtotalTelas3'))
    }

subTotal.innerHTML = 'Subtotal R$ ' + (valorTela1 + valorTela2 + valorTela3).toFixed(2)





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Função calcular input telas e gravar em localStorage

let input1 = tela1
let input2 = tela2 
let input3 = tela3

function calcular(input,preco){
        let result=(input.value * preco).toFixed(2)
    
    parseFloat(document.querySelector("#total")) + result
    }
    
    function calcularPorcentagem(input,preco,el,preco2){
        let pct = (input.value * 0.07) * preco
        localStorage.setItem(el,(preco + pct).toFixed(2))
        preco2.innerHTML= 'R$ ' + (el,(preco + pct)).toFixed(2)
    }


input1.addEventListener('change', function(){
    calcular(input1,preco1),
    calcularPorcentagem(input1,preco1,'subtotalTelas1',pre1)
    window.addEventListener("load",calcularPorcentagem(preco2.innerHTML))
})

input2.addEventListener('change', function(){
    calcular(input2,preco2),
    calcularPorcentagem(input2,preco2,'subtotalTelas2',pre2)
})

input3.addEventListener('change', function(){
    calcular(input3,preco3),
    calcularPorcentagem(input3,preco3,'subtotalTelas3',pre3)
})

    


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Função excluir produtos

let limparCarrinho = document.querySelector('#bt_limparCarrinho')
let btP3 = document.querySelector('#bt_p3')

let excluir = {
    excluirProduto:function(el,produto){
        el.innerHTML=produto

    }
}



document.querySelector('#bt_p1').onclick=function(){
    confirm("Tem certeza de que deseja excluir esse produto?")
    excluir.excluirProduto(document.querySelector('#produto1'),'')
    localStorage.removeItem('subtotalTelas1')
    // this.addEventListener('click', function)
  }

document.querySelector('#bt_p2').onclick=function(){
    confirm("Tem certeza de que deseja excluir esse produto?")
    excluir.excluirProduto(document.querySelector('#produto2'),'')
    localStorage.removeItem('subtotalTelas2')
  }

btP3.onclick=function(){
    confirm("Tem certeza de que deseja excluir esse produto?")
    excluir.excluirProduto(document.querySelector('#produto3'),'')
    localStorage.removeItem('subtotalTelas3')
  }

limparCarrinho.onclick=function(){
    confirm("Tem certeza de que deseja esvaziar seu carrinho?")
    excluir.excluirProduto(document.querySelector('#limparCarrinho'),'SEU CARRINHO ESTÁ VAZIO')
    document.querySelector("#produtos").innerHTML = "Não há produtos em seu carrinho."
    localStorage.clear()
    subTotal.innerHTML="Subtotal R$ 00,00"
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Função Cupom

let valorTotal = document.getElementById("#subTotal")

function cupomDesconto(el){
    document.getElementById("#desconto") = 0;
    let calculoDesconto = parseFloat( ( valorTotal * el ) / 100 );
    total = parseFloat(valorTotal) - parseFloat(calculoDesconto);

    document.querySelector("#desconto").innerHTML = 'R$ ' + parseFloat(total).toFixed(2)
}

document.querySelector('#btCupom').onclick=function(){
    if(formDesconto.cupom.value == "CUPOM123"){
        cupomDesconto(10)
        console.log(total)
    }else if(formDesconto.cupom.value == "CUPOM456"){
        cupomDesconto(20)
    }else if(formDesconto.cupom.value != "CUPOM123", "CUPOM456"){
        alert("Ops, cupom inválido!")
    }else{
        formDesconto.submit()
    }
  }