const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    subjectkey:{
        type: String,
        required: true,
        unique: true
    },
    subjectname:{
        type: String,
        required: true
    }
})

const subjects = mongoose.model('subjects', subjectSchema)
module.exports = subjects
