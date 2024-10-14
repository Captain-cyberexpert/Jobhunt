import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from "./utils/db.js";
const app =express();
import dotenv from "dotenv";
dotenv.config({});

app.get('/home',(req,res)=>{
    return res.status(200).json({
        message:"I am comming from backend ",
        sucess: true
    })
})
//middelwere
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption ={
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOption));


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})

