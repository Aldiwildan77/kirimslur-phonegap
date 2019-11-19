const router = require('express').Router()
const pelangganControllers = require('../controllers/Pelanggan')

router.post('/',pelangganControllers.add)
router.get('/', pelangganControllers.read)
router.get('/:id',pelangganControllers.readById)
router.put('/:id',pelangganControllers.update)
router.delete('/:id',pelangganControllers.del)

module.exports = router
