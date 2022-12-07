const models = require ('../../models')

async function insert(){

    const redux = await models.cursos.create({
        nome: 'Aprendendo Redux',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 4,
    });

    const api = await models.cursos.create({
        nome: 'API Rest',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 5,
    });

    const node = await models.cursos.create({
        nome: 'Backend com NodeJS',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 5,
    });

    const express = await models.cursos.create({
        nome: 'NodeJS com Express',
        linguagem: 'NodeJS',
        free: 1,
        qtdModulos: 3,
    });

    const html = await models.cursos.create({
        nome: 'Instrodução a HTML',
        linguagem: 'HTML',
        free: 0,
        qtdModulos: 5,
    });

    const flex = await models.cursos.create({
        nome: 'CSS Flexbox',
        linguagem: 'CSS',
        free: 0,
        qtdModulos: 3,
    });
    const hooks = await models.cursos.create({
        nome: 'React Hooks',
        linguagem: 'ReactJS',
        free: 0,
        qtdModulos: 1,
    });
    const js = await models.cursos.create({
        nome: 'Práticas avançadas com Javascript',
        linguagem: 'Javascript',
        free: 1,
        qtdModulos: 5,
    });
    const sequelize = await models.cursos.create({
        nome: 'Sequelize e Postgresql',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 3,
    });
    const postgres = await models.cursos.create({
        nome: 'Postgresql',
        linguagem: 'Banco de Dados Relacionais',
        free: 1,
        qtdModulos: 1,
    });
    const mysql = await models.cursos.create({
        nome: 'MySQL',
        linguagem: 'Banco de Dados Relacionais',
        free: 0,
        qtdModulos: 1,
    });
    const mongodb = await models.cursos.create({
        nome: 'MongoDB',
        linguagem: 'Banco de Dados Não Relacionais',
        free: 0,
        qtdModulos: 3,
    });
}

insert()