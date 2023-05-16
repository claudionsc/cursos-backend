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
        
    
}

module.exports = userRoute