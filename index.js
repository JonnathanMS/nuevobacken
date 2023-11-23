import app from './src/app.js' // en app.js estamos ejecutando express que es el servidor
// import { connectDB } from "./src/db.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;

mongoose.connect(
    process.env.MONGODB_CONNECT_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('connected'))
    .catch(e => console.log(e));

// connectDB(); // se ejecuta la conexion a la base de datos.

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

