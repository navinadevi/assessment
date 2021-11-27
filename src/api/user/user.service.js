const User = require("../../models/user");

const getUser = (req) => {
    try {
       return User.find(req.query);
    } catch(e) {
        return e;
    }
}

const saveUser = (req) => {
    try {
        var user = new User(req.body)
        return user.save()
    } catch(e) {
        return e;
    }
}

const updateUser = (req) => {
    try {
        return User.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteUser = (req) => {
    try {
        return User.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getUser,
    saveUser,
    updateUser,
    deleteUser
}