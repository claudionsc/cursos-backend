const CursosModels = require('../../models/cursos')
const Express = require('express')
const cors = require('cors')

const app = Express()


app.use(cors())


const userRoute = (app) => {

    app.route('/cursos/:uuid?')
        .get(async (req, res) => {
            const uuid = req.params.uuid
            const query = {};

            if (uuid){
                try {
                    const curso = await CursosModels.findOne({ where: { id: uuid}})
                  
                    if (curso === null){
                        res.send('Curso não encontrado')
                    } else {res.send({ curso })}
                }  catch (error){
                    res.status(400).send({ error: 'Falha ao encontrar cursos'})
                }
            
            }else{

                try {
                    const cursos = await CursosModels.findAll(query)
                    res.send({ cursos })
    
                } catch (error){
                    res.status(400).send({ error: 'Falha ao encontrar curso' })
                }
            }
        })
        .post(async (req, res) => {
            try {
                const post = new CursosModels(req.body)
                await post.save()

                res.status(201).send('POST')
            } catch (error) {
                res.send(error)
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if(!id) {
                return res.status(400).send({ error: 'ID do curso não encontrado'})
            }
             try {
                const updatePost = await CursosModels.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatePost)

                if(updatePost) {
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar o curso'})

             } catch (error) {
                res.send(error)
             }
            })
            .delete(async (req, res) => {
               const { id } = req.params

               if(!id) {
                    return res.status(400).send({ error: 'ID do curso não encontrado'})
               }

               try {
                const deletePost = await CursosModels.deleteOne({ _id: id })
                if (deletePost.deletedCount) {
                    return res.send('Deletado')

                }

                res.status(400).send({ error: 'Não foi possível deletar o curso' })

               } catch (error) {
                res.send(error)
               }
            })
}

module.exports = userRoute