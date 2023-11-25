import express, { application } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import citasGeneralRoutes from './routes/citasGeneral.routes.js';
import cors from 'cors';

const app = express(); // es basicamente el servidor
// app.listen(3000); esto se provo y se paso para index
// console.log('on port ', 3000);
// app.use(cors()); // permite que cualquier dominio se puedea comunicar en este servidor
// app.use(cors({
//     origin: 'https://portafolio2jonnathan2023.000webhostapp.com/',
//     origin: 'http://localhost:5173', // localmente
//     credentials: true   // Esto permite establecer las cookies
// })); // para establecer un dominio especifico que pueda acceder
app.use(cors({
    origin: 'https://portafolio2jonnathan2023.000webhostapp.com',
    credentials: true   // Esto permite establecer las cookies
}));
// permite que este otro dominio se puedea comunicar en este servidor
app.use(morgan('dev')); // la aplicacion app usa el modulo morgan en su configuracion dev.sirve para ver la info en consola del terminal.
app.use(express.json()); // es para que se puedan convertir los request body en formato json
app.use(cookieParser());

app.use("/api", authRoutes);// asi se modifica la url// app.use(authRoutes); asi cuando api se pone desde auth.routes.js
app.use("/api", taskRoutes);
app.use("/api", citasGeneralRoutes);
app.use("/", (req, res) => {
    res.send(`Api desarrolada por Jonnathan Monroy,Gracias por estar aquí! 

   Si quieres ver datos ya creados y crear nuevos puedes acceder con esteusuario de
   pruebas (si lo prefieres crea uno nuevo, pero este ya tiene datos para consultar):
   {
  "email":"jhonnnario@gmail.com",
  "password":"123456"
   }
   
   (Endpoint):
   https://nuevobackend.onrender.com/api/login  
   https://nuevobackend.onrender.com/api/register 
   https://nuevobackend.onrender.com/api/citasGeneral
   https://nuevobackend.onrender.com/api/tasks
   https://nuevobackend.onrender.com/api/logout

    Si quieres probar esta api puedes usar lo siguiente en el query body json

    Registrarse:

    {
  "username": "nombre de usuario",
  "nombres": "nombre",
  "apellidos": "apellido",
  "cedula": "numero",
  "celular": "numero",
  "citas": [],
  "fecha": "2023-01-07T00:00:00.000Z",
  "email": "email@gmail.com",
  "password": "password"
}

loguearse:
{
  "email":"email@gmail.com",
  "password":"password"
}

Generar nueva cita tutoria:
{
    "tema": "tema",
    "tutor": "username",
    "descripcion": "descripcion",
    "hora": "16:05",
    "fecha": "2023-11-25T00:00:00.000Z"
}

Generar nueva tarea:
{
  "title": "tarea1",
  "description": "tarea",
  "date": "2023-11-25T20:54:25.935Z"
}

`);
})

export default app;