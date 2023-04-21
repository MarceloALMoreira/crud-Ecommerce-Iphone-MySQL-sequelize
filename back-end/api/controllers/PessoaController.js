const database = require('../models')
// const Sequelize = require('sequelize')

const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()


//Criando a class Pessoas e seus Metedos
class PessoaController {

    static async getPessoasAtivo(req, res) {
        try {
            const PessoasAtivas = await pessoasServices.getRegisterActiver()
            return res.status(200).json(PessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async getAllPessoas(req, res) {
        try {
            const TodasPessoas = await pessoasServices.getAllRegisters()
            return res.status(200).json(TodasPessoas)
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
        const { matriculaId } = req.params
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
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId) } })
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        try {
            const AllMatriculas = await database.Matriculas.findAndCountAll(
                {
                    where: { turma_id: Number(turmaId), status: 'confirmado' },
                    limit: 10, order: [['estudante_id', 'ASC']]
                })
            return res.status(200).json(AllMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getTurmasLotes(req, res) {
        const loteTurmas = 2
        try {
            const turmasLotes = await database.Matriculas
                .findAndCountAll({
                    where: {
                        status: 'confirmado'
                    },
                    attributes: ['turma_id'],
                    group: ['turma_id'],
                    having: Sequelize.literal(`count(turma_id) >= ${loteTurmas}`)
                })
            return res.status(200).json(turmasLotes.count)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CancelaPessoa(req, res) {
        const { estudanteId } = req.params
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
            return res.status(200).json({ message: `Matriculas ref. estudante ${estudanteId} canceladas` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController