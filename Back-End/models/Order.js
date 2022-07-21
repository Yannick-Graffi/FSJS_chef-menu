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

const Order = mongoose.model('order', OrderSchema)
module.exports = Order