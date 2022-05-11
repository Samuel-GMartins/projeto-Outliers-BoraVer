var livros = [
    ["Corra","corra.jpeg","Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Com o tempo, ele percebe que a família dela esconde algo muito perturbador.","Categoria: Suspense","Ano de lançamento: 18 de Maio de 2017"],
    ["A Hora do Hush","bateroucorrer.jpeg", "A filha de um diplomata chinês é sequestrada em Los Angeles e o cônsul chama o inspetor Lee em Hong Kong para ajudar o FBI com o caso. A agência americana não se importa com Lee e o deixa de lado no Departamento de Polícia de Los Angeles, pedindo ao detetive James Carter que o vigie. Apesar de Lee e Carter não se suportarem, eles resolvem trabalhar juntos para resolver o caso por conta própria ao descobrirem que foram abandonados tanto pelo FBI quanto pela polícia.","Categoria: Comédia","Ano de Lançamento: 18 de Setembro de 1998"],
    ["Como eu Era Antes de Você","comoeueraantesdevc.jpeg", "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.", "Categoria: Romance", "Ano de Lançamento: 16 de Junho de 2016"],
    ["A Freira","afreira.jpeg", "Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.","Categoria: Terror","Ano de Lançamento: 6 de Setembro de 2018"]
]
console.log(livros)
var galeria = document.querySelector("#galeria")
for(var i = 0; i<livros.length;i++){
var div=document.createElement('div');
div.classList.add('col-sm-4')
div.classList.add('mt-3')
var conteudo=document.createElement('div')
conteudo.className='row'
var descricao = '<p>' + (livros[i][2]).substring(0,80) + '...' + '</p>'
var categoria = '<p><strong>' + livros[i][3] + '</strong></p>'
var ano = '<p><strong>' + livros[i][4] + '</strong></p>'
    conteudo.innerHTML+='<h3 class="col-sm-12">'+livros[i][0]+'</h3>'
    conteudo.innerHTML+='<div class="col-sm-6"><img src="imagens/' + livros[i][1] + '" class="w-100" /></div>'
    conteudo.innerHTML+='<div class="col-sm-6">' + categoria + ano + descricao + '</div>'
    div.appendChild(conteudo)
galeria.appendChild(div)
}