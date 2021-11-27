const Account = require("../../models/account");

const getAccount = (req) => {
    try {
       return Account.find().populate("account_name account_type");
    } catch(e) {
        return e;
    }
}

const saveAccount = (req) => {
    try {
        var account = new Account(req.body)
        return account.save()
    } catch(e) {
        return e;
    }
}

const updateAccount = (req) => {
    try {
        return Account.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAccount = (req) => {
    try {
        return Account.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAccount,
    saveAccount,
    updateAccount,
    deleteAccount
}