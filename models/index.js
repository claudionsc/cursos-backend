const sequelize = require('../src/pg/_database')

const models = {
    cursos: require('./cursos'),
    sequelize: sequelize
}

module.exports = models