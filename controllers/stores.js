const controller = {}
const dbstores = './db/stores.json'
const fs = require('fs')

controller.getStores = async (req, res) => {
    const data = fs.readFileSync(dbstores)

    const items = JSON.parse(data)

    res.send(items)
}

module.exports = controller