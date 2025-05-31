import express from 'express'; 
import mynotesRoutes from "./routes/notesRoutes.js"
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config(); 

console.log(process.env.MONGO_URI);

const app= express(); //first 

connectDB();

app.use("/api/notes",mynotesRoutes);

app.listen(5001, () =>{
    console.log("Server is running on port 5000");
})