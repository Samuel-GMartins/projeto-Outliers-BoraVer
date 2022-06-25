const session = require("express-session")
const mysqlSession = require("express-mysql-session")(session)

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
async function makeSession(app,opt){
    
    const dia = 1000 * 60 * 60 * 24;
    const min15 = 1000 * 60 * 60 / 4;
    const conectado = await conecta()

    const  sessionStore = new mysqlSession(opt,conectado)
    app.use(session({
        secret: "hrgfgrfrty84fwir767",
        saveUninitialized:false,
        store:sessionStore,
        cookie: { maxAge: dia},
        resave: false 
    }))

}

async function selectUsers(email,senha){
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario WHERE email=? AND senha=?", values)
    //console.log(rows)
    return rows
}

async function selectUsersAdmin(email,senha){
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario WHERE email=? AND senha=? AND tipo_usuario=1", values)
    //console.log(rows)
    return rows
}

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes")
     return rows
}

async function selectFilmesRelatorio(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes ORDER BY filmes_id DESC")
     return rows
}

async function selectChamada(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM chamada")
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
async function updateProduto(titulo,genero,sinopse,fotos,preco,promo,trailer,id){  //==Luciene 23-06 
    const conectado = await conecta();
    const values = [titulo,genero,sinopse,fotos,preco,promo,trailer,id]
    return await conectado.query("UPDATE filmes set titulo=?,genero=?,sinopse=?,fotos=?,preco=?,promo=?,trailer=? Where filmes_id=?",values)
}  

async function cadastroContato(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.data_nascimento,usuario.telefone,usuario.senha]
    const [rows] = 
    await conectado.query("INSERT INTO usuario(nome,email,data_nascimento,telefone,senha) VALUES (?,?,?,?,?)",values)
    return rows
}

async function cadastroAdmin(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.data_nascimento,usuario.telefone,usuario.senha,usuario.tipo_usuario]
    const [rows] = 
    await conectado.query("INSERT INTO usuario(nome,email,data_nascimento,telefone,senha,tipo_usuario) VALUES (?,?,?,?,?,?)",values)
    return rows
}

async function insertFilmes(filmes){
    const conectado = await conecta() 
    const values = [filmes.titulo,filmes.genero,filmes.sinopse,filmes.fotos,filmes.preco,filmes.promo,filmes.trailer]
    const [rows] = 
    await conectado.query("INSERT INTO filmes(titulo,genero,sinopse,fotos,preco,promo,trailer) VALUES (?,?,?,?,?,?,?)",values)      
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

async function insertChamada(chamada){
    const conectado = await conecta()
    const values = [chamada.nome,chamada.email,chamada.telefone,chamada.assunto,chamada.comentario,chamada.atendimento]
    const [rows] = 
    await conectado.query("INSERT INTO chamada(nome,email,telefone,assunto,comentario,atendimento) VALUES (?,?,?,?,?,0)",values)
    return rows
}

async function naoAtendidas(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM chamada WHERE atendimento=0")
     return rows
}

async function atendidas(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM chamada WHERE atendimento=1")
     return rows
}

async function selectNaoAtendidas(){
    const conectado = await conecta() 
    const [rows] = await conectado.query("SELECT * FROM chamada WHERE atendimento=0")      
    return rows
}

async function selectDev(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM dev")
     return rows
}
async function deleteSingle(titulo,genero,sinopse,fotos,preco,promo,trailer,id){  //== Luciene 23-06 
    const conectado = await conecta();
    const values = [titulo,genero,sinopse,fotos,preco,promo,trailer,id]    
    return await conectado.query("DELETE FROM filmes WHERE filmes_id=?",values)    
}

module.exports ={
    selectFilmes,
    selectSingle,
    selectChamada,
    updatePromo,
    updateProduto,
    selectPromo,
    insertFilmes,
    selectUsers,
    insertCarrinho,
    deleteCarrinho,
    selectCarrinho,
    cadastroContato,
    cadastroAdmin,
    selectUsersAdmin,
    makeSession,
    insertChamada,
    naoAtendidas,
    atendidas,
    selectNaoAtendidas,
    selectFilmesRelatorio,
    selectDev,
    deleteSingle
}