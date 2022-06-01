// Atualiza um Arquivo, adicionando texto

const fs = require('fs') // file system

fs.appendFile('log-users.txt','Tá Dificil, papai',function(err){
    if(err) throw err
    console.log('Arquivo Atualizado!')
})