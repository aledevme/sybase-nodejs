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

    var products = [];
    
    result.weddings.map((json)=>{
        if(json.id == req.params.idwedding){
            json.products.find((element)=>{
                if(element.id == req.params.idproduct){
                    products = element
                }
            })
        }
    })

    
    if(products){
        res.json({
            code:200,
            data:products
        })
    }
    else{
        res.json({
            code:404,
            data:'Not found'
        })
    }
}
controller.search = (req, res) =>{
    var lastname = req.body.lastname

    console.log(lastname)
    const data = fs.readFileSync(dbWeeding);
    const result = JSON.parse(data)
    var information 
    result.weddings.map((json)=>{
        if(lastname == json.lastnameBoyFriend){
            information = json
            console.log(json)
        }
    })
    
    
    console.log(information)
    if(information){
        res.send({
            code:200,
            data:information
        })
    }else{
        res.send({
            code:404,
            data:'Not found'
        })
    }


    
}

module.exports = controller