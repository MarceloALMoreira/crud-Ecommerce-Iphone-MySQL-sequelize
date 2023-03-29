const database = require('../models')



//Criando a class Matriculas e seus Metedos


class MatriculaController {

    static async getAllMatricula( req, res ) {
        await res.status(200).send('Bem vvindo a router Matriculas')
    }

}



module.exports  = MatriculaController