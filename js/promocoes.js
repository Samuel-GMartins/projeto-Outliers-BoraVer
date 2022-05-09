console.log("testando Js")

var filmes = [
    ["A Freira", "afreira.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["A hora Do Rush", "bateroucorrer.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Corra", "corra.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Em Defesa de Cristo", "cristo.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Homem Aranha: Sem volta para Casa", "semvoltapracasa.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Shrek", "sherek.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Tô Ryca", "toryca.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"],
    ["Veloses e Furiosos", "velosesefuriosos.jpeg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore excepturi necessitatibus, iure iusto, odio ullam nihil id maxime reprehenderit sequi pariatur perspiciatis. Aspernatur blanditiis voluptatum provident labore natus repudiandae!"]
]
console.log(filmes)

var galeria = document.querySelector("#galeria")

for (var i = 0; i < filmes.length; i++) {
    var img = new Image()
    img.src = "imagens/" + filmes[i][1]
    img.width = 120
    galeria.innerHTML += "<h1>" + "<strong>" + filmes[i][0] + "<br>"
    galeria.appendChild(img)
    galeria
    galeria.innerHTML += "<p>" + filmes[i][2] + "<hr>"

}