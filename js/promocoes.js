console.log("testando Js")

var filmes = [
    ["A Freira",
        "afreira.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"
    ],

    ["A hora Do Rush",
        "bateroucorrer.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"
    ],

    ["Corra",
        "corra.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!",
    ],

    ["Em Defesa de Cristo",
        "cristo.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!",
    ],

    ["Homem Aranha: Sem volta para Casa",
        "semvoltapracasa.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!",
    ],

    ["Shrek",
        "sherek.jpeg",
        "[CATEGORIA]",
        "[ANO LANÇAMENTO]",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae",

    ],
]

console.log(filmes)
// Galeria Faz acesso ao elemento div com id=Galeria
var galeria = document.querySelector('#galeria')

//Logica de iteração para consumo de array
for (var i = 0; i < filmes.length; i++){
    
    // Cria um Elemento div
    var div = document.createElement('div');

    // Adiciona a classe com espaço 6
    div.classList.add('col-sm-6')
    div.classList.add('mt-5')

    // Cria um Elemento div para o conteudo
    var conteudo = document.createElement('div')

    // Cria uma classe pra div conteudo com nome row
    conteudo.className = 'row'

    //Insere um h3 com Título
    conteudo.innerHTML += '<h3 class="col-sm-12">' + filmes[i][0] + '</h3>'

    // Insere uma Imagem com 100% dentro de uma div espaço 3
    conteudo.innerHTML += '<div class="col-sm-5"><img src="imagens/' + filmes[i][1] + '"class="w-100" /></div>'

    // Insere um parágrafo com a Categoria dentro de uma div espaço X
    //xxxxxxxxxxxxxxx

    // Insere um parágrafo com a Ano dentro de uma div espaço X
    //xxxxxxxxxxxxxxx

    // Insere um parágrafo com a sinopse dentro de uma div espaço X
    conteudo.innerHTML += '<div class="col-sm-6"><p>' + filmes[i][4] + '</p></div>'




    
    // Div Recebe um conteudo
    div.appendChild(conteudo)

    // div recebe div
    galeria.appendChild(div)

}