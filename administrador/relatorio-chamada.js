
var i=0
let listaUsers=[]
let listaResult=[]
var chArray=[]

for (key in localStorage) {
    //Verifica as chaves
    if(i<localStorage.length){
        if(key.includes('chamado')){
            var ch = JSON.parse(localStorage.getItem(key))
            chArray.push(ch)
        
            var p = document.createElement('p')
            document.querySelector('#nome').innerHTML += "<li>" + chArray[i][0] + "</li>"
            document.querySelector('#email').innerHTML += "<li>" + chArray[i][1] + "</li>"
            document.querySelector('#telefone').innerHTML += "<li>" + chArray[i][2] + "</li>"
            document.querySelector('#assunto').innerHTML += "<li>" + chArray[i][3] + "</li>"
            listaUsers.push(chArray[i][0])
            i++
            } 
    }
}  
let btAtende= document.querySelector("#btAtende")

//evento click do botão atendimento
document.querySelector("#btAtende").onclick=function(){
        darBaixa();
        users()
    }

    //Remove os itens atendidos
    function darBaixa(){
        if (listaUsers.length > 0){
            listaResult.push(listaUsers[0])
            listaUsers.shift()
            document.querySelector("#result").innerHTML=""
        for(var i=0;i<listaResult.length;i++){
            document.querySelector("#result").innerHTML+="<li>" + listaResult[i] + "</li>"
         }
     }  
     listaUsers.length > 0 ? document.querySelector("#next").innerHTML=listaUsers[0] : null
}
    //Exibe os clientes não atendidos
    function users(){
        if (listaUsers.length >= 0){
             document.querySelector("#users").innerHTML=""
        for(var i=0;i<listaUsers.length;i++){
            document.querySelector("#users").innerHTML+="<li>" + listaUsers[i] + "</li>"
         }
     } 
        listaUsers.length == 0 ? document.querySelector("#next").innerHTML='<b>Todos os clientes foram atendidos</b>' :null
       
    }

//Exibe os clientes não atendidos ao carregar a página    
users()