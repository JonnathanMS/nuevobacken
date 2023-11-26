import express, { application } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import citasGeneralRoutes from './routes/citasGeneral.routes.js';
import { URL_FRONTEND } from './config.js';
import cors from 'cors';

const app = express(); // es basicamente el servidor
// app.listen(8080); esto se provo y se paso para index
// console.log('on port ', 8080);
// app.use(cors()); // permite que cualquier dominio se puedea comunicar en este servidor

app.use(cors({
    origin: URL_FRONTEND, // url que se va a poder conectar con este backend
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
    res.send(`Api desarrolada por Jonnathan Monroy,Gracias por estar aquí!`);
})

export default app;