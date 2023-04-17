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
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `Usuario ${id} Deletado com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurapessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } })
            return res.status(200).json({ message: `id ${id} restaurado com sucesso` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Metedos para  Matriculas

    static async getMatriculaId(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const Matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json(Matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createMatricula(req, res) {
        const { estudanteId } = req.params
        const NewMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const CreatedMatricula = await database.Matriculas.create(NewMatricula)
            return res.status(200).json(CreatedMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async upMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const updateMatricula = req.body

        try {
            await database.Matriculas.update(updateMatricula, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } }
            )
            const MatriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } })
            return res.status(200).json(MatriculaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async delMatriculaId(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } })
            return res.status(200).json({ message: `Matricula ${matriculaId} Deletado com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matricula.restore({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            return res.status(200).json({ message: `id ${id} restaurado com sucesso` })



        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
}
module.exports = PessoaController