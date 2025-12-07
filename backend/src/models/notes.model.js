import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    content:{
        type:String
    }
},{timestamps:true})

const noteModel = mongoose.model("note",noteSchema);

export default noteModel;