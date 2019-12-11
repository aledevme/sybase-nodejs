const controller = {}
//database utils
const dbWeeding = './db/employee.json'
const fs = require('fs')

//actions
controller.logIn = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const items = JSON.parse(data)
    const result  = items.weddings.find(wedding => wedding.id === 1)
    console.log(result)
}

module.exports = controller