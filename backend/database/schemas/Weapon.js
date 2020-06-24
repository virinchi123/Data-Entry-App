const mongoose = require('mongoose')

const weapon = new mongoose.Schema({
    id:Number,
    name: String,
    damage:Number,
    damageType:String,
    level:Number,
    description: String
})

module.exports = mongoose.model('weapon', weapon)