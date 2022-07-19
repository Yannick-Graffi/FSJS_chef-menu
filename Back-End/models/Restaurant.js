const mongoose = require('mongoose')

const RestaurantSchema = mongoose.Schema({
    name:{
        type: String,
    },
    adress:{
        adress:{
            type:String,
        },
        postcode:{
            type : String,
        },
        city:{
            type: String,
        }
    },
    hours:{
        opening: {
            type: String
        },
        closing: {
            type: String
        },
    }
})

const Restaurant = mongoose.model('restaurant', RestaurantSchema)
module.exports = Restaurant