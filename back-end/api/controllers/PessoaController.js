

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
    static async getPessoaId(req, res) {
        const { id } = req.params
        try {
            const Pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(Pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createPessoa(req, res) {
        const NewPessoa = req.body
        try {
            const createdPessoa = await database.Pessoas.create(NewPessoa)
            return res.status(200).json(createdPessoa)


        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async upPessoas(req, res) {
        const { id } = req.params
        const updatePessoa = req.body
        try {
            await database.Pessoas.update(updatePessoa, { where: { id: Number(id) } }
            )
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async delPessoalId(req, res) {
        const { id } = req.params
        try {
            const Pessoa = await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json(Pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}
module.exports = PessoaController