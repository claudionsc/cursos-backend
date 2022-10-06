const models = require('../../models')

async function insert(){

    const bruno = await models.alunos.create({
        nome: 'Bruno da Silva',
        email: 'bruno.email',
        curso: 'curso',
        nota: 10.00

    })
}

insert()