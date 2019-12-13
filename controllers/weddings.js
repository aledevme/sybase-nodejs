const controller = {};
const dbWeeding = './db/weddings.json'
const fs = require('fs')

controller.all = (req,res) => {
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    console.log(result)
    if(result.weddings.length > 0){
        res.send({
            code:200,
            data:result,
            count:result.weddings.length
        });
    }else{
        res.send({
            code:404,
            data:'No weddings',
        });
    }
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
controller.findProduct = (req,res) =>{
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    result.weddings.map((json)=>{
        json.products.find((element)=>{
            if(element.id == 3){
                res.send(element)
            }
        })
    })
    
}
controller.search = (req, res) =>{
    var expres= 'C'
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    
    const find = result.weddings.find(wedding => wedding.lastnameBoyFriend == String('Gonzalez'))
    console.log(find)
}

module.exports = controller