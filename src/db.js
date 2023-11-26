import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js'
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000 })
        console.log("MongoDB is connected");
        // router.get("/", (req, res) => {
        //     res.send("Esta activo el backend")
        // })
    } catch (error) {
        console.error("Hubo un error al conectarse con mongoDB:", error);
    }
};


