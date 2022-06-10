async function conecta(){
    const mysql=require("mysql2/promise")
    const conn= await mysql.createConnection({
        host:"localhost",
        user:"priallmeida",
        password:"Pri1234#@",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}
//conecta()

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes")
    //console.log(rows)
     return rows
}

//selectFilmes()

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM filmes WHERE filmes_id=?",values)
    //console.log(rows)
    return rows
}

async function selectPromo(){
    const conectado = await conecta() 
    const [rows] = await conectado.query("SELECT * FROM filmes Where promo=1")  
    //console.log(rows)
    return rows
}
async function updatePromo(promo,id){
    const conectado = await conecta();
    const values = [promo,id]
    return await conectado.query("UPDATE filmes set promo=? where filmes_id=?",values)
  }
  
  //updatePromo(1,3)

  async function insertUsuario(usuario){
    const conectado = await conecta() 
    const values = [usuario.nome,usuario.email,usuario.data_nascimento,usuario.data_cadastro,usuario.telefone,usuario.senha]
    const [rows] = 
    await conectado.query("INSERT INTO usuario(nome,email,data_nascimento,data_cadastro,telefone,senha) VALUES (?,?,?,?,?,?)",values)  
    console.log("Insert ok!")
    return rows
}

async function insertFilmes(filmes){
    const conectado = await conecta() 
    const values = [filmes.titulo,filmes.genero,filmes.ano,filmes.sinopse,filmes.fotos,filmes.promo]
    const [rows] = 
    await conectado.query("INSERT INTO filmes(titulo,genero,ano,sinopse,fotos,promo) VALUES (?,?,?,?,?,?)",values)  
    console.log("Insert ok!")
    return rows
}
//insertFilmes({
  //  titulo:"A Bela e Fera",
  //  genero:"Infantil",
  //  ano:"1700",
  //  sinopse:"Eles se amam",
  //  fotos:"lixeira.png",
  //  promo:"1"
//})

module.exports ={
    selectFilmes,
    selectSingle,
    updatePromo,
    selectPromo,
    insertUsuario,
    insertFilmes
}