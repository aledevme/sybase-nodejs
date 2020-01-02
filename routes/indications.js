const express = require('express'); 
const router = express.Router();
const controller = require('../controllers/indications')
router
.get('/',controller.all)
.post('/', controller.addIndication)

module.exports = router