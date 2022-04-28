const mongoose = require("mongoose")

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect("mongodb://localhost:27017/StudentDB", connectionParams)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
        console.log("Error connecting to DB")
    }
}