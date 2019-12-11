const controller = {}
//database utils
const dbWeeding = './db/employees.json'
const fs = require('fs')

//actions
controller.logIn = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const items = JSON.parse(data)
    const result  = items.users.find(users => users.id === parseInt(req.body.userId))
    if(result){
        res.send({
            code:200,
            data:result
        })
    }
    else{
        res.send({
            code:404,
            data:'Not found employee'
        })
    }
}

module.exports = controller