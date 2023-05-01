const express = require("express")
const app = express();
const PORT = 5000;
require("./db/conn");
const register = require("./models/userSchema")


app.use(express.json())
app.use(require("./routes/auth"));
// app.post("/register", async (req,res)=>{
//     const {name,password} = req.body;

//     if(!name || !password){
//         return res.status(501).json({error:"please full fill all the details....."});
//     }
//     const user = new Register({name,password});
    
//     await user.save();
// })

app.get("/",(req,res)=>{
    res.send("<h1>this is home page</h1>");
})


app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})