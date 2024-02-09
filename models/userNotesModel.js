import mongoose from "mongoose";

const userNotesSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    content:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
})
export default mongoose.model('userNotes',userNotesSchema);