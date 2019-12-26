const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');
//instance router
router
//get request
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/create',wedding.create)
.post('/products/add',wedding.addProduct)
//put request
.put('/:id/edit',wedding.update)
//patch request
.patch('/:id/products/',wedding.products)

module.exports = router