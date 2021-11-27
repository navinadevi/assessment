const mongoose = require('mongoose');

const csvModelSchema = new mongoose.Schema({
    agent: {
        type : String,
    },
    account_name: {
        type: String,
    },
    account_type: {
        type: String,
        required: true
    },
    csr: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uniqu: true,
        lowerCase: true
    },
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    producer: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true,
    },
    category_name: {
        type: String,
        required: true
    },
    policy_number: {
        type: String,
        required: true
    },
    policy_mode: {
        type: Number
    },
    policy_type: {
        type: String
    },
    premium_amount: {
        type: Number
    },
    policy_start_date: {
        type: String
    },
    policy_end_date: {
        type: String
    }
})

const CsvModel = mongoose.model('CsvModel', csvModelSchema);

module.exports = CsvModel;