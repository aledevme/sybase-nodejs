const dbWeeding = './db/weddings.json'
const controller = {};
const fs = require('fs')

controller.allWeedings = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    res.send(JSON.parse(data));
}
controller.createWeeding = (req,res) =>{
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
controller.findWeeding = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    res.send({
        data : result.weddings.find(wedding => wedding.id === parseInt(req.params.id))
    })
}

module.exports = controller