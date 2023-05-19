const sequelize = require('../config/_database')

const models = {
    cursos: require('./cursos'),
    sequelize: sequelize
}

module.exports = models