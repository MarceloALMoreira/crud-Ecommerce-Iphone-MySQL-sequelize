// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')




class NivelController {

    static async getAllNivel(req, res) {
        try {
            const AllNiveis = await niveisServices.getAllRegister()
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

    static async restauraNivel(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.restore({ where: { id: Number(id) } })
            return res.status(200).json({ message: `o id ${id} foi restaurado com sucesso !` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = NivelController