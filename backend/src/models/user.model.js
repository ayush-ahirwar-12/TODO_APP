import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    notes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"note"

    }]    
    



},{timestamps:true})

const UserModel = mongoose.model("user",UserSchema);

export default UserModel;