const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  logging: true
})

module.exports = sequelize

// Test DB Conenction //
async function test(){
    try{
        let result = await sequelize.authenticate()
        console.log("--->SUCESSO<---")
    }
    catch(error){
        console.error("------->FALHA: ")
        console.error(error)
        process.exit()
    }
  }
  
  test()
  
