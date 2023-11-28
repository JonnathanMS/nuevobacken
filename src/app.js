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
    res.send(`
    <body style="background-color: #77bef5">
  <style>
    /* *IFRAME RESPONSIVO  ****************************************************************** */

    .iframe-contenedor {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .div-iframe {
      position: relative; /* Lo estamos estableciendo en una posición relativa para que después podamos posicionar nuestro iframe en relación con el div. */
      overflow: hidden; /* para ocultar cualquier elemento que pueda ser colocado fuera del contenedor. */
      padding-top: 56.25%; /* la propiedad apadding-top puede recibir un porcentaje, esto es lo que mantiene nuestro iframe a la proporción correcta.  */
      width: 100%;
      height: 100%;
      margin: 2rem 5%;
    }

    .iframe-responsivo {
      position: absolute; /* le dará al iframe una posición relativa a la envoltura y la dejará posicionarse sobre el relleno del envoltorio. */
      top: 0; /* para colocar el iframe en el centro del contenedor. */
      left: 0; /* para colocar el iframe en el centro del contenedor. */
      width: 100%; /* para que el iframe tome todo el espacio del div. */
      height: 100%; /* para que el iframe tome todo el espacio del div. */
      border: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    button{
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.652);
      margin: 5px 3rem;
      width: 7rem;
      display: inline;
    }
    center {
      justify-content: space-evenly;
    }

    .textBox, .textBoxEjemp {
      background-color: rgba(0, 0, 0, 0.652);
      border-radius: 3rem;
      padding: 10px;
      margin: 5px;
      width: 80%;
      color: white;
    }

    .textBoxEjemp{
        padding:1rem 3rem;
        width: 70% !important;
        text-align: start;
        /* margin: 1rem 10% 1rem 10% !important; */
    }

    .btnCopiar{
color: #77bef5;
    }
    .textBlue{
        color: #77bef5;
    }
  </style>
</div>
<center>
  <div>
    <h1>Bienvenido</h1>
    <h2>Esta api fue desarrollada por Jonnathan Monroy</h2>
    <p>Gracias por estar aquí!</p>

    
    <!--  *ds ****************************************************** -->
    <div class="textBox iframe-contenedor adjust">
        <p>
            En el siguiente video te explico como puedes hacer prubas con esta api:
        </p>
        
        <!-- Div para reproducir el video -->
        <div id="videoContainer" class="div-iframe">
            <iframe
        class="iframe-responsivo"
        src="https://www.youtube.com/embed/5ox9MNQqrb0"
        title="Node, express, javaScript"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>
    </div>
</div>
<hr>
<h1>Unos pocos ejemplos para que puedas probar la api del backen:</h1>
</center>
<center>

    <section class="textBoxEjemp">
        <h4>Ejemplo para registrarse con usuario: (Post)</h4>
        <button class="btnCopiar" onclick="copiar('endpoint2')">Copiar endpoind</button>
        <p id="endpoint2" class="textBlue">https://nuevobackend.onrender.com/api/register</p>
    <button class="btnCopiar" onclick="copiar('jsonCopi2')">Copiar json</button>
    <div id="jsonCopi2" class="textBlue">
       {
 <br>"username": "Ejemplo1",
 <br>"nombres": "Ejemplo1N",
 <br>"apellidos": "Ejemplo1A",
 <br>"cedula": "7777",
 <br> "celular": "300000000",
 <br> "citas": [],
 <br> "fecha": "2023-01-07T00:00:00.000Z",
 <br> "email": "Ejemplo1@gmail.com",
 <br>"password": "1234567"
 <br>}
</div>
</section>
<br>
<section class="textBoxEjemp">
    <h4>Ejemplo para loguearse con usuario : (Post)</h4>
    <button class="btnCopiar" onclick="copiar('endpoint1')">Copiar endpoind</button>
    <p id="endpoint1" class="textBlue">https://nuevobackend.onrender.com/api/login</p>
    <button class="btnCopiar" onclick="copiar('jsonCopi1')">Copiar json</button>
    <div id="jsonCopi1" class="textBlue">
        <br>
        {
            <br> "email": "ensayo@hotmail.com",
            <br> "password": "1234567"
        <br>}
    </div>
    <p style="color:red">Cambia el nombre "ensayo" si registrasete uno nuevo, puedes usarlo si no deseas registrar uno nuevo, este ya tiene citas y tareas que he generado previamente. </p>
    
</section>
<br>
<section class="textBoxEjemp">
    <h4>Ejemplo para generar una nueva cita de tutoria despues de loguearse(ruta protegida): (Post)</h4>
    <button class="btnCopiar" onclick="copiar('endpoint3')">Copiar endpoind</button>
    <p id="endpoint3" class="textBlue">https://nuevobackend.onrender.com/api/citasGeneral</p>
    <button class="btnCopiar" onclick="copiar('jsonCopi3')">Copiar json</button>
    <div id="jsonCopi3" class="textBlue">
        {
            <br>"tema": "Topologia",
            <br>"tutor": "JonnathanM",
            <br>"descripcion": "matemáticas",
            <br>"hora": "16:05",
            <br>"fecha": "2023-11-25T00:00:00.000Z"
            <br>}
        </div>
        <br>
        <h4>Para ver las citas de tutoria generales (las que aun no han sido tomadas por un aprediz usa el método get) (Get)</h4>
    </section>
<br>
        
        <button >
            <a href="https://jonnathanms.github.io/" target="_blank">Ir al portafolio 1</a>
        </button>
        <button >
            <a href="https://portafolio2jonnathan2023.000webhostapp.com" target="_blank">ir al frontend</a>
        </button>
</center>
<script>
    function copiar(id){
        var divText = document.getElementById(id).innerText.replaceAll('<br>', '');
        var tempInput = document.createElement('input');
        tempInput.value = divText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Texto copiado: ' + divText);
    }
    </script>
</body>

    `);
})

export default app;