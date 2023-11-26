import app from './src/app.js' // en app.js estamos ejecutando express que es el servidor
import { connectDB } from "./src/db.js";
import { PORT } from "./src/config.js";

async function main() {
    try {
        await connectDB(); // se ejecuta la conexion a la base de datos.

        app.listen(PORT);
        console.log(`Listening on port http://localhost:${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV}`)
    } catch (error) {
        console.error(error);
    }
}

main();

// app.listen(4000);
// console.log('Server on port ', 4000);

