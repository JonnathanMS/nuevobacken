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
    // origin: 'https://portafolio2jonnathan2023.000webhostapp.com',
    origin: 'http://localhost:5173', // localmente
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
    res.send(`Api desarrolada por Jonnathan Monroy,Gracias por estar aquí! \n
\n
   Si quieres ver datos ya creados y crear nuevos puedes acceder con este usuario de \n
   pruebas (si lo prefieres crea uno nuevo, pero este ya tiene datos para consultar):\n
   { \n
  "email":"jhonnnario@gmail.com",\n
  "password":"123456"\n
   }\n
\n
   (Endpoint):\n
   https://nuevobackend.onrender.com/api/login  \n
   https://nuevobackend.onrender.com/api/register \n
   https://nuevobackend.onrender.com/api/citasGeneral\n
   https://nuevobackend.onrender.com/api/tasks\n
   https://nuevobackend.onrender.com/api/logout \n
\n
    Si quieres probar esta api puedes usar lo siguiente en el query body json\n
\n
    Registrarse:\n
\n
    {\n
  "username": "nombre de usuario",\n
  "nombres": "nombre",\n
  "apellidos": "apellido",\n
  "cedula": "numero",\n
  "celular": "numero",\n
  "citas": [],\n
  "fecha": "2023-01-07T00:00:00.000Z",\n
  "email": "email@gmail.com",\n
  "password": "password"\n
}\n
\n
loguearse:\n
{\n
  "email":"email@gmail.com",\n
  "password":"password"\n
}\n
\n
Generar nueva cita tutoria:\n
{\n
    "tema": "tema",\n
    "tutor": "username",\n
    "descripcion": "descripcion",\n
    "hora": "16:05",\n
    "fecha": "2023-11-25T00:00:00.000Z"\n
}\n
\n
Generar nueva tarea:\n
{\n
  "title": "tarea1",\n
  "description": "tarea",\n
  "date": "2023-11-25T20:54:25.935Z"\n
}\n
\n
`);
})

export default app;