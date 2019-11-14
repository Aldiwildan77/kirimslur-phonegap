const express = require('express');
const router = express.Router();

const pelangganControllers = require('../controllers/Pelanggan')

router.get('/', pelangganControllers.read);

module.exports = router