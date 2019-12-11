const controller = {}
//database utils
const dbWeeding = './db/employee.json'
const fs = require('fs')

//actions
controller.logIn = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const items = JSON.parse(data)
    const result  = items.users.find(users => users.id === 9)
    res.send(result)
}

module.exports = controller