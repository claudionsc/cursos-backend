const sequelize = require('../../src/config/_database')

const models = {
    cursos: require('./CursosModels'),
    sequelize: sequelize
}

module.exports = models