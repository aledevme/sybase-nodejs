const express = require('express')
const cors = require('cors');
//init app
const app = express()
const bodyparser = require('body-parser'); 
const port = process.env.PORT || 3000
//objects routes
const weddings = require('./routes/weddings')
const employee = require('./routes/weddings')

app.use(cors())
app.use(bodyparser.json()); 

app.use(bodyparser.urlencoded({     
    extended: true
}))

app.use('/employee',employee)
app.use('/weddings',weddings)
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});