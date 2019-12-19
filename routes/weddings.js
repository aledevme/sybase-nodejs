const express = require('express'); 
const router = express.Router();
const wedding = require('../controllers/weddings');
const multer = require('multer')
const Storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './images')
    },
    filename(req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
  })
  
const upload = multer({ storage: Storage })

//instance router
router
//get request
.get('/',wedding.all)
.get('/:id', wedding.findOne)
//post request
.post('/',wedding.create)
.post('/search',wedding.search)
.post('/upload', upload.array('photo', 3), wedding.uploadPhoto)
//put request
.put('/:id/edit',wedding.update)
//patch request
.patch('/:idwedding/products/:idproduct',wedding.findProduct)

module.exports = router