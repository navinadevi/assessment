const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policy_number : {
        type : String
    },
    policy_mode : {
        type : Number
    },
    policy_type : {
        type : String
    },
    premium_amount : {
        type : Number
    },
    policy_start_date : {
        type : String
    },
    policy_end_date : {
        type : String
    }
})

const Policy = mongoose.model('Policy',policySchema);

module.exports = Policy;
