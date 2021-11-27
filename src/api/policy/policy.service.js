const Policy = require("../../models/policy");

const getPolicy = (req) => {
    try {
       return Policy.find(req.query);
    } catch(e) {
        return e;
    }
}

const savePolicy = (req) => {
    try {
        var policy = new Policy(req.body)
        return policy.save()
    } catch(e) {
        return e;
    }
}

const updatePolicy = (req) => {
    try {
        return Policy.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deletePolicy = (req) => {
    try {
        return Policy.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getPolicy,
    savePolicy,
    updatePolicy,
    deletePolicy
}