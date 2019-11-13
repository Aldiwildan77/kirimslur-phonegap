const router = require('express').Router()
const pengirimanController = require('../controllers/Pengiriman')

router.post('/', pengirimanController.add)
router.get('/:id', pengirimanController.read)
router.put('/:id', pengirimanController.update)
router.delete('/:id', pengirimanController.del)

module.exports = router