console.log("Testando js")

var filmes=[
    ["Mick","mick.jpg"],
    ["Quem somos nós","quem-somos-nos.jpg"],
    ["A cura quântica","cura-quantica.jpg"],
    ["O Pequeno Príncipe","pequeno-principe.jpg"]
]

console.log(filmes)

var galeria=document.querySelector("#galeria")

for(var i=0;i<filmes.length;i++){
    var img = new Image()
    img.src="imagens/" + filmes[i][1]
    img.width=120
    galeria.innerHTML+="<p>" + "<strong>" + filmes[i][0] + "<br />"
    galeria.appendChild(img)
    galeria.innerHTML+="<p>" + filmes[i][2] + 
}