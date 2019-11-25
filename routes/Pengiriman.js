const router = require('express').Router()
const pengirimanController = require('../controllers/Pengiriman')

router.post('/', pengirimanController.add)
router.get('/:id', pengirimanController.readById)
router.put('/:id', pengirimanController.update)
router.delete('/:id', pengirimanController.del)
router.get('/', pengirimanController.read)

module.exports = router
