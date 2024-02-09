import userNotesModel from '../models/userNotesModel.js';
export const createNoteController=async(req,res)=>{
    try {
       const {title,content,user} =req.body;
       if(!title||!content||!user){
        return res.status(400).send({
            success:false,
            message:'Please fill all the fields',
            error,
        })
       }
       const note= new userNotesModel({
        title,
        content,
        user
       })
       await note.save();
       res.status(201).send({
        success:true,
        message:'Note created successfully',
        note
       })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:false,
            message:'Error while creating note',
            error,
        })
    }
}