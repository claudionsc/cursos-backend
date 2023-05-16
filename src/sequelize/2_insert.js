const models = require ('../../models')

async function insert(){

    const redux = await models.cursos.create({
        nome: 'Aprendendo Redux',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 4,
        img: 'https://raw.githubusercontent.com/claudionsc/cursos-backend/b8e44768d3921436aa5d41eee57bc4d978150ad9/src/img/redux.1.png' ,
    });

    const api = await models.cursos.create({
        nome: 'API Rest',
        linguagem: 'ReactJS',
        free: 1,
        qtdModulos: 5,
        img: 'https://www.astera.com/wp-content/uploads/2020/01/rest.png' ,
    });

    const node = await models.cursos.create({
        nome: 'Backend com NodeJS',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 5,
        img:'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png' ,
    });

    const express = await models.cursos.create({
        nome: 'NodeJS com Express',
        linguagem: 'NodeJS',
        free: 1,
        qtdModulos: 3,
        img:'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1275225/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png' ,
    });

    const html = await models.cursos.create({
        nome: 'Introdução a HTML',
        linguagem: 'HTML',
        free: 0,
        qtdModulos: 5,
        img:'https://marquesfernandes.com/wp-content/uploads/2020/04/florian-olivo-4hbJ-eymZ1o-unsplash.jpg' ,
    });

    const flex = await models.cursos.create({
        nome: 'CSS Flexbox',
        linguagem: 'CSS',
        free: 0,
        qtdModulos: 3,
        img:'https://chiefofdesign.com.br/wp-content/uploads/2017/11/flexbox-css.png' ,
    });
    const hooks = await models.cursos.create({
        nome: 'React Hooks',
        linguagem: 'ReactJS',
        free: 0,
        qtdModulos: 1,
        img:'https://www.alura.com.br/artigos/assets/react-hooks/logo-do-react-com-um-J.png' ,
    });
    const js = await models.cursos.create({
        nome: 'Práticas avançadas com Javascript',
        linguagem: 'Javascript',
        free: 1,
        qtdModulos: 5,
        img:'https://miro.medium.com/v2/resize:fit:1200/1*BPSx-c--z6r7tY29L19ukQ.png' ,
    });
    const sequelize = await models.cursos.create({
        nome: 'Sequelize e Postgresql',
        linguagem: 'NodeJS',
        free: 0,
        qtdModulos: 3,
        img:'https://codeforgeek.com/wp-content/uploads/2017/01/sequelize-and-postgresql.png' ,
    });
    const postgres = await models.cursos.create({
        nome: 'Postgresql',
        linguagem: 'Banco de Dados Relacionais',
        free: 1,
        qtdModulos: 1,
        img:'https://images.ctfassets.net/40w0m41bmydz/3dpCAf2iXl7Z8BpdWvr1LS/75e63aacc5dc9953f0406a62c6e0a25f/blog___images___postgresql.jpg?w=1980&h=1114&fl=progressive&q=50&fm=jpg' ,
    });
    const mysql = await models.cursos.create({
        nome: 'MySQL',
        linguagem: 'Banco de Dados Relacionais',
        free: 0,
        qtdModulos: 1,
        img:'https://www.zend.com/sites/default/files/image/2020-04/image-blog-mysql-php.jpg' ,
    });
    const mongodb = await models.cursos.create({
        nome: 'MongoDB',
        linguagem: 'Banco de Dados Não Relacionais',
        free: 0,
        qtdModulos: 3,
        img:'https://arquivo.devmedia.com.br/marketing/img/artigo-nosql-hospedando-bancos-de-dados-mongodb-31056.png' ,
    });
}

insert()