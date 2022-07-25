const mongoose = require('mongoose')

const TableSchema = mongoose.Schema({
    number:{
        type:Number,
    }
})

const Table = mongoose.model('table', TableSchema)
module.exports = Table