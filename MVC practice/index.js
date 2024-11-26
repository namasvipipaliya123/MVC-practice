const express=require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/user.route');
const app = express();

app.use(express.json());
app.use("/user",userRouter)
app.listen(8090,()=>{
    console.log("running server on port 8090");
    connectDB()
    
})