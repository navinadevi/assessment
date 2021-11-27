const mongoose = require('mongoose');

const lobSchema = new mongoose.Schema({
    producer : {
        type : String,
        required : true
    },
    company_name : {
        type : String
    },
    category_name : {
        type : String
    }
})

const Lob = mongoose.model('Lob',lobSchema);

module.exports = Lob;
