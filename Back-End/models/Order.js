const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    tableNumber:{
        type: Number,
    },
    products: [],
    price:{
        type : Number
    }
})

module.exports = mongoose.model('order', OrderSchema)