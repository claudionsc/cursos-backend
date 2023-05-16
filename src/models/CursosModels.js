const Sequelize = require ("sequelize")
const sequelize = require ('../config/_database')


const CursosModels = sequelize.define('Cursos', {
    nome: {
        type: Sequelize.STRING,
        required: true
    },
    linguagem: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },
    free: {
        type: Sequelize.BOOLEAN,
        required: true
    },
    qtdModulos: {
        type: Sequelize.INTEGER,
        required: true
    }
})

const init = async () => {
    await FrutasModels.sync()
}

init()


module.exports = CursosModels

