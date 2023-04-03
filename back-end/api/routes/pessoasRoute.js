const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getPessoas)
router.get('/pessoas/:id', PessoaController.getPessoaId)
router.post('/pessoas', PessoaController.createPessoa)
router.put('/pessoas/:id', PessoaController.upPessoas)
router.delete('/pessoas/:id', PessoaController.delPessoalId)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getMatriculaId)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)




module.exports = router