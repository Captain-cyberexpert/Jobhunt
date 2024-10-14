import mongoose from "mongoose";

const applicationSchema = new moongose.Schema({

    job:{
        type:moongose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    applicant:{
        type:moongose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    status:{
        type:String,
        enum:['pending','expected','rejected'],
        default:'pending'
    },
},{timestamp:true});
export const Application =moongose.model("Application", applicationSchema);