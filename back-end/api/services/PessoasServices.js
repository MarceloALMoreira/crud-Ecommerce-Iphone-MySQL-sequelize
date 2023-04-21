const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor() {
        super('Pessoas') //Nome do Modelo que eu vou trabalhar
        this.matriculas = new Services('Matriculas')
    }
    // Metedos específicos do controlador de Pessoas

    async getRegisterActiver(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async getAllRegisters(where = {}) {
        return database[this.nomeDoModelo].scope('todos').findAll({ where: { ...where } })
    }

    async cancelaPessoaEMatriculas(estudanteId) {
        return database.sequelize.transaction(async transacao => {
            await super.upRegister({ ativo: false }, estudanteId,
                { transaction: transacao })
            await this.matriculas.upRegisters({ status: 'cancelado' },
                { estudante_id: estudanteId }, { transaction: transacao })
        })

    }
}

module.exports = PessoasServices