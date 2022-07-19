const mongoose = require('mongoose')

const TableSchema = mongoose.UserSchema({
    numero:{
        type:Number,
    }
})

const Table = mongoose.model('user', TableSchema)
module.exports = Table