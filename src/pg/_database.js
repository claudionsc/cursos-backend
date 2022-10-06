const Sequelize = require('sequelize')
const {Client} = require('pg')

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  logging: true,
  ssl: true,
  dialect: 'postgres',
  dialectOptions: {
    "ssl": {"require":true,
    "rejectUnauthorized": false, }
  }
})

module.exports = sequelize

// const client = new Client({
//   connectionString: process.env.DB_URI,
//  ssl: {
//     rejectUnauthorized: false,
//   },
// })

// module.exports = client

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
  
