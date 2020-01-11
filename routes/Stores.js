var expres = require('express')
var router = expres.Router()
const store = require('../controllers/stores')

router
.get('/',store.getStores)

module.exports = router