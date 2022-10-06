const AlunosModels = require('../../models/alunos')



const userRoute = (app) => {

    app.route('/alunos/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id){
                query._id = id
            }

            try {
                const alunos = await AlunosModels.findAll(query)
                res.send({ alunos })

            } catch (error){
                res.status(400).send({ error: 'Falha ao encontrar aluno' })
            }
        })
        .post(async (req, res) => {
            try {
                const post = new AlunosModels(req.body)
                await post.save()

                res.status(201).send('POST')
            } catch (error) {
                res.send(error)
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if(!id) {
                return res.status(400).send({ error: 'ID do aluno não encontrado'})
            }
             try {
                const updatePost = await AlunosModels.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatePost)

                if(updatePost) {
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar aluno'})

             } catch (error) {
                res.send(error)
             }
            })
            .delete(async (req, res) => {
               const { id } = req.params

               if(!id) {
                    return res.status(400).send({ error: 'ID do aluno não encontrado'})
               }

               try {
                const deletePost = await AlunosModels.deleteOne({ _id: id })
                if (deletePost.deletedCount) {
                    return res.send('Deletado')

                }

                res.status(400).send({ error: 'Não foi possível deletar aluno' })

               } catch (error) {
                res.send(error)
               }
            })
}

module.exports = userRoute