const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const connection = mongoose.connect("mongodb+srv://mustafijurrahaman73586:tbHJKoxam83EpXJd@ecommerce.ktuuddz.mongodb.net/?retryWrites=true&w=majority")
console.log("connected to database")
module.exports= connection;