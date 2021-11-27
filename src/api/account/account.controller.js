const service = require("./account.service");

const getAccount = async (req, res) => {
    try{
        var account = await service.getAccount(req);
        console.log(account);
        res.status(200).send(account);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const saveAccount = async (req, res) => {
    try{
        var account = await service.saveAccount(req);
        res.status(201).send(account);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const updateAccount = async (req, res) => {
    try{
        var account = await service.updateAccount(req);
        res.status(201).send("Account updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deleteAccount = async (req, res) => {
    try{
        var account = await service.deleteAccount(req);
        res.status(201).send("Account deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getAccount,
    saveAccount,
    updateAccount,
    deleteAccount
}