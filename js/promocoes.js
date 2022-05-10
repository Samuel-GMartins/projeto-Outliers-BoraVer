console.log("Promocoes plmds")
var filmes=[
    ["A Freira","afreira.jpeg"],
    ["Corra!","corra.jpeg"],
    ["Sherek","sherek.jpeg"],
    ["Veloses e Furiosos 9","velosesefuriosos.jpeg"]
    ["Sem Volta Pra Casa",["semvoltapracasa.jpeg"]
]
console.log(filmes)
var galeria=document.querySelector("#galeria")
for(var i=0;i<filmes.length;i++){
    var img = new Image()
    img.src="imagens/" + filmes[i][1]
    img.width=120
    galeria.innerHTML+="<p>" + filmes[i][0] + "</p>"
    galeria.appendChild(img)
}