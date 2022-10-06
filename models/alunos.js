const Sequelize = require('sequelize')
const client = require('../src/pg/_database')

const AlunosModels = client.define('alunos', {
    nome: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
   curso: {
        type: Sequelize.STRING
        
    },
    nota: {
        type: Sequelize.DECIMAL,
        
    },
});

module.exports = AlunosModels