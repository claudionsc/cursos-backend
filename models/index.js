const sequelize = require('../src/pg/_database')

const models = {
    alunos: require('./alunos'),
    sequelize: sequelize
}

module.exports = models