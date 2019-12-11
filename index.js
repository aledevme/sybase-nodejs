var express = require('express')
var cors = require('cors');
var app = express()
const bodyparser = require('body-parser'); 
var port = process.env.PORT || 3000
var weddings = require('./routes/weddings')

app.use(cors())
app.use(bodyparser.json()); 

app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

app.use('/weddings',weddings)
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});