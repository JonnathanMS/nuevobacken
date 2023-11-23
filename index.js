import app from './src/app.js' // en app.js estamos ejecutando express que es el servidor
// import { connectDB } from "./src/db.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;
const connectDB = async () => {
    try {
        // await mongoose.connect(`mongodb+srv://jonnathanmonroybd:${TOKEN_SECRET}@cluster0.j8kwwty.mongodb.net/?retryWrites=true&w=majority`);
        const url = process.env.MONGODB_CONNECT_URI;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB is connected");
        // router.get("/", (req, res) => {
        //     res.send("Esta activo el backend")
        // })
    } catch (error) {
        console.error(error);
    }
};
connectDB(); // se ejecuta la conexion a la base de datos.

//IMPORTANTE
//Genero estas importaciones aqui para evitar el error de mongoose de métodos de los modelos que permiten ser usados antes de la conexion con mongoose.
import citaGeneral from './src/models/citaGeneral.model.js'
import task from './src/models/task.model.js'
import user from './src/models/user.model.js'

app.listen(port, () => {
    console.log(`puerto corriendo en: ${port}`);
})


// app.listen(4000);
// console.log('Server on port ', 4000);

