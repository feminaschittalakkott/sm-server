const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studkey:{
        type: String,
        required: true,
        unique: true
    },
    studname:{
        type: String,
        required: true
    },
    subkey:{
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    }
})

const students = mongoose.model('students', studentSchema)
module.exports = students
