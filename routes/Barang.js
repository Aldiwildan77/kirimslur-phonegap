// instansiasi router 
const router = require('express').Router()

// instansiasi controller baarang
const barangControllers = require('../controllers/Barang')

//fungsi ini digunakan untuk memanggil controller melalui router barang 
router.post('/',barangControllers.add)
router.delete('/:id',barangControllers.del)
router.put('/:id',barangControllers.update)
router.get('/',barangControllers.read)
router.get('/:id',barangControllers.readById)

//melakukan export semua fungsi endpoint barang
module.exports = router