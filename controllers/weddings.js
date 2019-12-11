const controller = {};
const dbWeeding = './db/weddings.json'
const fs = require('fs')

controller.all = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    res.send(JSON.parse(data));
}
controller.create = (req,res) =>{
    let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
     
    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);
}
controller.findOne = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    res.send({
        data : result.weddings.find(wedding => wedding.id === parseInt(req.params.id))
    })
}

module.exports = controller