const mongoose = require('mongoose');
const MenuSchema = require('./schemas/Menu')

const RestaurantSchema = mongoose.Schema({
    name:{
        type: String,
    },
    adress: String,
    zipcode: String,
    city: String,
    hours:{
        opening: {
            type: String
        },
        closing: {
            type: String
        },
    },    
    ownerId: String,
    menu: [MenuSchema],
    
    
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;