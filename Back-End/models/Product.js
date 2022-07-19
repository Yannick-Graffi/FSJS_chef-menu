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
            value: this.HT * (1+this.TVA)
        }
    }
})