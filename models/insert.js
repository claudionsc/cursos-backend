
const models = require('../models')

async function insert(){

    const rest = await models.cursos.create({
        nome: 'Api REST em React.js',
        linguagem: 'React.js',
        free: true,
        qtdModulos: 1

    })
}

insert()