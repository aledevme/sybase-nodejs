const express = require('express'); 
const router = express.Router();
const pasteles = require('../controllers/pasteles')

router
//get request
.get('/', pasteles.addPastel)

module.exports = router