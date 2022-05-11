console.log("testando js")
var livros = [
    ["Cura Quântica","cura-quantica.jpeg"],["Mick","mick.jpeg"],["O Pequeno Principe","pequeno-principe.jpeg"],["Quem Somos Nós","quem-somos-nos.jpeg"]
]
console.log(livros)
var galeria = document.querySelector("#galeria")
for(var i = 0; i<livros.length;i++){
    var img = new Image()
    img.src="imagens/" + livros[i][1]
    img.width=120
 galeria.innerHTML+="<p>" +livros[i][0] + "</p>"
 galeria.appendChild(img)
}