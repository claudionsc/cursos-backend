const client = require('../src/pg/_database')

const models = {
    alunos: require('./alunos'),
    client: client
}

module.exports = models