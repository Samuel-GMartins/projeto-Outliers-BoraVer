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


function trocaProduto(){
    tr = trailer
    let trailerRandom1 = document.querySelector('#trailerRandom1').src = tr [Math.floor(Math.random() * trailer.length)]
    let trailerRandom2 = document.querySelector('#trailerRandom2').src = tr [Math.floor(Math.random() * trailer.length)]
    let trailerRandom3 = document.querySelector('#trailerRandom3').src = tr [Math.floor(Math.random() * trailer.length)]

}


//exibe os vídeos ao carregar a página
    trocaProduto()