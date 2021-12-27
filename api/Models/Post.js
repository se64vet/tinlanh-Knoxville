const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        required: true,
        default: new Date.now()
    },
    author: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required:true
    },
    coverImg: {
        type: String
    },
    keywords: {
        type: String
    }
    
})

module.exports = mongoose.model('post', postSchema)