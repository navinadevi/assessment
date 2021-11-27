const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        lowerCase : true
    },
    dob : {
        type : String
    },
    phone : {
        type : Number
    },
    address : {
        type: String
    },
        state : {
        type: String
    },
        city: {
        type: String
    },
        zip : {
        type: String
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;