const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
    static async getAllTurmas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}

        // Filtro de data Inicial e Final usando operadores Sequelize o mesmo operadores do SQL
        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        try {
            const allTurmas = await database.Turmas.findAll({ where })
            return res.status(200).json(allTurmas)

        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    // {
    //     where: {
    //         data_inicio: {
    //             [Op.gte]: data,
    //                 [Op.lte]: data
    //         }
    //     }
    // }

    static async getIdTurma(req, res) {
        const { id } = req.params
        try {
            const Turma = await database.Turmas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(Turma)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createTurma(req, res) {

    }

    static async updateTurma(req, res) {

    }

    static async deleteTurma(req, res) {

    }

    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
            await database.Turmas.restore({ whare: { id: Number(id) } })
            return res.status(200).json({ message: `id ${id} restaurado com sucesso !` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = TurmaController