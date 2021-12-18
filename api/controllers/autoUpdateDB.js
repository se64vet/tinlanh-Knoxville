const axios = require('axios')
require('dotenv').config
const dailyBread = require('../Models/Dailybread')
//Daily Bread
    //retrieve data from Youtube api
async function retrieveYTData(URI){
    try {
        const response = await axios.get(URI)
        const {items} =  response.data
        const newDB = items.map(item => {
                const {snippet} = item
                const newData = {
                    youtubeId: snippet.resourceId.videoId,
                    publishedAt: snippet.publishedAt,
                    position: snippet.position,
                    standard_img: snippet.thumbnails.standard,
                    title: snippet.title.split(" |")[0],
                    date: snippet.title.split("Ngày ")[1]
                }

                return newData
            })
            return newDB
    } catch (error) {
        console.log(error);
    }
}


const resetDB = async(arrayOfNewItems) => {
    try {
        await dailyBread.deleteMany();
        dailyBread.create(arrayOfNewItems);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    retrieveYTData,
    resetDB
}