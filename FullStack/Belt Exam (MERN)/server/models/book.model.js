const mongoose = require("mongoose")





const StoreSchema = new mongoose.Schema({
   Name: {
        type: String,
        required: [true, "Title is Required"],
        minlength: [3, "Name must contain 3 characters!"]
    },
   Number: {
        type: Number,
        required: [true, "Pages is Required"],
        min: [1, "Must be a number greater than 0"],
        
    },
   
}, { timestamps: true })


module.exports.Store = mongoose.model("Store", StoreSchema)