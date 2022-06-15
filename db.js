async function conecta(){
    const mysql=require("mysql2/promise")
    const conn= await mysql.createConnection({
        host:"localhost",
        user:"",
        password:"",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

async function selectUsers(email,senha){
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario WHERE email=? AND senha=?", values)
    //console.log(rows)
    return rows
}

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes")
     return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM filmes WHERE filmes_id=?",values)
    return rows
}

async function selectPromo(){
    const conectado = await conecta() 
    const [rows] = await conectado.query("SELECT * FROM filmes WHERE promo=1")      
    return rows
}

async function updatePromo(promo,id){
    const conectado = await conecta();
    const values = [promo,id]
    return await conectado.query("UPDATE filmes set promo=? WHERE filmes_id=?",values)
}
  

async function cadastroContato(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.data_nascimento,usuario.data_cadastro,usuario.telefone,usuario.senha]
    const [rows] = 
    await conectado.query("INSERT INTO usuario(nome,email,data_nascimento,data_cadastro,telefone,senha) VALUES (?,?,?,?,?,?)",values)
    return rows
}

async function insertFilmes(filmes){
    const conectado = await conecta() 
    const values = [filmes.titulo,filmes.genero,filmes.ano,filmes.sinopse,filmes.fotos,filmes.promo]
    const [rows] = 
    await conectado.query("INSERT INTO filmes(titulo,genero,ano,sinopse,fotos,promo) VALUES (?,?,?,?,?,?)",values)      
    return rows
}


async function selectCarrinho(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM carrinho ORDER BY carrinho_id DESC")    
    return rows
}

async function insertCarrinho(carrinho){
    const conectado = await conecta()
    const values = [carrinho.produto,carrinho.qtd,carrinho.preco,carrinho.filmes_id,carrinho.fotos]
    const [rows] = await conectado.query("INSERT INTO carrinho(produto,qtd,preco,filmes_id,fotos) VALUES (?,?,?,?,?)",values)
    return rows
}

async function deleteCarrinho(id){
    const conectado = await conecta();
    const values = [id]    
    return await conectado.query("DELETE FROM carrinho WHERE carrinho_id=?",values)    
}

module.exports ={
    selectFilmes,
    selectSingle,
    updatePromo,
    selectPromo,
    insertFilmes,
    selectUsers,
    insertCarrinho,
    deleteCarrinho,
    selectCarrinho,
    cadastroContato
}