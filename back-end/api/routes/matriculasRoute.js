const { Router } = require('express')

const MatriculaController = require('../controllers/MatriculaController')

const router = Router()



router.get('./matriculas', MatriculaController.getAllMatricula)

// router.get('./matriculas/:id', MatriculaController)
// router.post('./matriculas/', MatriculaController)
// router.put('./matriculas/:id', MatriculaController)
// router.delete('./matriculas/:id', MatriculaController)





module.exports = router