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

const init = async () => {
    await CursosModels.sync();

    
};

async function insert(){

    const bruno = await models.cursos.create({
        nome: 'Api REST em React.js',
        linguagem: 'React.js',
        free: true,
        qtdModulos: 1

    })
}

insert()

init()

module.exports = CursosModels