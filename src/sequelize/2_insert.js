const models = require ('../../models')

async function insert(){

    const redux = await models.cursos.create({
        nome: 'Aprendendo Redux',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 4,
        img: 'src/img/redux.1.png' ,
    });

    const api = await models.cursos.create({
        nome: 'API Rest',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 5,
        img: 'src/img/redux.1.png' ,
    });

    const node = await models.cursos.create({
        nome: 'Backend com NodeJS',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 5,
        img:'src/img/redux.1.png' ,
    });

    const express = await models.cursos.create({
        nome: 'NodeJS com Express',
        linguagem: 'NodeJS',
        free: 1,
        qtdModulos: 3,
        img:'src/img/redux.1.png' ,
    });

    const html = await models.cursos.create({
        nome: 'Instrodução a HTML',
        linguagem: 'HTML',
        free: 0,
        qtdModulos: 5,
        img:'src/img/redux.1.png' ,
    });

    const flex = await models.cursos.create({
        nome: 'CSS Flexbox',
        linguagem: 'CSS',
        free: 0,
        qtdModulos: 3,
        img:'src/img/redux.1.png' ,
    });
    const hooks = await models.cursos.create({
        nome: 'React Hooks',
        linguagem: 'ReactJS',
        free: 0,
        qtdModulos: 1,
        img:'src/img/redux.1.png' ,
    });
    const js = await models.cursos.create({
        nome: 'Práticas avançadas com Javascript',
        linguagem: 'Javascript',
        free: 1,
        qtdModulos: 5,
        img:'src/img/redux.1.png' ,
    });
    const sequelize = await models.cursos.create({
        nome: 'Sequelize e Postgresql',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 3,
        img:'src/img/redux.1.png' ,
    });
    const postgres = await models.cursos.create({
        nome: 'Postgresql',
        linguagem: 'Banco de Dados Relacionais',
        free: 1,
        qtdModulos: 1,
        img:'src/img/redux.1.png' ,
    });
    const mysql = await models.cursos.create({
        nome: 'MySQL',
        linguagem: 'Banco de Dados Relacionais',
        free: 0,
        qtdModulos: 1,
        img:'src/img/redux.1.png' ,
    });
    const mongodb = await models.cursos.create({
        nome: 'MongoDB',
        linguagem: 'Banco de Dados Não Relacionais',
        free: 0,
        qtdModulos: 3,
        img:'src/img/redux.1.png' ,
    });
}

insert()