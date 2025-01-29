const EmpModel = require("../models/userModel")
const emploginCheck = async (req, res) => {
    const { userid, password} = req.body;
    try {
        const Employee = await EmpModel.findOne({email:userid});
        if (!Employee)
        {
            res.status(400).send({msg:"Invalid Email!!!"});
        }
        if (Employee.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!!!"});   
        }  
        res.status(200).send(Employee);
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    emploginCheck
}