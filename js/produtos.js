trailer = ['https://www.youtube.com/embed/oQMc7Sq36mI',
'https://www.youtube.com/embed/SCv70SAhuE4',
'https://www.youtube.com/embed/d2M5ObsKw4Y',
'https://www.youtube.com/embed/2GwMMUfOF9g',
'https://www.youtube.com/embed/Nq5AzqV8iHg',
'https://www.youtube.com/embed/3MW7sN4uUp8',
'https://www.youtube.com/embed/8YlLuzYJauM',
'https://www.youtube.com/embed/YeQoQNZq7wg',
'https://www.youtube.com/embed/iRh2kF-1X2E',
'https://www.youtube.com/embed/elKdcx9ar3k'
]

botao = document.querySelector('#refresh')

function trocaTrailer(){
    tr = trailer
    let trailerCab1 = document.querySelector('#trailerCab1').src = tr [Math.floor(Math.random() * trailer.length)]
    let trailerCab2 = document.querySelector('#trailerCab2').src = tr [Math.floor(Math.random() * trailer.length)]
    let trailerCab3 = document.querySelector('#trailerCab3').src = tr [Math.floor(Math.random() * trailer.length)]

}

/////////////////////////////////


// Titulo e imagem em LocalStorage
var filme1 = document.querySelector('#filme1').innerHTML = 'Doutor Estranho'

var filme2 = document.querySelector('#filme2').innerHTML = 'A Freira'

var filme3 = document.querySelector('#filme3').innerHTML = 'A Hora do Rush'

var filme4 = document.querySelector('#filme4').innerHTML = 'Em Defesa de Cristo'



    function local(titulo,url) {
        this._titulo = titulo
        this._url = url
        localStorage.setItem(_titulo,_url)
    }

    