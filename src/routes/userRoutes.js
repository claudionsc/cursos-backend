const Models = require('../models/cursos')
const Express = require('express')
const cors = require('cors')

const app = Express()


app.use(cors())


const userRoute = (app) => {

    app.route('/cursos/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {

                const curso = await Models.findByPk(id)

                if (!id || curso === null) {
                    return res.status(400).send({ error: 'ID não encontrado' })

                } else {
                    return res.json(curso)
                }
            }
            try {
                const curso = await Models.findAll(query)
                res.send({ curso })

            } catch (error) {
                return res.status(400).send({ error: 'Falha ao encontrar curso' })
            }
        })
        .post(async (req, res) => {
            try {
                const cursos = new Models(req.body)
                await cursos.save()

                res.status(201).send('POST')
            } catch (error) {
                res.send('Não é permitido inserir dados nulos')
                
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'ID não encontrado' })
            }
            try {
                const updateCurso = await Models.update(req.body, {
                    where: { id: id }
                })


                if (updateCurso) {
                    const updateCurso = await Models.findOne({ where: { id: id } });
                    console.log(updateCurso)
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar a fruta' })

            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'ID não encontrado' })
            }

            try {
                const deleteCurso = await Models.destroy({
                    where: { id: id }
                })
                if (deleteCurso) {
                    return res.send('Deletado')
                }

                res.status(400).send({ error: 'Não foi possível deletar curso' })

            } catch (error) {
                res.send(error)
            }
        })


}

module.exports = userRoute