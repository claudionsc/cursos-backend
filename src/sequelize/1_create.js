const models = require('../models')

// usar o sync apenas em testes, nunca em produção
async function create(){
    await models.sequelize.sync({force: true})//deleta todas as tabelas do bd e cria de novo
    // await models.sequelize.sync()
    await models.sequelize.close()//fecha a conexão
  
    console.log('-->OK!<--');
  }
  create()