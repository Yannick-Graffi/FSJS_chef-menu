const mongoose = require('mongoose')

const TableSchema = mongoose.Schema({
    numero:{
        type:Number,
    }
})

const Table = mongoose.model('table', TableSchema)
module.exports = Table