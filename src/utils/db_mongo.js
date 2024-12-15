//importar dependencia mongoose
const mongoose=require('mongoose');
//crear una funcion para conectarse con la base de datos de un modo asincrono
const connectDB=async()=>{
    try{
        //conectar con la DB con una función de mongoose que se llama connect, es asincrona se pone await
        //la funcion conect necesita la URL de conexion con la BD, que se llama DB__URL
        const db=await mongoose.connect(process.env.DB_URL);
        //esa URL me va a devolver datos, un Id de conexión y el nombre de la DB que me estoy conectando
        const {name, host}=db.connection;
        console.log(`Nombre de la DB ${name} y servidor: ${host}`);

    }catch(error){
        console.log(error)
    }
}
//exporto para poder hacer uso de este modulo
module.exports=connectDB;