// array filmes com 3 posições: 0= título 1= imagem 2= descrição
var filmes = [
    ["A Hora do Rush","bateroucorrer.jpeg","Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde maxime quae eveniet molestias quas sequi a, ullam aliquid maiores, iure officiis non. Obcaecati molestiae, autem natus maxime est assumenda."],
    ["Shrek","sherek.jpeg","Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde maxime quae eveniet molestias quas sequi a, ullam aliquid maiores, iure officiis non. Obcaecati molestiae, autem natus maxime est assumenda."],
    ["A Freira","afreira.jpeg","Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde maxime quae eveniet molestias quas sequi a, ullam aliquid maiores, iure officiis non. Obcaecati molestiae, autem natus maxime est assumenda."],
    ["Corra!","corra.jpeg","Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde maxime quae eveniet molestias quas sequi a, ullam aliquid maiores, iure officiis non. Obcaecati molestiae, autem natus maxime est assumenda."]
]

//var galeria faz acesso ao elemento div com id=galeria
var galeria=document.querySelector("#galeria")


//lógica de interação para o consumo do array
for(var i=0;i<filmes.length;i++) {
 
         //cria um elemento div 
         var div=document.createElement('div');
         //adiciona a classe com espaço 6
         div.classList.add('col-sm-6')
         div.classList.add('mt-3')


         //cria um elemrnto div para o conteudo
         var conteudo=document.createElement('div')
         conteudo.className='row'


    //insere o tag h3 com título
    conteudo.innerHTML+='<h3 class="col-sm-12">' + filmes[i][0] + '</h3>'
    //insere a imagem com 100% dentro de uma div espaço 3
    conteudo.innerHTML+='<div class="col-sm-5"><img src="imagens/' + filmes[i][1] + '"class="w-100" /></div>'
    //insere o paragráfo com a resenha dentro de uma div espaço 9
    conteudo.innerHTML+='<div class="col-sm-7"><p>' + filmes[i][2]+'</p></div>'
         //div recebe conteudo
         div.appendChild(conteudo)
         //galeria recebe div
         galeria.appendChild(div)
    
}
