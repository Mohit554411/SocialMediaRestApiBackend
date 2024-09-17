import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export  const connetToDB = async() => {
    try{
        const con = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
};