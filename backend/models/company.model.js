import { application } from "express";
import mongoose from "mongoose";

const companySchema=new moongose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String,
    },
    userId:{
        type:String,
        ref:'User',
        required:true
    },

},{timestamp:true});
export const company =mongoose.model('job',companySchema);