const Sequelize = require('sequelize')
const sequelize = require('../src/config/_database')

const CursosModels = sequelize.define('cursos', {
    nome: {
        type: Sequelize.STRING,
        unique: true
    },
    linguagem: {
        type: Sequelize.STRING,
      
    },
   free: {
        type: Sequelize.BOOLEAN
        
    },
    qtdModulos: {
        type: Sequelize.INTEGER,
        
    },
    img: {
        type: Sequelize.STRING
    }
});

const init = async () => {
    await CursosModels.sync();

    
};


init()

module.exports = CursosModels