const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    }
});
const Contact = module.exports = mongoose.model('Contact', ContactSchema);