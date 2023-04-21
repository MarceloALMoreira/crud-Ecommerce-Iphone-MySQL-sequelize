const database = require('../models')


class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }
    async getAllRegister() {
        return database[this.nomeDoModelo].findAll()
    }

    async getOneRegister(id) {
        // return database[this.nomeDoModelo].findOne()
    }

    async upRegister(dadosAtualizados, id, transacao) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { id: id } }, transacao)
    }

    async upRegisters(dadosAtualizados, where, transacao) {
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { ...where } }, transacao)
    }


}

module.exports = Services