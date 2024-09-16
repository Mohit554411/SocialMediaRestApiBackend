import express from 'express';
import mongoose from 'mongoose';
import { connetToDB } from './config/dbConfig.js';
import authRouter from './routes/authRoutes.js';
const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

app.listen(3000, async()=>{
    console.log('Server is running on port 3000');
    await connetToDB();
});