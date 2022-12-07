const models = require ('../../models')

async function insert(){

    const css = await models.cursos.create({
        nome: 'CSS Avançado',
        linguagem: 'CSS',
        free: 1,
        qtdModulos: 4,
    });

    const javascript = await models.cursos.create({
        nome: 'Iniciando com Javascript',
        linguagem: 'Javascript',
        free: 1,
        qtdModulos: 5,
    });

    const react = await models.cursos.create({
        nome: 'Iniciando com ReactJs',
        linguagem: 'ReactJS',
        free: 0,
        qtdModulos: 2,
    });

    const mysql = await models.cursos.create({
        nome: 'Banco de Dados com MySql',
        linguagem: 'Banco de Dados',
        free: 1,
        qtdModulos: 1,
    });

    const node = await models.cursos.create({
        nome: 'NodeJs',
        linguagem: 'Javascript',
        free: 0,
        qtdModulos: 5,
    });

    const html = await models.cursos.create({
        nome: 'HTML Semântico',
        linguagem: 'HTML',
        free: 0,
        qtdModulos: 3,
    });
}

insert()