const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    restaurantId:String,
    name:String,
    category:{
        type: String,
        // enum:["Entrées", "Plats", "Desserts", "Boissons"]
    },
    HT:Number,
    TVA:Number,
    TTC:Number,
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product
