const database = require('../models')

class TurmaController {
    static async getAllTurmas(req, res) {
        try {
            const allTurmas = await database.Turmas.findAll()
            return res.status(200).json(allTurmas)

        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
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
}
module.exports = TurmaController