import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
    type:Number,
    required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true
    },
    profile:{
      bio:{type:String},
      skills:[{type:String}],
      resume:{type:String} ,//url to resume file
      resumeoriginalname:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        }
    },



},{timestamp:true});
export const user =mongoose.model('user',userSchema);