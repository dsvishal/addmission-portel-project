const mongoose = require('mongoose');
const ContectSchema = new mongoose.Schema({
    name:{
        type: String,
        Required: true,
    },
    email:{
        type: String,
        Required: true,
    },
    phone:{
        type: String,
        Required: true,
    },
    message:{
        type: String,
        Required: true,
    },
    user_id:{
        type: String,
        Required: true,
    },
    status:{
        type: String,
        default:"Pending",
    },
    comment:{
        type: String,
        default:"Pending",
    },
},{timestamps: true})
const ContectModel = mongoose.model('contect', ContectSchema)
module.exports = ContectModel