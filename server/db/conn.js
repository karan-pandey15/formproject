const mongoose = require("mongoose");
 mongoose.connect("mongodb://127.0.0.1:27017/todayformdata",{

}).then(()=>{
    console.log("connection SuccessFull.....");
}).catch( (err)=>{
    console.log("connection not successFull...")
});


