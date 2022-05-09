console.log("testando Js")

var livros = [
    ["A Freira", "afreira.jpeg"],
    ["A hora Do Rush", "bateroucorrer.jpeg"],
    ["Como eu era antes de Você", "comoeueraantesdevc.jpeg"],
    ["Corra", "corra.jpeg"],
    ["Em Defesa de Cristo", "cristo.jpeg"],
    ["Homem Aranha: Sem volta para Casa", "semvoltapracasa.jpeg"],
    ["Sherek", "sherek.jpeg"],
    ["Tô Ryca", "toryca.jpeg"],
    ["Veloses e Furiosos", "velosesefuriosos.jpeg"],


]
console.log(livros)

var galeria = document.querySelector("#galeria")

for (var i = 0; i < livros.length; i++) {
    var img = new Image()
    img.src = "imagens/" + livros[i][1]
    img.width = 120
    galeria.innerHTML += "<p>" + "<strong>" + livros[i][0] + "<br />"
    galeria.appendChild(img)
}