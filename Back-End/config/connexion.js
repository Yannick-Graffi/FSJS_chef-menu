const mongoose = require('mongoose')

function toConnect() {
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('Connected to my DB on Atlas');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = toConnect