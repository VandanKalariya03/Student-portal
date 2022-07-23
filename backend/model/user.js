const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
    id: {
        type: String
    },
    password: {
        type: String
    }
   
})

const User = mongoose.model('user', user)

module.exports =User;