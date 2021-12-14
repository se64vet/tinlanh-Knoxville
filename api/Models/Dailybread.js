const mongoose = require('mongoose')

const dailyBreadSchema = new mongoose.Schema({
    youtubeId: {
        type: String,
        required: true,
        default: 'NULL'
    },
    publishedAt: {
        type: String,
        required: true,
        default: 'NULL'
    },
    position: {
        type: Number,
        required: true,
        default: 'NULL'
    },
    standard_img: {
        type: mongoose.Schema.Types.Mixed,
        default: 'NULL'
    },
    title: {
        type: String,
        required: true,
        default: 'NULL'
    },
    date: {
        type: String,
        required: true,
        default: 'NULL'
    }

})

const dailyBread = mongoose.model('dailyBread', dailyBreadSchema);


module.exports = dailyBread