import mongoose from "mongoose";

const connectToDatabase=async()=>{
    try {
       const connection=await mongoose.connect(process.env.MONGO_URI); 
       console.log(`connected to MongoDb ${connection.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase;