const mongoose = require('mongoose');
const MenuSchema = require('./schemas/Menu')

const HoursSchema = mongoose.Schema({
    opening: String,
    closing: String,
})

const AdressSchema = mongoose.Schema({
    adress:String,
    zipcode:String,
    city:String,
})

const RestaurantSchema = mongoose.Schema({
    ownerId: String,
    name: String,
    adress: [AdressSchema],
    hours: [HoursSchema],
    menu: [MenuSchema],
    
});

module.exports = mongoose.model('restaurant', RestaurantSchema);