const express = require('express')
const router = express.Router()
const delivery = require('../controllers/Deliveries')
router
.get('/', delivery.saveDelivery)

module.exports = router