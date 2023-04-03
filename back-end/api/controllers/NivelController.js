const database = require('../models')



class NivelController {

    static async getAllNivel(req, res) {
        try {
            const AllNiveis = await database.Niveis.findAll()
            return res.status(200).json(AllNiveis)
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
    static async getIdNivel(req, res) {
        const { id } = req.params
        try {
            const idNivel = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(idNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createNivel(req, res) {

    }
    static async updateNivel(req, res) {

    }
    static async deleteNivel(req, res) {

    }

}


module.exports = NivelController