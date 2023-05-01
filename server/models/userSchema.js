const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const formModel = mongoose.model("formdata",formSchema);

module.exports= formModel;