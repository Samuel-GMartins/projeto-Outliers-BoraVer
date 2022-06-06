console.log('Teste')

//id produto = produto1
//id telas = tela1 (input)
//id quatidade = qtd1 
//id preço = pre1 
//id excluir = ex1

//valores filmes
var preco1 =  12.90
var preco2 = 9.90
var preco3 = 9.90

//input telas
let input1 = document.querySelector("#tela1")
let input2 = document.querySelector("#tela2") 
let input3 = document.querySelector("#tela3")


function q (el){
    return document.querySelector(el)
}
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CALCULO PORCENTAGEM E SUBTOTAL

let carrinho
let result1 = 0
let result2 = 0
let result3 = 0


function calcularCarrinho(){
    carrinho = 0
    q("#subTotal").innerHTML = 'R$ 00,00'

    if (result1==null){
        carrinho = parseFloat(result2) + parseFloat(result3) 
    }
    else if(result2==null){
        carrinho = parseFloat(result1) + parseFloat(result3)
    }
    else if(result3==null){
        carrinho = parseFloat(result1) + parseFloat(result2)
    }
    else if(result1,result2,result3 != null){
        carrinho = parseFloat(result1) + parseFloat(result2) + parseFloat(result3)
    }
    else if(result1 != null){
        carrinho = parseFloat(result1)
    }
    else if (result2 != null){
        carrinho = parseFloat(result2)
    }
    else if(result3 != null){
        carrinho = parseFloat(result3)
    }
    q("#subTotal").innerHTML = `R$ ${carrinho.toFixed(2)}`
}

function alteraCarrinho(){
    console.log(input1.value)
    let pct = (input1.value * 0.07) * preco1
    result1 = (preco1 + pct).toFixed(2)
    pre1.innerHTML= 'R$ ' + result1
    calcularCarrinho();
}

function alteraCarrinho2(){
    console.log(input2.value)
    let pct = (input2.value * 0.07) * preco2
    result2 = (preco2 + pct).toFixed(2)
    pre2.innerHTML= 'R$ ' + result2
    calcularCarrinho();
}

function alteraCarrinho3(){
    console.log(input3.value)
    let pct = (input3.value * 0.07) * preco3
    result3 = (preco3 + pct).toFixed(2)
    pre3.innerHTML= 'R$ ' + result3
    calcularCarrinho();
}

q("#tela1").addEventListener("change",alteraCarrinho)
q("#tela2").addEventListener("change",alteraCarrinho2)
q("#tela3").addEventListener("change",alteraCarrinho3)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//FUNÇÃO EXCLUIR PRODUTOS

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
  }

document.querySelector('#bt_p2').onclick=function(){
    confirm("Tem certeza de que deseja excluir esse produto?")
    excluir.excluirProduto(document.querySelector('#produto2'),'')
  }

btP3.onclick=function(){
    confirm("Tem certeza de que deseja excluir esse produto?")
    excluir.excluirProduto(document.querySelector('#produto3'),'')
  }

limparCarrinho.onclick=function(){
    confirm("Tem certeza de que deseja esvaziar seu carrinho?")
    excluir.excluirProduto(document.querySelector('#limparCarrinho'),'SEU CARRINHO ESTÁ VAZIO')
    document.querySelector("#produtos").innerHTML = "Não há produtos em seu carrinho."
    subTotal.innerHTML="Subtotal R$ 00,00"
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
    desconto.innerHTML="Descontos R$ 00,00"
    total.innerHTML="Total R$ 00,00"
}
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CALCULO DESCONTO CUPOM

console.log(parseFloat(subTotal))

let valor = parseFloat(calcularCarrinho.carrinho)
console.log(Number(valor))


q('#btCupom').onclick=function(){
    if(formDesconto.cupom.value == "CUPOM123"){
        let calculoDesconto = parseFloat((valor * 10) / 100 );
        let total = parseFloat(valor) - parseFloat(calculoDesconto);
        q("#desconto").innerHTML = 'R$ ' + parseFloat(total).toFixed(2)
        console.log(total)
        console.log(calculoDesconto)
        console.log(valor)
    }
    // else if(formDesconto.cupom.value == "CUPOM456"){
    //     let calculoDesconto = parseFloat( ( valor * 20 ) / 100 );
    //     total = parseFloat(valor) - parseFloat(calculoDesconto);
    //     q("#desconto").innerHTML = 'R$ ' + parseFloat(total).toFixed(2)
    //     console.log(total)
    // }
    // else if(formDesconto.cupom.value != "CUPOM123" || "CUPOM456"){
    //     alert("Ops, cupom inválido!")
    // }
    else{
        formDesconto.submit()
    }
    q("#btCupom").setAttribute("disabled",true)
  }