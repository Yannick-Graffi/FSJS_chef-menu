const mongoose = require('mongoose');
const FormuleSchema = require('./schemas/Formule')

const RestaurantSchema = mongoose.Schema({
    ownerId: String,
    name: String,
    adress: String,
    zipCode: String,
    city: String,
    openingHours: String,
    closingHours: String,
    menu: [FormuleSchema],
    
});

module.exports = mongoose.model('restaurant', RestaurantSchema);