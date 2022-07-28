const mongoose = require('mongoose')

const MenuSchema = mongoose.Schema({
    starters:[],
    mainCourses:[],
    desserts:[],
    drinks:[],
})

module.exports = mongoose.model('menu', MenuSchema)