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

const Menu = mongoose.model('menus', MenuSchema)
module.exports = Menu