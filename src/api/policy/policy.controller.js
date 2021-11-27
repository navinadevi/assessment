const service = require("./policy.service");

const getPolicy = async (req, res) => {
    try{
        var policy = await service.getPolicy(req);
        res.status(200).send(policy);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const savePolicy = async (req, res) => {
    try{
        var policy = await service.savePolicy(req);
        res.status(201).send(policy);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const updatePolicy = async (req, res) => {
    try{
        var policy = await service.updatePolicy(req);
        res.status(201).send("Policy updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deletePolicy = async (req, res) => {
    try{
        var policy = await service.deletePolicy(req);
        res.status(201).send("Policy deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getPolicy,
    savePolicy,
    updatePolicy,
    deletePolicy
}