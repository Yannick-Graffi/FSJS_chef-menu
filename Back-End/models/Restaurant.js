const mongoose = require('mongoose');
const MenuSchema = require('./schemas/Menu')

const RestaurantSchema = mongoose.Schema({
    ownerId: String,
    name: String,
    adress: String,
    zipCode: String,
    city: String,
    openingHours: String,
    closingHours: String,
    menu: [MenuSchema],
    
});

module.exports = mongoose.model('restaurant', RestaurantSchema);