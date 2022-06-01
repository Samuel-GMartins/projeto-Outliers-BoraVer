// Cria um Arquivo

const fs = require('fs')

fs.writeFile('log-users.txt', 'Teste de node. ',
    function (err) {
        if(err) throw err
        console.log('Arquivo Criado')
    })