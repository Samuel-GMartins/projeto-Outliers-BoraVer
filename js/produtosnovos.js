trailer0 = [
    'https://www.youtube.com/embed/oQMc7Sq36mI',
    'https://www.youtube.com/embed/SCv70SAhuE4',
    'https://www.youtube.com/embed/d2M5ObsKw4Y',
    'https://www.youtube.com/embed/2GwMMUfOF9g',
    'https://www.youtube.com/embed/Nq5AzqV8iHg',
    'https://www.youtube.com/embed/pVcMsjyKlaM',
    'https://www.youtube.com/embed/IHS99AeecB8',
    'https://www.youtube.com/embed/YeQoQNZq7wg'
    ]
    
    trailer1 = [
    'https://www.youtube.com/embed/XNSqIEctTgc',
    'https://www.youtube.com/embed/cubK6qULkfM',
    'https://www.youtube.com/embed/IW9V_S-zWRY',
    'https://www.youtube.com/embed/I3CpaqCK9B0',
    'https://www.youtube.com/embed/elKdcx9ar3k',
    'https://www.youtube.com/embed/iRh2kF-1X2E',
    ]
    
    trailer2 = [
    'https://www.youtube.com/embed/_TWo_iCrJQ8',
    'https://www.youtube.com/embed/ViyvmZreWyc',
    'https://www.youtube.com/embed/kULcXm9V7aY',
    'https://www.youtube.com/embed/AD5cvVk-4Ps',
    'https://www.youtube.com/embed/TVxfkdI2xzc',
    'https://www.youtube.com/embed/zwhzHG2RTc8',
    'https://www.youtube.com/embed/47r8FXYZWNU']
    
    //Exibir trailer aleatório
    function trocaTrailer(){
        tr0 = trailer0
        tr1 = trailer1
        tr2 = trailer2
        let trailerCab1 = document.querySelector('#trailerCab1').src = tr0 [Math.floor(Math.random() * trailer0.length)]
        let trailerCab2 = document.querySelector('#trailerCab2').src = tr1 [Math.floor(Math.random() * trailer1.length)]
        let trailerCab3 = document.querySelector('#trailerCab3').src = tr2 [Math.floor(Math.random() * trailer2.length)]
    
    }
    
    
    //exibe os vídeos ao carregar a página
        trocaTrailer()