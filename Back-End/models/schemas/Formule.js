const mongoose = require('mongoose')

const FormuleSchema = mongoose.Schema({
    starters:[],
    mainCourses:[],
    desserts:[],
    drinks:[],
    price:{
        type:Number,
    }
})

module.exports = FormuleSchema