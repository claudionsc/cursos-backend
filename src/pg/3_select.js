const models = require('../../models')
const alunos = require('../../models')

async function select(){
    console.log('\n')

    const alunos = await models.alunos.findAll()
    alunos.forEach((alunos) => {
        console.log(`alunos: ${alunos.nome}
                             ${alunos.email}   
                             ${alunos.curso}
                             ${alunos.nota}
                             ${alunos.createdAt}
                             
                             `)
    })
}

select()