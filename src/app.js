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
    res.send("En este momento Jonnathan Monroy esta trabajando en esta Api. Pronto estará lista. Para cualquier consulta ponte en contacto al correo jhonnnario@gmai.com");
})

export default app;