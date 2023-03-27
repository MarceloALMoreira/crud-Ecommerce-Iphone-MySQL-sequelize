

const database = require('../models')



//Criando a class Pessoas e seus Metedos
class PessoaController {

    static async getPessoas(req, res) {
        try {
            const AllPessoas = await database.Pessoas.findAll()
            return res.status(200).json(AllPessoas)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

}
module.exports = PessoaController