const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
    csr : {
        type : String,
        required : true
    }
})

const Carrier = mongoose.model('Carrier',carrierSchema);

module.exports = Carrier;