import dotenv from 'dotenv';
dotenv.config();

// *valores para despliegue
export const PORT = process.env.PORT || 8080;
export const MONGODB_URI = process.env.MONGODB_URI
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "ValorDeEjemploVisible";
export const URL_FRONTEND = process.env.URL_FRONTEND || "https://portafolio2jonnathan2023.000webhostapp.com";
export const NODE_ENV = process.env.NODE_ENV || "produccion";