const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');
const multer = require('multer')

//instance router
router
//get request
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/create',wedding.create)
//put request
.put('/:id/edit',wedding.update)
//patch request
.patch('/:idwedding/products/:idproduct',wedding.findProduct)
//.patch('/:id/products/',wedding.products)

module.exports = router