import express from 'express';
import connectToDatabase from './config/db.js';
import authRoute from './routes/authRoute.js'
import dotenv from 'dotenv'
const app = express();

const PORT=3000;
dotenv.config();
//Database configuration
connectToDatabase();
//middleware
app.use(express.json())
//routes
app.use('/api/v1/auth',authRoute);
 app.get('/',(req,res)=>{
     res.send('Hello World');
 })

 app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
 })