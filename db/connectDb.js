const mongoose = require('mongoose')
const Local_Url = 'mongodb://127.0.0.1:27017/addmissionportal'
const live_Url = 'mongodb+srv://dsvishal208:ZGz9U2m5Ys752VbQ@cluster0.lizfm.mongodb.net/addmissionportel?retryWrites=true&w=majority&appName=Cluster0'
const connectDb = ()=>{
    return mongoose.connect(live_Url)
    .then(()=>{
        console.log('connect Db')
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = connectDb