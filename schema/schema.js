const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: String,
    age : Number
})

const model = new mongoose.model("mydata",schema);

module.exports = model;