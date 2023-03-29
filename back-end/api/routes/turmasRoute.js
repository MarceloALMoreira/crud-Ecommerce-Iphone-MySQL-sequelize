const { Router } = require('express')

const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.getAllTurmas)
router.get('/turmas/:id', TurmaController.getTurmaId)


module.exports = router