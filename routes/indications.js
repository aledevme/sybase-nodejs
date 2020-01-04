const express = require('express'); 
const router = express.Router();
const controller = require('../controllers/indications')
router
.post('/', controller.addIndication)


module.exports = router