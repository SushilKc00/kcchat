const mongoose = require("mongoose");
const database = async (url) =>{
    try {
        await mongoose.connect(url);
        console.log("Database connect")
    } catch (error) {
        console.log(error);
    }
}
module.exports = database;