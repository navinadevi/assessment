const mongoose = require('mongoose');
const CsvModel = require('./csv');

const accountSchema = new mongoose.Schema({
    account_name: {
        type: String,
    },
    account_type : {
        type: String,
    }
})

const Account = mongoose.model('Account',accountSchema);

module.exports = Account;
