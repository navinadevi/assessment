const service = require("./user.service");

const getUser = async (req, res) => {
    try{
        var user = await service.getUser(req);
        res.status(200).send(user);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const saveUser = async (req, res) => {
    try{
        var user = await service.saveUser(req);
        res.status(201).send(user);
    }catch(error){
        res.status(500).send("Internal server error");
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try{
        var user = await service.updateUser(req);
        res.status(201).send("User updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deleteUser = async (req, res) => {
    try{
        var user = await service.deleteUser(req);
        res.status(201).send("User deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getUser,
    saveUser,
    updateUser,
    deleteUser
}