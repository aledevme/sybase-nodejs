const controller = {};
const dbWeeding = './db/weddings.json'
const fs = require('fs')

controller.all = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    res.send({
        weedings:result,
        count:result.length
    });
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
controller.countWeddings = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    res.send(data.length)
}

module.exports = controller