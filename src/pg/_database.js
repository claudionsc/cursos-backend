const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
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
  
