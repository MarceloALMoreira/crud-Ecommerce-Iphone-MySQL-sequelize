const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getPessoasAtivo) //pegando as pessoas ativas no banco
router.get('/pessoas/all', PessoaController.getAllPessoas) //pegando todas as pessoas ativas e inativas no banco
router.get('/pessoas/:id', PessoaController.getPessoaId)
router.post('/pessoas', PessoaController.createPessoa)
router.put('/pessoas/:id', PessoaController.upPessoas)
router.delete('/pessoas/:id', PessoaController.delPessoalId)

// Routes restaurações
router.post('/pessoas/:id/restaura', PessoaController.restaurapessoa) // pessoas/1/restaura || essa route vai restuarar uma pessoa
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)


router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getMatriculaId)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.upMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.delMatriculaId)




module.exports = router