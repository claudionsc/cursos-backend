const Sequelize = require('sequelize')
const sequelize = require('../src/pg/_database')

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
});

// const init = async () => {
//     await CursosModels.sync();
// };

// init(blur)

module.exports = CursosModels