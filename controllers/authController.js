import userModel from '../models/userModel.js'
import { comparePassword, hashYourPassword } from '../helpers/authHelper.js';
import JWT from 'jsonwebtoken';
export const registerController=async(req,res)=>{
       try {
        const {name,email,password}=req.body;
        if(!email||!password||!name){
            return res.status(404).send({
                success:false,
                message:'Please fill all the fields'
            })

        }
        const existingUser= await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'User already exists Please Login'
            })
        }
      //hashing of the password
      const hashedPassword= await hashYourPassword(password);
      const user= await new userModel({
        name,
        email,
        password:hashedPassword,
      }).save();
      return res.status(200).send({
        success:true,
        message:'User registered successfully',
        user
      })
       
       } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error,
        })
       }
}

export const loginController=async(req,res)=>{
    try {
       const {email,password}=req.body;
       if(!email||!password){
        return res.status(400).send({
            success:false,
            message:'Please fill all the fields',
            error
        })
       } 
       const user= await userModel.findOne({email});
       if(!user){
        return res.status(404).send({
            success:false,
            message:'email is not registered',

        })
       }
       const isMatch= await comparePassword(password,user.password);
       if(!isMatch){
        return res.status(404).send({
            success:false,
            message:"invalid password",
        })
       }
       //creating jwt token
       const JWToken= await JWT.sign({_id:user.id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
       res.status(200).send({
        success:true,
        message:'Login successfully',
        user:{
            name:user.name,
            email:user.email,
            _id:user._id,

        },
        JWToken
        
       })
    } catch (error) {
        console.log(error)
    }
}