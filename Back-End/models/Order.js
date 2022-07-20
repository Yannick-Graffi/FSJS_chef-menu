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

const Restaurant = mongoose.model('restaurant', RestaurantSchema)
module.exports = Restaurant