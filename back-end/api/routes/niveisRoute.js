const { Router } = require('express')

const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('./niveis', NivelController.getAllNivel)
router.get('./niveis/:id', NivelController.getIdNivel)
router.post('./niveis', NivelController.createNivel)
router.put('./niveis/:id', NivelController.updateNivel)
router.delete('./niveis/:id', NivelController.deleteNivel)





module.exports = router