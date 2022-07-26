const mongoose = require('mongoose')

const MenuSchema = mongoose.Schema({
    starters:[],
    mainCourses:[],
    desserts:[],
    drinks:[],
    price:{
        type:Number,
    }
})

module.exports = MenuSchema