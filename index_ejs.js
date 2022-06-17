
(async()=>{
const express =  require('express')
const app = express()
const db =require("./db.js")
const url = require("url")
const bodyParser = require("body-parser")
const session = require("express-session")

const port = 8080

app.set("view engine","ejs")

const dia = 1000 * 60 * 60 * 24;
const min15 = 1000 * 60 * 60 / 4;



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('projetoGrupo3-Outliers'))
app.use("/imagens",express.static("imagens"))
app.use("/css",express.static("css"))
app.use("/js",express.static("js"))
app.use("/admin",express.static("admin"))
app.use("/Banco de Dados",express.static("Banco de Dados"))

const options ={
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
        tableName: 'session_tbl',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }  
}
await db.makeSession(app,options,session)

function checkFirst(req, res, next) {
if (!req.session.userInfo) {
  res.redirect('/promocoes');
} else {
  next();
}
}

function checkAuth(req, res, next) {
if (!req.session.userInfo) {
  res.send('Você não está autorizado para acessar esta página');
} else {
  next();
}
}
var userInfo=''
app.locals.info = {
user:userInfo
}

const consulta = await db.selectFilmes() 

app.get("/login",async(req,res) => {
    res.render(`login`, {
        titulo:"Entrar - xx"
    })
})

app.post("/login",async(req,res)=>{
    let info = req.body
    let consultaUsers = await db.selectUsers(info.email,info.senha)
    consultaUsers == '' ? res.redirect("/mensagemAlert") : res.redirect("/")
    const s = req.session
    consultaUsers != '' ? s.nome = info.nome : null
})

app.get("/mensagemAlert",(req,res)=>{
    res.render(`mensagemAlert`,{filme:consulta})
})

app.get("/",checkFirst,(req,res)=>{
    res.render(`index`,{filme:consulta})
})

app.get("/faq",(req,res)=>{
    res.render(`faq`,{filme:consulta})
})

app.get("/cadastro",(req,res)=>{
    res.render(`cadastro`)
})

app.get("/carrinho",checkAuth,async(req,res)=>{
    const consultaCarrinho = await db.selectCarrinho()    
    res.render(`carrinho`,{
        titulo:"",
        promo:"", 
        filme:consulta,
        carrinho:consultaCarrinho       
    })
})

app.post("/carrinho",async(req,res)=>{
    const info = req.body
    await db.insertCarrinho({
        produto:info.produto,
        qtd:info.qtd,
        preco:info.preco,        
        filmes_id:info.filmes_id,
        fotos:info.fotos,                  
    })
    res.send(req.body)
})

app.post("/delete-carrinho",async(req,res)=>{
    const info = req.body
    await db.deleteCarrinho(info.id)
    res.send(info)
})

app.get("/contato",(req,res)=>{
    res.render(`contato`)
})


app.get("/perfilUsuario",(req,res)=>{
    res.render(`perfilUsuario`)
})

app.get("/produtos",(req,res)=>{
    res.render(`produtos`,{produto:consulta})
})

app.get("/single-preferencia",(req,res)=>{
    res.render(`single-preferencia`)
})

app.get("/single-produto",async(req,res) => {
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true) // ?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)


    res.render(`single-produto`, {
        titulo:"Conheça nossos livros", 
        promo:"Todos os livros com 10%OFF !",
        livro: consulta,
        galeria: consultaSingle,
        inicio: consultaInit
        })
})

app.get("/promocoes",async(req,res)=>{
    const consultaPromo=await db.selectPromo()
    res.render(`promocoes`,{
    produto:consultaPromo
    })
})

app.get("/cadastro",async(req,res) => {
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true) // ?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)

    res.render(`cadastro`, {
        titulo:"Conheça nossos livros", 
        promo:"Todos os livros com 10%OFF !",
        })
})

app.post("/cadastro",async(req,res)=> {
    const info=req.body
    await db.cadastroContato({
    nome:info.nome,
    email:info.email,
    data_nascimento: info.data_nascimento,
    data_cadastro: info.data_cadastro,
    telefone:info.telefone,
    senha:info.senha
})
    res.redirect("/login")
})


//////////// ==> ADMINISTRADOR <== ///////////

app.get("/indexAdmin",(req,res)=>{
    res.render(`admin/indexAdmin`)
})


app.get("/relatorio-chamada",(req,res)=>{
    res.render(`admin/relatorio-chamada`)
})

app.get("/relatorioComercial",(req,res)=>{
    res.render(`admin/relatorioComercial`)
})

app.get("/cadastroProduto",(req,res)=>{
    res.render(`admin/cadastroProduto`)
})

app.post("/cadastroProduto",async(req,res)=>{
    const info=req.body
    await db.insertFilmes({
        titulo:info.tituloFilme,
        genero:info.categoriaFilme,
        ano:info.anoDeLancamento,
        preco:info.preco,
        sinopse:info.sinopseFilme,
        fotos:info.fotos,
        trailer:info.trailer      
    })
    res.redirect("/cadastroProduto")
})

app.get("/cadastroAdmin",async(req,res) => {
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true) // ?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)

    res.render(`admin/cadastroAdmin`, {
        titulo:"Conheça nossos livros", 
        promo:"Todos os livros com 10%OFF !",
        })
})

app.post("/cadastroAdmin",async(req,res)=> {
    const info=req.body
    await db.cadastroAdmin({
    nome:info.nome,
    email:info.email,
    data_nascimento: info.data_nascimento,
    data_cadastro: info.data_cadastro,
    telefone:info.telefone,
    senha:info.senha,
    tipo_usuario: info.tipo_usuario
})
    res.redirect("/cadastroAdmin")
})

app.get("/upd-promo", async(req,res)=>{
    let qs = url.parse(req.url,true).query
    await db.updatePromo(qs.promo,qs.id)
    res.render(`admin/atualiza-promocoes`,{
        titulo:"Conheça nossos filmes",
        promo:"Todos os filmes com 10% de desconto!",
        filmes:consulta,
        galeria:consulta   
        })
})

app.get("/atualiza-promo",async(req,res)=>{
    // let infoUrl = req.url
    let qs = url.parse(req.url,true).query
     await db.updatePromo(qs.promo,qs.id)
     res.send("<h2>Lista de Promoções Atualizada!</h2><a href='./'>Voltar</a>")
})

app.get("/loginAdmin",async(req,res) => {
    res.render(`admin/loginAdmin`, {
        titulo:"Entrar - xx"
    })
})

app.post("/loginAdmin",async(req,res)=>{
    let info = req.body
    let consultaUsers = await db.selectUsersAdmin(info.email,info.senha)
    consultaUsers == '' ? res.redirect("/mensagemAlert") : res.redirect("/indexAdmin")
    const s = req.session
    consultaUsers != '' ? s.nome = info.nome : null
})

//////////// ==> FIM DO ADMINISTRADOR <== ///////////

app.listen(port,()=> console.log("Servidor rodando com nodemon!"))

})()


