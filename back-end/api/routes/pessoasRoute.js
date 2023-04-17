const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getPessoas)
router.get('/pessoas/:id', PessoaController.getPessoaId)
router.post('/pessoas', PessoaController.createPessoa)
router.put('/pessoas/:id', PessoaController.upPessoas)
router.delete('/pessoas/:id', PessoaController.delPessoalId)
router.post('/pessoas/:id/restaura', PessoaController.restaurapessoa) // pessoas/1/restaura || essa route vai restuarar uma pessoa


router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getMatriculaId)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.upMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.delMatriculaId)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)




module.exports = router