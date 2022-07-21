const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        HT:{
            type: Number,
        },
        TVA:{
            type: Number,
        },
        TTC:{
            type: Number,
        },
    },
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product
