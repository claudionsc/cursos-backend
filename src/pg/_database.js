// const Sequelize = require('sequelize')
const {Client} = require('pg')

// const sequelize = new Sequelize({
//   host: 'localhost',
//   database: 'crud-alunos',
//   username: 'postgres',
//   password: 'admin',
//   dialect: 'postgres',
//   port: 5432,
//   logging: true
// })

// module.exports = sequelize

const client = new Client({
  connectionString: process.env.DB_URI,
  ssl: true
})

module.exports = client

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
  
