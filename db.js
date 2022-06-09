async function conecta(){
    const mysql=require("mysql2/promise")
    const conn= await mysql.createConnection({
        host:"localhost",
        user:"lari",
        password:"312406La@.",
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


module.exports ={selectFilmes,selectSingle}