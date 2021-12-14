const mongoose = require('mongoose');
require('dotenv').config();




const connectDB = async (uri) => {
    try {
        const DB = await mongoose.connect(uri, {
            dbName: "HTTL_KNOXVILLE"
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB