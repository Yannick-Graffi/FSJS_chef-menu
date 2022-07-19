const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    mail:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        min: 8,
    },
    date:{
        type: Date,
        value: Date.now(),
    }
})
const User = mongoose.model('user', UserSchema)
module.exports = User