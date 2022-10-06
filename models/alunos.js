const Sequelize = require('sequelize')
const sequelize = require('../src/pg/_database')

const AlunosModels = sequelize.define('alunos', {
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