const Sequelize = require('sequelize')
const sequelize = require('../config/_database')

const CursosModels = sequelize.define('cursos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    linguagem: {
        type: Sequelize.STRING,
        allowNull: false,
      
    },
   free: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        
    },
    qtdModulos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const init = async () => {
    await CursosModels.sync();

    
};


init()

module.exports = CursosModels