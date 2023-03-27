const bodyParser = require('body-parser')
const { getPessoas } = require('../controllers/PessoaController')


module.exports = app => {
    app.use(bodyParser.json())
    app.get('/pessoas', (req, res) => {
        const PessoaController = getPessoas()
        
    })
}