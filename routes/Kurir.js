const router = require('express').Router()
const kurirControllers = require('../controllers/Kurir')

router.post('/',kurirControllers.add)
router.delete('/:id',kurirControllers.del)
router.put('/:id',kurirControllers.update)
router.get('/',kurirControllers.read)
router.get('/:id',kurirControllers.readById)

module.exports = router

