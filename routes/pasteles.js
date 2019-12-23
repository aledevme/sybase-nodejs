const express = require('express'); 
const router = express.Router();
const pasteles = require('../controllers/pasteles')

router
//get request
.get('/', pasteles.all)

module.exports = router