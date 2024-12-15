//importar express
const express=require('express');
//configurar el servidor pra que pueda utilizar variables de entorno
require('dotenv').config();
//importar modulo connectDB, con la ruta
const connectDB=require('./src/utils/db_mongo');
//importar paquetes de rutas general
const routes=require('./src/api/routers/routes');
//ejecutar connectDB
connectDB();
const server=express();
server.use(express.json());
// especifico que el servidor use ese paquete de rutas
server.use("/", routes);
//process.env.PORT llamar a la variable de entorno
server.listen(process.env.PORT,()=>{
    console.log(`server running port http://localhost:${process.env.PORT}`)
})