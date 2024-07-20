import express from "express";
import dotenv from "dotenv";


import connectToMongoDB from "./db/connectToMongoDB.js";
import authroutes from "./routes/auth.route.js"
dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());

app.use("/api",authroutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})
