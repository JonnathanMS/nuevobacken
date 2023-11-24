import mongoose from 'mongoose';
// import { TOKEN_SECRET } from './config.js'
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        const url = process.env.MONGODB_CONNECT_URI;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000 })
        console.log("MongoDB is connected");
        // router.get("/", (req, res) => {
        //     res.send("Esta activo el backend")
        // })
    } catch (error) {
        console.error("Hubo un error al conectarse con mongoDB:", error);
    }
};


