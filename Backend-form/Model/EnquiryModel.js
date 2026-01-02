let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EnquirySchema = new Schema({    

    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Enquiry', EnquirySchema);