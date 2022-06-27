trailer0 = [
  'https://www.youtube.com/embed/Nq5AzqV8iHg',
  'https://www.youtube.com/embed/pVcMsjyKlaM',
  'https://www.youtube.com/embed/YeQoQNZq7wg'
  ]
  
  trailer1 = [
  'https://www.youtube.com/embed/I3CpaqCK9B0',
  'https://www.youtube.com/embed/elKdcx9ar3k',
  'https://www.youtube.com/embed/iRh2kF-1X2E'
  ]
  
  trailer2 = [
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
  
  
  // Titulo e imagem em LocalStorage
  var filme1 = document.querySelector('#filme1').innerHTML = 'A Hora do Rush'
  var filme2 = document.querySelector('#filme2').innerHTML = 'Shrek'
  var filme3 = document.querySelector('#filme3').innerHTML = 'Homem Aranha: Sem Volta para Casa'
  var filme4 = document.querySelector('#filme4').innerHTML = 'Em defesa de Cristo'
  var filme5 = document.querySelector('#filme5').innerHTML = 'A Freira'
  var filme6 = document.querySelector('#filme6').innerHTML = 'Corra'
  
  
  //Salva em localStorage
      function local(titulo,url) {
          this._titulo = titulo
          this._url = url
          localStorage.setItem(_titulo,_url)
      }
  


  //Não repetir trailer
      // const desordenar = (arr) => {
      //     const copia = [...arr];
        
      //     for (let i = copia.length - 1; i > 0; i--) {
      //       let j = Math.floor(Math.random() * (i + 1));
      //       [copia[i], copia[j]] = [copia[j], copia[i]];
      //     }
          
      //     return copia;
      //   };
        
      //   const desordenado = desordenar([
      //   'https://www.youtube.com/embed/oQMc7Sq36mI',
      //   'https://www.youtube.com/embed/SCv70SAhuE4',
      //   'https://www.youtube.com/embed/d2M5ObsKw4Y',
      //   'https://www.youtube.com/embed/2GwMMUfOF9g',
      //   'https://www.youtube.com/embed/Nq5AzqV8iHg',
      //   'https://www.youtube.com/embed/pVcMsjyKlaM',
      //   'https://www.youtube.com/embed/IHS99AeecB8',
      //   'https://www.youtube.com/embed/YeQoQNZq7wg',
      //   'https://www.youtube.com/embed/iRh2kF-1X2E',
      //   'https://www.youtube.com/embed/elKdcx9ar3k'
      // ])
  
      //    document.querySelector('#trailerCab1').src = (desordenado.shift())
      //    document.querySelector('#trailerCab2').src = (desordenado.shift())
      //    document.querySelector('#trailerCab3').src = (desordenado.shift())