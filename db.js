async function conecta(){
    const mysql=require("mysql2/promise")
    const conn= await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Cyn32832@",
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


module.exports ={
    selectFilmes,
    selectSingle,
    updatePromo,
    selectPromo
}